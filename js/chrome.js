(function () {
  const page = document.body.getAttribute("data-page") || "";
  const nav = [
    { id: "about", href: "about.html", label: "本署介紹" },
    { id: "news", href: "news.html", label: "新聞公告" },
    { id: "safety", href: "safety.html", label: "職業安全" },
    { id: "health", href: "health.html", label: "職業衛生健康" },
    { id: "inspect", href: "inspect.html", label: "勞動檢查" },
    { id: "protect", href: "protect.html", label: "職災保護" },
    { id: "stats", href: "stats.html", label: "業務統計" },
    { id: "law", href: "law.html", label: "法規專區" },
    { id: "citizen", href: "citizen.html", label: "便民服務" },
  ];

  const parent = {
    "health-overwork": "health",
    "inspect-report": "inspect",
    "protect-uninsured": "protect",
    "citizen-faq": "citizen",
    "citizen-download": "citizen",
    outbound: "",
  };
  const current = parent[page] || page;

  const navHtml = nav
    .map((item) => {
      const cur = item.id === current ? ' aria-current="page"' : "";
      return `<li><a href="${item.href}"${cur}>${item.label}</a></li>`;
    })
    .join("");

  const header = document.getElementById("site-header");
  if (header) {
    header.innerHTML = `
      <div class="demo-banner">展示用假站 · 非正式的勞動部職業安全衛生署網站 · 僅示改造後資訊架構，不提供申辦與真實新聞</div>
      <div class="topbar">
        <a class="brand" href="index.html">
          <span class="brand-mark" aria-hidden="true">職安</span>
          <span>勞動部職業安全衛生署
            <small>全球資訊網（改造後架構展示）</small>
          </span>
        </a>
        <div class="chrome-links">
          <a href="index.html">回首頁</a>
          <a href="index.html#guide">網站導覽</a>
          <a href="changes.html">異動說明</a>
          <a class="is-off" href="#" aria-disabled="true" title="展示站不提供英文版">English</a>
          <a href="citizen.html#mailbox">意見信箱(勞檢申訴)</a>
        </div>
      </div>
      <nav class="nav" aria-label="主要">
        <ul>${navHtml}</ul>
      </nav>`;
  }

  const footer = document.getElementById("site-footer");
  if (footer) {
    footer.innerHTML = `
      <div class="inner">
        <div class="cols">
          <div>
            <h2>這是什麼</h2>
            <p>給簡報與跨組討論用的靜態骨架。選單、欄位名稱與搬家關係依改造草案，不是現站鏡像，也不是上線後台。</p>
          </div>
          <div>
            <h2>全國入口只外連</h2>
            <p>徵才、招標不進主選單。全國已有入口時，本署只留一條連出去：</p>
            <ul>
              <li><a href="outbound.html?to=台灣就業通">台灣就業通</a>（找工作／徵才）</li>
              <li><a href="outbound.html?to=政府電子採購網">政府電子採購網</a>（政府採購）</li>
            </ul>
          </div>
          <div>
            <h2>政策與宣告</h2>
            <p>隱私權及安全政策　｜　政府網站資料開放宣告</p>
            <p>真站才有地址、電話與服務時間。本站不列出真實分機，避免被誤認為正式網站。</p>
          </div>
        </div>
        <p class="fine">非正式網站。內容為架構說明與展示用假資料，請勿據以申辦或對外轉載為署方公告。</p>
      </div>`;
  }
})();
