(()=>{
const root=document.getElementById('product-page-root');
if(!root)return;
const path=location.pathname.replace(/\/$/,'');
const view=path.split('/').pop()||'releases';
const titles={releases:'发行管理',works:'作品',artists:'艺人',analytics:'数据分析',earnings:'收益',billing:'订阅与账单',settings:'设置'};
document.title=(titles[view]||'AI 音乐发行')+'｜AI 音乐发行｜星球发行';
document.querySelectorAll('[data-nav]').forEach(a=>a.classList.toggle('active',a.dataset.nav===view));

const cover=(c,t)=>`<div class="cover ${c}"><span>${t}</span></div>`;
const state=(cls,text)=>`<span class="state ${cls}"><i></i>${text}</span>`;
const heading=(title,desc,action='')=>`<section class="page-heading"><div><h1>${title}</h1><p>${desc}</p></div>${action}</section>`;

const releaseRows=`
<div class="data-table release-table">
  <div class="table-head"><span>发行版本</span><span>类型</span><span>计划发行</span><span>平台</span><span>状态</span><span></span></div>
  <a class="table-row" href="/app/releases/new">${cover('cover-blue','BH')}<span class="row-title"><strong>Blue Hour</strong><small>Mira · KJ000012</small></span><span>单曲</span><span>2026-09-18</span><span>18</span>${state('state-review','审核中')}<b>›</b></a>
  <a class="table-row" href="#">${cover('cover-pale','NL')}<span class="row-title"><strong>Neon Lake</strong><small>NEON-X · 草稿</small></span><span>单曲</span><span>—</span><span>12</span>${state('state-draft','草稿')}<b>›</b></a>
  <a class="table-row" href="#">${cover('cover-warm','AR')}<span class="row-title"><strong>After Rain</strong><small>Mira · KJ000010</small></span><span>EP</span><span>2026-08-22</span><span>19</span>${state('state-live','已上线')}<b>›</b></a>
  <a class="table-row" href="#">${cover('cover-dark','SR')}<span class="row-title"><strong>Signal / 01</strong><small>NEON-X · KJ000009</small></span><span>单曲</span><span>2026-09-05</span><span>16</span>${state('state-live','已上线')}<b>›</b></a>
  <a class="table-row" href="#">${cover('cover-red','FS')}<span class="row-title"><strong>False Start</strong><small>Nova · KJ000008</small></span><span>单曲</span><span>2026-08-11</span><span>14</span>${state('state-attention','待处理')}<b>›</b></a>
</div>`;

function renderReleases(){return `
${heading('发行管理','管理草稿、审核、平台交付和上线状态。','<a class="primary-action" href="/app/releases/new"><span>＋</span> 新建发行</a>')}
<div class="mini-stats"><article><span>全部</span><strong>12</strong></article><article><span>待处理</span><strong>2</strong></article><article><span>审核中</span><strong>1</strong></article><article><span>已上线</span><strong>9</strong></article></div>
<section class="panel page-panel"><div class="toolbar"><div class="search-box">⌕ <input placeholder="搜索发行名称或艺人"></div><div class="filter-group"><button class="active">全部状态</button><button>待处理</button><button>审核中</button><button>已上线</button></div></div>${releaseRows}</section>`}

function renderWorks(){return `
${heading('作品','管理已经进入发行目录的歌曲和录音资产。','<a class="primary-action" href="/app/releases/new"><span>＋</span> 新建发行</a>')}
<section class="panel page-panel"><div class="toolbar"><div class="search-box">⌕ <input placeholder="搜索歌曲、艺人或 ISRC"></div><div class="filter-group"><button class="active">全部作品</button><button>单曲</button><button>专辑曲目</button></div></div>
<div class="data-table works-table"><div class="table-head"><span>作品</span><span>ISRC</span><span>创作方式</span><span>已发行平台</span><span>发行版本</span></div>
<div class="table-row">${cover('cover-blue','BH')}<span class="row-title"><strong>Blue Hour</strong><small>Mira</small></span><span>CN-KJ2-26-00121</span><span><b class="soft-tag">AI 辅助</b></span><span>18</span><span>1</span></div>
<div class="table-row">${cover('cover-dark','SR')}<span class="row-title"><strong>Signal / 01</strong><small>NEON-X</small></span><span>CN-KJ2-26-00120</span><span><b class="soft-tag">AI 生成</b></span><span>16</span><span>1</span></div>
<div class="table-row">${cover('cover-warm','AR')}<span class="row-title"><strong>After Rain</strong><small>Mira</small></span><span>CN-KJ2-26-00118</span><span><b class="soft-tag">AI 辅助</b></span><span>19</span><span>1</span></div>
<div class="table-row">${cover('cover-green','NS')}<span class="row-title"><strong>Night Signal</strong><small>Nova</small></span><span>CN-KJ2-26-00116</span><span><b class="soft-tag">传统创作</b></span><span>21</span><span>2</span></div></div></section>`}

function renderArtists(){return `
${heading('艺人','管理发行中使用的艺人身份及平台关联信息。','<button class="secondary-action">＋ 新建艺人</button>')}
<div class="artist-grid">
<article class="artist-card"><div class="artist-avatar artist-a">M</div><div><h3>Mira</h3><p>主要艺人</p></div><div class="artist-stats"><span><strong>7</strong>发行版本</span><span><strong>14</strong>作品</span></div><div class="artist-platforms"><b>Spotify</b><b>Apple Music</b><b>网易云音乐</b><span>+8</span></div><a href="#">查看艺人资料 →</a></article>
<article class="artist-card"><div class="artist-avatar artist-b">NX</div><div><h3>NEON-X</h3><p>主要艺人 · AI 艺人</p></div><div class="artist-stats"><span><strong>3</strong>发行版本</span><span><strong>5</strong>作品</span></div><div class="artist-platforms"><b>Spotify</b><b>QQ音乐</b><b>汽水音乐</b><span>+6</span></div><a href="#">查看艺人资料 →</a></article>
<article class="artist-card"><div class="artist-avatar artist-c">N</div><div><h3>Nova</h3><p>主要艺人</p></div><div class="artist-stats"><span><strong>2</strong>发行版本</span><span><strong>3</strong>作品</span></div><div class="artist-platforms"><b>Apple Music</b><b>网易云音乐</b><b>酷狗音乐</b><span>+7</span></div><a href="#">查看艺人资料 →</a></article>
</div>`}

function renderAnalytics(){return `
${heading('数据分析','查看已发行作品在各音乐平台的播放表现。','<div class="range-picker"><button>近 7 天</button><button class="active">近 30 天</button><button>近 90 天</button></div>')}
<div class="metric-grid"><article><span>总播放量</span><strong>1,284,620</strong><small class="up">↑ 18.4%</small></article><article><span>听众</span><strong>386,421</strong><small class="up">↑ 12.7%</small></article><article><span>收藏</span><strong>46,832</strong><small class="up">↑ 9.2%</small></article><article><span>已覆盖平台</span><strong>18</strong><small>当前统计</small></article></div>
<div class="analytics-grid"><section class="panel chart-panel"><div class="panel-head"><div><h2>播放趋势</h2><p>近 30 天</p></div></div><div class="bars">${[42,55,48,72,66,82,76,91,68,78,88,95,84,102,98,112,105,126,121,139,132,148,142,154,160,151,166,173,169,182].map((h,i)=>`<i style="height:${h/2}px" title="第${i+1}天"></i>`).join('')}</div><div class="chart-axis"><span>08-12</span><span>08-19</span><span>08-26</span><span>09-02</span><span>09-10</span></div></section>
<section class="panel ranking-panel"><div class="panel-head"><div><h2>平台表现</h2><p>按播放量排序</p></div></div><ol><li><span>Spotify</span><strong>426,802</strong><i style="width:100%"></i></li><li><span>网易云音乐</span><strong>281,364</strong><i style="width:66%"></i></li><li><span>QQ音乐</span><strong>224,106</strong><i style="width:52%"></i></li><li><span>Apple Music</span><strong>167,882</strong><i style="width:39%"></i></li><li><span>汽水音乐</span><strong>92,415</strong><i style="width:22%"></i></li></ol></section></div>
<section class="panel page-panel"><div class="panel-head"><div><h2>作品表现</h2><p>当前目录播放表现</p></div></div><div class="simple-table"><div><span>作品</span><span>播放量</span><span>听众</span><span>收藏</span></div><div><strong>Blue Hour</strong><span>528,410</span><span>181,240</span><span>18,620</span></div><div><strong>Signal / 01</strong><span>364,250</span><span>102,862</span><span>12,804</span></div><div><strong>After Rain</strong><span>221,770</span><span>68,511</span><span>9,214</span></div></div></section>`}

function renderEarnings(){return `
${heading('收益','查看音乐平台结算收入、可结算余额和历史账单。','<button class="primary-action">申请结算</button>')}
<div class="earnings-hero"><div><span>可结算收益</span><strong>¥3,268.40</strong><p>已完成平台结算并可申请支付的金额。</p></div><div class="earning-secondary"><span>累计收益</span><strong>¥18,426.72</strong></div><div class="earning-secondary"><span>待平台结算</span><strong>¥2,184.56</strong></div></div>
<div class="analytics-grid earnings-grid"><section class="panel chart-panel"><div class="panel-head"><div><h2>月度收益</h2><p>最近 8 个月</p></div></div><div class="revenue-bars">${[['02',38],['03',52],['04',46],['05',72],['06',64],['07',86],['08',76],['09',94]].map(x=>`<div><i style="height:${x[1]*1.4}px"></i><span>${x[0]}月</span></div>`).join('')}</div></section><section class="panel ranking-panel"><div class="panel-head"><div><h2>收益来源</h2><p>本期已结算</p></div></div><ol><li><span>Spotify</span><strong>¥1,264.22</strong><i style="width:100%"></i></li><li><span>网易云音乐</span><strong>¥846.18</strong><i style="width:67%"></i></li><li><span>QQ音乐</span><strong>¥528.64</strong><i style="width:42%"></i></li><li><span>Apple Music</span><strong>¥382.10</strong><i style="width:30%"></i></li></ol></section></div>
<section class="panel page-panel"><div class="panel-head"><div><h2>结算记录</h2><p>平台账期与支付记录</p></div></div><div class="simple-table statement-table"><div><span>结算期间</span><span>平台</span><span>金额</span><span>状态</span></div><div><strong>2026-07</strong><span>多平台</span><span>¥2,846.32</span><span>${state('state-live','已入账')}</span></div><div><strong>2026-06</strong><span>多平台</span><span>¥2,314.18</span><span>${state('state-live','已入账')}</span></div><div><strong>2026-05</strong><span>多平台</span><span>¥1,982.44</span><span>${state('state-live','已入账')}</span></div></div></section>`}

function renderBilling(){return `
${heading('订阅与账单','管理当前发行方案、使用额度和付款记录。')}
<section class="current-plan"><div><span class="plan-label">当前方案</span><h2>全球发行订阅</h2><p>覆盖国内 + 海外主流平台，最多管理 50 首当前在架歌曲。</p></div><div class="plan-price"><strong>¥599</strong><span>/ 年</span><small>2027-06-18 自动续费</small></div><button class="secondary-action">管理方案</button></section>
<div class="usage-cards"><article><div><span>当前在架歌曲</span><b>12 / 50</b></div><i><em style="width:24%"></em></i><small>剩余 38 首额度</small></article><article><div><span>当前发行版本</span><b>12</b></div><small>单曲 10 · EP 2</small></article><article><div><span>已选平台</span><b>23</b></div><small>中国 + 全球</small></article></div>
<section class="panel page-panel"><div class="panel-head"><div><h2>账单记录</h2><p>订阅与按量发行付款记录</p></div></div><div class="simple-table billing-table"><div><span>日期</span><span>项目</span><span>金额</span><span>状态</span></div><div><strong>2026-06-18</strong><span>全球发行订阅 · 年付</span><span>¥599.00</span><span>已支付</span></div><div><strong>2026-05-04</strong><span>按量发行 · 8 平台</span><span>¥8.00</span><span>已支付</span></div></div></section>`}

function renderSettings(){return `
${heading('设置','管理发行账户、通知和默认发行偏好。','<button class="primary-action">保存修改</button>')}
<div class="settings-layout"><nav class="settings-nav"><a class="active" href="#profile">账户资料</a><a href="#defaults">发行默认项</a><a href="#notice">通知</a><a href="#security">安全</a></nav><div class="settings-content">
<section class="settings-section" id="profile"><div class="settings-head"><h2>账户资料</h2><p>用于账户识别和业务联系，不会作为发行元数据提交到平台。</p></div><div class="form-grid"><label><span>账户名称</span><input value="Kanjian Music"></label><label><span>联系邮箱</span><input value="distribution@kanjian.com"></label><label><span>国家 / 地区</span><select><option>中国大陆</option></select></label><label><span>界面语言</span><select><option>简体中文</option></select></label></div></section>
<section class="settings-section" id="defaults"><div class="settings-head"><h2>发行默认项</h2><p>新建发行时自动带入，可在单次发行中修改。</p></div><div class="form-grid"><label><span>默认发行区域</span><select><option>中国 + 全球</option><option>仅国内</option><option>仅海外</option></select></label><label><span>默认服务时间</span><select><option>1 年</option><option>3 年</option><option>5 年</option></select></label></div></section>
<section class="settings-section" id="notice"><div class="settings-head"><h2>通知</h2><p>选择需要接收的发行状态提醒。</p></div><div class="toggle-list"><label><span><strong>审核结果</strong><small>审核通过、退回或需要补充资料</small></span><input type="checkbox" checked></label><label><span><strong>平台上线状态</strong><small>作品完成平台交付或正式上线</small></span><input type="checkbox" checked></label><label><span><strong>收益结算</strong><small>新账单入账或可结算余额变化</small></span><input type="checkbox" checked></label></div></section>
</div></div>`}

const renderers={releases:renderReleases,works:renderWorks,artists:renderArtists,analytics:renderAnalytics,earnings:renderEarnings,billing:renderBilling,settings:renderSettings};
root.innerHTML=(renderers[view]||renderReleases)();
})();