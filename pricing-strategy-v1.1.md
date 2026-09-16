# AI 音乐发行：定价策略 v1.1

> 日期：2026-09-09  
> 状态：Phase 2 商业模式 / 定价修订稿  
> 说明：本文件修订 `commercial-model-v1.0.md` 中 ¥29 / ¥39 / ¥49 / Track-Year 的首发定价假设。渠道、AI Policy 与成本依据分别见 `channel-catalog-ai-policy-v1.0.md`、`unit-economics-v1.0.md`。

---

# 1. 结论

上一版 `中国 ¥29 / 海外 ¥39 / 全球 ¥49 / Track / 年` 对传统低频音乐人并非绝对高价，但不适合本产品真正要承接的 AI 高频创作者。

核心问题不是单首 ¥49 本身，而是：

- 50 首 / 年 = ¥2,450；
- 100 首 / 年 = ¥4,900；
- 1,000 首 / 年 = ¥49,000；
- 且第二年仍按同价续期。

这会导致高频 AI Creator / Studio 的总发行成本远高于其对自助发行产品的心理预期。

因此推荐将商业模型从：

```text
Track × Channel Pack × 每年同价续费
```

调整为：

> **低门槛首发费 + 更低的 Catalog Renewal + 预付批量 Credit + Add-on**

仍然坚持：

- 不采用星球发行 Revenue Share；
- 标准 Streaming / Download 收益 100% 归用户；
- 不做真正 Unlimited；
- AI 与普通音乐不做两套价格。

---

# 2. 行业价格锚点

2026 年仍采用按 Release / Track 收费的代表产品：

| 产品 | 当前公开价格 | 后端收入模式 | 对本产品的启发 |
|---|---|---|---|
| Soundrop | $4.99 / Track，一次性 | 15% 收入分成 | 极低首发价可以成立，但依赖后端 Commission |
| CD Baby | $9.99 / Single；$14.99 / Album，一次性 | Streaming / Download 9% | Release Fee 本身并不是主要长期利润来源 |
| RouteNote Premium | $10 / Single；$20 / EP；$30 / Album | Premium 保留 100% 收益；第二年起 $9.99 / Release / 年 | 最接近“付费发行 + 100% 收益 + 续期”的模型 |
| TuneCore Pay-per-release | $24.99 / Single / 年；$44.99 / Album / 年 | 100% ownership / control | 高价 Pay-per-release 与 Unlimited 并存，说明高频用户天然会迁移到更高性价比方案 |

看见的 AI 音乐发行不收 Streaming Revenue Share，因此不能机械复制 Soundrop / CD Baby 的超低一次性价格，但应显著降低高频用户的总持有成本。

---

# 3. 成本约束

当前全球音频硬成本模型：

```text
固定边际成本 = ¥3.345 / Track
             = 入库与存储 ¥0.040
             + 国内 7 个标准渠道 ¥0.105
             + 海外 8 个渠道 ¥3.200

服务器固定成本池 ≈ ¥500,000

完整摊销硬成本 = ¥3.345 + 500,000 / 年发行规模
```

对应：

| 年发行规模 | 全球硬成本 / Track |
|---:|---:|
| 7 万首 | ¥10.48 |
| 10 万首 | ¥8.34 |
| 30 万首 | ¥5.00 左右 |
| 50 万首 | ¥4.35 左右 |
| 100 万首 | ¥3.845 |

因此：

> **如果一首歌覆盖当前 15 个标准渠道，长期可持续价格不可能无限向 ¥3 以下下降。**

海外 8 渠道的 ¥3.20 / Track 已经构成主要成本底座。

---

# 4. C 端自助发行：推荐新价格

## 4.1 不再提供“海外包”作为独立主 SKU

对个人 Creator 来说，“中国 / 海外 / 全球”三档增加了理解成本，但真正购买意图通常只有：

1. 只发中国；
2. 尽可能发全球。

因此首期只保留两个主商品。

## 4.2 首次发行

