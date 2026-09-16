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

// 唯一渠道数据源。Core 只决定前台优先展示，不改变 ¥1 / Track / Channel 的计费口径。
const channelData=[
  {name:'QQ音乐',region:'cn',core:true,status:'可发行 · 部分 AI 内容收益和推荐可能受限'},
  {name:'网易云音乐',region:'cn',core:true,status:'可发行 · AI 内容可能需要标识'},
  {name:'酷狗音乐',region:'cn',core:true,status:'可发行 · 部分 AI 内容收益和推荐可能受限'},
  {name:'汽水音乐',region:'cn',core:true,status:'可发行 · 高度相似内容可能受限'},
  {name:'Spotify',region:'global',core:true,status:'可发行 · 部分 AI 内容推荐可能受限',warning:true},
  {name:'Apple Music',region:'global',core:true,status:'可发行'},
  {name:'YouTube Music',region:'global',core:true,status:'可发行 · 支持 AI 信息披露'},
  {name:'Amazon Music',region:'global',core:true,status:'AI 辅助通常可发行 · 主要由 AI 生成需确认',confirmFullAI:true},
  {name:'TikTok',region:'global',core:true,status:'AI 内容允许 · 主要由 AI 生成需确认',confirmFullAI:true},

  {name:'酷我音乐',region:'cn',core:false,status:'可发行 · 部分 AI 内容收益和推荐可能受限'},
  {name:'华为音乐',region:'cn',core:false,status:'可发行'},
  {name:'咪咕音乐',region:'cn',core:false,status:'可发行 · 上线时间可能较长',specialDelivery:true},
  {name:'KKBOX',region:'cn',core:false,status:'可发行'},
  {name:'Deezer',region:'global',core:false,status:'可发行 · 主要由 AI 生成的音乐推荐受限',warning:true},
  {name:'TIDAL',region:'global',core:false,status:'可发行 · 主要由 AI 生成的录音收益可能受限',warning:true},
  {name:'SoundCloud',region:'global',core:false,status:'AI 辅助可发行 · 主要由 AI 生成需确认',confirmFullAI:true},
  {name:'Meta',region:'global',core:false,status:'AI 内容允许 · 主要由 AI 生成需确认',confirmFullAI:true},
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
    if(aiMode==='full'&&c.confirmFullAI)return {disabled:true,text:'主要由 AI 生成的作品需先确认，当前不可直接购买'};
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

function loadStarLogoBundle(){
  if(window.STAR_DSP_LOGOS)return Promise.resolve();
  if(!document.querySelector('[data-dsp-marquee],[data-release-builder],[data-logo]'))return Promise.resolve();
  return new Promise(resolve=>{
    const script=document.createElement('script');script.src='/api/dsp-logos.js';script.async=true;script.onload=resolve;script.onerror=resolve;document.head.appendChild(script);
  });
}

document.addEventListener('DOMContentLoaded',async()=>{
  normalizeMarketingNav();connectLoginToApp();await loadStarLogoBundle();buildMarquee();hydrateNamedLogos();initEstimator();initReleaseBuilder();
});