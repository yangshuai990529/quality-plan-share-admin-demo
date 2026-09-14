// Read-only demo snapshot transcribed from the supplied parameter reference image.
// These sample values are shared by the demo plans; no live TV/cloud API is connected.
const params = {
  brightness: [
    ['亮度', '50'], ['对比度', '57'], ['伽马', 'BT1886'], ['自动HDR转换', '开'], ['HDR动态色调映射', '细节优先'],
    ['黑电平', '50'], ['黑电平延伸', '低'], ['动态对比度', '智能'], ['区域背光', '中'], ['峰值亮度', '高动态'],
    ['自然光', '动态'], ['智能局域控光', '开'], ['暗部细节', '关']
  ],
  color: [
    ['饱和度', '66'], ['色调', '57'], ['蓝电平延申', '关'], ['色温', '暖/3'], ['环境色温感应', '关'],
    ['色彩增强', '蓝色/2']
  ],
  motion: [
    ['运动补偿', '自定义/运动平滑/7'], ['120/240hz动态加速', '开'], ['LED 运动清晰', '关'], ['24P原帧电影', '开']
  ],
  sharpness: [
    ['锐利度', '56'], ['水印平滑', '低'], ['MPEG降噪', '中'], ['降噪', '开'], ['超清分辨率', '开'],
    ['精准细节', '开']
  ],
  whiteBalance: {
    twoPoint: {
      enabled: '开',
      values: [
        ['红色增益', '-23'], ['绿色增益', '-23'], ['蓝色增益', '-23'],
        ['红色偏差', '7'], ['绿色偏差', '7'], ['蓝色偏差', '7']
      ]
    },
    twentyPoint: {
      enabled: '开',
      levels: Array.from({ length: 20 }, (_, index) => index),
      channels: [
        ['红色', [29, 30, -29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29]],
        ['绿色', [18, -18, 23, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18]],
        ['蓝色', [25, 29, 25, -25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25]]
      ]
    }
  },
  colorSpace: [
    ['红色', [['红', '50'], ['绿', '30'], ['蓝', '36']]],
    ['黄色', [['红', '50'], ['绿', '30'], ['蓝', '36']]],
    ['青色', [['红', '50'], ['绿', '30'], ['蓝', '36']]],
    ['绿色', [['红', '50'], ['绿', '30'], ['蓝', '36']]],
    ['蓝色', [['红', '50'], ['绿', '30'], ['蓝', '36']]],
    ['紫色', [['红', '50'], ['绿', '30'], ['蓝', '36']]]
  ],
  other: {
    general: [['信号范围', '自动'], ['内容自动识别', '开']],
    displayStandard: ['显示标准', '自定义/片源OETF/2.6'],
    eyeCare: [['背光调节', '混合调光'], ['环境亮度感应', '开'], ['低蓝光模式', '开']]
  }
};

const groups = [
  ['brightness', '亮度'], ['color', '色彩'], ['motion', '运动'], ['sharpness', '清晰度'],
  ['whiteBalance', '白平衡'], ['colorSpace', '色彩空间'], ['other', '其他']
];

