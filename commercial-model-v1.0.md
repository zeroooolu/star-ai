# AI 音乐发行 / 自助发行商业模式 v1.0

> 日期：2026-09-09  
> 状态：Phase 2 商业模式设计稿  
> 产品名称：现阶段继续使用「AI 音乐发行」  
> 产品本质：面向 AI 时代的付费自助音乐发行平台，不人为拆分 AI 音乐与普通音乐

---

# 1. 最终商业结论

AI 音乐发行不采用星球发行的合作发行 / Revenue Share 模式，也不直接复制 DistroKid 的低价 Unlimited。

推荐商业模型：

> **Track-Year 按量付费 + Channel Pack + Service Term + Volume Discount + Add-on**

即：

```text
一个 Track
× 选择的渠道范围
× 在架服务期限
+ 可选增值服务
= 订单价格
```

平台的核心收入不再来自版税抽成，而来自：

1. 新增作品发行服务费；
2. 已发行作品持续在架 / 续期费；
3. 不同渠道范围产生的渠道服务费；
4. 高频客户的预付批量包；
5. 加急、修改、权利审核、Content ID 等 Add-on。

标准数字发行收益原则上 100% 归用户；平台不因为用户作品成功而自动提高分成比例，也不因为用户作品低收入而承担无限期免费托管成本。

---

# 2. 产品边界

## 2.1 服务什么用户

核心用户：

- AI 音乐创作者；
- 独立音乐人；
- 高频创作者；
- 小型工作室；
- 小型厂牌；
- 不适合进入星球发行合作发行体系、但有明确自助发行需求的用户。

允许普通音乐使用。

用户不需要先判断自己属于“AI 音乐用户”还是“传统音乐用户”。

AI 只是 Release / Track 的合规属性之一。

---

## 2.2 平台卖的是什么

平台卖的是标准化发行服务：

- 上传与 Metadata 建档；
- AI / Rights Declaration；
- 自动与人工审核；
- ISRC / UPC；
- DSP 渠道选择；
- Delivery；
- 上线状态跟踪；
- 在架维护；
- 标准报表；
- 收益记录；
- 提现 / 结算。

不是：

- 签约合作；
- 厂牌式 A&R；
- 专属发行经理；
- 人工 DSP 资源争取；
- 宣传投放；
- Playlist Pitching；
- Publishing Administration；
- Sync；
- 定制商务分成。

这些能力应继续属于星球发行 Plus、音乐营销产品或独立增值服务。

---

# 3. AI 与普通音乐不做两套商品

## 前台原则

不设置：

```text
AI 音乐发行套餐
普通音乐发行套餐
```

而是统一：

```text
音乐发行
  ↓
上传作品
  ↓
内容 / AI / Rights Declaration
  ↓
计算 Channel Eligibility
  ↓
选择可发行渠道
  ↓
购买服务
```

AI 属性影响：

- 是否需要披露；
- 是否需要证明材料；
- 是否可进入某 DSP；
- 是否可进入 UGC / Content ID；
- 是否触发人工审核；
- 是否触发上传频率限制。

AI 属性原则上不直接产生“AI 加价”。

---

# 4. 为什么不复制 Unlimited

2026 年主流海外发行产品大量使用年度 Unlimited：

- DistroKid：年费 + Unlimited + Artist Profile 分层 + Album Extras；
- TuneCore：Unlimited Plan，同时保留 Pay-per-release；
- Ditto：年费 + Unlimited + Artist 数量分层；
- UnitedMasters：年费 + Unlimited + 高阶服务；
- Amuse：年费 + Unlimited；
- LANDR：年费 + Unlimited / Studio Bundle。

但是这些产品的 Unlimited 主要建立在传统音乐人的平均发行频率之上。

AI 时代如果直接开放低价 Unlimited，会出现：

- 单账号短周期几十、几百首上传；
- 审核成本与订阅收入脱钩；
- DSP rejection 与 penalty 风险累积；
- 长期存储 / Delivery / Report / Takedown 成本累积；
- 内容农场用正常独立音乐人的价格购买工业化发行能力。

因此 AI 音乐发行的商业原则是：

> **新增内容规模必须与平台收入正相关。**

行业也已经开始对 AI 内容增加限制。DistroKid 允许 AI 音乐，但要求拥有完整权利、禁止冒充和 mass-generated spam；Amuse 当前 Terms 规定单账号在任意滚动 7 天内不得上传超过 10 个包含 AI 生成录音的 Release，除非平台另行允许。

