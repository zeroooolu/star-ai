const CMS_BASE='https://img.cms.kanjian.com/frontpage/v5/home/release/dsps/';
const RAW='https://raw.githubusercontent.com/zeroooolu/music-promotion/main/frontend/star-release/assets/platform-logos/';
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
  'TikTok':RAW+'tiktok.jpeg',
  'KKBOX':RAW+'kkbox.png'
};

function buildMarquee(){
  document.querySelectorAll('[data-dsp-marquee]').forEach(el=>{
    if(el.children.length)return;
    const ids=[...Array(25)].map((_,i)=>i+1);
    const all=[...ids,...ids];
    el.innerHTML=all.map(i=>`<div class="logo-box"><img src="${CMS_BASE}${i}.png" alt="DSP ${i}" loading="lazy"></div>`).join('');
  });
}

function img(name){
  return namedLogos[name]?`<img src="${namedLogos[name]}" alt="${name}">`:name.slice(0,2);
}

function hydrateNamedLogos(){
  document.querySelectorAll('[data-logo]').forEach(el=>{
    const name=el.dataset.logo;
    el.innerHTML=img(name);
  });
}

function initBilling(){
  const buttons=[...document.querySelectorAll('[data-billing]')];
  if(!buttons.length)return;
  const prices={monthly:{china:'29.9',global:'59.9',chinaUnit:'/月',globalUnit:'/月'},annual:{china:'299',global:'599',chinaUnit:'/年',globalUnit:'/年'}};
  buttons.forEach(btn=>btn.addEventListener('click',()=>{
    buttons.forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const mode=btn.dataset.billing;
    document.querySelector('[data-price-china]').textContent='¥'+prices[mode].china;
    document.querySelector('[data-unit-china]').textContent=prices[mode].chinaUnit;
    document.querySelector('[data-price-global]').textContent='¥'+prices[mode].global;
    document.querySelector('[data-unit-global]').textContent=prices[mode].globalUnit;
    document.querySelectorAll('[data-billing-note]').forEach(n=>n.textContent=mode==='monthly'?'12 个月服务期，按月支付':'一次支付全年，价格更优惠');
  }));
}

function initEstimator(){
  const tracks=document.querySelector('[data-track-count]');
  const channels=document.querySelector('[data-channel-count]');
  if(!tracks||!channels)return;
  let t=5,c=6;
  const refresh=()=>{
    tracks.textContent=t;channels.textContent=c;
    const e=document.querySelector('[data-estimate]');
    if(e)e.textContent='¥'+(t*c);
  };
  document.querySelectorAll('[data-step]').forEach(b=>b.addEventListener('click',()=>{
    const type=b.dataset.step;
    if(type==='track-up')t=Math.min(200,t+1);
    if(type==='track-down')t=Math.max(1,t-1);
    if(type==='channel-up')c=Math.min(25,c+1);
    if(type==='channel-down')c=Math.max(1,c-1);
    refresh();
  }));
  refresh();
}

const channelData=[
  {name:'QQ音乐',region:'cn',status:'可发行 · AI 内容需声明',logo:'QQ音乐'},
  {name:'网易云音乐',region:'cn',status:'可发行 · AI 内容会标识',logo:'网易云音乐'},
  {name:'酷狗音乐',region:'cn',status:'可发行 · TME 规则',logo:'酷狗音乐'},
  {name:'酷我音乐',region:'cn',status:'可发行 · TME 规则',logo:'酷我音乐'},
  {name:'汽水音乐',region:'cn',status:'可发行 · 高相似度受限',logo:'汽水音乐'},
  {name:'华为音乐',region:'cn',status:'可发行',logo:'华为音乐'},
  {name:'Spotify',region:'global',status:'可发行 · AI Persona 推荐受限',logo:'Spotify'},
  {name:'Apple Music',region:'global',status:'可发行 · 支持 AI 透明度',logo:'Apple Music'},
  {name:'Amazon Music',region:'global',status:'可发行 · 规则待持续确认',logo:'Amazon Music'},
  {name:'YouTube Music',region:'global',status:'可发行 · 需 AI 标记',logo:null},
  {name:'TikTok',region:'global',status:'可发行 · B2B 规则持续确认',logo:'TikTok'},
  {name:'TIDAL',region:'global',status:'可发行 · Fully AI 不参与版税',logo:null,warning:true},
  {name:'Deezer',region:'global',status:'可发行 · 纯 AI 不参与推荐',logo:null,warning:true},
  {name:'Beatport',region:'global',status:'主要 AI 生成内容不可发行',logo:null,blockedAI:true},
  {name:'Qobuz',region:'global',status:'100% AI 内容不可新交付',logo:null,blockedAI:true}
];

