(function loadHomeVisuals(){
  if(!document.body || !document.body.classList.contains('home-v3')) return;
  [
    ['/prototype-v1/home-v4.css?v=20260910','home-v4'],
    ['/prototype-v1/home-v4-fixes.css?v=20260910','home-v4-fixes'],
    ['/prototype-v1/home-v5-ssrelease.css?v=20260910','home-v5']
  ].forEach(([href,key])=>{
    if(document.querySelector(`link[data-${key}]`))return;
    const link=document.createElement('link');
    link.rel='stylesheet';link.href=href;link.setAttribute(`data-${key}`,'1');
    document.head.appendChild(link);
  });
})();

const RAW='/assets/platform-logos/';
const namedLogos={
  'Spotify':RAW+'spotify.jpeg','Apple Music':RAW+'apple-music.jpg','QQ音乐':RAW+'qq-music.png',
  '网易云音乐':RAW+'netease-music.jpg','酷狗音乐':RAW+'kugou-music.png','酷我音乐':RAW+'kuwo-music.png',
  '汽水音乐':RAW+'douyin-qishui.jpg','华为音乐':RAW+'huawei-music.jpg','Amazon Music':RAW+'amazon-music.png',
  'YouTube Music':RAW+'youtube-music.jpg','TikTok':RAW+'tiktok.jpeg','KKBOX':RAW+'kkbox.png'
};

const shortName=n=>({Spotify:'SP','Apple Music':'AM','QQ音乐':'QQ','网易云音乐':'网易','酷狗音乐':'酷狗','酷我音乐':'酷我','汽水音乐':'汽水','华为音乐':'华为','咪咕音乐':'咪咕','Amazon Music':'AZ','YouTube Music':'YT',TikTok:'TT','Meta':'Meta','SoundCloud':'SC',TIDAL:'TD',Deezer:'DZ',Yandex:'YX',KKBOX:'KK'}[n]||String(n).slice(0,4));

const channelData=[
  {name:'QQ音乐',region:'cn',core:true,status:'可发行 · 部分 AI 内容的收益或推荐可能受限'},
  {name:'网易云音乐',region:'cn',core:true,status:'可发行 · AI 内容可能需要平台标识'},
  {name:'酷狗音乐',region:'cn',core:true,status:'可发行 · 部分 AI 内容的收益或推荐可能受限'},
  {name:'汽水音乐',region:'cn',core:true,status:'可发行 · 高度相似内容可能受限'},
  {name:'Spotify',region:'global',core:true,status:'可发行 · 部分 AI 内容的推荐可能受限',warning:true},
  {name:'Apple Music',region:'global',core:true,status:'可发行'},
  {name:'YouTube Music',region:'global',core:true,status:'可发行 · 可能需要补充 AI 信息'},
  {name:'Amazon Music',region:'global',core:true,status:'AI 辅助通常可发行 · AI 生成内容需确认',confirmFullAI:true},
  {name:'TikTok',region:'global',core:true,status:'AI 内容可提交 · AI 生成内容需确认',confirmFullAI:true},

  {name:'酷我音乐',region:'cn',core:false,status:'可发行 · 部分 AI 内容的收益或推荐可能受限'},
  {name:'华为音乐',region:'cn',core:false,status:'可发行'},
  {name:'咪咕音乐',region:'cn',core:false,status:'可发行 · 上线时间可能较长',specialDelivery:true},
  {name:'KKBOX',region:'cn',core:false,status:'可发行'},
  {name:'Deezer',region:'global',core:false,status:'可发行 · 部分 AI 内容的推荐可能受限',warning:true},
  {name:'TIDAL',region:'global',core:false,status:'可发行 · 部分 AI 内容的收益可能受限',warning:true},
  {name:'SoundCloud',region:'global',core:false,status:'AI 辅助可发行 · AI 生成内容需确认',confirmFullAI:true},
  {name:'Meta',region:'global',core:false,status:'AI 内容可提交 · AI 生成内容需确认',confirmFullAI:true},
  {name:'Yandex',region:'global',core:false,status:'可发行 · AI 标识可能影响推荐',warning:true}
];