所以本产品从商业模型上就不应该制造“发得越多，边际价格越接近 0”的激励。

---

# 5. 核心计费单位：Active Track-Year

内部统一定义：

> **1 Active Track-Year = 1 首 Track 在购买的 Channel Pack 中获得 1 年发行与在架服务。**

这是本产品最重要的计量单位。

它解决三个问题：

1. 单曲和 20 首专辑不再被当成相同成本；
2. 高频 AI 创作者的收入与内容规模同步增长；
3. 长期在架成本通过续期自然覆盖。

用户侧不需要看到“ATY”缩写，可以直接看到：

```text
3 首歌 × 全球发行 × 1 年
```

---

# 6. 推荐首发价格

## 6.1 Channel Pack

首期不要按每一个 DSP 单独标价，避免用户面对几十个平台逐个计算价格。

建议使用渠道包：

| 渠道商品 | 建议价格 | 说明 |
|---|---:|---|
| 中国流媒体包 | ¥29 / Track / 年 | 当前符合资格的中国大陆主流音乐 DSP |
| 海外流媒体包 | ¥29 / Track / 年 | 当前符合资格的海外主流 Streaming / Download DSP |
| 全球发行包 | **¥49 / Track / 年** | 中国 + 海外标准 DSP，作为主推商品 |
| 特殊渠道 / 特殊权利能力 | Add-on | 例如特殊 Genre Store、UGC Rights、Content ID 等 |

渠道包内的 DSP 使用动态 Channel Catalog 管理。

用户购买的是“该渠道包中当前符合其作品资格的发行能力”，而不是保证某一个 DSP 永远接受所有内容。

### 为什么主推 ¥49

它在低频用户侧仍然是低门槛：

- 1 首 / 年：¥49；
- 3 首 / 年：¥147；
- 5 首 / 年：¥245。

但当用户进入 AI 高频生产规模时，平台收入会同步增加，不会出现几十元年费支撑数百首 Track 的问题。

---

## 6.2 服务期限

首期提供：

| 服务期限 | 全球发行包建议价 / Track | 折算 |
|---|---:|---:|
| 1 年 | ¥49 | 1.0x |
| 3 年 | ¥119 | 约 2.43x |
| 5 年 | ¥169 | 约 3.45x |

中国流媒体包 / 海外流媒体包按同样折扣逻辑计算。

### 暂不提供“永久在架”

原因：

- 没有 Revenue Share 作为长期成本补偿；
- AI 内容规模增长速度不可预测；
- DSP 政策可能长期变化；
- “永久”会形成难以退出的服务义务。

未来如果验证长期成本足够低，可以增加 Legacy / Long-term Add-on，但不要在 MVP 承诺永久。

---

# 7. 高频用户：Volume Pack，而不是 Unlimited Subscription

MVP 不建议立刻推出 Creator / Pro / Studio 三档 Unlimited 会员。

高频用户通过预付批量包获得折扣：

| 年度预付量 | 建议折扣 | 适合用户 |
|---|---:|---|
| 1–9 Track-Year | 原价 | 低频音乐人 |
| 10–49 Track-Year | 9 折 | 高频 Creator |
| 50–199 Track-Year | 8 折 | Studio / 小厂牌 |
| 200+ Track-Year | 7 折起 | Volume Account，需风控等级审核 |

规则：

- 额度有效期 12 个月；
- 不无限结转；
- 购买额度不等于解除上传速度限制；
- 高风险账号仍可进入 Review / Hold；
- 大客户可预付更多额度，但仍然按实际 Track 消耗。

这样同时获得：

- 预付现金流；
- 高频客户折扣；
- 可预测的发行规模；
- 不承担 Unlimited 的尾部风险。

---

# 8. 续费是核心收入，而不是附属功能

每个 Track 都有：

```text
service_start_at
service_end_at
auto_renew
renewal_price
channel_pack
```

推荐规则：

1. 服务期从首次成功 Delivery 开始计算，而不是从付款时开始；
2. 到期前 30 / 7 / 1 天提醒；
3. 用户可开启自动续费；
4. 到期后提供 30 天 Grace Period；
5. Grace Period 后仍未续费，进入停止服务 / Takedown 流程；
6. 用户之后重新恢复，需要支付 Re-activation / Re-delivery 成本。

本产品长期 LTV 的关键不是“不断卖新歌”，而是：

> **Active Catalog 每年产生续期收入。**

这是比传统会员更适合 AI 时代的 recurring revenue。

