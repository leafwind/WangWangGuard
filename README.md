# 旺中守門員（改）

## 緣由
偶然之下安裝了原本的[旺中守門員](https://github.com/leafwind/no-wang-wang.git)  
覺得這個概念很棒，但作者暫時沒有繼續更新  
  
一開始是覺得阻擋的提示可以再優化  
因為自己有使用上的需要，便開始著手做些小修改  
後來又認為，如果有軟性的「提醒模式」以及自由選擇阻擋的網站，會吸引更多人使用  
就更新到現在

## 更新紀錄

* 0.1.0
  * 從旺中小幫手將封鎖功能獨立出來

## 特色

* 簡單的阻擋功能，讓你無法連到所有旺中網頁
* 延遲功能：可自行設定要讀取多久後才顯示被阻擋
* 阻擋清單包含旺中集團底下所有媒體：中時、中視、中天、旺報、時報、TVBS、八大，以及其所有粉絲團

## 安裝方式

* 本軟體為 Chrome 擴充程式
  - [原始碼 @ git repo](https://github.com/leafwind/no-wang-wang.git)
  - [安裝網址 @ Chrome Web Store](https://chrome.google.com/webstore/detail/kkihipkdoiapaengcegmaeplaocbhbne/publish-accepted-testers)

* 原始版本「旺中守門員」
  - [原始碼 @ git repo](https://github.com/chitsaou/no-wang-wang.git) 作者 [chitsaou](https://github.com/chitsaou)
  - [安裝網址 @ Chrome Web Store](https://chrome.google.com/webstore/detail/jgoljbdcdakinkigihjocpniamcgofmm/)

## 技術細節

本外掛會偵測您瀏覽網頁時的網址，當網址/新聞內容包含旺中旗下的媒體網站時，自動提示/阻擋瀏覽：

### 阻擋的網址

* 中時電子報 `*.chinatimes.com`, `*.wantchinatimes.com`, `*.facebook.com/CTfans`
  * 例外：中時部落格 `blog.chinatimes.com`
* 中天電視 `*.ctitv.com.tw`
* 中國電視公司 `*.ctv.com.tw`, `*.facebook.com/chinatv`
* 旺報 `*.want-daily.com`, `*.facebook.com/wantdaily`
* 0.4.0 (2014/1/7)
  * 時報週刊 `*.ctweekly.com.tw`
  * 愛女生雜誌粉絲團 `*.facebook.com/ctwgirl`
* 0.6.0 (2014/3/24)
  * TVBS `*.tvbs.com.tw`, `*.facebook.com/tvbsfb`
  * GTV(八大) `*.gtv.com.tw`, `*.facebook.com/loveGTV`
  * 以上所有媒體的粉絲團

### 旺中媒體集團包括（根據蘋果日報2012/7/31 NCC資料）

* 新聞頻道：中天新聞台
* 衛星頻道：中天, TVBS, GTV等
* 無線電視：中視等頻道
* 報紙：中國時報等
* 新聞網站：中時電子報
* 雜誌：時報周刊等

## 聲明

本軟體：

* 不會記錄您的上網歷程
* 不會記錄您試圖上幾次這些網站
* 不會記錄您與這些網站傳輸了什麼資料

## 軟體授權

本軟體以 MIT License 授權

Copyright (c) 2014 Connor Hsu

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
