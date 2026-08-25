const params = {
  brightness: [
    ['亮度', '50'], ['对比度', '90'], ['黑色电平', '50'], ['动态对比度', '低'], ['局部调光', '高'], ['伽马', '2.2']
  ],
  color: [
    ['色彩饱和度', '55'], ['色调', '0'], ['色温', '暖色'], ['色域', '自动'], ['肤色增强', '关闭'], ['蓝色增强', '关闭']
  ],
  motion: [
    ['运动补偿', '低'], ['运动清晰度', '开'], ['电影模式', '自动']
  ],
  sharpness: [
    ['清晰度', '35'], ['超解像', '开'], ['噪声抑制', '低'], ['MPEG噪声抑制', '低']
  ],
  advanced: [
    ['HDR模式', '自动'], ['峰值亮度', '高'], ['色彩空间', '自动'], ['白平衡', '默认'], ['RGB增益', 'R 0 / G 0 / B 0']
  ],
  recognition: [
    ['场景识别', '开'], ['内容类型识别', '开'], ['AI画质优化', '开']
  ],
  health: [
    ['低蓝光', '关闭'], ['护眼模式', '关闭'], ['环境光感应', '开']
  ]
};

const groups = [
  ['brightness', '亮度'], ['color', '色彩'], ['motion', '运动'], ['sharpness', '清晰度'],
  ['advanced', '高级设置'], ['recognition', '内容自动识别'], ['health', '健康护眼']
];