| 商品 | 建议标准价 | 说明 |
|---|---:|---|
| **中国标准发行** | **¥9.9 / Track** | 当前符合资格的中国标准音频渠道；非标准人工渠道按策略处理 |
| **全球标准发行** | **¥19.9 / Track** | 中国 + 当前符合资格的海外标准音频渠道；主推 SKU |

其中全球 ¥19.9 在当前成本下：

| 年发行规模 | 硬成本 | 首年硬毛利率 |
|---:|---:|---:|
| 7 万首 | ¥10.48 | 约 47% |
| 10 万首 | ¥8.34 | 约 58% |
| 30 万首 | ¥5.00 | 约 75% |
| 50 万首 | ¥4.35 | 约 78% |
| 100 万首 | ¥3.845 | 约 81% |

这是一种明显偏“规模增长”的价格：低规模阶段利润较薄，随着发行量增长快速改善。

## 4.3 上线期活动价

可以使用：

> **全球首发 ¥14.9 / Track**

但应明确为获取第一批用户和发行规模的阶段性价格，而不是长期底价。

¥14.9 在 7 万首规模下硬毛利约 30%，在 30 万首规模下约 66%。如果人工审核成本较高，不应长期维持该价格。

---

# 5. Renewal 不应与 Initial Delivery 同价

此前 Track-Year 最大的问题，是默认第二年继续按首发价收费。

实际上第二年通常不再发生：

- 初始 Metadata 建档；
- 首次转码；
- 首次全渠道 Delivery；
- 首次完整审核。

Renewal 主要覆盖：

- Catalog 持续在架；
- 文件与 Metadata 保存；
- 报表与收益记录；
- 渠道状态维护；
- 必要异常处理；
- 客服 / 下架 / 版权 Case。

因此建议：

| 商品 | 首次发行 | 第二年起续期建议价 |
|---|---:|---:|
| 中国标准发行 | ¥9.9 | **¥2.9 / Track / 年** |
| 全球标准发行 | ¥19.9 | **¥4.9 / Track / 年** |

续期价格在获得真实 Renewal COGS 前仍属于 Pricing Hypothesis，但原则上不应与 Initial Delivery 同价。

---

# 6. 高频 Creator：Credit Pack，而不是按原价逐首购买

用户仍然按 Track 消耗，不做 Unlimited。

建议首期：

| Global Credit Pack | 售价 | 折算 / Track | 使用对象 |
|---:|---:|---:|---|
| 1 Track | ¥19.9 | ¥19.9 | 低频用户 / 首次使用 |
| 10 Tracks | **¥159** | ¥15.9 | Creator |
| 50 Tracks | **¥699** | ¥13.98 | 高频 Creator / 小型 Studio |
| 200 Tracks | **¥2,399** | ¥12.00 | Studio / Volume Account；需风控准入 |

规则：

- Credit 有效期 12 个月；
- 不无限结转；
- 只抵扣 Initial Standard Audio Distribution；
- Renewal 单独计费；
- Credit 不解除 rolling upload limit；
- 高风险 / 批量 spam 账号仍可暂停 Delivery；
- 人工渠道、MV、特殊 Rights / UGC 不消耗普通 Global Credit，单独计价。

这使高频用户的实际单首价格从 ¥49 降至 ¥12–16 区间，同时保留规模与收入之间的正相关关系。

---

# 7. 为什么不直接把 Global 降到 ¥5 / Track

从用户心理看，¥5 / Track 很有吸引力，但当前全球渠道直接边际成本约为 ¥3.345 / Track。

如果售价 ¥5：

```text
售价       ¥5.000
直接边际成本 ¥3.345
剩余贡献     ¥1.655
```

这 ¥1.655 还需要覆盖：

- 50 万服务器固定成本池；
- 审核；
- AI / Rights 检测；
- 失败重传；
- 客服；
- 支付；
- 退款；
- 版权投诉；
- 财务 / 报表 / 结算。

因此对 C 端自助产品而言，¥5 左右只能作为非常大规模、非常低服务等级、或渠道范围更窄的批量价，不能作为当前全量标准渠道的零售价格。

---

# 8. 商务部门 B2B AI 平台报价：问题不只是定价

当前商务参考报价：

