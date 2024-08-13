---
sidebar_position: 0
---

# まず初めに

:::info
APIよりもユーザーとアプリケーションユーザーの差についてもうちょっと知りたい！

ってひとは [ここ](faq/differents#%E3%82%A2%E3%83%97%E3%83%AA%E3%82%B1%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%81%A8%E3%81%AE%E5%B7%AE%E3%81%A3%E3%81%A6)みてね
:::

## 基本

基本APIリクエストPathは以下の通りです。

```
https://hss-b-ds.akikaki.net/
```

:::warning
これは**ベータ段階での**URLです。リリース時には現在のURLである`https://hss-ds.akikaki.net`に変更されます。
:::

また、各Pathはすべて認証を必要とします。

HTTP Headerに `Authorization : Bearer <userToken>` という方式で指定してください。

## 基本的なレスポンス形式（成功）

基本的なレスポンス形式は以下の通りです。

- 例：
```json
{
    status : "success"
    data : {
        "hid": "6392036859974772004",
        "username": "yay",
        "developer": true,
        "discordAccount": true,
        "googleAccount": true
    }
}
```

これはすべてのリクエストに共通して付与されるヘッダ情報です。

## 基本的なレスポンス形式（失敗）

`status`が`error`である場合、**必ず`message`フィールドが出現し、`data`フィールドは出現しません。**

- 例：
```json
{
    "status": "error",
    "message": "Internal Server Error"
}
```

## フィールドの説明

### dataフィールド
`data`フィールドは`status`が`success`だった場合にのみ出現するフィールドです。

`data`フィールドはそのエンドポイント固有の型を含みます。

### messageフィールド
`message`フィールドは`status`が`error`だった場合にのみ出現するフィールドです。

`message`フィールドは必ず`string`を返します。

### statusフィールド

`status`はレスポンスが成功したか・失敗したかを`HTTP StatusCode`とは別に判別します。

必ず下の`Literal`（`string`値）のみを含みます。それ以外は認められません。

|  コード  |  成功したか  |
| ---- | ---- |
|  success  |  true  |
|  error  |  false  |


## 早速始めましょう！

早速やってみましょうね！

