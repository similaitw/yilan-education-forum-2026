document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const el=document.querySelector(a.getAttribute('href'));if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth',block:'start'})}}));

(()=>{
  const page=location.pathname.split('/').pop()||'index.html';
  const data={
    'wu.html':{name:'吳宗憲',transcript:'transcripts/wu-original.txt',file:'語音 260912_093833吳宗憲_original.txt',range:'00:00–27:54'},
    'lin.html':{name:'林國漳',transcript:'transcripts/lin-original.txt',file:'語音 260912_112425林國漳_original.txt',range:'00:00–15:22'}
  }[page];
  if(!data)return;
  const main=document.querySelector('main');
  if(!main)return;
  const section=document.createElement('section');
  section.id='original-sources';
  section.innerHTML=`<div class="section-head"><span class="num">原始</span><div><p>🎥 原始影音＋🎙 錄音文字還原</p><h2>原始資料｜可自行回查</h2></div></div><div class="source-box"><p><b>🎥 論壇原始影片</b><br><a href="https://youtube.com/playlist?list=PLebuli9NADt4" target="_blank" rel="noopener">開啟 2026 宜蘭縣長教育政策論壇現場錄影播放清單 ↗</a></p><p><b>🎙 ${data.name}場錄音 AI 原始文字還原</b><br><a href="${data.transcript}" target="_blank" rel="noopener">開啟完整原始文字檔：${data.file} ↗</a><br><span class="caption">目前保存時間範圍：${data.range}。此檔刻意保留 AI 原始辨識結果，包括錯字、近音字、人名誤辨與不完整句，不以網站整理後文字覆蓋原始資料。</span></p><p><b>如何閱讀</b><br>網站正文是依原始錄音整理後的詳實紀錄；需要確認語氣、時間點或辨識誤差時，可直接回到原始影片與 AI 文字還原檔交叉查證。</p></div>`;
  main.appendChild(section);
  const nav=document.querySelector('header nav');
  if(nav){const a=document.createElement('a');a.href='#original-sources';a.textContent='原始影音／逐字稿';nav.appendChild(a);a.addEventListener('click',e=>{e.preventDefault();section.scrollIntoView({behavior:'smooth',block:'start'})});}
})();