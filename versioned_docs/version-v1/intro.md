---
sidebar_position: 0
---

:::info
APIよりもユーザーとアプリケーションユーザーの差についてもうちょっと知りたい！

ってひとは [ここ](faq/differents#%E3%82%A2%E3%83%97%E3%83%AA%E3%82%B1%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%81%A8%E3%81%AE%E5%B7%AE%E3%81%A3%E3%81%A6)みてね
:::

# 基本

基本APIリクエストPathは以下の通りです。

```
https://hss-ds.akikaki.net/v1
```

また、各Pathはすべて認証を必要とします。

HTTP Headerに `Authorization : Bearer <userToken>` という方式で指定してください。

# 基本的なレスポンス形式

基本的なレスポンス形式は以下の通りです。

```
{
    status : 0 | -1,
    body : {
        message : "レスポンスメッセージです。基本的には文字列が返却されます。",
        data : {
            データ
        }
    }
}
```

## Status

statusはレスポンスが成功したか・失敗したかを`HTTP StatusCode`とは別に判別します。

|  コード  |  成功したか  |
| ---- | ---- |
|  0  |  true  |
|  1  |  true  |
|  -1  |  false  |

## 共通 HTTP Error Responses

- HTTP 400
  - トークンが間違っていませんか？

  - トークン形式が間違っていませんか？このAPIでは`Bearer`トークン指定です。

- HTTP 403
  - 権限は持っていますか？基本的なエンドポイント全てに管理者権限が必要です。


# 早速始めましょう！

早速やってみましょうね！

