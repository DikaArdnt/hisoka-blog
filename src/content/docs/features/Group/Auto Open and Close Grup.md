---
title: Auto Open and Close Group
---

Perintah ini berfungsi untuk mengatur jadwal buka dan tutup pada grup
|                       Info                        |      |
| :-----------------------------------------------: | :--: |
|                    Allow Basic                    |  ❌  |
|                Menggunakan Prefix                 |  ✅  |
|                 Menggunakan limit                 |  ✅  |
|                    Hanya Owner                    |  ❌  |
|                   Hanya Premium                   |  ❌  |
|                    Hanya Group                    |  ✅  |
|                 Hanya Admin Group                 |  ✅  |
|                Hanya Private Chat                 |  ❌  |
|                       Limit                       |  0   |
|                     Cooldown                      |  0   |
|                       Level                       |  0   |

# Command
## **#open**
Untuk mengatur kapan grup dibuka, bisa diatur seperti:
```sh
#open 06:00
```
Ini berarti grup akan dibuka pada pukul 06 pagi setiap harinya

## **#close**
Untuk mengatur kapan grup ditutup, bisa diatur seperti:
```sh
#close 22:00
```
Ini berarti grup akan dibuka pada pukul 10 malam setiap harinya

Pastikan jarak waktu berkisar 6 jam setelah dan sebelum waktu itu diatur

Untuk mematikan fitur tersebut, akhiri query dengan teks `off`
Misal:
```sh
#open off
```