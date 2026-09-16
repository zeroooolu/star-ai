# AI 音乐发行 / 自助发行 UX & Design Foundation v0.1

> 日期：2026-09-09  
> 状态：Phase 3 / Phase 4 输入稿  
> 目标：作为后续高保真原型与可直接进入前端开发的统一 UX / 视觉 / 组件基线。

---

# 1. 产品基线

本产品是一个独立的付费自助音乐发行平台，产品形态接近 DistroKid，但商业模式与渠道策略按看见当前能力重新设计。

支持：

- AI 生成音乐；
- AI 辅助创作；
- 普通音乐。

不把 AI 音乐与普通音乐做成两套前台产品。AI 属性只参与 Rights / Disclosure / Channel Eligibility / 风控。

核心购买方式：

- 按量：¥1 / Track / Channel / Year；
- 国内发行订阅；
- 全球发行订阅；
- 月付 / 年付作为同一订阅的付款周期表达。

标准数字发行收益 100% 归用户。

---

# 2. 设计输入与素材来源

## 2.1 当前星球发行官网

当前官网：`https://star.kanjian.com/`

使用原则：

> 仅作为现有 DSP 平台 Logo / 渠道品牌素材来源，不作为本产品视觉风格参考。

当前站点为 JS SPA，后续原型实现阶段需要从其实际前端静态资源或现有业务仓库中复用 DSP Logo，避免重新绘制。

## 2.2 现有可复用 DSP Logo 资产

`zeroooolu/music-promotion` 已存在一组平台 Logo 资产：

`frontend/star-release/assets/platform-logos/`

现有代码 `frontend/star-release/platform-logos.js` 已维护的平台包括：

- QQ 音乐；
- 网易云音乐；
- 酷狗音乐；
- 酷我音乐；
- Spotify；
- Apple Music；
- YouTube Music；
- 抖音 / 汽水音乐；
- TikTok；
- JOOX；
- KKBOX；
- MOOV；
- 华为音乐；
- Amazon Music。

后续需要根据 `channel-catalog-ai-policy-v1.0.md` 补齐当前自助发行实际支持但现有资产未覆盖的平台。

## 2.3 品牌资产

- 主品牌沿用看见音乐；
- 主色保持蓝色体系；
- Logo 优先复用现有看见音乐品牌资产，不重新设计新 Logo；
- 不沿用 music-promotion 当前红色视觉体系。

---

# 3. 竞品与视觉参考

## 3.1 Ditto Music

主要参考：

- 大字号、短句式 Hero；
- 极强的核心价值表达；
- DSP Logo 作为可信度与覆盖范围证明；
- Pricing 直接作为首页核心内容，而不是藏在二级页；
- 产品能力与操作结果混合展示，不做传统企业官网式长篇介绍。

不直接复制：

- 强娱乐化黑黄品牌语言；
- Unlimited 作为主卖点；
- 过多外围 Publishing / Sync / Promotion 能力。

## 3.2 LANDR

主要参考：

- 更成熟的产品化 SaaS 表达；
- 白底 + 大留白 + 深色产品界面 Demo；
- Hero 直接展示真实产品使用场景；
- Distribution / Analytics / Status 以真实 UI 卡片而非插画表现；
- “产品本身就是官网视觉资产”的思路。

## 3.3 2026 AI / Agent 产品设计方向

本产品不是 Agent 产品，但可以吸收 2026 AI 产品的设计语言：

- UI 真实工作流代替传统营销插画；
- 大面积留白；
- 强排版、弱装饰；
- 轻透明 / Blur Navigation；
- 局部深色 Product Surface；
- 状态驱动 UI；
- 动态步骤、任务进度和实时反馈；
- 通过 AI / System 判断结果增强“系统正在替用户处理工作”的感觉。

不要使用：

- 紫色霓虹 AI 风；
- 大面积发光渐变；
- 无意义的 AI Orb；
- 机器人 / 芯片 / 星云图；
- 过重的 Chatbot 视觉。

设计目标：

> 看起来是一个 2026 年的 AI-native SaaS，但第一眼仍然明确是“音乐发行产品”。

---

# 4. 总体视觉方向

关键词：

> **Clean / Precise / Music-native / Agentic / Operational / Trustworthy**

中文理解：

> 简洁、专业、音乐行业感、系统正在替你处理发行、可信、不过度传统。

## 4.1 色彩

主色：蓝色。

第一版建议：