const users = [
  {
    id: 'DEMO-USER-001', deviceId: 'DEMO-TV-001', model: '75Q10K',
    plans: [
      { id: 'p-100238-1', name: '客厅电影模式', code: 'A1B2C3D4', signal: 'HDR10', effect: '电影', status: 'valid', created: '2026-08-25 18:32:15', updated: '2026-08-25 20:15:30', usage: [18, 12, 7], snapshot: true },
      { id: 'p-100238-2', name: '周末观影', code: 'E5F6G7H8', signal: '杜比视界', effect: '影院', status: 'valid', created: '2026-08-24 15:10:42', updated: '2026-08-25 19:08:11', usage: [10, 8, 3], snapshot: true },
      { id: 'p-100238-3', name: '游戏低延迟', code: 'J1K2L3M4', signal: 'HDMI', effect: '游戏', status: 'valid', created: '2026-08-23 21:04:26', updated: '2026-08-24 22:16:05', usage: [24, 18, 16], snapshot: true },
      { id: 'p-100238-4', name: '足球赛事', code: 'N5P6Q7R8', signal: 'SDR', effect: '运动', status: 'valid', created: '2026-08-21 09:23:10', updated: '2026-08-22 18:47:26', usage: [8, 6, 4], snapshot: true },
      { id: 'p-100238-5', name: '明亮客厅', code: '-', signal: 'SDR', effect: '标准', status: 'none', created: '2026-08-19 11:20:08', updated: '2026-08-19 11:20:08', usage: [0, 0, 0], snapshot: false },
      { id: 'p-100238-6', name: '夜间护眼', code: 'S9T1U2V3', signal: 'HDR10+', effect: '护眼', status: 'expired', created: '2026-08-17 20:33:57', updated: '2026-08-18 09:15:43', usage: [6, 2, 0], snapshot: false }
    ]
  },
  {
    id: 'DEMO-USER-002', deviceId: 'DEMO-TV-002', model: '65C11',
    plans: [
      { id: 'p-100176-1', name: '默认影院', code: 'W4X5Y6Z7', signal: 'HDR10', effect: '电影', status: 'valid', created: '2026-08-24 14:12:06', updated: '2026-08-24 14:36:28', usage: [12, 9, 5], snapshot: true },
      { id: 'p-100176-2', name: 'PS5游戏', code: 'B8C9D1E2', signal: 'HDMI', effect: '游戏', status: 'valid', created: '2026-08-23 20:44:19', updated: '2026-08-24 11:05:47', usage: [15, 10, 8], snapshot: true },
      { id: 'p-100176-3', name: '电视直播', code: '-', signal: 'SDR', effect: '标准', status: 'none', created: '2026-08-20 18:02:31', updated: '2026-08-20 18:02:31', usage: [0, 0, 0], snapshot: false }
    ]
  },
  {
    id: 'DEMO-USER-003', deviceId: 'DEMO-TV-003', model: '98T7K',
    plans: [
      { id: 'p-100091-1', name: '大屏影院', code: 'F3G4H5J6', signal: '杜比视界', effect: '影院', status: 'valid', created: '2026-08-22 16:08:42', updated: '2026-08-23 10:16:50', usage: [22, 14, 9], snapshot: true },
      { id: 'p-100091-2', name: '体育模式', code: 'K7L8M9N1', signal: 'SDR', effect: '运动', status: 'valid', created: '2026-08-20 12:28:54', updated: '2026-08-20 12:28:54', usage: [9, 7, 5], snapshot: true },
      { id: 'p-100091-3', name: '老方案备份', code: 'P2Q3R4S5', signal: 'HDR10', effect: '标准', status: 'expired', created: '2026-08-15 09:42:18', updated: '2026-08-16 15:17:39', usage: [4, 3, 1], snapshot: false },
      { id: 'p-100091-4', name: '护眼阅读', code: '-', signal: 'SDR', effect: '护眼', status: 'none', created: '2026-08-12 21:04:16', updated: '2026-08-12 21:04:16', usage: [0, 0, 0], snapshot: false }
    ]
  },
  {
    id: 'DEMO-USER-004', deviceId: 'DEMO-TV-004', model: '85Q9',
    plans: [
      { id: 'p-099812-1', name: '家庭通用', code: 'T6U7V8W9', signal: 'SDR', effect: '标准', status: 'valid', created: '2026-08-18 17:25:06', updated: '2026-08-19 08:12:45', usage: [5, 4, 2], snapshot: true },
      { id: 'p-099812-2', name: '主机游戏', code: '-', signal: 'HDMI', effect: '游戏', status: 'none', created: '2026-08-16 22:17:51', updated: '2026-08-16 22:17:51', usage: [0, 0, 0], snapshot: false }
    ]
  },
  {
    id: 'DEMO-USER-005', deviceId: 'DEMO-TV-005', model: '55V6',
    plans: [
      { id: 'p-098574-1', name: '卧室观影', code: 'X1Y2Z3A4', signal: 'HDR10', effect: '电影', status: 'valid', created: '2026-08-17 10:05:19', updated: '2026-08-17 10:05:19', usage: [7, 5, 3], snapshot: true }
    ]
  }
];

const usageRecords = [
  ['2026-08-25 20:15:30', 'DEMO-TV-001', '应用', '成功', 'HDR10', '电影'],
  ['2026-08-25 20:12:18', 'DEMO-TV-006', '保存', '成功', 'HDR10', '电影'],
  ['2026-08-25 20:11:50', 'DEMO-TV-006', '查询', '成功', 'HDR10', '电影'],
  ['2026-08-25 19:48:07', 'DEMO-TV-007', '应用', '失败', 'HDR10', '电影'],
  ['2026-08-25 19:47:55', 'DEMO-TV-007', '查询', '成功', 'HDR10', '电影'],
  ['2026-08-25 18:50:24', 'DEMO-TV-001', '保存', '成功', 'HDR10', '电影']
];

