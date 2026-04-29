# ai-agent-lover-site

**AI Agent Lover** の静的公式サイト（GitHub Pages）。

## 公開手順

1. **Settings → Pages → Build and deployment** で **Source: GitHub Actions** を選ぶ（このリポジトリはワークフローでデプロイ）。
2. `main` へ push すると `Deploy GitHub Pages` が走る。
3. 数分後に `https://sotanengel.github.io/ai-agent-lover-site/` が有効化される（リポジトリ名が違う場合は URL も変わる）。

Actions を使わずブランチ直デプロイにする場合は workflow を削除し、Pages で **Deploy from a branch** を選ぶ。

## ローカル確認

ルートに `index.html` があるので、任意の静的サーバで開いてください。

```bash
npx serve .
```
