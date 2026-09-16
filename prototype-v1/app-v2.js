// Homepage visual layers are intentionally loaded only on the AI distribution landing page.
// Pricing and release builder keep their existing styling.
(function loadHomeV4(){
  if(!document.body || !document.body.classList.contains('home-v3')) return;

  if(!document.querySelector('link[data-home-v4]')){
    const base=document.createElement('link');
    base.rel='stylesheet';
    base.href='/prototype-v1/home-v4.css?v=20260910';
    base.dataset.homeV4='1';
    document.head.appendChild(base);
  }

  if(!document.querySelector('link[data-home-v4-fixes]')){
    const fixes=document.createElement('link');
    fixes.rel='stylesheet';
    fixes.href='/prototype-v1/home-v4-fixes.css?v=20260910';
    fixes.dataset.homeV4Fixes='1';
    document.head.appendChild(fixes);
  }

  if(!document.querySelector('link[data-home-v5]')){
    const refine=document.createElement('link');
    refine.rel='stylesheet';
    refine.href='/prototype-v1/home-v5-ssrelease.css?v=20260910';
    refine.dataset.homeV5='1';
    document.head.appendChild(refine);
  }
})();

const RAW='/assets/platform-logos/';

const namedLogos={
  'Spotify':RAW+'spotify.jpeg',
  'Apple Music':RAW+'apple-music.jpg',
  'QQ音乐':RAW+'qq-music.png',
  '网易云音乐':RAW+'netease-music.jpg',
  '酷狗音乐':RAW+'kugou-music.png',
  '酷我音乐':RAW+'kuwo-music.png',
  '汽水音乐':RAW+'douyin-qishui.jpg',
  '华为音乐':RAW+'huawei-music.jpg',
  'Amazon Music':RAW+'amazon-music.png',
  'YouTube Music':RAW+'youtube-music.jpg',
  'TikTok':RAW+'tiktok.jpeg',
  'KKBOX':RAW+'kkbox.png'
};

const shortName=n=>({
  Spotify:'SP','Apple Music':'AM','QQ音乐':'QQ','网易云音乐':'网易','酷狗音乐':'酷狗','酷我音乐':'酷我',
  '汽水音乐':'汽水','番茄音乐':'番茄','华为音乐':'华为','咪咕音乐':'咪咕','阿里音乐':'阿里','Amazon Music':'AZ',
  'YouTube Music':'YT',TikTok:'TT','Meta（Facebook / Instagram）':'Meta','SoundCloud':'SC',TIDAL:'TD',Deezer:'DZ',
  Bandcamp:'BC',Beatport:'BP',Qobuz:'QZ',Yandex:'YX',KKBOX:'KK'
}[n]||String(n).slice(0,4));

// 唯一渠道数据源：来自 channel-catalog-ai-policy-v1.0.md。
// 官网 Logo、发行 Builder、渠道数量都从这里生成，禁止再使用旧官网的“25 张图全量轮播”。
const channelData=[
  // 中国大陆 / 华语渠道
  {name:'QQ音乐',region:'cn',logo:'QQ音乐',status:'可以发，但有限制 · 部分 AI 内容收益和推荐受限'},
  {name:'酷狗音乐',region:'cn',logo:'酷狗音乐',status:'可以发，但有限制 · 部分 AI 内容收益和推荐受限'},
  {name:'酷我音乐',region:'cn',logo:'酷我音乐',status:'可以发，但有限制 · 部分 AI 内容收益和推荐受限'},
  {name:'网易云音乐',region:'cn',logo:'网易云音乐',status:'可以发 · 作品可能显示 AI 标识'},
  {name:'汽水音乐',region:'cn',logo:'汽水音乐',status:'可以发，但有限制 · 高度相似内容可能被限制'},
  {name:'番茄音乐',region:'cn',logo:'番茄音乐',status:'可以发'},
  {name:'华为音乐',region:'cn',logo:'华为音乐',status:'可以发'},
  {name:'咪咕音乐',region:'cn',logo:'咪咕音乐',status:'可以发 · 上线时间可能相对较长',specialDelivery:true},
  {name:'阿里音乐',region:'cn',logo:'阿里音乐',status:'可以发'},
  {name:'KKBOX',region:'cn',logo:'KKBOX',status:'可以发'},

  // 海外渠道
  {name:'Amazon Music',region:'global',logo:'Amazon Music',status:'AI 辅助通常可以发 · 主要由 AI 生成需确认',confirmFullAI:true},
  {name:'Apple Music',region:'global',logo:'Apple Music',status:'可以发'},
  {name:'Bandcamp',region:'global',logo:'Bandcamp',status:'AI 辅助需判断 · 主要由 AI 生成暂不支持',blockedFullAI:true},
  {name:'Beatport',region:'global',logo:'Beatport',status:'AI 辅助可以发 · 主要由 AI 生成暂不支持',blockedFullAI:true},
  {name:'Deezer',region:'global',logo:'Deezer',status:'可以发，但有限制 · 主要由 AI 生成的音乐不进入推荐',warning:true},
  {name:'Meta（Facebook / Instagram）',region:'global',logo:'Meta（Facebook / Instagram）',status:'AI 内容允许 · 主要由 AI 生成需确认',confirmFullAI:true},
  {name:'Qobuz',region:'global',logo:'Qobuz',status:'AI 辅助可以发 · 主要由 AI 生成暂不支持',blockedFullAI:true},
  {name:'SoundCloud',region:'global',logo:'SoundCloud',status:'AI 辅助可以发 · 主要由 AI 生成需确认',confirmFullAI:true},
  {name:'Spotify',region:'global',logo:'Spotify',status:'可以发，但有限制 · 部分 AI 内容推荐可能受限',warning:true},
  {name:'TIDAL',region:'global',logo:'TIDAL',status:'可以发，但有限制 · 主要由 AI 生成的录音收益可能受限',warning:true},
  {name:'TikTok',region:'global',logo:'TikTok',status:'AI 内容允许 · 主要由 AI 生成需确认',confirmFullAI:true},
  {name:'Yandex',region:'global',logo:'Yandex',status:'可以发，但有限制 · AI 标识可能影响推荐',warning:true},
  {name:'YouTube Music',region:'global',logo:'YouTube Music',status:'可以发 · 支持填写 AI 使用信息'}
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
      const p=img.parentElement;
      if(!p)return;
      p.classList.add('logo-failed');
      p.dataset.fallback=img.alt||'DSP';
      img.remove();
    });
  });
}

