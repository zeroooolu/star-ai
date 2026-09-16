# AI Music Distribution Prototype v1

第一版可运行 Code Prototype，包含：

- `index.html`：官网首页
- `pricing.html`：定价页（月付 / 年付 + 按量估算）
- `release.html`：新建发行 Builder（AI 声明、渠道 Eligibility、渠道选择、服务期和价格实时计算）
- `styles.css`：共享 Design System / 页面样式
- `app.js`：DSP Logo、Pricing Toggle、Release Builder 交互

## 设计基线

- 蓝色作为看见音乐主色调；
- AI 是作品属性，不是视觉噱头；
- 参考 Ditto 的直接转化结构与 LANDR 的 Product-as-visual；
- 官网使用真实产品 UI，而不是抽象 AI 插画；
- DSP Logo 滚动条来自现有 `star.kanjian.com` 使用的 CMS 资源；
- 部分命名渠道 Logo 来自 `zeroooolu/music-promotion` 现有原型资产。

## 部署边界

AI 音乐发行是独立产品，必须使用独立 Vercel Project，禁止挂载到 `music-promotion`、星球发行或其他产品的 Vercel Project 下。

首版部署约定：

```text
Vercel Project: ai-music-distribution
Source Repository: zeroooolu/kanjian-distribution-products
Root Directory: 04-self-service-distribution/prototype-v1
Framework: Other / Static
```

后续官网、App、Preview / Production、域名和环境变量均在该独立 Project 内管理。

`music-promotion` 仅允许作为品牌 Logo / 既有素材来源，不作为运行时依赖和部署宿主。

## 运行

直接打开 `index.html`，或在目录运行任意静态 HTTP server。
