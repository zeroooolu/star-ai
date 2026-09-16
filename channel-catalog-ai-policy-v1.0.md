# AI 音乐发行：渠道目录与 AI Policy Matrix v1.0

> 日期：2026-09-09  
> 状态：Phase 2 商业模式 / 渠道策略输入  
> 适用产品：AI 音乐发行 / 自助发行  
> 说明：本文件记录当前业务侧掌握的渠道可发行性、交付方式、AI 政策、收益和推荐限制。渠道政策会持续变化，正式交付前仍需以看见与 DSP / SP 的实际合作协议、渠道通知及技术规范为准。

---

# 1. 为什么渠道规则必须独立建模

AI 音乐发行不能只用一个 `SUPPORTED / NOT_SUPPORTED` 字段描述渠道。

对 AI 内容而言，至少存在四个互相独立的事实：

1. **Delivery Eligibility**：能不能交付 / 上架；
2. **Monetization Eligibility**：上架后是否参与版税 / 版权收益结算；
3. **Recommendation Eligibility**：是否可以进入算法推荐、编辑推荐或推荐池；
4. **Disclosure Requirement**：是否需要向渠道申报 AI 使用情况、AI Persona、AI Contributor 等信息。

另外还要单独记录：

- Delivery Mode：DDEX / CSV / SP / Offline / Manual；
- Capacity：日 / 周 / 批次上限；
- MV Eligibility；
- Red Flags；
- Policy Confidence：官方明确 / 历史案例 / 待渠道确认。

因此前台的“可发行渠道”必须由 Channel Catalog + Release AI Declaration 动态计算，而不是写死一个渠道列表。

---

# 2. 建议 Channel Eligibility 数据结构

每个 Channel 至少维护：

```text
channel_id
channel_name
region
standard_audio_delivery
ai_full_generated_delivery
ai_assisted_delivery
delivery_mode
capacity_policy
monetization_policy
recommendation_policy
ai_disclosure_policy
mv_delivery
red_flags
policy_confidence
last_verified_at
notes
```

用户最终看到的不是这些技术字段，而是清晰状态：

```text
可发行
可发行 · 需要 AI 声明
可发行 · 不参与推荐
可发行 · 不参与收益结算
需要额外审核
当前暂不支持
待渠道确认
```

---

# 3. 国内渠道

| 渠道 | DDEX | 当前可上架情况 | AI 规则 / 收益 / 推荐 | MV | Delivery / Capacity | 红线 / 备注 |
|---|---|---|---|---|---|---|
| **TME（QQ音乐 / 酷狗 / 酷我）** | ✅ | 能 | 需要告知 AI 内容；AI 内容无收益、无推荐池；连续 3 首相似度 ≥60% 判定低质，会进行隐藏处理 | 可，但线下人工处理 | DDEX；日传输量超过 500 首会卡在渠道曲库，需要渠道人工处理 | 低质同质、未标识、AI 克隆真人声线、蹭热歌名与知名艺人 |
| **网易云音乐** | ✅ | 能 | 支持优质 AI 原创音乐；检测发现或用户主动声明包含 AI 的内容，会在交互界面显性标识；AI 标识当前处于小范围测试阶段 | 可，但线下人工处理 | DDEX；最大处理量暂不确定，大概率存在渠道容量限制 | 需持续跟踪 AI 标识及供应链政策 |
| **汽水音乐** | ✅ | 能 | 支持优质 AI 原创音乐；指纹相似度 >60% 下架 | 可，但线下人工处理 | DDEX；最大处理量暂不确定，大概率存在渠道容量限制 | 高相似度内容为主要风险 |
| **番茄音乐** | ✅ | 能 | 支持优质 AI 原创音乐 | 否 | DDEX；最大处理量暂不确定，大概率存在渠道容量限制 | - |
| **华为音乐** | ✅ | 能 | 暂未见公开 AI 内容专属条款 | 否 | DDEX；日传输量过大时会卡在渠道曲库，具体数量未确定，需要渠道人工处理 | AI 规则待进一步确认 |
| **咪咕音乐** | ❌ | 能 | 支持优质 AI 原创音乐 | 能，但线下人工处理 | **非标准 DDEX**；批量传输走离线硬盘交付，每批硬盘不超过 20,000 首 | 不能按普通在线 DDEX 渠道等价计入标准 Delivery 成本 |
| **阿里音乐** | ✅ | 能 | 暂未见公开 AI 内容专属条款 | 否 | DDEX；最大处理量暂不确定，大概率存在渠道容量限制 | AI 规则待进一步确认 |
| **KKBOX** | ✅ | 能 | 暂未见公开 AI 内容专属条款 | 否 | DDEX；最大处理量暂不确定，大概率存在渠道容量限制 | AI 规则待进一步确认 |