function imageMarkup(name){
  const extracted=window.STAR_DSP_LOGOS&&window.STAR_DSP_LOGOS[name];
  const url=extracted||namedLogos[name];
  return url?`<img src="${url}" alt="${name}" loading="lazy">`:`<span class="logo-wordmark">${name}</span>`;
}

function addImgFallback(scope=document){
  scope.querySelectorAll('img').forEach(img=>{
    if(img.dataset.fallbackBound)return;
    img.dataset.fallbackBound='1';
    img.addEventListener('error',()=>{
      const p=img.parentElement;if(!p)return;
      p.classList.add('logo-failed');p.dataset.fallback=img.alt||'DSP';img.remove();
    });
  });
}

function normalizeMarketingNav(){
  const menu=document.querySelector('header.nav .menu');if(!menu)return;
  const path=location.pathname.replace(/\/$/,'')||'/';
  const active=path==='/platforms'?'platforms':path==='/pricing'?'pricing':'product';
  menu.innerHTML=[['product','/','产品'],['platforms','/platforms','支持平台'],['pricing','/pricing','价格']]
    .map(([key,href,label])=>`<a ${key===active?'class="active" ':''}href="${href}">${label}</a>`).join('');
}

function connectLoginToApp(){
  document.querySelectorAll('header.nav .nav-actions a').forEach(link=>{if(link.textContent.trim()==='登录')link.href='/app';});
}

function buildMarquee(){
  document.querySelectorAll('[data-dsp-marquee]').forEach(el=>{
    if(el.children.length)return;
    const core=channelData.filter(c=>c.core);
    el.innerHTML=[...core,...core].map(c=>`<div class="logo-box" data-fallback="${c.name}" title="${c.name}">${imageMarkup(c.name)}</div>`).join('');
  });
  addImgFallback();
}

function hydrateNamedLogos(){
  document.querySelectorAll('[data-logo]').forEach(el=>{const name=el.dataset.logo;el.dataset.fallback=name;el.innerHTML=imageMarkup(name);});
  addImgFallback();
}

function initEstimator(){
  const tracks=document.querySelector('[data-track-count]'),channels=document.querySelector('[data-channel-count]');
  if(!tracks||!channels)return;
  let t=5,c=6;
  const refresh=()=>{
    tracks.textContent=t;channels.textContent=c;
    const units=t*c;
    const e=document.querySelector('[data-estimate]');if(e)e.textContent=`${units} 次 · ¥${units}`;
  };
  document.querySelectorAll('[data-step]').forEach(b=>b.addEventListener('click',()=>{
    const x=b.dataset.step;
    if(x==='track-up')t=Math.min(500,t+1);if(x==='track-down')t=Math.max(1,t-1);
    if(x==='channel-up')c=Math.min(channelData.length,c+1);if(x==='channel-down')c=Math.max(1,c-1);
    refresh();
  }));
  refresh();
}