const users = [
  {
    id: 'DEMO-USER-001', deviceId: 'DEMO-TV-001', model: '75Q10K',
    plans: [
      { id: 'p-100238-1', name: '客厅电影模式', code: 'A1B2C3D4', inputSource: 'HDMI 1', signal: 'HDR10', effect: '电影', status: 'valid', created: '2026-08-25 18:32:15', updated: '2026-08-25 20:15:30', usage: [18, 12, 7], snapshot: true },
      { id: 'p-100238-2', name: '周末观影', code: 'E5F6G7H8', inputSource: 'VOD', signal: '杜比视界', effect: '影院', status: 'valid', created: '2026-08-24 15:10:42', updated: '2026-08-25 19:08:11', usage: [10, 8, 3], snapshot: true },
      { id: 'p-100238-3', name: '游戏低延迟', code: 'J1K2L3M4', inputSource: 'HDMI 2', signal: 'HDMI', effect: '游戏', status: 'valid', created: '2026-08-23 21:04:26', updated: '2026-08-24 22:16:05', usage: [24, 18, 16], snapshot: true },
      { id: 'p-100238-4', name: '足球赛事', code: 'N5P6Q7R8', inputSource: 'VOD', signal: 'SDR', effect: '运动', status: 'valid', created: '2026-08-21 09:23:10', updated: '2026-08-22 18:47:26', usage: [8, 6, 4], snapshot: true },
      { id: 'p-100238-5', name: '明亮客厅', code: '-', inputSource: 'HDMI 1', signal: 'SDR', effect: '标准', status: 'none', created: '2026-08-19 11:20:08', updated: '2026-08-19 11:20:08', usage: [0, 0, 0], snapshot: false },
      { id: 'p-100238-6', name: '夜间护眼', code: 'S9T1U2V3', inputSource: 'VOD', signal: 'HDR10+', effect: '护眼', status: 'expired', created: '2026-08-17 20:33:57', updated: '2026-08-18 09:15:43', usage: [6, 2, 0], snapshot: false }
    ]
  },
  {
    id: 'DEMO-USER-002', deviceId: 'DEMO-TV-002', model: '65C11',
    plans: [
      { id: 'p-100176-1', name: '默认影院', code: 'W4X5Y6Z7', inputSource: 'HDMI 1', signal: 'HDR10', effect: '电影', status: 'valid', created: '2026-08-24 14:12:06', updated: '2026-08-24 14:36:28', usage: [12, 9, 5], snapshot: true },
      { id: 'p-100176-2', name: 'PS5游戏', code: 'B8C9D1E2', inputSource: 'HDMI 2', signal: 'HDMI', effect: '游戏', status: 'valid', created: '2026-08-23 20:44:19', updated: '2026-08-24 11:05:47', usage: [15, 10, 8], snapshot: true },
      { id: 'p-100176-3', name: '电视直播', code: '-', inputSource: 'VOD', signal: 'SDR', effect: '标准', status: 'none', created: '2026-08-20 18:02:31', updated: '2026-08-20 18:02:31', usage: [0, 0, 0], snapshot: false }
    ]
  },
  {
    id: 'DEMO-USER-003', deviceId: 'DEMO-TV-003', model: '98T7K',
    plans: [
      { id: 'p-100091-1', name: '大屏影院', code: 'F3G4H5J6', inputSource: 'HDMI 1', signal: '杜比视界', effect: '影院', status: 'valid', created: '2026-08-22 16:08:42', updated: '2026-08-23 10:16:50', usage: [22, 14, 9], snapshot: true },
      { id: 'p-100091-2', name: '体育模式', code: 'K7L8M9N1', inputSource: 'VOD', signal: 'SDR', effect: '运动', status: 'valid', created: '2026-08-20 12:28:54', updated: '2026-08-20 12:28:54', usage: [9, 7, 5], snapshot: true },
      { id: 'p-100091-3', name: '老方案备份', code: 'P2Q3R4S5', inputSource: 'HDMI 2', signal: 'HDR10', effect: '标准', status: 'expired', created: '2026-08-15 09:42:18', updated: '2026-08-16 15:17:39', usage: [4, 3, 1], snapshot: false },
      { id: 'p-100091-4', name: '护眼阅读', code: '-', inputSource: 'VOD', signal: 'SDR', effect: '护眼', status: 'none', created: '2026-08-12 21:04:16', updated: '2026-08-12 21:04:16', usage: [0, 0, 0], snapshot: false }
    ]
  },
  {
    id: 'DEMO-USER-004', deviceId: 'DEMO-TV-004', model: '85Q9',
    plans: [
      { id: 'p-099812-1', name: '家庭通用', code: 'T6U7V8W9', inputSource: 'VOD', signal: 'SDR', effect: '标准', status: 'valid', created: '2026-08-18 17:25:06', updated: '2026-08-19 08:12:45', usage: [5, 4, 2], snapshot: true },
      { id: 'p-099812-2', name: '主机游戏', code: '-', inputSource: 'HDMI 2', signal: 'HDMI', effect: '游戏', status: 'none', created: '2026-08-16 22:17:51', updated: '2026-08-16 22:17:51', usage: [0, 0, 0], snapshot: false }
    ]
  },
  {
    id: 'DEMO-USER-005', deviceId: 'DEMO-TV-005', model: '55V6',
    plans: [
      { id: 'p-098574-1', name: '卧室观影', code: 'X1Y2Z3A4', inputSource: 'VOD', signal: 'HDR10', effect: '电影', status: 'valid', created: '2026-08-17 10:05:19', updated: '2026-08-17 10:05:19', usage: [7, 5, 3], snapshot: true }
    ]
  }
];

const state = { view: 'users', userId: null, planId: null, keyword: '', device: '', model: '', date: '' };
const app = document.querySelector('#app');