function initReleaseBuilder(){
  const root=document.querySelector('[data-release-builder]');
  if(!root)return;
  let aiMode='assisted';
  let region='all';
  let term=1;
  let selected=new Set(channelData.filter(c=>!c.blockedAI).slice(0,10).map(c=>c.name));
  const list=document.querySelector('[data-channels]');
  const bindChannelClicks=()=>{
    document.querySelectorAll('[data-channel]').forEach(el=>el.addEventListener('click',()=>{
      if(el.classList.contains('disabled'))return;
      const name=el.dataset.channel;
      selected.has(name)?selected.delete(name):selected.add(name);
      render();
    }));
  };
  const render=()=>{
    const filtered=channelData.filter(c=>region==='all'||c.region===region);
    list.innerHTML=filtered.map(c=>{
      const disabled=(aiMode==='full'&&c.blockedAI);
      if(disabled)selected.delete(c.name);
      const sel=selected.has(c.name)&&!disabled;
      return `<div class="channel ${sel?'selected':''} ${disabled?'disabled':''}" data-channel="${c.name}">
        <div class="channel-logo" ${c.logo?`data-logo="${c.logo}"`:''}>${c.logo?'':c.name.slice(0,2)}</div>
        <div><strong>${c.name}</strong><small>${disabled?'当前作品类型不可发行':c.status}</small></div>
        <div class="check">✓</div>
      </div>`
    }).join('');
    hydrateNamedLogos();
    document.querySelector('[data-selected-count]').textContent=selected.size;
    const price=selected.size*term;
    document.querySelector('[data-summary-channels]').textContent=selected.size+' 个';
    document.querySelector('[data-summary-term]').textContent=term+' 年';
    document.querySelector('[data-summary-total]').innerHTML='¥'+price+'<span> / 本次</span>';
    const globalEligible=channelData.filter(c=>!((aiMode==='full')&&c.blockedAI)).length;
    const rec=document.querySelector('[data-sub-recommend]');
    if(rec)rec.innerHTML=selected.size>=10?`<div class="top"><strong>经常全渠道发行？</strong><span class="tag">可选</span></div><p>全球订阅覆盖最多 50 首在架歌曲。当前作品可发行至 ${globalEligible} 个已接入渠道。</p>`:`<div class="top"><strong>按量发行更适合这次</strong><span class="tag">实时计算</span></div><p>当前只选择 ${selected.size} 个渠道，按量只需为实际使用的渠道付费。</p>`;
    bindChannelClicks();
  };
  document.querySelectorAll('[data-ai-mode]').forEach(el=>el.addEventListener('click',()=>{
    document.querySelectorAll('[data-ai-mode]').forEach(x=>x.classList.remove('active'));
    el.classList.add('active');
    aiMode=el.dataset.aiMode;
    if(aiMode!=='full')channelData.filter(c=>c.blockedAI).forEach(c=>selected.add(c.name));
    render();
  }));
  document.querySelectorAll('[data-region]').forEach(el=>el.addEventListener('click',()=>{
    document.querySelectorAll('[data-region]').forEach(x=>x.classList.remove('active'));
    el.classList.add('active');region=el.dataset.region;render();
  }));
  document.querySelectorAll('[data-term]').forEach(el=>el.addEventListener('click',()=>{
    document.querySelectorAll('[data-term]').forEach(x=>x.classList.remove('active'));
    el.classList.add('active');term=Number(el.dataset.term);render();
  }));
  render();
}

document.addEventListener('DOMContentLoaded',()=>{
  buildMarquee();hydrateNamedLogos();initBilling();initEstimator();initReleaseBuilder();
});