function normalizeMarketingNav(){
  const menu=document.querySelector('header.nav .menu');
  if(!menu)return;
  const path=location.pathname.replace(/\/$/,'')||'/';
  const active=path==='/platforms'?'platforms':path==='/pricing'?'pricing':'product';
  menu.innerHTML=[
    ['product','/','产品'],
    ['platforms','/platforms','支持平台'],
    ['pricing','/pricing','价格']
  ].map(([key,href,label])=>`<a ${key===active?'class="active" ':''}href="${href}">${label}</a>`).join('');
}

function connectLoginToApp(){
  document.querySelectorAll('header.nav .nav-actions a').forEach(link=>{
    if(link.textContent.trim()==='登录')link.href='/app';
  });
  document.querySelectorAll('.final-cta .hero-actions a').forEach(link=>{
    if(link.textContent.trim()==='登录账户')link.href='/app';
  });
}

function buildMarquee(){
  document.querySelectorAll('[data-dsp-marquee]').forEach(el=>{
    if(el.children.length)return;
    const items=[...channelData,...channelData];
    el.innerHTML=items.map(c=>`<div class="logo-box" data-fallback="${c.name}" title="${c.name}">${imageMarkup(c.logo||c.name)}</div>`).join('');
  });
  addImgFallback();
}

function hydrateNamedLogos(){
  document.querySelectorAll('[data-logo]').forEach(el=>{
    const name=el.dataset.logo;
    el.dataset.fallback=name;
    el.innerHTML=imageMarkup(name);
  });
  addImgFallback();
}

function initBilling(){
  const buttons=[...document.querySelectorAll('[data-billing]')];
  if(!buttons.length)return;
  const prices={monthly:{china:'29.9',global:'59.9',chinaUnit:'/月',globalUnit:'/月'},annual:{china:'299',global:'599',chinaUnit:'/年',globalUnit:'/年'}};
  buttons.forEach(btn=>btn.addEventListener('click',()=>{
    buttons.forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const p=prices[btn.dataset.billing];
    document.querySelector('[data-price-china]').textContent='¥'+p.china;
    document.querySelector('[data-unit-china]').textContent=p.chinaUnit;
    document.querySelector('[data-price-global]').textContent='¥'+p.global;
    document.querySelector('[data-unit-global]').textContent=p.globalUnit;
    document.querySelectorAll('[data-billing-note]').forEach(n=>n.textContent=btn.dataset.billing==='monthly'?'按月支付，预算更灵活':'一次支付全年，价格更优惠');
  }));
}

