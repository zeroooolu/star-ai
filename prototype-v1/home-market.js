document.addEventListener('DOMContentLoaded',()=>{
  const storyTitle=document.querySelector('.story-copy h2');
  if(storyTitle)storyTitle.innerHTML='发行流程，<br>3 步完成。';

  const trustCopy=document.querySelector('.trust-intro p');
  if(trustCopy)trustCopy.innerHTML='<strong>星球发行是看见音乐旗下音乐发行服务。</strong>依托看见音乐长期积累的音乐资产管理、分发与结算能力，为音乐人和内容团队提供自助发行。';
  const trustLabels=['全球音乐资产','音乐创作者','公司与内容机构','看见音乐整体网络接入渠道'];
  document.querySelectorAll('.trust-stat span').forEach((el,i)=>{if(trustLabels[i])el.textContent=trustLabels[i];});

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