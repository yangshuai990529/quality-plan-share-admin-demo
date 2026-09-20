const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const app = { innerHTML: '' };
const context = vm.createContext({
  document: {
    querySelector: selector => selector === '#app' ? app : null,
    querySelectorAll: () => []
  },
  setTimeout
});
vm.runInContext(fs.readFileSync(path.join(root, 'app.js'), 'utf8') + `
  this.api = { params, groups, users, renderUsers, renderPlans, renderPlan,
    renderPictureParameters, renderWhiteBalance, renderColorSpace, renderParamItem };
`, context);
const api = context.api;
const plain = value => JSON.parse(JSON.stringify(value));
const headings = html => [...html.matchAll(/<h3\b[^>]*>(.*?)<\/h3>/g)].map(match => match[1]);
const rows = html => [...html.matchAll(/<tr>([\s\S]*?)<\/tr>/g)].map(match => match[1]);
const cells = html => [...html.matchAll(/<t[hd]\b[^>]*>([\s\S]*?)<\/t[hd]>/g)].map(match => match[1]);

// Expected values below are independently transcribed from the user's reference.
test('seven groups and the four regular grids exactly match the reference', () => {
  assert.deepEqual(headings(api.renderPictureParameters()), ['亮度', '色彩', '运动', '清晰度', '白平衡', '色彩空间', '其他']);
  const expected = {
    brightness: [
      ['亮度', '50'], ['对比度', '57'], ['伽马', 'BT1886'], ['自动HDR转换', '开'], ['HDR动态色调映射', '细节优先'],
      ['黑电平', '50'], ['黑电平延伸', '低'], ['动态对比度', '智能'], ['区域背光', '中'], ['峰值亮度', '高动态'],
      ['自然光', '动态'], ['智能局域控光', '开'], ['暗部细节', '关']
    ],
    color: [
      ['饱和度', '66'], ['色调', '57'], ['色温', '暖/3'], ['环境色温感应', '关'], ['色彩增强', '蓝色/2']
    ],
    motion: [
      ['运动补偿', '自定义/运动平滑/7'], ['24P原帧电影', '开']
    ],
    sharpness: [
      ['锐利度', '56'], ['水印平滑', '低'], ['MPEG降噪', '中'], ['降噪', '开'], ['超清分辨率', '开'], ['精准细节', '开']
    ]
  };
  for (const [key, values] of Object.entries(expected)) {
    assert.deepEqual(plain(api.params[key]), values, key);
    for (const pair of values) assert.ok(api.renderPictureParameters().includes(api.renderParamItem(pair)));
  }
});

test('2-point white balance shows its switch and all six signed values', () => {
  assert.deepEqual(plain(api.params.whiteBalance.twoPoint), {
    enabled: '开',
    values: [['红色增益', '-23'], ['绿色增益', '-23'], ['蓝色增益', '-23'], ['红色偏差', '7'], ['绿色偏差', '7'], ['蓝色偏差', '7']]
  });
  assert.ok(api.renderWhiteBalance().includes(api.renderParamItem(['2点', '开'])));
});

test('20-point white balance retains all 20 stages and 60 RGB values in order', () => {
  const data = api.params.whiteBalance.twentyPoint;
  assert.equal(data.enabled, '开');
  assert.deepEqual(plain(data.levels), Array.from({ length: 20 }, (_, index) => index));
  const expected = [
    ['红色', [29, 30, -29, ...Array(17).fill(29)]],
    ['绿色', [18, -18, 23, ...Array(17).fill(18)]],
    ['蓝色', [25, 29, 25, -25, ...Array(16).fill(25)]]
  ];
  assert.deepEqual(plain(data.channels), expected);
  const table = api.renderWhiteBalance().match(/<table class="white-balance-matrix">([\s\S]*?)<\/table>/)[1];
  const tableRows = rows(table);
  assert.equal(tableRows.length, 4);
  assert.deepEqual(cells(tableRows[0]), ['档位', ...Array.from({ length: 20 }, (_, index) => String(index))]);
  expected.forEach(([name, values], index) => assert.deepEqual(cells(tableRows[index + 1]), [name, ...values.map(String)]));
  assert.equal((table.match(/<td>/g) || []).length, 60);
  assert.ok(api.renderWhiteBalance().includes('tabindex="0" role="region"'));
});

