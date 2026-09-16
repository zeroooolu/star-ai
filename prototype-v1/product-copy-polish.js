(()=>{
  const replacements={
    '发行额度与账单':'额度与账单',
    '管理草稿、审核、渠道交付和上线状态。':'管理草稿、审核和上线进度。',
    '管理已经进入发行目录的歌曲和录音资产。':'管理已创建和已发行的歌曲。',
    '管理发行中使用的艺人身份及平台关联信息。':'管理艺人资料和平台关联信息。',
    '查看已发行作品在各音乐平台的播放表现。':'查看作品在各音乐平台的播放表现。',
    '查看音乐平台结算收入、可结算余额和历史账单。':'查看已结算、待结算和可提现收益。',
    '已完成平台结算并可申请支付的金额。':'已结算、可申请提现的金额。',
    '标准数字发行收益 100% 归用户；渠道自身限制除外。':'标准数字发行收益不抽成；个别平台的内容限制除外。',
    '购买发行额度、查看余额和每次发行的扣费记录。':'查看额度余额、购买记录和发行扣费。',
    '查看公开价格':'查看价格',
    '1 首歌曲发行到 1 个渠道消耗 1 次。没有订阅，也不会自动续费。':'每首歌每选 1 个渠道，消耗 1 次额度。无订阅，不自动续费。',
    '/ 标准次':'/ 次',
    '余额不足时只补足差额':'额度不足时补足差额',
    '可继续用于标准音频发行':'可用于后续音乐发行',
    '买得越多，单次价格越低。':'预购越多，单次价格越低。',
    '额度购买与发行扣费记录。':'查看额度购买和发行扣费。',
    '管理发行账户、通知和默认发行偏好。':'管理账户信息、发行偏好和通知。',
    '发行默认项':'发行偏好',
    '用于账户识别和业务联系，不会作为发行元数据提交到平台。':'用于账户识别和业务联系，不会作为作品信息提交到音乐平台。',
    '新建发行时自动带入，可在单次发行中修改。':'新建发行时自动带入，也可以在单次发行中修改。',
    '集中管理发行、渠道交付、作品状态和收益。':'集中查看发行进度、作品和收益。',
    '当前发行':'发行版本',
    '2 个发行事项等待处理':'2 项发行需要处理',
    '1 个发行版本需要补充权利信息，1 个渠道需要确认当前内容规则。':'1 个发行需要补充权利信息，1 个渠道需要进一步确认。',
    '完成下一次发行。':'快速进入常用操作。',
    '确认作品可发行范围':'查看渠道要求',
    '平台规则':'支持平台',
    '已覆盖平台':'已上线平台',
    '主流渠道':'当前统计'
  };

  function polish(){
    const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
    const nodes=[];let node;
    while((node=walker.nextNode()))nodes.push(node);
    nodes.forEach(n=>{
      const key=n.nodeValue.trim();
      if(Object.prototype.hasOwnProperty.call(replacements,key)){
        n.nodeValue=n.nodeValue.replace(key,replacements[key]);
      }
    });
    document.querySelectorAll('input[placeholder]').forEach(input=>{
      if(input.placeholder==='搜索发行名称或艺人')input.placeholder='搜索发行或艺人';
    });
    if(document.title.startsWith('发行额度与账单')){
      document.title=document.title.replace('发行额度与账单','额度与账单');
    }
  }

  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',polish);
  else polish();
})();