---

# 9. Add-on 商业化

## 9.1 发行操作类

| Add-on | 建议首发价 |
|---|---:|
| 加急审核 | ¥19 / Release |
| 指定发行日期保障 | ¥19 / Release |
| 上线后 Metadata 修改 | ¥19 / Release |
| 音频替换 / 重新交付 | ¥19 / Track |
| 恢复已到期内容 | ¥19 / Release + 新服务期 |

## 9.2 内容工具类

可后续接入：

- AI Metadata 优化；
- 封面规范检查 / 生成；
- 歌词格式化与翻译；
- Mastering；
- Loudness / Audio Compliance 检查。

这些产品按 Track 或按任务收费。

## 9.3 权利与合规类

| Add-on | 建议方向 |
|---|---|
| 人工权利材料预审 | ¥49 / Release 起 |
| AI Voice / Persona 材料预审 | ¥49 / Release 起 |
| Cover / 特殊授权处理 | 按实际第三方成本 + 服务费 |

标准审核已经包含在基础发行费中。

只有用户明确需要额外专业审核、授权代办或材料处理时才收费。

---

# 10. UGC / Content ID 不塞进基础发行

YouTube Content ID、Meta Rights Manager 等属于不同于标准 DSP Streaming 的权利运营能力。

首期建议：

- 标准发行订单不默认包含 UGC Monetization；
- 只有符合权利条件的 Track 才展示可购买入口；
- 做成独立 Rights Monetization Add-on；
- 商业模式优先使用年度固定服务费；
- 如果第三方链路本身只能按 Commission 合作，再明确单独披露 Commission。

不要把 UGC 的抽成反向扩散成整个 AI 音乐发行的版税分成模式。

---

# 11. 收益与提现规则

基础原则：

> **标准 DSP 数字发行收入 100% 归用户。**

平台收入来自 Service Fee。

允许从用户可提现收益余额中支付：

- 新发行订单；
- 续费；
- Add-on；
- Volume Pack。

这与 Ditto 等产品允许用版税余额支付订阅费的逻辑类似，也能显著提升续费成功率。

第三方支付、跨境汇款、税费等真实外部成本应单独透明处理，不包装为版税 Commission。

---

# 12. 审核失败与退款规则

为避免用户对“付款后被拒”产生严重体验问题，付款前应尽量完成自动 Preflight。

推荐：

```text
上传
→ 自动格式检查
→ AI / Rights Declaration
→ 基础风险检查
→ Channel Eligibility
→ 显示最终可购渠道与价格
→ 支付
→ 正式审核
```

支付后的规则：

- Metadata / 格式问题：允许至少 1 次免费修正；
- 平台政策原因导致单个渠道不可发行：继续完成其他已购且可发行渠道；
- 全部目标渠道均不可发行且用户无违规：退回服务余额 / 原路退款；
- 权利虚假声明、冒充、侵权、欺诈、批量 spam：可拒绝且不退审核与处理成本；
- 反复违规账号：暂停自助发行资格。

---

# 13. AI 时代必须内建的商业风控

风控不是“后台审核功能”，而是商业模型成立的前置条件。

至少包括：

- 每账号 / 主体 rolling upload limit；
- 每日 / 每周 Release 限制；
- 相同 / 高度相似音频检测；
- 同模板批量 Metadata 检测；
- Artist impersonation 检测；
- AI Voice 风险；
- Rights Declaration；
- Provider / Model 信息（按需要记录）；
- Channel Eligibility；
- DSP rejection / complaint history；
- 账号 Risk Tier；
- Volume Pack 解锁与 Risk Tier 联动。

即使用户购买了 200 Track-Year，也不代表可以在一天内把 200 首内容全部送进 DSP。

---

# 14. 与星球发行的商业边界

| 维度 | AI 音乐发行 | 星球发行 |
|---|---|---|
| 商业关系 | 标准服务购买 | 合作发行 |
| 收费 | Track-Year / Channel / Term | Revenue Share + Tier / Add-on |
| 标准版税 | 100% 归用户 | 按合作条件分成 |
| 是否筛选客户 | 风控准入 | 商务 / 合作准入 |
| 人工服务 | 最小化、标准工单 | Pro / Plus 有更高服务等级 |
| DSP 资源 | 标准化可发行渠道 | 可包含更强商务和资源能力 |
| Marketing | 单独购买 | Plus 可有战略权益 |
| A&R / 专属经理 | 不提供 | Plus / Partnership 可提供 |

