# AI 音乐发行 / 自助发行商业模式 v0.1

> 状态：产品负责人讨论稿 / v0.1
> 
> 当前名称可以继续使用“AI 音乐发行”，但底层产品应定义为面向 AI 时代的付费自助发行平台，不把 AI 音乐与普通音乐做成两套发行系统。

## 1. 产品定位

面向：

- AI 音乐创作者；
- 独立音乐人；
- 小型创作团队；
- 不适合进入星球发行合作发行体系的自助客户。

产品核心不是“获得看见的合作发行服务”，而是：

> **用户为标准化发行服务付费，系统完成审核、交付、状态跟踪和收益管理。**

因此与星球发行的最大区别是商业关系：

- 星球发行：合作发行 / Revenue Share；
- 自助发行：Service Fee，不以版税分成为主要收费方式。

---

## 2. 首期不建议做 Unlimited AI Distribution

海外产品对 AI 内容正在增加：

- AI disclosure；
- impersonation 审核；
- spam / mass-upload 检测；
- 渠道级 eligibility；
- 短周期上传限制。

因此 AI 自助发行如果直接推出“每月几十元、无限发行”，极容易吸引内容农场，并造成：

- 审核成本失控；
- 存储成本失控；
- DSP rejection / penalty；
- 渠道账号风险；
- 大量低质量内容长期托管。

首期应始终保证：

> **每一个新增 Release 都有明确的边际收入，或者受到明确月度额度约束。**

---

## 3. 推荐商业模式：Pay-per-release 为主，Subscription 为辅

### A. 按发行付费

适合低频和第一次使用用户。

建议产品单位：

- Single；
- EP；
- Album。

价格不建议简单按“专辑”一个价格，因为 Track 数差异巨大。

可以定义：

- Single：1 Track；
- EP：2-N Tracks；
- Album：N+ Tracks；
- 超长专辑继续按 Track 增量收费。

每次购买包含：

- 一次标准审核；
- 标准 Metadata；
- 对应渠道发行；
- ISRC / UPC；
- 一定服务期限；
- 标准版税报表/收益管理。

### B. 订阅

面向高频 AI 创作者或制作团队。

**订阅必须有月度额度，不建议 Unlimited。**

例如产品结构可以是：

- Creator：每月 X Release Units；
- Creator Pro：每月 Y Release Units；
- Studio：每月 Z Release Units + 多 Artist Profiles。

未使用额度是否结转，需要后续评估；首期建议不无限累计。

---

## 4. Release Unit 建议

为了兼容单曲、EP、专辑和未来视频，不建议只使用“专辑数”。

内部可以使用：

> Release Unit + Track Unit

用户侧仍然以 Single / EP / Album 显示。

这样：

- 一个 1 首 Single 不会与 20 首 Album 等价；
- 成本模型更准确；
- 订阅额度更容易设计。

---

## 5. 服务期限必须产品化

AI 自助发行既然不采用长期 Revenue Share 覆盖成本，就需要明确作品持续托管和在架的商业规则。

建议首期提供：

### 1 年发行服务

购买后包含 1 年：

- DSP 在架维护；
- Metadata 记录；
- 必要发行资产托管；
- 报表和收益记录。

到期后：

- 自动续费；或
- 用户购买续期；或
- 设置合理 Grace Period 后执行停止服务流程。

未来可增加：

### 长期在架 Add-on

一次性购买长期维护服务，类似海外的“永久保留/Legacy”逻辑。

这比默认永久免费托管更适合 AI 内容规模快速膨胀的时代。

---

## 6. 渠道不建议简单做“一个价格发全部平台”

AI 内容的渠道接受度会持续变化。

建议把渠道抽象成 Channel Eligibility，而不是硬编码为“AI 能发 / 不能发”。

每条 Release 在提交时计算：

```text
Content Declaration
  ↓
Rights / AI Risk Check
  ↓
Channel Eligibility
  ↓
用户可选择渠道
  ↓
Pricing
```

### Channel Eligibility 状态建议

- `SUPPORTED`：正常支持；
- `SUPPORTED_WITH_DISCLOSURE`：需要 AI disclosure；
- `NO_UGC_MONETIZATION`：可以上架，但不支持 Content ID / UGC monetization；
- `REVIEW_REQUIRED`：需要额外审核/权利证明；
- `NOT_SUPPORTED`：当前不支持。

这样 DSP 政策改变时不需要重做产品模型。

---

## 7. AI Declaration 必须从第一版进入数据模型

不要只问：

> “这是不是 AI 音乐？”

建议参考当前行业方向，记录：

- Lyrics 是否 AI Generated；
- Composition 是否 AI Generated；
- Vocal 是否 AI Generated；
- Instrumental / Audio 是否 AI Generated；
- 是否全部生成；
- Artist Identity 是否 AI Persona；
- 是否使用真实人物/艺人声音；
- 是否有授权证明；
- 使用的 AI Provider / Model（可选或按渠道要求）；
- Rights Declaration。

这可以支持未来 DDEX / DSP 的 AI credit disclosure。

---

## 8. 首批 Add-on 建议

### 发行类

- 加急审核；
- 指定发行日期保障；
- 更多渠道包；
- 长期在架；
- Metadata 修改服务。

### 内容类

- AI Metadata 优化；
- 封面生成/规范检查；
- 歌词处理；
- Mastering；
- 音频合规检查。

### 权利/合规类

- 人工权利审核；
- 特殊版权材料审核；
- AI Voice / Cover 授权材料检查。

### 宣发类

宣传推广继续接独立 Music Marketing 产品，而不是内置成发行成本。

---

## 9. 版税模式

首期建议保持产品定义简单：

> 用户支付发行服务费，标准数字发行收益归用户；看见不再以星球发行式的合作分成为核心商业模式。

特殊收入类型（UGC、Publishing、Sync 等）如果本身存在额外第三方成本，可以单独定义服务费或 Commission，但不要模糊基础数字发行的产品承诺。

---

## 10. 反滥用机制

AI 自助发行从第一版就应该有：

- 每账号 / 每主体上传速度限制；
- 月度 Release Unit 上限；
- 重复音频检测；
- 相似/冒用艺人检测；
- 异常批量 Metadata 检测；
- Rights Declaration；
- AI Voice impersonation 风险检测；
- DSP rejection / complaint 风险评分；
- 高风险账号人工审核。

这不是附加功能，而是自助发行商业模型能够成立的基础设施。

---

## 11. 首期推荐的产品形态

不建议第一版同时推出太复杂的五六档订阅。

更适合 MVP 的结构：

### Casual / 按次

- Single
- EP / Album

### Creator Subscription

- 月度有限额度；
- 比逐次购买有折扣；
- 面向持续创作者。

### Studio / Volume Plan

- 更高月度额度；
- 多 Artist；
- 需要更强风控；
- 可以后续上线。

即：

```text
Pay-per-release
        +
Limited Subscription
        +
Add-ons
```

而不是：

```text
低价 Unlimited AI Releases
```

---

## 12. 下一步需要确认的数据

具体报价前，需要拿到：

1. 看见实际 DSP 渠道清单；
2. 各 DSP 对 AI 内容的当前合作规则；
3. 单 Track 平均文件大小；
4. 单次审核平均人工成本；
5. 单次 DSP delivery / retransmission 成本；
6. 平均报表、支付成本；
7. 用户预计发行频率；
8. AI 内容平均 rejection rate；
9. 是否要求最低服务期限；
10. 支付手续费与退款规则。

基于这些数据，再锁定 Single / EP / Album 和订阅价格。