| Tier | 预充值 | Credits | 售价 / Track |
|---|---:|---:|---:|
| Starter | ¥15,000 | 1,500 | ¥10.00 |
| Growth | ¥60,000 | 12,000 | ¥5.00 |
| Enterprise | ¥240,000 | 60,000 | ¥3.85 |

其中 `1 Credit = 1 Track 分发至 15 个平台`。

## 8.1 Enterprise ¥3.85 已接近成本价

在约 100 万首规模：

```text
全球硬成本 ≈ ¥3.845 / Track
Enterprise 售价 = ¥3.85 / Track
```

几乎没有空间覆盖：

- 技术支持；
- API 运维；
- SLA；
- 异常处理；
- 审核；
- 财务；
- 商务成本。

所以如果 AI 平台仍认为 ¥3.85 贵：

> **不能继续通过单纯降价解决。**

真正需要改变的是商品结构和上游成本。

---

# 9. B2B 应从“1 Credit = 全球 15 渠道”改成渠道分层

建议 B2B Enterprise / API 与 C 端自助产品分开定价。

内部成本事实：

```text
中国 7 个标准渠道：¥0.105 / Track
海外 8 个渠道：    ¥3.200 / Track
```

两者成本差超过 30 倍。

因此不应该继续把它们强制捆成一个 Credit。

建议未来 B2B 商品抽象：

```text
Platform / API Base Fee
        +
China Delivery Usage
        +
Overseas Delivery Usage
        +
Non-standard Delivery / SLA Add-on
```

例如可以研究：

- China Credit；
- Overseas Credit；
- Global Credit；
- Manual / Offline Channel Add-on；
- API / Support / SLA Base Fee。

这样国内批量发行可以做到非常低价，而真正昂贵的海外 Delivery 由有需求的客户支付。

---

# 10. 如果 B2B 必须继续要求更低 Global 单价，只有三条路

## A. 降海外渠道成本

当前 8 个海外渠道：

> ¥0.4 × 8 = ¥3.2 / Track

这是最主要成本。

如果希望 Global 批量价长期做到 ¥2–3 / Track，必须首先重谈 SP / 海外渠道成本或改变交付链路。

## B. 减少默认渠道

不再默认 8 个海外渠道全部包含。

建立：

- Core Global；
- Extended Global。

先把成本最高、价值最低、AI 资格不稳定的渠道从 Core Pack 移出。

## C. 基础费 + 低 Usage Price

由年度 Platform / API Fee 覆盖：

- Integration；
- Server fixed pool；
- Support；
- SLA。

Track Usage 只覆盖边际 Delivery Cost。

这会比“全部成本都塞进一个 Credit 单价”更适合百万级 AI 平台。

---

# 11. 推荐首发 SKU v1.1

C 端 MVP：

```text
中国标准发行       ¥9.9 / Track / 首次发行
全球标准发行       ¥19.9 / Track / 首次发行
全球 10 Track Pack ¥159
全球 50 Track Pack ¥699
全球 200 Track Pack ¥2,399
中国续期           ¥2.9 / Track / 年（暂定）
全球续期           ¥4.9 / Track / 年（暂定）
```

Add-on 继续单独收费：

- 加急审核；
- Metadata 上线后修改；
- 音频替换 / Re-delivery；
- 人工权利材料预审；
- MV；
- 非标准 / 线下渠道；
- UGC / Content ID。

---

# 12. 最终判断

对 AI 音乐发行而言，真正应该优化的不是把每首歌从 ¥49 机械降到 ¥39，而是改变价格曲线：

```text
低频用户：
一首也能很便宜地开始

高频用户：
随着购买量增长，单首价格快速下降

长期目录：
续期远低于首次发行

超大 B2B：
不再购买零售 Credit，而进入 API / Usage 商业模型
```

因此 v1.1 的核心价格锚点从：

> **¥49 / Track / Year**

调整为：

> **¥19.9 首发 + ¥4.9 续期；高频通过 Credit Pack 降至约 ¥12–16 / Track。**

这更符合 AI 时代高频内容生产，同时又没有突破当前全球 Delivery 成本底线。