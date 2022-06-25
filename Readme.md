# LIOJ 懶人檔案包
省去手動建立檔案與複製程式架構

## Download
```bash
git clone git@github.com:meitung473/Learning-ALG101.git && cd ALG101 && npm i
```
- 使用到 [shell.js](https://www.npmjs.com/package/shelljs)，讓 js 執行 shell command line

## What is LIOJ ? 
[LIOJ](https://oj.lidemy.com/problem) 是 [Lidemy 鋰學院](https://www.lidemy.com/)提供的程式解題系統，搭配[課程 ALG101](https://www.lidemy.com/p/alg101-leetcode) 可以練習基礎演算法與解題技巧。  

> 使用平台必須先註冊帳號密碼登入


## Motivation
我是自學線上課程的小萌新，每次解題都得手動複製檔案 ，久而久之就有點懶了，於是使用 node filesystem 透過打指令就可以生成對應資料夾與檔案， 也可以直接對應指令來原地測試。

> 唯一要要勞駕手腕的是 :  **手動** 複製測資到 txt 檔

## Usage
### 建立單一個題號檔案
```bash
npm run create 1001
```
會自動生成 LIOJ 資料夾以及題號對應的資料夾  
裡面包含 **<題號>.js 、<題號>.txt**

- txt 文字檔是空的，請自己輸入測資
- js 檔以有列好的架構，只需要在裡面寫邏輯

### 建立所有題號檔案
```bash
npm run autocreate
```
會生成 1001 ~ 1053 的資料夾以及 js 、txt 檔。  

### 使用測資
在 js 檔使用 console.log() 來印出答案，結果使用 return 會沒東西
```bash
npm run test 1001
```