```text
Brand Blue        #2563EB / #246BFD 区间
Brand Blue Hover  #1D4ED8
Blue Soft         #EFF6FF
Text Primary      #111827
Text Secondary    #667085
Border            #E7EAF0
Surface           #FFFFFF
Surface Soft      #F7F9FC
Success           #16A36A
Warning           #E99A16
Danger            #DC4C4C
Dark Surface      #101318 / #11141A
```

最终色值在第一版 HTML Prototype 中视觉校准，不先锁成设计系统死值。

## 4.2 Typography

- 中文：系统无衬线优先；
- 英文 / 数字：使用现代 Grotesk / System Sans 方向；
- Hero 使用较大字号和紧凑行高；
- 产品内部降低字号，强调信息密度与状态可读性。

## 4.3 圆角与阴影

- 官网营销卡片：16–24px；
- 产品操作控件：8–12px；
- 避免所有东西都大圆角；
- Shadow 弱化，以 Border + Surface Layer 为主。

---

# 5. 信息架构 / Route Map

```text
/                         官网首页
/pricing                  定价
/stores                   发行渠道
/help                     帮助 / FAQ
/login                    登录
/signup                   注册

/app                      工作台首页
/app/releases             发行管理
/app/releases/new         新建发行
/app/releases/:id         发行详情
/app/catalog              音乐库
/app/earnings             收益
/app/billing              订阅与账单
/app/settings             设置
```

MVP 不单独建立：

- Artist Management；
- Label Management；
- Team Management；
- Publishing；
- Sync；
- Marketing；
- API Console；
- 复杂 BI Dashboard。

如果发行表单需要 Artist / Label 数据，以表单内创建 / 选择方式解决，不在首版增加独立模块。

---

# 6. 官网结构

首页不是企业能力说明书，而是一个直接转化页。

推荐 Section：

```text
Navbar
↓
Hero
↓
DSP Logo Marquee
↓
How it works
↓
真实 Release Builder 产品 Demo
↓
AI / 普通音乐统一发行说明
↓
渠道 Eligibility / Transparency
↓
Pricing Preview
↓
Release Status / Earnings 产品 Demo
↓
FAQ
↓
Final CTA
↓
Footer
```

## 6.1 Hero

第一版文案方向：

### 主标题候选

> **把你的音乐，发行到全世界。**

副标题：

> AI 生成、AI 辅助或传统创作，都可以在这里完成上传、审核、发行和收益管理。

CTA：

- `开始发行`
- 次级：`查看价格`

Hero 右侧不使用抽象插画，直接展示一个高度视觉化的 Release Builder / Delivery Status 产品界面。

## 6.2 DSP Logo Marquee

- 使用当前星球发行官网 / 现有业务资产中的真实 DSP Logo；
- 两排或单排无限滚动；
- 白底 / 低饱和 Logo 容器；
- 不用花哨卡片；
- 文案：`发行到你真正需要的平台` 或 `覆盖国内与全球主流音乐平台`。

注意：官网 Logo 展示是“当前渠道能力展示”，实际单首作品是否可进入某个平台仍由 Eligibility 决定。

---

# 7. Pricing 页面

Pricing 是核心页面，不做传统三四档 SaaS 套餐。

页面首屏直接分为：

```text
按量发行
国内发行订阅
全球发行订阅
```

## 7.1 按量发行

主文案：

> **¥1 / 首 / 渠道 / 年**

提供一个实时价格计算器：

```text
歌曲：[-] 3 [+]
渠道：12 个
服务期：1 年

3 × 12 × 1
= ¥36
```

渠道可展开勾选。

## 7.2 国内发行订阅

- 月付 / 年付切换；
- 最多 50 首在架歌曲；
- 覆盖该作品当前符合资格的国内渠道；
- 100% 标准数字版税；
- 超额按量。

## 7.3 全球发行订阅

同上，但覆盖当前符合资格的国内 + 海外渠道。

## 7.4 月付 / 年付 UI 原则

使用一个统一 Toggle：

```text
[ 月付 ] [ 年付 · 更省 ]
```

月付与年付是同一个 Plan 的付款周期，不创造额外套餐等级。

---

# 8. App 导航

桌面端推荐左侧导航：

```text
Logo

工作台
发行
音乐库
收益

订阅与账单
设置

[ + 发行音乐 ]
```

移动端使用 Bottom Navigation + 顶部发行 CTA。

核心操作 `发行音乐` 始终高可见。

---

# 9. 核心用户流程

