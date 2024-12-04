---
title: Send Media Message
description: Send Media Message Via API
---

Hisoka juga mendukung pengiriman pesan melalui API, yang bisa digunakan untuk mengirimkan notifikasi atau OTP (One Time Password).

# Contoh Penggunaan API untuk Mengirim Pesan

Berikut adalah contoh bagaimana cara mengirim pesan media menggunakan API:

## CURL

```bash
curl -X POST https://hisoka.net/api/v1/send \
   -H "Content-Type: application/json" \
   -H "X-Api-Key: YOUR_API_KEY" \
   -d '{
      "type": "media",
      "receiver": "input",
      "target": "RECIPIENT_PHONE_NUMBER",
      "caption": "Hello World",
      "url": "https://hisoka.net/img/hisoka.png",
      "send_as": "auto",
   }'
```

## NodeJS

```js
const res = await fetch('https://hisoka.net/api/v1/send', {
	method: 'POST',
	headers: {
		'x-api-key': 'YOUR_API_KEY',
		'content-type': 'application/json',
	},
	body: JSON.stringify({
		type: 'media',
		receiver: 'input',
		target: 'RECIPIENT_PHONE_NUMBER',
		caption: 'Hello World!',
		url: 'https://hisoka.net/img/hisoka.png',
		send_as: 'auto',
	}),
});

const data = await res.json();

console.log(data);
```

## Python

```python
import requests
import json

url = 'https://hisoka.net/api/v1/send'
headers = {
   'Content-Type': 'application/json',
   'X-Api-Key': 'YOUR_API_KEY'
}
payload = {
   'type': 'media',
   'receiver': 'input',
   'target': 'RECIPIENT_PHONE_NUMBER',
   'caption': 'Hello World',
   'url': 'https://hisoka.net/img/hisoka.png',
   'send_as': 'auto'
}

response = requests.post(url, headers=headers, data=json.dumps(payload))

print(response.json())
```

Gantilah `YOUR_API_KEY` dengan API key kamu dan `RECIPIENT_PHONE_NUMBER` dengan nomor telepon penerima.

### Payload

**receiver** - receiver adalah format target, dan saat ini mendukung untuk

1. `input`
2. `all-contact`
3. `all-group`
4. `group` </br> Jika ingin mengirimkan ke grup, maka gunakan `receiver` type `group` dan masukkan ID grup tersebut tanpa akhiran `@g.us`.

**send_as** - tipe pesan media, dukungan saat ini:
1. auto (default)
2. sticker
3. gif
4. ptt (Voice Note)
5. Document
6. view_once