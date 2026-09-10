# Do'ppi — texnologiya fani loyihasi

React + Tailwind CSS + Vite asosida qurilgan, do'ppi haqida ma'lumot beruvchi bitta sahifali loyiha.

## Ishga tushirish

1. Node.js o'rnatilgan bo'lishi kerak (16-versiyadan yuqori tavsiya etiladi): https://nodejs.org

2. Terminalda ushbu papkaga kiring:
   ```
   cd doppi-project
   ```

3. Kerakli paketlarni o'rnating:
   ```
   npm install
   ```

4. Loyihani ishga tushiring:
   ```
   npm run dev
   ```

5. Terminalda chiqqan manzilni (odatda `http://localhost:5173`) brauzerda oching.

## Tuzilishi

```
doppi-project/
├── index.html          - bosh HTML fayl
├── package.json         - loyihaning bog'liqliklari
├── tailwind.config.js   - Tailwind sozlamalari
├── postcss.config.js    - PostCSS sozlamalari
├── vite.config.js       - Vite sozlamalari
└── src/
    ├── main.jsx          - React kirish nuqtasi
    ├── App.jsx           - asosiy sahifa (do'ppi haqidagi barcha kontent shu yerda)
    └── index.css         - Tailwind uchun global CSS
```

## Yakuniy versiyani tayyorlash (build)

Sayt uchun statik fayllar kerak bo'lsa:
```
npm run build
```
Natija `dist/` papkasida hosil bo'ladi — uni istalgan hosting'ga (Netlify, Vercel, GitHub Pages va h.k.) joylashtirish mumkin.