function initEstimator(){
  const tracks=document.querySelector('[data-track-count]'),channels=document.querySelector('[data-channel-count]');
  if(!tracks||!channels)return;
  let t=5,c=6;
  const refresh=()=>{
    tracks.textContent=t;
    channels.textContent=c;
    const e=document.querySelector('[data-estimate]');
    if(e)e.textContent='¥'+t*c;
  };
  document.querySelectorAll('[data-step]').forEach(b=>b.addEventListener('click',()=>{
    const x=b.dataset.step;
    if(x==='track-up')t=Math.min(200,t+1);
    if(x==='track-down')t=Math.max(1,t-1);
    if(x==='channel-up')c=Math.min(channelData.length,c+1);
    if(x==='channel-down')c=Math.max(1,c-1);
    refresh();
  }));
  refresh();
}

function initReleaseBuilder(){
  const root=document.querySelector('[data-release-builder]');
  if(!root)return;
  let aiMode='assisted',region='all',term=1;
  let selected=new Set(channelData.slice(0,10).map(c=>c.name));
  const list=document.querySelector('[data-channels]');

  const stateFor=(c)=>{
    if(aiMode==='full'&&c.blockedFullAI)return {disabled:true,text:'主要由 AI 自动生成的作品当前不支持该平台'};
    if(aiMode==='full'&&c.confirmFullAI)return {disabled:true,text:'主要由 AI 自动生成的作品需先确认，暂不计入当前可选平台'};
    return {disabled:false,text:c.status};
  };

  const render=()=>{
    const filtered=channelData.filter(c=>region==='all'||c.region===region);
    list.innerHTML=filtered.map(c=>{
      const state=stateFor(c);
      if(state.disabled)selected.delete(c.name);
      const sel=selected.has(c.name)&&!state.disabled;
      return `<div class="channel ${sel?'selected':''} ${state.disabled?'disabled':''}" data-channel="${c.name}">
        <div class="channel-logo" data-logo="${c.logo||c.name}" data-fallback="${shortName(c.name)}"></div>
        <div><strong>${c.name}</strong><small>${state.text}</small></div>
        <div class="check">✓</div>
      </div>`;
    }).join('');

    hydrateNamedLogos();
    document.querySelectorAll('[data-channel]').forEach(el=>el.addEventListener('click',()=>{
      if(el.classList.contains('disabled'))return;
      const n=el.dataset.channel;
      selected.has(n)?selected.delete(n):selected.add(n);
      render();
    }));

    document.querySelector('[data-selected-count]').textContent=selected.size;
    document.querySelector('[data-summary-channels]').textContent=selected.size+' 个';
    document.querySelector('[data-summary-term]').textContent=term+' 年';
    document.querySelector('[data-summary-total]').innerHTML='¥'+selected.size*term+'<span> / 本次</span>';

    const available=channelData.filter(c=>!stateFor(c).disabled).length;
    const rec=document.querySelector('[data-sub-recommend]');
    if(rec)rec.innerHTML=selected.size>=10
      ?`<div class="top"><strong>高频发行可考虑订阅</strong><span class="tag">可选</span></div><p>全球发行订阅最多覆盖 50 首当前在架歌曲；按当前作品属性，可从 ${available} 个已接入平台中选择。</p>`
      :`<div class="top"><strong>当前更适合按量发行</strong><span class="tag">按实际使用付费</span></div><p>当前选择 ${selected.size} 个平台，仅按实际使用的平台付费。</p>`;
  };

  document.querySelectorAll('[data-ai-mode]').forEach(el=>el.addEventListener('click',()=>{
    document.querySelectorAll('[data-ai-mode]').forEach(x=>x.classList.remove('active'));
    el.classList.add('active');
    aiMode=el.dataset.aiMode;
    render();
  }));
  document.querySelectorAll('[data-region]').forEach(el=>el.addEventListener('click',()=>{
    document.querySelectorAll('[data-region]').forEach(x=>x.classList.remove('active'));
    el.classList.add('active');
    region=el.dataset.region;
    render();
  }));
  document.querySelectorAll('[data-term]').forEach(el=>el.addEventListener('click',()=>{
    document.querySelectorAll('[data-term]').forEach(x=>x.classList.remove('active'));
    el.classList.add('active');
    term=Number(el.dataset.term);
    render();
  }));
  render();
}

function loadStarLogoBundle(){
  if(window.STAR_DSP_LOGOS)return Promise.resolve();
  if(!document.querySelector('[data-dsp-marquee],[data-release-builder],[data-logo]'))return Promise.resolve();
  return new Promise(resolve=>{
    const script=document.createElement('script');
    script.src='/api/dsp-logos.js';
    script.async=true;
    script.onload=resolve;
    script.onerror=resolve;
    document.head.appendChild(script);
  });
}

document.addEventListener('DOMContentLoaded',async()=>{
  normalizeMarketingNav();
  connectLoginToApp();
  await loadStarLogoBundle();
  buildMarquee();
  hydrateNamedLogos();
  initBilling();
  initEstimator();
  initReleaseBuilder();
});
