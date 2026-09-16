document.addEventListener('DOMContentLoaded',()=>{
  const storyTitle=document.querySelector('.story-copy h2');
  if(storyTitle)storyTitle.innerHTML='发行流程，<br>3 步完成。';

  const root=document.querySelector('[data-market-calculator]');
  if(!root)return;

  let tracks=1;
  const selected=new Set(['QQ音乐','网易云音乐','Spotify','Apple Music']);
  const trackCount=root.querySelector('[data-market-track-count]');
  const channelCount=root.querySelector('[data-market-channel-count]');
  const units=root.querySelector('[data-market-units]');
  const total=root.querySelector('[data-market-total]');
  const cta=root.querySelector('[data-market-cta]');

  const refresh=()=>{
    const channelTotal=selected.size;
    const amount=tracks*channelTotal;
    if(trackCount)trackCount.textContent=tracks;
    if(channelCount)channelCount.textContent=channelTotal;
    if(units)units.textContent=`${amount} 次`;
    if(total)total.textContent=`¥${amount}`;
    if(cta)cta.textContent=amount?`¥${amount} 开始发行`:'选择发行渠道';
    root.querySelectorAll('[data-market-channel]').forEach(btn=>{
      btn.classList.toggle('active',selected.has(btn.dataset.marketChannel));
      btn.setAttribute('aria-pressed',selected.has(btn.dataset.marketChannel)?'true':'false');
    });
  };

  root.querySelectorAll('[data-market-step]').forEach(btn=>btn.addEventListener('click',()=>{
    if(btn.dataset.marketStep==='up')tracks=Math.min(100,tracks+1);
    if(btn.dataset.marketStep==='down')tracks=Math.max(1,tracks-1);
    refresh();
  }));

  root.querySelectorAll('[data-market-channel]').forEach(btn=>btn.addEventListener('click',()=>{
    const name=btn.dataset.marketChannel;
    selected.has(name)?selected.delete(name):selected.add(name);
    refresh();
  }));

  refresh();
});