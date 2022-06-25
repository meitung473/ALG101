## LIOJ 懶人檔案包
懶人如我...，因此誕生懶人包

### What is LIOJ ? 
[LIOJ](https://oj.lidemy.com/problem) 是 Lidemy 鋰學院提供的程式解題系統，搭配課程 ALG101 可以練習基礎演算法與解題技巧。  

> 使用平台必須先註冊帳號密碼登入


### Motivation
我是自學線上課程的小萌新，每次解題都得手動複製檔案 ，久而久之就有點懶了，於是使用 node filesystem 透過打指令就可以生成對應資料夾與檔案， 也可以直接對應指令來原地測試。

> 唯一要要勞駕手腕的是 :  **手動** 複製測資到 txt 檔

## 建立單一個題號檔案
```bash
npm run create 1001
```
會自動生成 LIOJ 資料夾以及題號對應的資料夾  
裡面包含 **<題號>.js 、<題號>.txt**

- txt 文字檔是空的，請自己輸入測資
- js 檔以有列好的架構，只需要在裡面寫邏輯

## 建立所有題號檔案
```bash
npm run autocreate
```
會生成 1001 ~ 1053 的資料夾以及 js 、txt 檔，接著就專心的寫邏輯吧 !

## 使用測資
在 js 檔使用 console.log() 來印出答案，結果使用 return 會沒東西
```bash
npm run test 1001
```



## NPSC 測資使用方法  
課程上有 NPSC 的練習題，可以下載 NPSC 的測資

後面的 - (dash) 一定要
```bash
cat <題號>.txt | node <題號>.js | diff --strip-trailing-cr <out>.js -
```

加入 --strip-trailing-cr 的由來是因為作業系統的空白字元在 16 進位會不同，透過 --strip-trailing-cr 可以替換掉。