## 3.1 国内渠道的直接产品结论

### TME

TME 对 AI 音乐的特殊性非常强：

```text
可交付 / 可上架
≠
可产生收益
≠
可进入推荐
```

因此当用户提交属于 TME 当前“无收益、无推荐池”范围的 AI 内容时，前台必须明确展示，而不能只显示“支持 QQ 音乐 / 酷狗 / 酷我”。

### 咪咕

咪咕虽然可以发行，但当前交付方式为线下硬盘批量交付，不属于标准自助 DDEX 能力。

商业上有三种选择：

1. 首期不放入默认中国标准渠道包；
2. 放入渠道包但设置更长 SLA，并由平台做批次聚合；
3. 后续作为 `Extended China Pack` / 特殊交付能力。

MVP 更推荐 **1 或 2**，不应将其视为与普通 DDEX 渠道完全等价的实时发行能力。

### MV

国内目前 TME、网易云、汽水、咪咕的 MV 都需要线下 / 人工处理。

因此：

> **MV 不进入基础 Audio Track-Year 商品。**

如果后续开放 MV 自助发行，应单独建立 `Video Distribution` 商品、价格和 SLA。

---

# 4. 海外渠道

| 渠道 | 纯 AI 音乐可发行 | 收益 / 结算 | 推荐 / 曝光 | 主要前提与限制 |
|---|---|---|---|---|
| **Amazon Music** | 实际存在并可上架，但官方尚未公布明确纯 AI 音乐交付政策 | 暂未公布针对纯 AI 音乐取消或降低版税；已正常接收内容原则上按供应商授权协议结算 | 暂无公开 AI 特殊降权 / 推荐排除规则 | 必须拥有合法发行和商业使用权；不得侵权、冒充艺人或流量操纵；正式 B2B 准入仍建议向实际 SP / Amazon Music 渠道负责人确认 |
| **Apple Music** | 可以；Apple 已明确允许 AI 平台生成音乐进入平台 | 暂未公布针对纯 AI 音乐单独取消或降低版税；合规播放按正常授权协议处理 | 暂无“纯 AI 内容统一降权”公开规则；编辑推荐仍以人工策划为核心 | 必须拥有发行和商业使用权；不得误导、冒充艺人或刷量；Apple 已上线 AI 透明度标签，可标识录音、词曲、封面、MV 中的 AI 使用，当前技术字段仍为可选但未来将逐步要求申报实质性 AI 使用 |
| **Bandcamp** | **不可以**；全部或实质性部分由 AI 生成的音乐及音频禁止上传 | 不适用 | 不适用 | 禁止全部或实质性部分 AI 生成音乐；禁止用 AI 模仿其他艺人或其风格；平台保留下架疑似严重依赖生成式 AI 内容的权利 |
| **Beatport** | **不可以**；完全或主要由 AI 生成的音乐禁止上架 | 不适用 | 不适用，接收阶段即被拦截 | AI 辅助创作可以接受，但最终成品必须以人类创作为主体；发行会被标记供 Beatport 策划团队参考 |
| **Deezer** | 可以 | 真实、合规播放仍可参与版税；刷量播放不参与结算 | **纯 AI 音乐明确排除算法推荐和编辑歌单** | 自动检测并标记纯 AI 音乐；流量欺诈内容会被下架；连续至少 6 个月无播放的 AI 曲目也可能被下架 |
| **Meta（Facebook / Instagram）** | 平台允许 AI 内容，但纯 AI 音乐通过正式音乐目录供应链是否无条件接受，公开政策尚未明确 | 暂无公开“纯 AI 音乐不参与音乐版权结算”政策；具体依赖 Meta 与供应商的授权协议和交付资格 | AI 标签本身暂无统一降权规则；更重点限制非原创、重复、垃圾内容和冒充 | 需拥有录音、词曲及商业使用权；不得未经授权克隆 / 冒充真实艺人；真实感较强 AI 音频需按要求披露；B2B Music Library 准入建议向实际 SP / Meta 确认 |
| **Qobuz** | **不可以新交付 100% AI 生成内容** | **识别为 AI 生成的内容排除在版税报告和支付之外** | AI 内容不进入 Qobuz Discover；编辑推荐全部人工策划 | 供应商合同已加入禁止交付 100% AI 内容条款；同时对已有目录进行 AI 检测和异常播放治理 |
| **SoundCloud（经 AudioSalad）** | 待 AudioSalad / SoundCloud 确认 | 待确认 AI 内容特殊限制；普通供应链内容在有效商业授权下可参与变现 | 暂无外部分销商交付纯 AI 音乐的公开推荐政策 | 看见经 AudioSalad 交付，应以 AudioSalad 与 SoundCloud B2B 协议为准 |
| **Spotify** | 可以 | 可以结算，遵循正常版税及有效播放规则 | 纯 AI 录音本身不会仅因 AI 制作自动降权；**AI Persona 默认不进入编辑推荐和算法推荐**；AI Persona 标签计划自 2026 年 9 月中旬开始显示 | 必须拥有合法发行及商业使用权；不得未经授权克隆真实艺人的声音 / 身份；不得冒用艺人页面；禁止批量灌库、低质量重复、关键词操纵及刷量；支持披露 AI 人声、器乐、制作等信息 |
| **TIDAL** | 可以 | **被识别为 100% AI 生成的录音不参与版税分配** | AI 录音会被标记；用户可关闭 AI 内容，关闭后也会从个性化推荐中移除 | 分销商需要识别和申报 AI 内容；禁止未经授权模仿真实艺人的声音、姓名、肖像或身份；禁止误导、刷量和异常大批量上传 |
| **TikTok** | 平台允许 AI 音频 / 内容；分销商交付 100% AI 音乐目录的公开政策尚未明确 | 暂无纯 AI 音乐统一取消结算的公开政策；实际依赖 TikTok 与分销商 / SP 的音乐授权协议 | AI 标签本身不会影响分发；平台加强识别 AI 垃圾内容、批量生成和未经授权 AI 音乐 | 需拥有完整商业使用及发行权；真实感较强 AI 音频需标注；禁止克隆 / 模仿真实人物或艺人、侵权、冒充、刷量及批量低质内容；B2B 准入与结算建议向实际 SP 确认 |
| **Yandex** | 可以 | 合规播放可以结算；AI 标识本身不会取消变现资格 | **AI 标识会影响算法推荐权重**；用户可开启“减少 AI 内容”，降低个性化推荐频次 | 必须通过 DDEX / CSV 如实提交 AI 标记；AI 艺人统一使用 `GenerativeAI` 填入 Contributor / SpecialContributor，不可设为 DisplayArtist，也不能使用 Suno、Udio 等工具名作为艺人名；未申报时平台可依据检测结果直接打标 |
| **YouTube Music** | 可以；官方音乐交付规范支持 `Fully Gen AI` | 合规播放可以结算；AI 标识本身不会取消变现资格 | AI 标识本身不影响推荐；搜索、观看、跳过、互动等仍是主要推荐信号；垃圾、重复、批量自动生成内容可能被限制 | DDEX / CSV 应申报 `Fully Gen AI`、`Partially Gen AI` 或未使用生成式 AI；必须拥有录音及音乐权利；禁止冒充、侵权、欺诈和人工流量 |

