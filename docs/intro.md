---
sidebar_position: 1
---

# 基本

基本APIリクエストPathは以下の通りです。

```
https://hss-dev.aknet.tech/v1/
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

# 早速始めましょう！

早速やってみましょうね！