```text
注册 / 登录
↓
新建发行
↓
上传音频 + 封面
↓
填写 Track / Release Metadata
↓
AI / Rights Declaration
↓
系统 Preflight
↓
生成 Channel Eligibility
↓
选择渠道
↓
选择服务期限
↓
比较：按量 / 当前订阅权益 / 推荐订阅
↓
确认价格
↓
支付
↓
正式审核
↓
Delivery
↓
逐渠道状态
↓
上线
↓
收益 / 报表
```

关键原则：

> 支付前尽可能完成 Eligibility 与基础风险判断，避免付款后才告诉用户“这个渠道不能发”。

---

# 10. 新建发行页

这是整个产品最重要的页面。

第一版推荐：

> **单页 Progressive Builder，而不是 7 步 Wizard。**

页面结构：

```text
Header: 新建发行                     保存草稿

01 音频与封面
02 作品信息
03 艺人与 Credits
04 AI 与权利声明
05 发行渠道
06 发行时间与服务期限

--------------------------------
右侧 Sticky Summary
当前歌曲数
可发行渠道
购买方式
价格
[提交发行]
```

每个 Section 完成后进入 Completed State，页面自动收紧。

移动端 Summary 变成底部 Sticky Checkout Bar。

---

# 11. AI / Rights Declaration 交互

不要问一句：

> “这是不是 AI 音乐？”

而是明确拆分：

```text
这首作品是否使用生成式 AI？

歌词          未使用 / AI 辅助 / AI 生成
作曲          未使用 / AI 辅助 / AI 生成
人声          未使用 / AI 辅助 / AI 生成
器乐 / 音频   未使用 / AI 辅助 / AI 生成
封面          未使用 / AI 辅助 / AI 生成

是否使用真实人物 / 艺人的声音或身份？
是否拥有相应授权？
```

提交后系统生成渠道状态。

设计语言不要审讯式，而应表现为：

> `帮助我们为你匹配正确的发行渠道`

---

# 12. Channel Selector

渠道选择是本产品最有辨识度的领域组件之一。

每个 Channel Card 必须同时表达：

- Logo；
- 渠道名；
- 是否可选择；
- Monetization 状态；
- Recommendation 状态；
- AI Disclosure 状态；
- 必要时显示原因。

状态示例：

```text
Spotify
✓ 可发行

Deezer
✓ 可发行
! AI 音乐不参与推荐

TIDAL
✓ 可发行
! 100% AI 录音当前不参与版税

Beatport
— 当前不可发行
主要由 AI 生成的音乐暂不接受
```

## 12.1 快捷选择

顶部提供：

- `选择全部可发行渠道`
- `国内渠道`
- `全球渠道`
- `清空`

不要让用户逐个点十几个平台才能购买全渠道。

---

# 13. Checkout / Price Summary

结算页不重复整个发行表单，只做确认。

```text
你的发行
3 首歌曲
12 个可发行渠道
服务期限 1 年

按量发行                ¥36

--------------------------------
全球发行订阅
¥XX/月 或 ¥XX/年
最多覆盖 50 首在架歌曲
如果当前选择订阅更划算 → 标记“更划算”

[按量支付 ¥36]
[选择全球发行]
```

系统负责替用户比较，不要求用户自己算。

---

# 14. Release Detail / Delivery Status

发行详情页是第二核心页面。

顶部：

```text
Cover
Release Name
Artist
UPC
总体状态
发行日期
```

中部重点：

## 渠道状态

```text
Spotify           已上线      09-18
Apple Music       已上线      09-18
QQ音乐            渠道处理中
网易云音乐         已交付
TIDAL             已上线      AI收益受限
Beatport          不适用      当前不可发行
```

推荐做成状态表 / List，不做复杂 Timeline 图。

状态优先级：

- 需要用户处理；
- 审核中；
- 已交付；
- 渠道处理中；
- 已上线；
- 被拒绝；
- 下架中；
- 已下架。

---

# 15. Dashboard

Dashboard 不做 BI 首页。

第一屏只回答：

> 我现在有什么需要处理？我的发行进行到哪了？

建议：

```text
你好，欢迎回来                 [ + 发行音乐 ]

需要处理  2
发行中    4
已上线   38

最近发行
...

当前订阅
全球发行 · 38 / 50 首
```

如果没有任何发行：

> Empty State 直接引导上传第一首音乐。

---

# 16. 收益页

MVP：

```text
累计收益
可提现收益
本期新增

趋势图

按渠道
按作品

收益记录

[提现]
```

不要第一版做复杂 Royalty BI / Attribution。

---

# 17. Billing / Subscription