function initReleaseBuilder(){
  const root=document.querySelector('[data-release-builder]');if(!root)return;
  let aiMode='assisted',region='all',scope='core';
  const coreChannels=channelData.filter(c=>c.core);
  let selected=new Set(coreChannels.map(c=>c.name));
  const list=document.querySelector('[data-channels]');

  const stateFor=c=>{
    if(aiMode==='full'&&c.blockedFullAI)return {disabled:true,text:'主要由 AI 生成的作品当前不支持该平台'};
    if(aiMode==='full'&&c.confirmFullAI)return {disabled:true,text:'主要由 AI 生成的作品需要进一步确认，暂不可直接选择'};
    return {disabled:false,text:c.status};
  };

  const render=()=>{
    if(!list)return;
    const filtered=channelData.filter(c=>(scope==='core'?c.core:!c.core)&&(region==='all'||c.region===region));
    list.innerHTML=filtered.map(c=>{
      const state=stateFor(c);if(state.disabled)selected.delete(c.name);
      const sel=selected.has(c.name)&&!state.disabled;
      return `<div class="channel ${sel?'selected':''} ${state.disabled?'disabled':''}" data-channel="${c.name}">
        <div class="channel-logo" data-logo="${c.name}" data-fallback="${shortName(c.name)}"></div>
        <div><strong>${c.name}</strong><small>${state.text}</small></div>
        <div class="check">✓</div>
      </div>`;
    }).join('');
    hydrateNamedLogos();
    document.querySelectorAll('[data-channel]').forEach(el=>el.addEventListener('click',()=>{
      if(el.classList.contains('disabled'))return;
      const n=el.dataset.channel;selected.has(n)?selected.delete(n):selected.add(n);render();
    }));
    const count=selected.size;
    const countEl=document.querySelector('[data-selected-count]');if(countEl)countEl.textContent=count;
    const sumChannels=document.querySelector('[data-summary-channels]');if(sumChannels)sumChannels.textContent=count+' 个';
    const units=document.querySelector('[data-summary-units]');if(units)units.textContent=count+' 次';
    const total=document.querySelector('[data-summary-total]');if(total)total.innerHTML='¥'+count+'<span> / 本次</span>';
    const balance=document.querySelector('[data-balance-after]');if(balance)balance.textContent=Math.max(0,328-count)+' 次';
  };

  document.querySelectorAll('[data-ai-mode]').forEach(el=>el.addEventListener('click',()=>{
    document.querySelectorAll('[data-ai-mode]').forEach(x=>x.classList.remove('active'));el.classList.add('active');aiMode=el.dataset.aiMode;render();
  }));
  document.querySelectorAll('[data-region]').forEach(el=>el.addEventListener('click',()=>{
    document.querySelectorAll('[data-region]').forEach(x=>x.classList.remove('active'));el.classList.add('active');region=el.dataset.region;render();
  }));
  document.querySelectorAll('[data-scope]').forEach(el=>el.addEventListener('click',()=>{
    document.querySelectorAll('[data-scope]').forEach(x=>x.classList.remove('active'));el.classList.add('active');scope=el.dataset.scope;render();
  }));
  render();
}

function replaceExactText(from,to){
  const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
  const nodes=[];let node;
  while((node=walker.nextNode()))nodes.push(node);
  nodes.forEach(n=>{if(n.nodeValue.trim()===from)n.nodeValue=n.nodeValue.replace(from,to);});
}

