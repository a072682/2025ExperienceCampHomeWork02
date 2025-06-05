import { useParams } from "react-router-dom";
import './_BlogDetail.scss';
import BlogDetailIntro from "../components/common/BlogDetailIntro";


function BlogDetail() {
  const { id } = useParams(); // 讀取網址中的 id

  return (
    <>
        
        <div className="BlogDetailIntro">
            <BlogDetailIntro />
        </div>
        <div className='bgd-main2 w-100 py-64 border-top border-bottom border-3 border-secondary d-flex flex-column'>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6 mx-auto">
                        <div className="bgd-mb-main2-title">
                            <p className="fw-700 fs-28 col-0027D5 lh-15 fontFamily">前言</p>
                        </div>
                        <div className="bgd-mb-main2-content mt-24">
                            <p className="fw-500 fs-16 col-000000 lh-15 fontFamily">嗨，我是 Alyse，一名前端工程師兼職涯諮詢師。一直以來，我都很喜歡在部落格分享學習與工作心得，也常有讀者問：「我想轉職/自學前端，該從哪裡開始？」 其實自學的過程既自由又具挑戰性。我整理了三大關鍵，幫助你在短期內建立紮實基礎，並快速累積實戰經驗。希望能替你的前端之路帶來一些啟發與動力！</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-6 mx-auto">
                        <div className="bgd-mb-main2-card1 mt-48">
                            {/* 預設使用桌面圖片 */}
                            
                            <section className="">
                                <img
                                    src={`${import.meta.env.BASE_URL}images/mobile/blog-content/content1.png`}
                                    className="bgd-mb-main2-card1-img rounded-0 d-block"
                                    alt=""
                                />
                                <h3 className="fw-700 fs-28 col-0027D5 lh-15 fontFamily mt-24">打好基礎：HTML、CSS、JavaScript</h3>
                                <h4 className="fw-700 fs-20 col-000000 lh-15 fontFamily mt-24">HTML 與語意化</h4>
                                <p className="fw-500 fs-16 col-000000 lh-15 fontFamily mt-12">為何重要：HTML 是網頁結構的根基，語意化寫法（如 header, main, footer 等）能讓網頁更具可維護性與 SEO 效益。</p>
                                <h4 className="fw-500 fs-16 col-000000 lh-15 fontFamily mt-8">建議做法：</h4>
                                <ol className="ps-24">
                                    <li>
                                        <span className="fw-500 fs-16 col-000000 lh-15 fontFamily">學習常見標籤的用途與屬性，如 &lt;section&gt;、&lt;article&gt;、&lt;nav&gt;。</span>
                                    </li>
                                    <li>
                                        <span className="fw-500 fs-16 col-000000 lh-15 fontFamily">善用 MDN、W3Schools等官方文件，找尋範例程式碼並練習。</span>
                                    </li>
                                </ol>

                                <h4 className="fw-700 fs-20 col-000000 lh-15 fontFamily mt-24">CSS 佈局與預處理器</h4>
                                <p className="fw-500 fs-16 col-000000 lh-15 fontFamily mt-24">為何重要：好看的網站來自穩定的排版與佈局，掌握 Flexbox、Grid 能讓你隨心所欲打造響應式頁面。</p>
                                <h4 className="fw-500 fs-16 col-000000 lh-15 fontFamily mt-8">建議做法：</h4>
                                <ol className="ps-24">
                                    <li>
                                        <span className="fw-500 fs-16 col-000000 lh-15 fontFamily">先掌握基礎 CSS 後，再學習 SASS 或 LESS 這類預處理器，提升樣式開發效率。</span>
                                    </li>
                                    <li>
                                        <span className="fw-500 fs-16 col-000000 lh-15 fontFamily">善用<span className="col-0027D5">CSS-Tricks</span>等資源，了解常見版型技巧。</span>
                                    </li>
                                </ol>

                                <h4 className="fw-700 fs-20 col-000000 lh-15 fontFamily mt-24">JavaScript 核心觀念</h4>
                                <p className="fw-500 fs-16 col-000000 lh-15 fontFamily mt-24">為何重要：互動效果、資料處理、前端邏輯都仰賴 JavaScript。</p>
                                <h4 className="fw-500 fs-16 col-000000 lh-15 fontFamily mt-8">建議做法：</h4>
                                <ol className="ps-24">
                                    <li>
                                        <span className="fw-500 fs-16 col-000000 lh-15 fontFamily">先打穩 ES5 與 ES6 語法基礎，理解閉包 (Closure)、原型鍊 (Prototype) 等核心機制。</span>
                                    </li>
                                    <li>
                                        <span className="fw-500 fs-16 col-000000 lh-15 fontFamily">學會事件監聽、API 資料串接等常見應用，增添網站互動性。</span>
                                    </li>
                                </ol>

                                <div className="bgd-mb-main2-card1-finish p-24 mt-24">
                                    <p className="fw-700 fs-16 col-000000 lh-15 fontFamily">小結：在學習基礎語法時，同步進行小專案實作（如 Todo List、計算機、切版作品集）會讓你進步更快，也能累積展示用作品。</p>
                                </div>
                            </section>
                        </div>
                        <div className="bgd-mb-main2-card2 mt-48">
                            {/* 預設使用桌面圖片 */}
                            
                            <section className="">
                                <img
                                    src={`${import.meta.env.BASE_URL}images/mobile/blog-content/content2.png`}
                                    className="bgd-mb-main2-card1-img rounded-0 d-block"
                                    alt=""
                                />
                                <h3 className="fw-700 fs-28 col-0027D5 lh-15 fontFamily mt-24">擅用主流框架與工具</h3>
                                <h4 className="fw-700 fs-20 col-000000 lh-15 fontFamily mt-24">React、Vue 先挑一個</h4>
                                <ul className="ps-24">
                                    <li>
                                        <span className="fw-500 fs-16 col-000000 lh-15 fontFamily">React：生態系豐富、社群支援強，適合喜歡客製化的工程師。</span>
                                    </li>
                                    <li>
                                        <span className="fw-500 fs-16 col-000000 lh-15 fontFamily">Vue：上手容易、檔案結構直覺，適合對「漸進式開發」有興趣的開發者。</span>
                                    </li>
                                </ul>

                                <div className="bgd-mb-main2-card1-finish p-24 mt-24">
                                    <p className="fw-700 fs-16 col-000000 lh-15 fontFamily">TIP：可以先看官方文件或跟著基礎教學做出小專案，感受哪個框架更順手。</p>
                                </div>

                                <h4 className="fw-700 fs-20 col-000000 lh-15 fontFamily mt-24">版本控制、協作與建置</h4>
                                <ul className="ps-24">
                                    <li>
                                        <span className="fw-500 fs-16 col-000000 lh-15 fontFamily">Git 與 GitHub：一定要掌握分支、Pull Request、Code Review 等流程，並熟悉 Git Flow 或 Trunk Based Development。</span>
                                    </li>
                                    <li>
                                        <span className="fw-500 fs-16 col-000000 lh-15 fontFamily">打包工具：了解 Webpack、Vite、Parcel 等常見工具的基本原理與設定，對於優化與部署大有幫助。</span>
                                    </li>
                                </ul>

                                <h4 className="fw-700 fs-20 col-000000 lh-15 fontFamily mt-24">自動化測試與最佳實踐</h4>
                                <ul className="ps-24">
                                    <li>
                                        <span className="fw-500 fs-16 col-000000 lh-15 fontFamily">測試框架：Jest、Mocha、Cypress 等，建立單元測試與 E2E 測試思維。</span>
                                    </li>
                                    <li>
                                        <span className="fw-500 fs-16 col-000000 lh-15 fontFamily">程式結構與品質：遵循程式風格 (Lint)、維持命名規範、模組化思考，確保專案可維護</span>
                                    </li>
                                </ul>

                                
                            </section>
                        </div>
                        <div className="bgd-mb-main2-card3 mt-48">
                            {/* 預設使用桌面圖片 */}
                            
                            <section className="">
                                <img
                                    src={`${import.meta.env.BASE_URL}images/mobile/blog-content/content3.png`}
                                    className="bgd-mb-main2-card1-img rounded-0 d-block"
                                    alt=""
                                />
                                <h3 className="fw-700 fs-28 col-0027D5 lh-15 fontFamily mt-24">持續練習與參與社群</h3>
                                <h4 className="fw-700 fs-20 col-000000 lh-15 fontFamily mt-24">多參加前端挑戰 / Hackathon</h4>
                                <ul className="ps-24">
                                    <li>
                                        <span className="fw-500 fs-16 col-000000 lh-15 fontFamily">在實作中快速累積經驗，也能認識更多同好。</span>
                                    </li>
                                    <li>
                                        <span className="fw-500 fs-16 col-000000 lh-15 fontFamily">像是<span className="col-0027D5">Frontend Mentor</span>提供多種真實設計稿，可練習切版與互動。</span>
                                    </li>
                                </ul>

                                <h4 className="fw-700 fs-20 col-000000 lh-15 fontFamily mt-24">打造個人作品集網站</h4>
                                <ul className="ps-24">
                                    <li>
                                        <span className="fw-500 fs-16 col-000000 lh-15 fontFamily">部署在 GitHub Pages 或其他免費/付費主機。</span>
                                    </li>
                                    <li>
                                        <span className="fw-500 fs-16 col-000000 lh-15 fontFamily">整合自己做過的小專案，並用文字介紹技術棧與實作細節。</span>
                                    </li>
                                </ul>

                                <h4 className="fw-700 fs-20 col-000000 lh-15 fontFamily mt-24">社群互動、分享心得</h4>
                                <ul className="ps-24">
                                    <li>
                                        <span className="fw-500 fs-16 col-000000 lh-15 fontFamily">參與線上或線下的技術交流、讀書會、Meetup，與同行討論，能啟發更多想法。</span>
                                    </li>
                                    <li>
                                        <span className="fw-500 fs-16 col-000000 lh-15 fontFamily">有餘力可將學習過程寫成部落格文章或筆記，進一步強化自己的理解。</span>
                                    </li>
                                </ul>
                            </section>
                        </div>
                        <div className="bgd-mb-main2-card4 mt-48">
                            {/* 預設使用桌面圖片 */}
                            
                            <section className="">
                                <img
                                    src={`${import.meta.env.BASE_URL}images/mobile/blog-content/content4.png`}
                                    className="bgd-mb-main2-card1-img rounded-0 d-block"
                                    alt=""
                                />
                                <h3 className="fw-700 fs-28 col-0027D5 lh-15 fontFamily mt-24">結語</h3>
                                <p className="fw-500 fs-16 col-000000 lh-15 fontFamily mt-12">自學前端可能遇到卡關、挫折，但同時也具備很高的自主性。只要把 基礎、框架、實踐 三大面向做好，就能在前端這條路上穩步前進。若你在學習過程中需要更多建議或想要職涯諮詢，歡迎透過聯絡方式與我聯繫！</p>

                                <div className="bgd-mb-main2-card1-finish p-24 mt-24">
                                    <p className="fw-700 fs-16 col-000000 lh-15 fontFamily">小結：在學習基礎語法時，同步進行小專案實作（如 Todo List、計算機、切版作品集）會讓你進步更快，也能累積展示用作品。</p>
                                </div>

                                <p className="fw-500 fs-16 col-000000 lh-15 fontFamily mt-12">感謝你的閱讀，如果這篇文章對你有幫助，別忘了幫忙分享，或在下方留言告訴我你的想法，也讓更多人一起受益吧！</p>

                            
                            </section>
                        </div>
                        <div className="bgd-mb-main2-card5 mt-48">
                            {/* 預設使用桌面圖片 */}
                            
                            <section className="">
                                <h3 className="fw-700 fs-28 col-0027D5 lh-15 fontFamily mt-24">延伸閱讀</h3>
                                <ul className="ps-24">
                                    <li>
                                        <a href="#">
                                            <span className="fw-500 fs-16 col-000000 lh-15 fontFamily">前端面試不再慌：破解常見提問的三大策略</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="fw-500 fs-16 col-000000 lh-15 fontFamily">掌握前端測試：從單元測試到端對端測試的完整攻略</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="fw-500 fs-16 col-000000 lh-15 fontFamily">SEO 與前端最佳實踐：讓搜尋引擎看見你的網站</span>
                                        </a>
                                    </li>
                                </ul>

                            </section>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-6 mx-auto">
                        {/* 按鈕 */}
                        <div className='mt-48 d-flex justify-content-between'>
                            <button type="button" onClick={() => handleGoToDetail(123)} className="card-btn fs-16 fw-500 col-4B4B4B lh-15 fontFamily d-flex justify-content-center align-items-center">
                                <span class="material-symbols-outlined">
                                    arrow_back_ios
                                </span>
                                上一篇
                            </button>
                            <button type="button" onClick={() => handleGoToDetail(123)} className="card-btn fs-16 fw-500 col-4B4B4B lh-15 fontFamily d-flex justify-content-center align-items-center">
                                
                                下一篇
                                <span class="material-symbols-outlined">
                                    arrow_forward_ios
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default BlogDetail;