如果某个自助用户的收入、品牌价值或合作潜力达到一定阈值，可以由系统推荐进入星球发行合作评估，但不自动改变其现有作品的商业条款。

---

# 15. 与行业竞品的关系

| 产品 | 主要模式 | 对我们的启发 |
|---|---|---|
| DistroKid | 年费 Unlimited + Add-on | Add-on、年度持续服务值得借鉴；Unlimited 不适合直接复制 |
| TuneCore | Unlimited + Pay-per-release 双轨 | 证明按发行收费仍然成立 |
| Ditto | 年费 Unlimited + Artist 数量 | 版税余额续费值得借鉴 |
| CD Baby | 一次性 Release Fee + Revenue Share | 每次新增内容直接产生收入，适合低频用户 |
| Amuse | 年费 Unlimited + AI 上传限制 | AI 内容必须设置速度与风险阀门 |
| UnitedMasters | 年费标准层 + 邀请制高端合作 | 自助客户与 Partnership 客户应是两种经济模型 |
| LANDR | 年费发行 + 创作工具生态 | 未来可通过 Mastering / AI 工具提高 ARPU |

我们的差异不是做一个更便宜的 DistroKid，而是：

> **把 AI 时代真正稀缺的发行能力、渠道资格、持续在架和合规能力，做成清晰可计量的自助服务。**

---

# 16. 推荐首发 SKU

MVP 首期只需要以下 SKU：

```text
1. 中国流媒体包：¥29 / Track / 年
2. 海外流媒体包：¥29 / Track / 年
3. 全球发行包：¥49 / Track / 年
4. 全球发行 3 年：¥119 / Track
5. 全球发行 5 年：¥169 / Track
6. 10 / 50 / 200 Track-Year Volume Pack
7. 加急审核：¥19 / Release
8. Metadata 修改：¥19 / Release
9. 音频替换 / Re-delivery：¥19 / Track
10. 权利材料预审：¥49 / Release 起
```

首期不要同时上：

- Unlimited；
- 五六档会员；
- 永久在架；
- 复杂版税 Commission；
- AI / 非 AI 双价格；
- 每个 DSP 单独定价；
- 宣传套餐与发行套餐强绑定。

---

# 17. 后续验证指标

上线后 3–6 个月重点看：

1. 平均每用户年度 Track 数；
2. AI / 非 AI Track 占比；
3. 单 Track 审核人工分钟；
4. 单 Track DSP rejection rate；
5. 每 Track-Year 实际基础设施 + 运营成本；
6. 中国 / 海外 / 全球发行包购买比例；
7. 1 年 / 3 年 / 5 年服务期占比；
8. Volume Pack 使用率；
9. 续费率；
10. Add-on attach rate；
11. Support Case / Track；
12. Fraud / Spam / Copyright complaint rate；
13. Gross Margin / Active Track-Year。

当数据证明高频用户的平均使用量和成本足够稳定以后，再决定是否推出：

- Creator Annual Plan；
- Studio Annual Plan；
- Long-term / Legacy；
- UGC Rights Monetization；
- API / Batch Upload。

---

# 18. 最终一句话

> **AI 音乐发行不是卖一个“会员身份”，而是在卖可持续的音乐发行容量。**

它最适合的商业单位不是 Artist / Account，也不是 Unlimited Release，而是：

> **Track × Channel × Time。**

这让低频音乐人仍然可以低门槛发行，也让高频 AI 时代的内容规模与看见音乐的收入、成本和风险始终保持同向增长。

---

## 主要行业参考（2026-09-09）

- DistroKid Pricing: https://distrokid.com/pricing/
- DistroKid AI Upload Policy: https://support.distrokid.com/hc/en-us/articles/41182362733715-Can-I-Upload-Music-Made-With-AI-Tools-to-DistroKid
- TuneCore Pricing: https://www.tunecore.com/pricing
- Ditto Music Pricing: https://dittomusic.com/en/pricing
- CD Baby Pricing: https://support.cdbaby.com/hc/en-us/articles/213125406-How-much-does-CD-Baby-cost
- UnitedMasters Pricing: https://comms.unitedmasters.com/en/pricing
- Amuse Distribution / Terms: https://www.amuse.io/en/distribution/ and https://www.amuse.io/en/resources/terms-of-use/
- LANDR Distribution Pricing: https://support.landr.com/hc/en-us/articles/31618416509975-How-much-does-it-cost-to-distribute-music-with-LANDR
