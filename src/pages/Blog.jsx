import ReactPagination from '../components/common/ReactPagination';
import { useNavigate } from "react-router-dom";
import './_Blog.scss';
import BlogDetail from './BlogDetail';


function Blog (){

    const navigate = useNavigate();

    const handleGoToDetail = (id) => {
        navigate(`/BlogPage/${id}`);
    };

    const cards = [
        {
        id: 1,
        time: "2024/10/11",
        tags: ["React", "入門基礎"],
        tagkey:false,
        title: "React 入門不再迷惘：三步驟帶你上手核心概念",
        text: "你是否對 React 感到好奇，卻苦惱於該如何正式啟動學習之路？身為前端工程師兼職涯諮詢師，我常遇到同學問我：「React 到底該怎麼入門？」為了幫大家減少摸索的時間，我整理出三個循序漸進的關鍵步驟，帶你更輕鬆地掌握 React 核心概念，真正把理論應用在實際專案中。",
        image: `${import.meta.env.BASE_URL}images/desktop/blog/photo1.png`,
        mobileImage: `${import.meta.env.BASE_URL}images/mobile/blog/photo1.png`,
        link: "#"
        },
        {
        id: 2,
        time: "2024/09/07",
        tags: ["作品集", "求職攻略"],
        tagkey:false,
        title: "前端作品集打造指南：讓你的專案成為履歷亮點",
        text: "對正在求職的前端工程師而言，作品集往往是第一個「說話」的利器。當面試官瀏覽你的網頁作品時，能夠快速了解你的程式邏輯、設計感以及解決問題的思路。我在協助多位同學優化履歷與作品集的過程中，總結出一些關鍵要素，分享給正在打造、升級作品集的你。",
        image: `${import.meta.env.BASE_URL}images/desktop/blog/photo2.png`,
        mobileImage: `${import.meta.env.BASE_URL}images/mobile/blog/photo2.png`,
        link: "#"
        },
        {
        id: 3,
        time: "2024/09/03",
        tags: ["CSS設計", "視覺體驗"],
        tagkey:false,
        title: "CSS 魔法大揭密：排版與設計的三大關鍵技巧",
        text: "在瀏覽器畫面上實現各種精美介面，一直是前端開發充滿成就感的部分。但當面臨複雜的佈局需求或是響應式設計時，往往讓人抓破頭皮。這篇文章想跟大家分享我在實務專案中累積的三大技巧，幫助你更有效率地駕馭 CSS，打造兼具美感與功能性的網頁。",
        image: `${import.meta.env.BASE_URL}images/desktop/blog/photo3.png`,
        mobileImage: `${import.meta.env.BASE_URL}images/mobile/blog/photo3.png`,
        link: "#"
        },
        {
        id: 4,
        time: "2024/07/09",
        tags: ["轉職工程師", "學習心法"],
        tagkey:false,
        title: "前端轉職必讀：從自學者到工程師的心路歷程",
        text: "能夠憑藉自學進入前端領域，聽起來令人振奮，但實際過程中可能遇到的挫折與疑慮，卻常常令人猶豫。回想當初我也是對程式一竅不通，卻在興趣的驅使下毅然踏上自學之路。今天想透過這篇文章，分享我的轉職經驗和一些調適心態的秘訣，盼能為有心投入前端領域的你提供一些力量與方向。",
        image: `${import.meta.env.BASE_URL}images/desktop/blog/photo4.png`,
        mobileImage: `${import.meta.env.BASE_URL}images/mobile/blog/photo4.png`,
        link: "#"
        },
        {
        id: 5,
        time: "2024/07/08",
        tags: ["面試準備", "工程師求職"],
        tagkey:true,
        title: "前端面試不再慌：破解常見提問的三大策略",
        text: "面試前端工程師時，你或許擔心被問到各種刁鑽的技術題目，或是擔憂無法在短時間內展現實力。其實，許多面試官關注的重點並不僅是程式碼本身，更包含問題解決的流程與溝通能力。這篇文章將分享我在面試過程中常見的三大難題，以及如何以更具條理的方式回應，讓你在面試場合中脫穎而出。",
        image: `${import.meta.env.BASE_URL}images/desktop/blog/photo5.png`,
        mobileImage: `${import.meta.env.BASE_URL}images/mobile/blog/photo5.png`,
        link: "#"
        },
        {
        id: 6,
        time: "2024/06/29",
        tags: ["Vue3", "框架學習"],
        tagkey:false,
        title: "Vue 3 新手指南：快速掌握 Composition API 與關鍵特色",
        text: "許多前端開發者對 Vue 一直情有獨鍾，因為它易上手又靈活。隨著 Vue 3 上線，Composition API 的導入更是大幅提升可讀性與維護性。這篇文章將帶你快速瞭解 Vue 3 的獨特魅力，並透過簡單範例幫助你更順利地切換到新版本的思維模式。",
        image: `${import.meta.env.BASE_URL}images/desktop/blog/photo6.png`,
        mobileImage: `${import.meta.env.BASE_URL}images/mobile/blog/photo6.png`,
        link: "#"
        },
        {
        id: 7,
        time: "2024/05/04",
        tags: ["Git", "協作流程"],
        tagkey:false,
        title: "Git 與版本控制：前端協作的必修課",
        text: "當你從一人開發晉升到多人合作，版本控制的好壞往往決定了專案的順暢度。Git 不僅能記錄程式碼變動，更能確保每位成員都在正確的分支上完成任務。透過這篇文章，你將了解常見的 Git 流程，並學會在前端專案中輕鬆管理與協作。",
        image: `${import.meta.env.BASE_URL}images/desktop/blog/photo7.png`,
        mobileImage: `${import.meta.env.BASE_URL}images/mobile/blog/photo7.png`,
        link: "#"
        },
        {
        id: 8,
        time: "2024/05/01",
        tags: ["SEO", "網頁曝光"],
        tagkey:false,
        title: "SEO 與前端最佳實踐：讓搜尋引擎看見你的網站",
        text: "即使你的網站擁有優美的介面與強大的功能，如果在搜尋引擎上找不到它，那就形同隱形。身為前端工程師，瞭解基本的 SEO 概念與技術是讓網站脫穎而出的關鍵。這篇文章將分享我在前端實作時，常用的 SEO 小技巧與實務做法，幫助你顯著提升網站曝光度。",
        image: `${import.meta.env.BASE_URL}images/desktop/blog/photo8.png`,
        mobileImage: `${import.meta.env.BASE_URL}images/mobile/blog/photo8.png`,
        link: "#"
        },
        {
        id: 9,
        time: "2024/02/17",
        tags: ["專案維護", "自動化測試"],
        tagkey:false,
        title: "穩定前端環境的祕訣：依賴管理與自動化流程",
        text: "前端世界日新月異，第三方套件與工具種類繁多，一個不留神就可能引爆依賴衝突。為了確保專案長期維護的穩定度，建立一套良好的依賴管理與自動化流程至關重要。在本文中，我會分享從套件更新到測試部署的實務經驗，讓你在開發時不再手忙腳亂。",
        image: `${import.meta.env.BASE_URL}images/desktop/blog/photo9.png`,
        mobileImage: `${import.meta.env.BASE_URL}images/mobile/blog/photo9.png`,
        link: "#"
        },
        {
        id: 10,
        time: "2024/02/17",
        tags: ["TypeScript", "程式設計"],
        tagkey:false,
        title: "TypeScript 快速上手：強化前端程式碼的安全與可讀性",
        text: "許多前端開發者在成長過程中都曾面臨動態語言帶來的錯誤風險，而 TypeScript 的出現正是為了改善這種情況。它能在開發階段即發現型別錯誤，並帶來更友善的程式碼提示。本篇文章將介紹如何在前端專案中導入 TypeScript，並透過真實案例展示它為開發流程帶來的優勢。",
        image: `${import.meta.env.BASE_URL}images/desktop/blog/photo10.png`,
        mobileImage: `${import.meta.env.BASE_URL}images/mobile/blog/photo10.png`,
        link: "#"
        },
        {
        id: 11,
        time: "2024/02/07",
        tags: ["測試框架", "品質保證"],
        tagkey:false,
        title: "掌握前端測試：從單元測試到端對端測試的完整攻略",
        text: "寫程式容易，但要確保程式在多種情境、裝置都能正常運行就沒那麼簡單了。這時「測試」便成了維持程式品質的關鍵環節。從最基礎的單元測試，到模擬使用者行為的端對端測試，每一種測試方式都有它的價值與最佳應用情境。本文將帶你認識不同類型的前端測試工具，以及如何在開發流程中實踐自動化測試，打造更穩定、可預期的專案。",
        image: `${import.meta.env.BASE_URL}images/desktop/blog/photo11.png`,
        mobileImage: `${import.meta.env.BASE_URL}images/mobile/blog/photo11.png`,
        link: "#"
        },
    ];

    return(
        <>
            <div className='bg-main1 w-100'>
                <div className='bg-main1-mb d-flex flex-column d-block d-xl-none'>
                    <div className='bg-main-mb-bg1'></div>
                    <div className='bg-main-mb-bg2'>
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className='bg-title-box mt-24 mb-40 d-flex flex-column gap-12'>
                                        <h1 className='text-start col-0027D5 fw-900 fs-52 lh-15 fontFamily'>BLOG</h1>
                                        <p className='text-start col-0027D5 fw-700 fs-28 lh-15 fontFamily'>前端工程師 & 職涯諮詢師</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-main1-desktop d-none d-xl-block position-relative'>
                    <div className='bg-main1-desktop-bg d-flex'>
                        <div className='bg-main1-desktop-bg1'>
                        </div>
                        <div className='bg-main1-desktop-bg2'>
                            <div className='bg-title-desktop-box pt-300'>
                                <div className='bg-title-desktop-box2'>
                                    <h1 className='col-0027D5 fs-120 fw-900 lh-15 fontFamily'>BLOG</h1>
                                    <p className='col-0027D5 fs-28 fw-700 lh-15 fontFamily'>前端工程師 & 職涯諮詢師</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
            <div className='bg-main2 w-100'>
                <div className='bg-main2-mb d-flex flex-column d-block d-xl-none'>
                    <div className='bg-main2-mb-bg1'></div>
                    <div className='bg-main2-mb-bg2'>
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className='bg-main2-card-box py-48 d-flex flex-column'>
                                        <div className="main2-card1 border-0 h-100">
                                            <div className="main2-card1-body d-flex flex-column">
                                                {/* 時間 */}
                                                <time dateTime="2024-10-21" className="mb-4 fs-16 fw-500 col-000000 lh-15 fontFamily">2024/10/21</time>
                                                {/* 標籤 */}
                                                <div className="d-flex">
                                                    <span className="me-2 fs-24 fw-500 col-0027D5 fontFamily">前端開發 x 職涯成長</span>
                                                    <span className="ms-8 bg-0027D5 col-ffffff fs-16 fw-700 py-6 px-12 br-40">最新文章</span>
                                                </div>

                                                {/* 標題 */}
                                                <h3 className="mb-8 main2-card1-title fs-28 fw-700 col-000000 lh-15 fontFamily">自學前端不用怕：從零開始的三大關鍵</h3>

                                                {/* 內容 */}
                                                <p className="mb-16 main2-card1-text flex-grow-1 fs-16 fw-500 col-000000 lh-15 fontFamily">
                                                    嗨，我是 Alyse，一名前端工程師兼職涯諮詢師。一直以來，我都很喜歡在部落格分享學習與工作心得，也常有讀者問：「我想轉職/自學前端，該從哪裡開始？」 其實自學的過程既自由又具挑戰性。我整理了三大關鍵，幫助你在短期內建立紮實基礎，並快速累積實戰經驗。希望能替你的前端之路帶來一些啟發與動力！
                                                </p>

                                                {/* 按鈕 */}
                                                <div className='d-flex justify-content-stard'>
                                                    <button type="button" onClick={() => handleGoToDetail(123)} className="card-btn fs-16 fw-500 col-4B4B4B lh-15 fontFamily">
                                                        閱讀內文
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-main2-desktop d-none d-xl-block position-relative'>
                    <div className='bg-main2-desktop-bg d-flex'>
                        <div className='bg-main2-desktop-bg1'>
                        </div>
                        <div className='bg-main2-desktop-bg2'>     
                            <div className='bg-main2-card-box h-100 px-24 d-flex flex-column justify-content-center align-items-start'>
                                <div className="bg-main2-card1 border-0 ">
                                    <div className="main2-card1-body d-flex flex-column">
                                        {/* 時間 */}
                                        <time dateTime="2024-10-21" className="mb-4 fs-16 fw-500 col-000000 lh-15 fontFamily">2024/10/21</time>
                                        {/* 標籤 */}
                                        <div className="d-flex">
                                            <span className="me-2 fs-24 fw-500 col-0027D5 fontFamily">前端開發 x 職涯成長</span>
                                            <span className="ms-8 bg-0027D5 col-ffffff fs-16 fw-700 py-6 px-12 br-40">最新文章</span>
                                        </div>

                                        {/* 標題 */}
                                        <h3 className="mb-8 main2-card1-title fs-28 fw-700 col-000000 lh-15 fontFamily">自學前端不用怕：從零開始的三大關鍵</h3>

                                        {/* 內容 */}
                                        <p className="mb-16 main2-card1-text flex-grow-1 fs-16 fw-500 col-000000 lh-15 fontFamily">
                                            嗨，我是 Alyse，一名前端工程師兼職涯諮詢師。一直以來，我都很喜歡在部落格分享學習與工作心得，也常有讀者問：「我想轉職/自學前端，該從哪裡開始？」 其實自學的過程既自由又具挑戰性。我整理了三大關鍵，幫助你在短期內建立紮實基礎，並快速累積實戰經驗。希望能替你的前端之路帶來一些啟發與動力！
                                        </p>

                                        {/* 按鈕 */}
                                        <div className='d-flex justify-content-stard'>
                                            <button type="button" onClick={() => handleGoToDetail(123)} className="card-btn fs-16 fw-500 col-4B4B4B lh-15 fontFamily">
                                                閱讀內文
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
            <div className='bg-main3 w-100 my-64 my-lg-80'>
                <div className='bg-main3'>
                    <div className="container my-4">
                        <div className="row">
                            <div className="col">
                               <div className="bg-main3-search-container">
                                    <input type="text" className="bg-main3-search-input fw-500 fs-16 lh-15 fontFamily br-40" placeholder="請輸入關鍵字" />
                                    <span className="bg-main3-search-icon material-symbols-outlined">search</span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                        {cards.map(card => (
                            <div key={card.id} className="col-12 col-md-6 col-xl-4 my-40">
                            <div className="card border-0 h-100">
                                <picture>
                                {/* 小於 576px 時使用 mobile 圖片 */}
                                <source media="(max-width: 767.98px)" srcSet={card.mobileImage} />
                                {/* 預設使用桌面圖片 */}
                                <img
                                    src={card.image}
                                    className="card-img rounded-0 d-block mx-auto"
                                    alt={card.title}
                                />
                                </picture>
                                <div className="card-body mt-16 p-0 d-flex flex-column">
                                {/* 時間 */}
                                <time dateTime="2025-05-25" className="mb-4 fs-6 fw-500 card-time-col fontFamily">{card.time}</time>
                                {/* 標籤 */}
                                <div className="d-flex">
                                    {card.tags.map((tag, index) => (
                                    <span key={index} className="me-2 fs-4 fw-500 card-tag-col fontFamily">#{tag}</span>
                                    ))}
                                    {
                                    card.tagkey && (<span className="ms-8 card-tag-bg-col card-tag-col2 fs-6 fw-700 py-6 px-12 br-40">人氣文章</span>)
                                    }
                                </div>

                                {/* 標題 */}
                                <h3 className="mb-8 card-title fs-3 fw-700 card-title-col fontFamily">{card.title}</h3>

                                {/* 內容 */}
                                <p className="mb-16 card-text flex-grow-1 fs-6 fw-500 card-text-col fontFamily">
                                    {card.text}
                                </p>

                                {/* 按鈕 */}
                                <div className='d-flex justify-content-stard'>
                                    <button type="button" className="card-btn fs-6 fw-500 card-btn-col fontFamily">
                                        閱讀內文
                                    </button>
                                </div>
                                </div>

                            </div>
                            </div>
                        ))}
                        </div>
                        <div className="row">
                            <div className="col">
                                <ReactPagination />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Blog;