---

# 5. 海外渠道的直接产品结论

## 5.1 “全球发行包”不能等于“所有海外 DSP”

纯 AI 音乐存在明确不接收渠道：

- Bandcamp；
- Beatport；
- Qobuz（100% AI 新交付）。

因此全球包的产品定义必须是：

> **向该 Release 当前符合资格的全球标准渠道进行发行。**

而不是：

> “保证发行到所有全球平台”。

用户付款前应先完成 Eligibility Preflight，然后显示实际可发行渠道。

## 5.2 可发行不等于可变现

典型例子：

- TIDAL：100% AI 生成录音可发行，但不参与版税分配；
- TME：当前 AI 内容可交付，但按现有规则无收益；
- Qobuz：AI 内容存在交付与版税双重限制。

因此订单确认页必须对 `NO_MONETIZATION` 渠道进行显著提醒。

## 5.3 可变现不等于可推荐

典型例子：

- Deezer：纯 AI 音乐不进入算法推荐与编辑歌单；
- Spotify：AI Persona 默认不进入编辑 / 算法推荐；
- Yandex：AI 标识会降低算法推荐权重；
- TME：AI 内容当前无推荐池。

因此“发行成功”与“平台会推广 / 推荐作品”必须在用户预期上彻底分开。

---

# 6. 推荐的 Eligibility 枚举

单一状态不足以表达真实规则，建议拆成独立维度。

## 6.1 Delivery

```text
SUPPORTED
SUPPORTED_WITH_DISCLOSURE
REVIEW_REQUIRED
SP_CONFIRMATION_REQUIRED
NOT_SUPPORTED
```

## 6.2 Monetization