function statusLabel(status) {
  return { valid: '分享中', none: '未分享', expired: '已失效' }[status] || status;
}
function statusClass(status) { return { valid: 'status-valid', none: 'status-none', expired: 'status-expired' }[status] || 'status-none'; }
function statusBadge(status) { return `<span class="status ${statusClass(status)}">${statusLabel(status)}</span>`; }
function icon(name) {
  const icons = { manual: '◉', setting: '⚙', publish: '▦', nps: '◌', issue: '◉', error: '♧', entry: '⌁', log: '◫', device: '▦', feedback: '▦', share: '▦', home: '⌂', refresh: '↻', columns: '≡', back: '‹' };
  return icons[name] || '◌';
}
function userById(id) { return users.find(user => user.id === id); }
function planById(user, id) { return user?.plans.find(plan => plan.id === id); }
function latestPlan(user, key) { return [...user.plans].sort((a,b) => b[key].localeCompare(a[key]))[0]?.[key] || '-'; }
function userStats(user) {
  return { total: user.plans.length, valid: user.plans.filter(p => p.status === 'valid').length, expired: user.plans.filter(p => p.status === 'expired').length };
}
function esc(value) { return String(value).replace(/[&<>'"]/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char])); }
function maskUserId(id) {
  const value = String(id || '');
  if (value.length <= 4) return value.replace(/.(?=.{2})/g, '*');
  return `${value.slice(0, 3)}****${value.slice(-2)}`;
}

function layout(content) {
  return `<div class="shell">
    <header class="topbar"><div class="brand"><span class="brand-mark"></span><span>用户反馈管理系统</span></div><div class="top-actions"><span class="top-icon">${icon('home')}</span><span class="avatar">D</span><span class="user-name">Demo管理员</span></div></header>
    <div class="body"><aside class="sidebar">
      ${navItem('manual', '使用手册')} ${navItem('setting', '全局配置')} ${navItem('publish', '发布集管理')}
      ${navItem('nps', 'NPS新机自动化', true)} ${navItem('nps', 'NPS专项', true)} ${navItem('issue', '问题管理', true)} ${navItem('error', '错误码&解决方案管...', true)} ${navItem('entry', '跳转入口管理', true)} ${navItem('log', '日志获取参数配置')} ${navItem('device', '设备信息发布管理')} ${navItem('device', '设备信息内容管理')} ${navItem('feedback', '意见反馈管理')}
      ${navItem('share', '画质方案分享管理', false, true)}
      <div class="sidebar-bottom">☰</div>
    </aside><main class="content">${content}</main></div>
  </div>`;
}
function navItem(iconName, label, expandable = false, isShare = false) {
  return `<button class="nav-item ${isShare ? 'active' : ''}" data-nav="${isShare ? 'users' : ''}"><span class="nav-icon">${icon(iconName)}</span><span>${label}</span>${expandable ? '<span class="nav-arrow">⌄</span>' : ''}</button>`;
}
function pageHead(items) {
  return `<div class="page-head"><div class="breadcrumb"><span>画质方案分享管理</span>${items.map(item => `<span class="sep">/</span><span class="${item.current ? 'current' : ''}">${item.label}</span>`).join('')}</div><div class="head-actions"><span>当前用户：后台管理员</span></div></div>`;
}
function toolbar() {
  return `<div class="table-toolbar"><div></div><div class="table-tools"><button title="刷新" data-action="refresh">${icon('refresh')}</button><button title="列设置" data-action="columns">${icon('columns')}</button><button title="设置">⚙</button></div></div>`;
}
function renderUsers() {
  const filtered = users.filter(user => {
    const latestUpdated = latestPlan(user, 'updated').slice(0, 10);
    return (!state.device || user.deviceId.includes(state.device)) && (!state.model || user.model.includes(state.model)) && (!state.date || latestUpdated === state.date);
  });
  return pageHead([]) + `<section class="card search-card"><div class="search-grid">
    <div class="form-item"><label>设备 ID：</label><input id="filter-device" class="control" placeholder="请输入" value="${esc(state.device)}"></div>
    <div class="form-item"><label>机型：</label><input id="filter-model" class="control" placeholder="请输入" value="${esc(state.model)}"></div>
    <div class="form-item"><label>更新时间：</label><input id="filter-date" type="date" class="control" value="${esc(state.date)}"></div>
  </div><div class="search-footer"><button class="btn" data-action="reset">重 置</button><button class="btn btn-primary" data-action="search">查 询</button><button class="collapse">收起︿</button></div></section>
  <section class="card table-card">${toolbar()}<div class="table-wrap"><table><colgroup><col style="width:15%"><col style="width:14%"><col style="width:11%"><col style="width:11%"><col style="width:11%"><col style="width:17%"><col style="width:10%"></colgroup><thead><tr><th>设备 ID</th><th>机型</th><th>方案总数</th><th>有效分享数</th><th>失效分享数</th><th>最近创建时间</th><th>操作</th></tr></thead><tbody>${filtered.map(user => { const stats=userStats(user); return `<tr><td>${user.deviceId}</td><td>${user.model}</td><td>${stats.total}</td><td><span class="status status-valid">${stats.valid}</span></td><td><span class="status status-expired">${stats.expired}</span></td><td>${latestPlan(user,'created')}</td><td><button class="link" data-user="${user.id}">查看方案</button></td></tr>`; }).join('') || '<tr><td colspan="7"><div class="notice">暂无符合条件的用户</div></td></tr>'}</tbody></table></div><div class="pagination"><span>第 1-20 条/总共 ${filtered.length} 条</span><span>‹</span><span class="page-number active">1</span><span>›</span><select class="page-size"><option>20 条/页</option></select></div></section>`;
}
function renderPlans(user) {
  const visiblePlans = user.plans.filter(plan => plan.status !== 'none');
  return pageHead([{label:'用户列表'},{label:'方案管理', current:true}]) + `<section class="card user-summary">${summaryCell('设备 ID', user.deviceId)}${summaryCell('机型', user.model)}${summaryCell('方案总数', visiblePlans.length)}</section><section class="card table-card"><div class="sub-head"><div class="sub-title">该用户分享的所有方案</div><button class="back-link" data-action="back-users">${icon('back')} 返回用户列表</button></div>${toolbar()}<div class="table-wrap"><table class="plan-table"><colgroup><col style="width:16%"><col style="width:10%"><col style="width:8%"><col style="width:9%"><col style="width:8%"><col style="width:9%"><col style="width:16%"><col style="width:8%"><col style="width:9%"><col style="width:7%"></colgroup><thead><tr><th>方案名称</th><th>分享码</th><th>信源</th><th>信号类型</th><th>图效</th><th>分享状态</th><th>创建时间</th><th>查询次数</th><th>保存使用次数</th><th>操作</th></tr></thead><tbody>${visiblePlans.map(plan => `<tr><td title="${esc(plan.name)}">${esc(plan.name)}</td><td>${plan.code}</td><td>${esc(plan.inputSource || '-')}</td><td>${plan.signal}</td><td>${plan.effect}</td><td>${statusBadge(plan.status)}</td><td>${plan.created}</td><td>${plan.usage[0]}</td><td>${plan.usage[1]}</td><td><button class="link" data-plan="${plan.id}">查看详情</button></td></tr>`).join('')}</tbody></table></div><div class="pagination"><span>第 1-${visiblePlans.length} 条/总共 ${visiblePlans.length} 条</span><span>‹</span><span class="page-number active">1</span><span>›</span><select class="page-size"><option>20 条/页</option></select></div></section>`;
}
function summaryCell(label, value) { return `<div class="summary-cell"><div class="summary-label">${label}</div><div class="summary-value">${value}</div></div>`; }
function renderParamItem([name, value]) {
  return `<div class="param-item"><span class="param-name">${esc(name)}</span><span class="param-value">${esc(value)}</span></div>`;
}
function renderWhiteBalance() {
  const { twoPoint, twentyPoint } = params.whiteBalance;
  return `<div class="white-balance-two-point">
    ${renderParamItem(['2点', twoPoint.enabled])}${twoPoint.values.map(renderParamItem).join('')}
  </div><div class="white-balance-twenty-point">
    ${renderParamItem(['20点', twentyPoint.enabled])}
    <div class="white-balance-matrix-wrap" tabindex="0" role="region" aria-label="20点白平衡参数，可横向滚动">
      <table class="white-balance-matrix">
        <caption class="visually-hidden">20点白平衡：0至19档的红色、绿色、蓝色参数</caption>
        <colgroup><col class="white-balance-label-col"><col span="${twentyPoint.levels.length}"></colgroup>
        <thead><tr><th scope="col">档位</th>${twentyPoint.levels.map(level => `<th scope="col">${esc(level)}</th>`).join('')}</tr></thead>
        <tbody>${twentyPoint.channels.map(([name, values]) => `<tr><th scope="row">${esc(name)}</th>${values.map(value => `<td>${esc(value)}</td>`).join('')}</tr>`).join('')}</tbody>
      </table>
    </div>
  </div>`;
}
function renderColorSpace() {
  return `<div class="color-space-grid">${params.colorSpace.map(([name, channels]) => `<div class="color-space-item"><span class="color-space-name">${esc(name)}</span>${channels.map(renderParamItem).join('')}</div>`).join('')}</div>`;
}
function renderOtherParams() {
  return `<div class="other-params">
    <div class="param-grid">${params.other.general.map(renderParamItem).join('')}</div>
    <div class="display-standard-row">${renderParamItem(params.other.displayStandard)}</div>
    <div class="param-grid eye-care-grid"><h4 class="param-subtitle">健康护眼</h4>${params.other.eyeCare.map(renderParamItem).join('')}</div>
  </div>`;
}
function renderPictureParameters() {
  return `<section class="card detail-card picture-params" aria-labelledby="picture-params-title">
    <div class="detail-title"><h2 id="picture-params-title">画质参数</h2><span class="muted">生成方案时保存的参数快照，仅支持查看</span></div>
    ${groups.map(([key, label]) => {
      const content = key === 'whiteBalance' ? renderWhiteBalance()
        : key === 'colorSpace' ? renderColorSpace()
        : key === 'other' ? renderOtherParams()
        : `<div class="param-grid">${params[key].map(renderParamItem).join('')}</div>`;
      return `<section class="param-section" aria-labelledby="param-heading-${key}"><h3 class="param-section-head" id="param-heading-${key}">${esc(label)}</h3>${content}</section>`;
    }).join('')}
  </section>`;
}
function renderPlan(user, plan) {
  return pageHead([{label:'用户列表'},{label:'方案管理'},{label:plan.name, current:true}]) + `<section class="card detail-card"><div class="detail-title"><h2>方案详情 <span class="muted">/ ${esc(plan.name)}</span></h2><button class="back-link" data-action="back-plans">${icon('back')} 返回方案列表</button></div><div class="info-grid">
    ${infoItem('方案名称', plan.name)}${infoItem('分享码', plan.code)}${infoItem('创建时间', plan.created)}${infoItem('信源', plan.inputSource || '-')}${infoItem('信号类型', plan.signal)}${infoItem('使用图效', plan.effect)}${infoItem('分享状态', statusBadge(plan.status), true)}
  </div></section>${renderPictureParameters()}`;
}
function infoItem(label, value, raw = false) { return `<div class="info-item"><span class="info-label">${label}</span><span class="info-value">${raw ? value : esc(value)}</span></div>`; }
function render() {
  const user = userById(state.userId); const plan = planById(user, state.planId);
  let content = state.view === 'users' ? renderUsers() : state.view === 'plans' ? renderPlans(user) : renderPlan(user, plan);
  app.innerHTML = layout(content);
  bindEvents();
}
function bindEvents() {
  document.querySelectorAll('[data-nav="users"]').forEach(el => el.addEventListener('click', () => { state.view='users'; state.userId=null; state.planId=null; render(); }));
  document.querySelectorAll('[data-user]').forEach(el => el.addEventListener('click', () => { state.view='plans'; state.userId=el.dataset.user; render(); }));
  document.querySelectorAll('[data-plan]').forEach(el => el.addEventListener('click', () => { state.view='plan'; state.planId=el.dataset.plan; render(); }));
  document.querySelector('[data-action="back-users"]')?.addEventListener('click', () => { state.view='users'; state.userId=null; render(); });
  document.querySelector('[data-action="back-plans"]')?.addEventListener('click', () => { state.view='plans'; state.planId=null; render(); });
  document.querySelector('[data-action="reset"]')?.addEventListener('click', () => { Object.assign(state, {device:'',model:'',date:''}); render(); });
  document.querySelector('[data-action="search"]')?.addEventListener('click', () => { state.device=document.querySelector('#filter-device').value.trim(); state.model=document.querySelector('#filter-model').value.trim(); state.date=document.querySelector('#filter-date').value; render(); });
  document.querySelectorAll('[data-action="refresh"]').forEach(el => el.addEventListener('click', () => { el.textContent='✓'; setTimeout(() => { if (el.isConnected) el.textContent=icon('refresh'); }, 700); }));
}
render();