function polishUserFacingCopy(){
  const replacements={
    '音乐发行，':'音乐发行，',
    '付费就能发。':'按次付费。',
    '无需签约、无需订阅。上传音乐，选择发行平台，按实际发行次数付费；通过内容与权利审核后进入平台交付。':'无需签约、无需订阅。上传音乐、选择渠道，审核通过后完成交付。标准价 ¥1 / 首 / 渠道。',
    '专业音乐发行能力，':'来自看见音乐的专业发行能力，',
    '现在可以直接自助使用。':'现在可以自助使用。',
    '优先覆盖音乐人最常使用的中国与全球主流音乐平台。系统会先根据作品权利和内容属性判断实际可发行范围，再让你选择并付费。':'覆盖常用的中国与海外主流音乐平台。付款前会根据作品和平台规则确认可发行范围。',
    '主流音乐平台优先':'覆盖常用音乐平台',
    '先判断再购买':'先判断，再付费',
    '不可发行的渠道不让你白付钱':'不可发行渠道不会计费',
    '不用研究套餐。':'价格不用算复杂。',
    '选完渠道，价格就出来了。':'选好渠道，价格立即算清。',
    '标准价格永远按“歌曲数量 × 实际选择的发行渠道”计算。下面直接试一下。':'基础发行按“歌曲数量 × 渠道数量”计费。可以直接试算。',
    '这次准备发几首歌？':'准备发行几首歌？',
    '先选择歌曲数量，再勾选你需要的音乐平台。正式发行时系统还会根据作品情况判断渠道资格。':'选择歌曲数量和目标平台，即可看到本次标准价格。正式提交前还会确认平台规则。',
    '一次购买多个发行额度时，也可以直接使用 100 / 500 / 1,000 次额度包。':'高频发行可预购 100 / 500 / 1,000 次额度，单次价格更低。',
    '把音乐发行，':'让音乐发行，',
    '从一份合作方案变成一个直接可买的服务。':'变成一项简单、透明的服务。',
    '新的自助发行不再要求用户先理解商务合作模式。核心规则公开、价格公开、渠道状态公开。':'价格、渠道和规则都直接展示，按实际使用付费。',
    '一首歌也能开始':'一首歌也能发行',
    '1 首歌曲发行到 1 个渠道标准价格 ¥1，没有最低消费，也不用先买年费。':'标准价 ¥1 / 首 / 渠道，无最低消费、无年费。',
    '发多少、选多少渠道，就按多少次计费。':'按实际选择的渠道计费。',
    '根据作品权利、创作方式和平台规则计算渠道资格，当前不可发行的渠道不会直接进入购买。':'付款前先确认作品是否符合平台规则，不可发行的渠道不会进入订单。',
    '减少付款以后才发现平台不接收的情况。':'先确认，再付费。',
    '发行收费，标准版税不抽成':'发行收费，标准数字收益不抽成',
    '你支付的是基础音乐发行服务费；标准 DSP 数字发行产生的收益 100% 归用户。':'你支付的是发行服务费；标准数字发行收益 100% 归用户。',
    '个别 DSP 对特定内容本身存在的收益限制，以平台规则为准。':'个别平台对特定内容的收益限制，以平台规则为准。',
    '不按创作方式定价':'创作方式不影响价格',
    '普通音乐、AI 辅助和 AI 生成音乐使用同一套价格。AI 只用于判断声明、审核和渠道资格。':'普通音乐、AI 辅助和 AI 生成音乐同价。AI 信息仅用于审核和平台规则判断。',
    '是否使用 AI，不会自动让发行更贵。':'AI 不额外加价。',
    '同一套规则，':'不同发行规模，',
    '覆盖不同发行规模。':'都用同一套规则。',
    '这里不是三个套餐，也不是三种客户等级。只是不同发行场景，都可以用同一套发行额度完成。':'无论发 1 首还是批量发行，都按同一套规则计费。',
    '无需先签合作方案。挑选真正需要的平台，完成资料和审核以后直接发行。':'上传作品、选择需要的平台，审核通过后即可发行。',
    '持续发歌，':'持续发行，',
    '提前囤额度更省。':'预购额度更省。',
    '发行频率变高以后，不需要升级成会员。预购发行额度即可继续使用同样的发行流程。':'发行频率较高时，可以预购额度降低单次成本。',
    '作品更多，':'作品更多，',
    '规则仍然不用变复杂。':'计费规则仍然一样。',
    '用更大的发行额度池持续管理多首作品、不同艺人和渠道交付，不因为主体类型进入另一套价格。':'使用更大的额度包管理多首作品和多个艺人，仍按实际渠道消耗额度。',
    '发行一首歌，':'3 步完成发行。',
    '不应该先学套餐。':'',
    '不分国内版、全球版，也不用选择月付、年付或服务年限。选中哪个渠道，就为哪个渠道付费。':'上传作品、确认可发行渠道，最后按实际选择付费并提交。',
    '系统先判断实际可发行范围和重要限制。':'确认哪些渠道可以发行，以及是否存在重要限制。',
    '按实际选择渠道计次，提交后进入审核与交付。':'确认价格后提交，进入审核和渠道交付。',
    '付款以前，':'常见问题，',
    '先把规则讲清楚。':'一次说清。',
    '如果你还在判断这套发行方式是否适合自己，下面这些通常是最先需要确认的问题。':'关于价格、扣费、版权和上线时间，这里统一说明。',
    '确认订单时会先预占额度；作品通过必要检查并正式进入对应渠道 Delivery 后才消费。资料校验、权利预检或渠道资格未通过，不会消费对应额度。':'提交时会先预留额度；作品通过必要检查并进入对应渠道交付后才会扣除。资料或平台规则未通过，不会扣除对应额度。',
    '是。新的按次付费基础发行不再额外抽取标准 Streaming / Download 发行分成。需要注意，某些 DSP 对特定内容本身可能存在不结算或收益限制，这属于平台规则，不是星球发行抽成。':'是。按次付费的基础发行不额外抽取标准数字发行分成。个别平台对特定内容可能有收益限制，这属于平台规则。',
    '可以提交，但最终可发行渠道取决于作品权利、AI 使用方式以及各音乐平台的最新规则。AI 不影响价格，只影响必要声明、审核和 Channel Eligibility。':'可以提交。最终可发行渠道取决于作品权利、AI 使用方式和各平台规则。AI 不影响价格，只影响必要声明和审核。',
    '作品通过审核后会进入对应音乐平台的交付流程，不同 DSP 的处理速度并不一致，因此不承诺所有渠道统一上线时间。你可以在发行管理中持续查看审核、交付和上线状态。':'作品通过审核后会进入各平台的处理流程，不同平台上线时间不同。你可以在发行管理中查看审核、交付和上线状态。',
    '先创建发行，':'准备好音乐，',
    '提交以前再付钱。':'就可以开始。',
    '没有订阅，没有套餐门槛。先完善资料、确认可发行渠道，再按实际选择付费。':'先创建发行，确认可发行渠道和价格后再提交。',
    '把长期积累的音乐分发能力，做成更直接、更透明的自助发行产品。':'把专业音乐发行能力，做成简单、透明的自助服务。',
    '主流平台先选，':'覆盖主流平台，',
    '更多渠道需要时再加。':'更多渠道按需选择。',
    '每个渠道都是独立发行目标：1 首歌曲发行到 1 个渠道，消耗 1 次发行额度。系统会在付款前判断作品是否符合该平台规则。':'每个渠道单独计费：1 首歌发行到 1 个渠道，消耗 1 次额度。付款前会确认作品是否符合平台规则。',
    '渠道不是“能不能接入”这么简单。':'同一首歌，在不同平台可能有不同规则。',
    '真正需要判断的是：能不能交付、能不能产生收益、能不能进入推荐，以及是否需要额外声明。':'我们会分别判断能否发行、是否影响收益或推荐，以及是否需要额外声明。',
    '正常购买':'可直接选择',
    '当前可以选择并进入标准交付。':'当前符合平台规则，可以正常发行。',
    '付款前提示':'限制会明确提示',
    '规则不明确时先完成额外审核或声明。':'需要补充信息或进一步审核后才能确认。',
    '当前不符合资格的渠道不会进入订单。':'当前不可发行，也不会计费。',
    '发行页默认优先展示这些平台，覆盖用户最常见的国内外发行需求。':'优先展示常用的中国和海外音乐平台。',
    '这些渠道不会抢占主流程，需要时再展开选择，仍然按 1 首 × 1 渠道消耗 1 次发行额度。':'按需选择更多渠道，同样按 ¥1 / 首 / 渠道计费。',
    '具体可发行范围以当前供应链规则为准。':'具体可发行范围以当前平台规则为准。',
    'AI 不是单独商品，但作品属性会影响具体渠道资格。':'创作方式不影响价格，但可能影响部分平台的发行、收益或推荐规则。',
    '重要：':'说明：',
    '付费不代表绕过 DSP 审核。没有资格的渠道不会进入可购买范围；技术失败重试不会重复扣发行额度。':'最终能否上线仍以平台审核为准。不可发行的渠道不会计费，技术重试也不会重复扣费。',
    '发几个渠道，就付几次。没有订阅、没有年费、没有套餐门槛；普通音乐、AI 辅助和 AI 生成音乐同价。':'按实际发行渠道计费，无订阅、无年费。普通音乐、AI 辅助和 AI 生成音乐同价。',
    '1 首歌曲发行到 1 个渠道，消耗 1 次发行额度。选择多少渠道，就按多少次计费。':'每首歌每选 1 个渠道，消耗 1 次额度。按实际选择计费。',
    '国内外标准音频渠道统一计次':'中国和海外标准音频渠道按同一规则计费',
    '用于标准音频渠道发行':'可用于标准音频发行',
    '不是会员，不产生自动续费':'一次购买，不自动续费',
    '仍按实际渠道交付逐次消耗':'按实际发行渠道逐次消耗',
    '通过预检并进入正式渠道交付':'作品通过审核并进入渠道交付',
    '不符合资格的渠道不可购买':'不符合平台规则的渠道不可选择',
    '仅影响平台资格与声明':'仅影响审核和平台规则',
    '付费不等于绕过平台审核。':'付费不能替代平台审核。',
    '每首作品仍需满足权利、内容和音乐平台规则；付款前会明确展示可发行、有限制、需确认或暂不支持的平台。':'每首作品仍需符合权利、内容和平台规则。付款前会明确显示可发行范围和重要限制。',
    '完善作品资料，选择发行渠道，确认价格后提交。':'填写作品信息、选择渠道，确认价格后提交。',
    '填写发行版本和基础元数据。':'填写发行名称和版本类型。',
    '上传最终发行母带和封面，提交前自动检查格式与基础质量。':'上传最终音频和封面，提交前会检查文件格式和基础质量。',
    '艺人、权利与创作方式':'艺人与权利',
    '确认参与发行的艺人、创作者、录音和词曲权利；创作方式只用于平台资格判断，不影响价格。':'填写艺人和权利信息，并说明作品是否使用生成式 AI。创作方式不影响价格。',
    '传统创作和制作流程。':'未使用生成式 AI。',
    '生成式 AI 构成作品主要部分。':'作品主要内容由生成式 AI 产生。',
    '1 首歌曲发行到 1 个渠道消耗 1 次发行额度。系统只允许选择当前实际符合资格的渠道。':'每首歌每选 1 个渠道，消耗 1 次额度。仅可选择当前可发行的渠道。',
    '平台规则会持续变化，提交前再次确认最终可发行范围。':'平台规则可能变化，提交前会再次确认可发行范围。',
    '全球':'海外',
    '设置计划发行日期，不再选择服务年限。':'选择尽快发行，或设置计划上线日期。',
    '平台资格已完成预检':'渠道规则已检查',
    '本次标准价格':'本次费用',
    '余额优先抵扣':'使用发行额度',
    '当前余额足够，本次无需额外支付。额度不足时只补足差额即可。':'当前额度足够，无需额外支付；额度不足时补足差额即可。',
    '进入正式渠道交付后才消耗对应发行额度；技术失败重试不会重复扣费。':'对应渠道进入正式交付后才扣除额度；技术重试不会重复扣费。'
  };
  Object.entries(replacements).forEach(([from,to])=>replaceExactText(from,to));
}

function loadStarLogoBundle(){
  if(window.STAR_DSP_LOGOS)return Promise.resolve();
  if(!document.querySelector('[data-dsp-marquee],[data-release-builder],[data-logo]'))return Promise.resolve();
  return new Promise(resolve=>{
    const script=document.createElement('script');script.src='/api/dsp-logos.js';script.async=true;script.onload=resolve;script.onerror=resolve;document.head.appendChild(script);
  });
}

document.addEventListener('DOMContentLoaded',async()=>{
  normalizeMarketingNav();connectLoginToApp();await loadStarLogoBundle();buildMarquee();hydrateNamedLogos();initEstimator();initReleaseBuilder();polishUserFacingCopy();
});