test('color space matches the pictured six-column matrix and all 18 values', () => {
  assert.deepEqual(plain(api.params.colorSpace), {
    columns: ['红色', '绿色', '蓝色', '青色', '紫色', '黄色'],
    rows: [
      ['红色', ['50', '50', '50', '50', '50', '50']],
      ['绿色', ['50', '50', '50', '50', '50', '50']],
      ['蓝色', ['50', '50', '50', '50', '50', '50']]
    ]
  });
  const html = api.renderColorSpace();
  assert.deepEqual(cells(rows(html)[0]), ['色彩空间', '自定义', '', '红色', '绿色', '蓝色', '青色', '紫色', '黄色']);
  assert.deepEqual(cells(rows(html)[1]), ['红色', '50', '50', '50', '50', '50', '50']);
  assert.deepEqual(cells(rows(html)[2]), ['绿色', '50', '50', '50', '50', '50', '50']);
  assert.deepEqual(cells(rows(html)[3]), ['蓝色', '50', '50', '50', '50', '50', '50']);
  assert.equal((html.match(/rowspan="4"/g) || []).length, 2);
});

test('other settings retain general controls, display-standard path and eye-care group', () => {
  assert.deepEqual(plain(api.params.other), {
    general: [['信号范围', '自动'], ['内容自动识别', '开']],
    displayStandard: ['显示标准', '自定义/片源OETF/2.6'],
    eyeCare: [['环境亮度感应', '开']]
  });
  assert.ok(api.renderPictureParameters().includes('<h4 class="param-subtitle">健康护眼</h4>'));
});

test('snapshot is read-only, escapes text, and does not retain old placeholder groups', () => {
  const html = api.renderPictureParameters();
  assert.ok(!/<(?:input|select|textarea|button)\b|contenteditable=/i.test(html));
  assert.ok(!html.includes('高级设置'));
  assert.ok(!html.includes('AI画质优化'));
  assert.ok(!html.includes('白平衡</span><span class="param-value">默认'));
  assert.equal(api.renderParamItem(['<script>', '&"\'']), '<div class="param-item"><span class="param-name">&lt;script&gt;</span><span class="param-value">&amp;&quot;&#39;</span></div>');
  assert.equal(new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1])).size, 8);
});

test('all 16 detail pages contain only the summary and full parameter panel', () => {
  let total = 0;
  for (const user of api.users) for (const plan of user.plans) {
    const html = api.renderPlan(user, plan);
    assert.ok(html.includes(api.renderPictureParameters()));
    assert.ok(html.indexOf('class="info-grid"') < html.indexOf('picture-params-title'));
    assert.ok(html.endsWith(api.renderPictureParameters()));
    assert.equal((html.match(/class="card /g) || []).length, 2);
    assert.ok(html.includes('data-action="back-plans"'));
    assert.ok(html.includes('class="status '));
    const labels = [...html.matchAll(/<span class="info-label">(.*?)<\/span>/g)].map(match => match[1]);
    assert.deepEqual(labels, ['方案名称', '分享码', '创建时间', '信源', '信号类型', '使用图效', '分享状态']);
    total++;
  }
  assert.equal(total, 16);
});

test('previous homepage and plan-list requests remain intact', () => {
  const usersHtml = api.renderUsers();
  assert.ok(!usersHtml.includes('filter-count'));
  assert.deepEqual(cells(rows(usersHtml)[0]), ['Client Type', '机型', '方案总数', '有效分享数', '失效分享数', '最近创建时间', '操作']);
  assert.ok(usersHtml.includes('<label>Client Type：</label>'));
  for (const user of api.users) {
    const html = api.renderPlans(user);
    assert.deepEqual(cells(rows(html)[0]), ['方案名称', '分享码', '信源', '信号类型', '图效', '分享状态', '创建时间', '查询次数', '保存使用次数', '操作']);
  }
});

test('layout uses card-based parameter groups and scrollable calibration matrices', () => {
  const css = fs.readFileSync(path.join(root, 'styles.css'), 'utf8');
  assert.match(css, /\.param-grid\s*\{[^}]*grid-template-columns: repeat\(5, minmax\(0, 1fr\)\)/);
  assert.match(css, /\.color-space-table\s*\{[^}]*min-width: 760px/);
  assert.match(css, /\.white-balance-matrix-wrap\s*\{[^}]*overflow-x: auto/);
  assert.match(css, /\.color-space-table-wrap\s*\{[^}]*overflow-x: auto/);
  assert.match(css, /\.param-section\s*\{[^}]*border-radius: 10px/);
  assert.match(css, /\.param-item\s*\{[^}]*border-radius: 7px/);
  assert.match(css, /\.white-balance-matrix\sth:first-child\s*\{[^}]*position: sticky/);
  assert.match(css, /@media \(max-width: 1080px\)[\s\S]*\.param-grid\s*\{[^}]*repeat\(3,/);
});
