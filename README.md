# Rework Page Stray Animal Guide

### Mei-Juni 2025

Sesuai dengan keinginan Team sekitar minggu lalu jadi page unpadforstrays.or.id/guide membutuhkan rework agar lebih friendly dan saat ini lamannya tidak dapat diakses untuk sementara. Rework sedang dilakukan dengan menggunakan TailwindCSS dan vanilla JS Web Components. Alasan menggunakan web components salah satunya, setiap file dapat di-insert sebagai module. Contoh: `<script type="module" src="NamaKomponen.js"></script>` hal ini bisa memudahkan kita untuk memodifikasi setiap komponen tanpa harus whole-site rebuild, dengan catatan komponen tersebut hosted di sebuah CDN. Untuk solusi CDN .js dan .css kita dapat menggunakan Githack, aku sendiri pake ini terus dan baik-baik aja.

## Alasan lain memakai Web Component
 - Works well dengan TailwindCSS
 - No build step, kecuali di masa depan kita pakai TypeScript.
 - Fassstteerrr
 - Meminimalisir dependency jadi engga usah pusing-pusingin dependency
 - Reusable (just drop-in-replacement)
 - File .html lebih clean

## Common Pitfalls
- Konsep ShadowDOM masih terbilang asing di telinga banyak orang.
- Penamaan components membutuhkan dua kata dengan disambung "-", contohnya `<komponen-aku></komponen-aku>`, tidak boleh `<KomponenAku />` layaknya React.
- Terlalu banyak approach untuk membuat web components sehingga kita membutuhkan standard.

## Dependency
- TailwindCSS v3
- Marked (markdown parser)

Pada project ini, web components digunakan untuk info card, tips card, warning card dan sharer button.

<br>

**Additional Note**
Untuk project lain aku akan propose pemakaian Lit framweork ([https://lit.dev/](https://lit.dev/))

To-Do:
- Experiment dengan Swup.js untuk MPA
- Experiment fetch .md file on-demand oleh pembaca, jadi engga semua file loaded agar dapat menghemat network & memory
- Module bundler

<br>

❤️,
Michelle