用户必须一眼看清：

- 当前购买方式；
- 月付 / 年付；
- 当前 Active Track 使用量；
- 下次扣费日期；
- 自动续费状态；
- 按量订单历史；
- 发票 / Payment Records。

例如：

```text
全球发行
年付
38 / 50 首在架歌曲
下次续费：2027-09-09

[管理订阅]
```

不创建复杂 Usage Credit 概念。

---

# 18. 页面状态模型

原型不能只画 Happy Path。

首版必须至少覆盖：

## Release

- Draft；
- Preflight Failed；
- Awaiting Payment；
- Paid / Reviewing；
- Needs Fix；
- Approved；
- Delivering；
- Partially Live；
- Live；
- Rejected；
- Takedown Pending；
- Takedown Complete。

## Channel

- Eligible；
- Eligible with Disclosure；
- Monetization Restricted；
- Recommendation Restricted；
- Review Required；
- Not Eligible；
- Delivering；
- Live；
- Rejected。

## Subscription

- None；
- Active Monthly；
- Active Annual；
- Payment Failed；
- Cancel at Period End；
- Grace Period；
- Expired。

---

# 19. Design Component Architecture

## 19.1 Foundation

```text
Button
Icon Button
Input
Textarea
Select
Combobox
Checkbox
Radio Group
Switch
Badge
Tooltip
Popover
Dropdown
Dialog
Drawer
Tabs
Table
Card
Alert
Toast
Skeleton
Empty State
Upload
Progress
```

## 19.2 Domain Components

```text
DSP Logo
Channel Card
Channel Eligibility Badge
Channel Policy Notice
Release Status Badge
Delivery Status Row
Track Upload Card
Track Metadata Card
AI Disclosure Field
Rights Declaration
Price Calculator
Price Summary
Subscription Card
Active Track Meter
Release Summary Card
Earnings Summary
```

这些 Domain Components 应从第一版 Prototype 起就按可复用组件设计，而不是写死在页面里。

---

# 20. 前端落地原则

由于原型可能直接进入研发，首版 Prototype 不建议继续使用孤立静态 HTML 作为最终形态。

推荐直接建立：

```text
Next.js
TypeScript
Tailwind CSS
shadcn/ui / Radix primitives
Lucide Icons
```

目录建议：

```text
app/
  (marketing)/
    page.tsx
    pricing/
    stores/
  app/
    page.tsx
    releases/
    catalog/
    earnings/
    billing/

components/
  ui/
  marketing/
  release/
  channel/
  billing/

lib/
  mock-data/
  channel-policy/
  pricing/
```

Prototype 阶段使用 Mock Data，但接口边界按后续真实 API 设计。

---

# 21. 第一批原型范围

第一轮不要一次把所有页面做完。

优先做 3 个页面，并通过它们锁视觉和交互语言：

## P1 官网首页

验证：

- 品牌方向；
- Hero；
- DSP Marquee；
- 产品 UI Visual；
- 整体 2026 AI-native / Music SaaS 感。

## P2 Pricing

验证：

- 按量 + 订阅模式是否一眼能懂；
- 月付 / 年付；
- 国内 / 全球；
- 价格 Calculator。

## P3 新建发行

验证：

- 整个产品操作语言；
- Upload；
- Metadata；
- AI Declaration；
- Channel Eligibility；
- Price Summary。

这三个页面确认后再扩展：

```text
Dashboard
Release List
Release Detail
Checkout
Earnings
Billing
```

---

# 22. 第一版设计判断

第一版明确不走：

```text
传统版权公司官网
传统 ToB 管理后台
DistroKid 的强娱乐化视觉
FOMG 的资产管理系统视觉
紫色 AI SaaS
Chatbot 首页
```

第一版要做到：

> **像一个今天刚发布的全球音乐科技产品，同时用户一进来就知道“这里是用来发行音乐的”。**

视觉上以蓝色、白色、深色产品 Surface 为主；通过真实 DSP Logo、真实 Release Builder、Eligibility 状态和 Delivery Status 构成产品辨识度。

---

# 23. 下一步

基于本 Foundation，下一步直接进入 Code Prototype 第一轮：

1. Homepage v0.1；
2. Pricing v0.1；
3. New Release v0.1；
4. 复用现有看见品牌 Logo 与 DSP Logo；
5. 用真实 Channel Catalog Mock 数据展示 Eligibility。

第一轮目标不是“功能齐全”，而是：

> **锁定视觉方向 + 锁定三个最重要的用户认知与操作页面。**