const state = { view: 'users', userId: null, planId: null, keyword: '', device: '', model: '', count: '', date: '' };
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
    const total = userStats(user).total;
    const latestUpdated = latestPlan(user, 'updated').slice(0, 10);
    return (!state.device || user.deviceId.includes(state.device)) && (!state.model || user.model.includes(state.model)) && (!state.count || String(total) === state.count) && (!state.date || latestUpdated === state.date);
  });
  return pageHead([]) + `<section class="card search-card"><div class="search-grid">
    <div class="form-item"><label>设备 ID：</label><input id="filter-device" class="control" placeholder="请输入" value="${esc(state.device)}"></div>
    <div class="form-item"><label>机型：</label><input id="filter-model" class="control" placeholder="请输入" value="${esc(state.model)}"></div>
    <div class="form-item"><label>方案数量：</label><select id="filter-count" class="control"><option value="">请选择</option><option value="1" ${state.count==='1'?'selected':''}>1</option><option value="2" ${state.count==='2'?'selected':''}>2</option><option value="3" ${state.count==='3'?'selected':''}>3</option><option value="4" ${state.count==='4'?'selected':''}>4</option><option value="6" ${state.count==='6'?'selected':''}>6</option></select></div>
    <div class="form-item"><label>更新时间：</label><input id="filter-date" type="date" class="control" value="${esc(state.date)}"></div>
  </div><div class="search-footer"><button class="btn" data-action="reset">重 置</button><button class="btn btn-primary" data-action="search">查 询</button><button class="collapse">收起︿</button></div></section>
  <section class="card table-card">${toolbar()}<div class="table-wrap"><table><colgroup><col style="width:15%"><col style="width:14%"><col style="width:11%"><col style="width:11%"><col style="width:11%"><col style="width:15%"><col style="width:16%"><col style="width:7%"></colgroup><thead><tr><th>设备 ID</th><th>机型</th><th>方案总数</th><th>有效分享数</th><th>失效分享数</th><th>最近创建时间</th><th>最近更新时间</th><th>操作</th></tr></thead><tbody>${filtered.map(user => { const stats=userStats(user); return `<tr><td>${user.deviceId}</td><td>${user.model}</td><td>${stats.total}</td><td><span class="status status-valid">${stats.valid}</span></td><td><span class="status status-expired">${stats.expired}</span></td><td>${latestPlan(user,'created')}</td><td>${latestPlan(user,'updated')}</td><td><button class="link" data-user="${user.id}">查看方案</button></td></tr>`; }).join('') || '<tr><td colspan="8"><div class="notice">暂无符合条件的用户</div></td></tr>'}</tbody></table></div><div class="pagination"><span>第 1-20 条/总共 ${filtered.length} 条</span><span>‹</span><span class="page-number active">1</span><span>›</span><select class="page-size"><option>20 条/页</option></select></div></section>`;
}
function renderPlans(user) {
  const visiblePlans = user.plans.filter(plan => plan.status !== 'none');
  return pageHead([{label:'用户列表'},{label:'方案管理', current:true}]) + `<section class="card user-summary">${summaryCell('设备 ID', user.deviceId)}${summaryCell('机型', user.model)}${summaryCell('方案总数', visiblePlans.length)}</section><section class="card table-card"><div class="sub-head"><div class="sub-title">该用户分享的所有方案</div><button class="back-link" data-action="back-users">${icon('back')} 返回用户列表</button></div>${toolbar()}<div class="table-wrap"><table><colgroup><col style="width:14%"><col style="width:11%"><col style="width:9%"><col style="width:8%"><col style="width:8%"><col style="width:9%"><col style="width:12%"><col style="width:12%"><col style="width:5%"><col style="width:5%"><col style="width:5%"><col style="width:7%"></colgroup><thead><tr><th>方案名称</th><th>分享码</th><th>信号类型</th><th>图效</th><th>参数数量</th><th>分享状态</th><th>创建时间</th><th>更新时间</th><th>查询次数</th><th>保存次数</th><th>应用次数</th><th>操作</th></tr></thead><tbody>${visiblePlans.map(plan => `<tr><td title="${esc(plan.name)}">${esc(plan.name)}</td><td>${plan.code}</td><td>${plan.signal}</td><td>${plan.effect}</td><td>${countParams(plan)}</td><td>${statusBadge(plan.status)}</td><td>${plan.created}</td><td>${plan.updated}</td><td>${plan.usage[0]}</td><td>${plan.usage[1]}</td><td>${plan.usage[2]}</td><td><button class="link" data-plan="${plan.id}">查看详情</button></td></tr>`).join('')}</tbody></table></div><div class="pagination"><span>第 1-${visiblePlans.length} 条/总共 ${visiblePlans.length} 条</span><span>‹</span><span class="page-number active">1</span><span>›</span><select class="page-size"><option>20 条/页</option></select></div></section>`;
}
function summaryCell(label, value) { return `<div class="summary-cell"><div class="summary-label">${label}</div><div class="summary-value">${value}</div></div>`; }
function countParams(plan) { return groups.reduce((sum, [key]) => sum + (params[key]?.length || 0), 0); }
function renderPlan(user, plan) {
  return pageHead([{label:'用户列表'},{label:'方案管理'},{label:plan.name, current:true}]) + `<section class="card detail-card"><div class="detail-title"><h2>方案详情 <span class="muted">/ ${esc(plan.name)}</span></h2><button class="back-link" data-action="back-plans">${icon('back')} 返回方案列表</button></div><div class="info-grid">
    ${infoItem('方案名称', plan.name)}${infoItem('分享码', plan.code)}${infoItem('创建时间', plan.created)}${infoItem('更新时间', plan.updated)}${infoItem('信号类型', plan.signal)}${infoItem('使用图效', plan.effect)}${infoItem('参数数量', countParams(plan))}${infoItem('分享状态', statusBadge(plan.status), true)}
  </div></section><section class="card detail-card"><div class="detail-title"><h2>画质参数</h2><span class="muted">生成方案时保存的参数快照，仅支持查看</span></div>${groups.map(([key, label]) => `<div class="param-section"><div class="param-section-head">${label}</div><div class="param-grid">${params[key].map(([name, value]) => `<div class="param-item"><span class="param-name">${name}</span><span class="param-value">${value}</span></div>`).join('')}</div></div>`).join('')}</section><section class="card record-card"><div class="detail-title"><h2>使用记录</h2><span class="muted">用于排查该分享码的使用情况</span></div><div class="table-wrap"><table class="record-table"><colgroup><col style="width:20%"><col style="width:20%"><col style="width:16%"><col style="width:16%"><col style="width:14%"><col style="width:14%"></colgroup><thead><tr><th>时间</th><th>使用设备 ID</th><th>操作类型</th><th>操作结果</th><th>信号</th><th>图效</th></tr></thead><tbody>${(plan.status === 'none' ? [] : usageRecords).map(record => `<tr>${record.map((value, index) => `<td class="${index===3 ? (value==='成功'?'record-result-success':'record-result-fail') : ''}">${value}</td>`).join('')}</tr>`).join('') || '<tr><td colspan="6"><div class="notice">暂无使用记录</div></td></tr>'}</tbody></table></div><div class="pagination"><span>第 1-${plan.status === 'none' ? 0 : usageRecords.length} 条/总共 ${plan.status === 'none' ? 0 : usageRecords.length} 条</span><span>‹</span><span class="page-number active">1</span><span>›</span></div></section>`;
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
  document.querySelector('[data-action="reset"]')?.addEventListener('click', () => { Object.assign(state, {device:'',model:'',count:'',date:''}); render(); });
  document.querySelector('[data-action="search"]')?.addEventListener('click', () => { state.device=document.querySelector('#filter-device').value.trim(); state.model=document.querySelector('#filter-model').value.trim(); state.count=document.querySelector('#filter-count').value; state.date=document.querySelector('#filter-date').value; render(); });
  document.querySelectorAll('[data-action="refresh"]').forEach(el => el.addEventListener('click', () => { el.textContent='✓'; setTimeout(() => { if (el.isConnected) el.textContent=icon('refresh'); }, 700); }));
}
render();