```text
MONETIZABLE
NON_MONETIZABLE
CONDITIONAL
UNKNOWN
```

## 6.3 Recommendation

```text
NORMAL
LIMITED
EXCLUDED
USER_OPT_OUT_AFFECTED
UNKNOWN
```

## 6.4 Delivery Mode

```text
DDEX
CSV
SP_API
MANUAL
OFFLINE_BATCH
```

这样一个纯 AI Release 在不同渠道可以表现为：

```text
Spotify
Delivery = SUPPORTED_WITH_DISCLOSURE
Monetization = MONETIZABLE
Recommendation = LIMITED (AI Persona 时)

TIDAL
Delivery = SUPPORTED_WITH_DISCLOSURE
Monetization = NON_MONETIZABLE (100% AI)
Recommendation = USER_OPT_OUT_AFFECTED

Bandcamp
Delivery = NOT_SUPPORTED

咪咕
Delivery = SUPPORTED
Delivery Mode = OFFLINE_BATCH
```

---

# 7. 对 Channel Pack 商业模式的影响

现阶段仍可以保留：

```text
中国流媒体包
海外流媒体包
全球发行包
```

但 Channel Pack 应是一个**动态渠道集合**，而不是永久固定名单。

计价流程：

```text
上传 Track
  ↓
AI / Rights Declaration
  ↓
Channel Eligibility Engine
  ↓
计算每个渠道的 Delivery / Monetization / Recommendation 状态
  ↓
形成该 Track 的 Eligible Channel Set
  ↓
用户选择中国 / 海外 / 全球 Pack
  ↓
展示“本次实际包含渠道 + 重要限制”
  ↓
付款
```

### 商业原则

1. 因内容属性天然不支持的渠道，不单独退款，因为价格购买的是 Pack 服务，而不是逐渠道保证；
2. 但购买前必须透明展示实际 Eligible Channel Set；
3. 如果某个 Track 的可发行渠道数量低于最低 Pack 门槛，应阻止购买或降级报价；
4. `NON_MONETIZABLE` / `RECOMMENDATION_EXCLUDED` 渠道必须单独提示，不允许用“已支持”掩盖收益和流量限制；
5. 需要 SP / 渠道人工确认的渠道，不应在付款前承诺确定上线日期；
6. Offline / Manual 渠道应影响 SLA 和内部成本模型。

---

# 8. 对当前定价的进一步约束

当前商业模式中的建议价：

- 中国流媒体包：¥29 / Track / 年；
- 海外流媒体包：¥29 / Track / 年；
- 全球发行包：¥49 / Track / 年。

在有了真实 Channel Matrix 以后，这三个价格应继续作为**待成本验证价格**，而不是最终锁价。

下一步需要把渠道按成本分成：

```text
A. Standard DDEX Channel
B. DDEX + Manual Exception Channel
C. SP / Special Delivery Channel
D. Offline Batch Channel
E. Video / MV Manual Channel
```

然后验证每个渠道包实际包含的：

- 平均 Delivery 成本；
- Re-delivery 成本；
- 人工处理分钟数；
- 渠道异常率；
- Report / Settlement 成本；
- Policy maintenance 成本。

如果咪咕、MV 或某些海外 SP 渠道显著增加单位成本，可以通过：

- 从 Standard Pack 中拆出；
- Extended Pack；
- Add-on；
- 批量 SLA；

完成商业化，而不是把所有渠道成本平均摊进 ¥29 / ¥49。

---

# 9. 渠道政策维护机制

渠道政策是动态数据，不应永久写死在业务代码。

建议：

- 每个渠道记录 `last_verified_at`；
- 区分 `OFFICIAL_CONFIRMED / PARTNER_CONFIRMED / HISTORICAL_OBSERVED / UNKNOWN`；
- 每次 DSP / SP 政策更新生成 Policy Version；
- 已付款订单保留购买时的 Eligibility Snapshot；
- 新订单使用最新 Policy；
- 渠道政策变化影响存量内容时产生 Channel Policy Event；
- 如需下架 / 停止结算 / 补充声明，进入 Service Case。

这样未来渠道规则改变时，产品、运营、客服、结算都能基于同一套事实工作。

---

# 10. 当前渠道策略结论

> **AI 音乐发行卖的不是“保证上所有平台”，而是基于作品权利、AI 属性和实时渠道政策计算出来的标准化全球发行能力。**

用户购买前必须知道三个结果：

1. **能发到哪里；**
2. **哪些渠道有收益；**
3. **哪些渠道存在推荐 / 曝光限制。**

这三个事实共同构成 AI 时代发行产品真正的 Channel Eligibility。