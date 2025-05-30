import './_Index.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

function Index (){

    const cards = [
        {
        id: 1,
        time: "2024/10/11",
        tags: ["React", "入門基礎"],
        tagkey:false,
        title: "React 入門不再迷惘：三步驟帶你上手核心概念",
        text: "你是否對 React 感到好奇，卻苦惱於該如何正式啟動學習之路？身為前端工程師兼職涯諮詢師，我常遇到同學問我：「React 到底該怎麼入門？」為了幫大家減少摸索的時間，我整理出三個循序漸進的關鍵步驟，帶你更輕鬆地掌握 React 核心概念，真正把理論應用在實際專案中。",
        image: `${import.meta.env.BASE_URL}images/desktop/index/photo.png`,
        mobileImage: `${import.meta.env.BASE_URL}images/mobile/index/photo1.png`,
        link: "#"
        },
        {
        id: 2,
        time: "2024/09/07",
        tags: ["作品集", "求職攻略"],
        tagkey:false,
        title: "前端作品集打造指南：讓你的專案成為履歷亮點",
        text: "對正在求職的前端工程師而言，作品集往往是第一個「說話」的利器。當面試官瀏覽你的網頁作品時，能夠快速了解你的程式邏輯、設計感以及解決問題的思路。我在協助多位同學優化履歷與作品集的過程中，總結出一些關鍵要素，分享給正在打造、升級作品集的你。",
        image: `${import.meta.env.BASE_URL}images/desktop/index/photo2.png`,
        mobileImage: `${import.meta.env.BASE_URL}images/mobile/index/photo2.png`,
        link: "#"
        },
        {
        id: 3,
        time: "2024/09/03",
        tags: ["CSS設計", "視覺體驗"],
        tagkey:false,
        title: "CSS 魔法大揭密：排版與設計的三大關鍵技巧",
        text: "在瀏覽器畫面上實現各種精美介面，一直是前端開發充滿成就感的部分。但當面臨複雜的佈局需求或是響應式設計時，往往讓人抓破頭皮。這篇文章想跟大家分享我在實務專案中累積的三大技巧，幫助你更有效率地駕馭 CSS，打造兼具美感與功能性的網頁。",
        image: `${import.meta.env.BASE_URL}images/desktop/index/photo3.png`,
        mobileImage: `${import.meta.env.BASE_URL}images/mobile/index/photo3.png`,
        link: "#"
        },
        {
        id: 4,
        time: "2024/07/09",
        tags: ["轉職工程師", "學習心法"],
        tagkey:false,
        title: "前端轉職必讀：從自學者到工程師的心路歷程",
        text: "能夠憑藉自學進入前端領域，聽起來令人振奮，但實際過程中可能遇到的挫折與疑慮，卻常常令人猶豫。回想當初我也是對程式一竅不通，卻在興趣的驅使下毅然踏上自學之路。今天想透過這篇文章，分享我的轉職經驗和一些調適心態的秘訣，盼能為有心投入前端領域的你提供一些力量與方向。",
        image: `${import.meta.env.BASE_URL}images/desktop/index/photo4.png`,
        mobileImage: `${import.meta.env.BASE_URL}images/mobile/index/photo4.png`,
        link: "#"
        },
        {
        id: 5,
        time: "2024/07/08",
        tags: ["面試準備", "工程師求職"],
        tagkey:true,
        title: "前端面試不再慌：破解常見提問的三大策略",
        text: "面試前端工程師時，你或許擔心被問到各種刁鑽的技術題目，或是擔憂無法在短時間內展現實力。其實，許多面試官關注的重點並不僅是程式碼本身，更包含問題解決的流程與溝通能力。這篇文章將分享我在面試過程中常見的三大難題，以及如何以更具條理的方式回應，讓你在面試場合中脫穎而出。",
        image: `${import.meta.env.BASE_URL}images/desktop/index/photo5.png`,
        mobileImage: `${import.meta.env.BASE_URL}images/mobile/index/photo5.png`,
        link: "#"
        },
        {
        id: 6,
        time: "2024/06/29",
        tags: ["Vue3", "框架學習"],
        tagkey:false,
        title: "Vue 3 新手指南：快速掌握 Composition API 與關鍵特色",
        text: "許多前端開發者對 Vue 一直情有獨鍾，因為它易上手又靈活。隨著 Vue 3 上線，Composition API 的導入更是大幅提升可讀性與維護性。這篇文章將帶你快速瞭解 Vue 3 的獨特魅力，並透過簡單範例幫助你更順利地切換到新版本的思維模式。",
        image: `${import.meta.env.BASE_URL}images/desktop/index/photo6.png`,
        mobileImage: `${import.meta.env.BASE_URL}images/mobile/index/photo6.png`,
        link: "#"
        },
        {
        id: 7,
        time: "2024/05/04",
        tags: ["Git", "協作流程"],
        tagkey:false,
        title: "Git 與版本控制：前端協作的必修課",
        text: "當你從一人開發晉升到多人合作，版本控制的好壞往往決定了專案的順暢度。Git 不僅能記錄程式碼變動，更能確保每位成員都在正確的分支上完成任務。透過這篇文章，你將了解常見的 Git 流程，並學會在前端專案中輕鬆管理與協作。",
        image: `${import.meta.env.BASE_URL}images/desktop/index/photo7.png`,
        mobileImage: `${import.meta.env.BASE_URL}images/mobile/index/photo7.png`,
        link: "#"
        },
    ];

    return(
        <>
            <div className='main1 w-100'>
                <div className='main1-mb d-flex flex-column d-block d-xl-none'>
                    <div className='main-mb-bg1 bg-1'></div>
                    <div className='main-mb-bg2 bg-2'>
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className='title-box mt-24 mb-40 d-flex flex-column gap-12'>
                                        <h1 className='text-center col-0027D5 fs-52 fontFamily'>Alyse Wang</h1>
                                        <p className='text-center col-0027D5 fs-28 fw-700 fontFamily'>前端工程師 & 職涯諮詢師</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className='bg-white py-40 px-24'>
                                        <p className='fw-500 fs-24 fontFamily mb-8'>嗨，我是<span>Alyse</span></p>
                                        <p className='fw-500 fs-24 fontFamily mb-16'>一名深耕前端技術的工程師。</p>
                                        <p className='fw-500 fs-24 fontFamily mb-16'>擅長 React、Vue 等框架，同時熱愛為轉職與新手工程師提供職涯指導。邀請你與我一起，開啟更具潛能的程式與職涯之旅！</p>
                                        <div className='d-flex flex-wrap gap-4'>
                                            <img src="/images/mobile/index/onlyIcon.png" alt="" />
                                            <img src="/images/mobile/index/onlyIcon-1.png" alt="" />
                                            <img src="/images/mobile/index/onlyIcon-2.png" alt="" />
                                            <img src="/images/mobile/index/icons8-linkedin 1.png" alt="" />
                                            <img src="/images/mobile/index/onlyIcon-3.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        
                    
                </div>
                <div className='main1-desktop d-none d-xl-block position-relative'>
                    <div className='main-desktop-bg d-flex'>
                        <div className='main-desktop-bg1'>
                        </div>
                        <div className='main-desktop-bg2'>
                            <div className='title-desktop-box pt-300 d-flex flex-column justify-content-center align-items-center'>
                                <div className='title-desktop-box2'>
                                    <h1 className='text-center col-0027D5 fs-120 fw-900 lh-15 fontFamily'>Alyse Wang</h1>
                                    <p className='col-0027D5 fs-28 fw-700 lh-15 fontFamily'>前端工程師 & 職涯諮詢師</p>
                                </div>
                            </div>
                            <div className='content-desktop-box bg-white py-80 px-40 position-absolute'>
                                <div className='d-flex flex-column gap-16'>
                                    <p className='fw-500 fs-28 fontFamily mb-8'>嗨，我是<span>Alyse</span><span>一名深耕前端技術的工程師。</span></p>
                                    <p className='fw-500 fs-28 fontFamily mb-16'>擅長 React、Vue 等框架，同時熱愛為轉職與新手工程師提供職涯指導。邀請你與我一起，開啟更具潛能的程式與職涯之旅！</p>
                                    <div className='d-flex gap-4'>
                                        <img src="/images/desktop/index/onlyIcon.png" alt="" />
                                        <img src="/images/desktop/index/onlyIcon-1.png" alt="" />
                                        <img src="/images/desktop/index/onlyIcon-2.png" alt="" />
                                        <img src="/images/desktop/index/icons8-linkedin.png" alt="" />
                                        <img src="/images/desktop/index/onlyIcon-3.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
            <div className='main2 w-100'>
                <div className='main2-mb my-64 d-block d-xl-none'>
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <p className='text-center fw-700 fs-48 lh-15 fontFamily'>專業服務與方案</p>
                            </div>
                            <div class="col-12 mt-32">
                                <div className='main2-img-box'>
                                    <img className='img-set' src={`${import.meta.env.BASE_URL}images/mobile/index/photo1.png`} alt="" />
                                </div>
                                <div className='p-24'>
                                    <div className='main2-icon-box d-flex justify-content-center align-items-center'>
                                        <div className='main2-icon bg-0027D5'></div>
                                    </div>
                                    <div className='d-flex flex-column gap-8'>
                                        <p className='fw-700 fs-28 lh-15 fontFamily'>履歷健檢</p>
                                        <p className='fw-500 fs-16 lh-15 fontFamily col-4B4B4B'>履歷是打開機會之門的第一步。讓我協助你突顯專業技術與核心能力，並透過簡短模擬面試為你加分，讓面試官第一眼就被你吸引。</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 mt-32">
                                <div className='main2-img-box'>
                                    <img className='img-set' src={`${import.meta.env.BASE_URL}images/mobile/index/photo2.png`} alt="" />
                                </div>
                                <div className='p-24'>
                                    <div className='main2-icon-box d-flex justify-content-center align-items-center'>
                                        <div className='main2-icon bg-0027D5'></div>
                                    </div>
                                    <div className='d-flex flex-column gap-8'>
                                        <p className='fw-700 fs-28 lh-15 fontFamily'>線上諮詢</p>
                                        <p className='fw-500 fs-16 lh-15 fontFamily col-4B4B4B'>想快速解決前端學習瓶頸，或需要專業職涯指引？透過線上一對一諮詢，我將協助你更有方向地邁進。</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 mt-32">
                                <div className='main2-img-box'>
                                    <img className='img-set' src={`${import.meta.env.BASE_URL}images/mobile/index/photo3.png`} alt="" />
                                </div>
                                <div className='p-24'>
                                    <div className='main2-icon-box d-flex justify-content-center align-items-center'>
                                        <div className='main2-icon bg-0027D5'></div>
                                    </div>
                                    <div className='d-flex flex-column gap-8'>
                                        <p className='fw-700 fs-28 lh-15 fontFamily'>網頁開發</p>
                                        <p className='fw-500 fs-16 lh-15 fontFamily col-4B4B4B'>想打造高效能、具美感的網站？我提供從需求訪談到架構實作的一站式服務，讓你的品牌與產品在線上脫穎而出。</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 mt-32">
                                <div className='main2-img-box'>
                                    <img className='img-set' src={`${import.meta.env.BASE_URL}images/mobile/index/photo4.png`} alt="" />
                                </div>
                                <div className='p-24'>
                                    <div className='main2-icon-box d-flex justify-content-center align-items-center'>
                                        <div className='main2-icon bg-0027D5'></div>
                                    </div>
                                    <div className='d-flex flex-column gap-8'>
                                        <p className='fw-700 fs-28 lh-15 fontFamily'>企業內訓</p>
                                        <p className='fw-500 fs-16 lh-15 fontFamily col-4B4B4B'>想讓團隊快速掌握前端最新技術或優化現有專案流程？我可協助打造專業、實用的企業內訓課程，一次解決團隊痛點。</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 mt-32">
                               
                                <div className=''>
                                    <p className='text-end fw-700 fs-28 lh-15 fontFamily'>聯繫我，取得更多資訊！</p>
                                    <div className='main2-icon-box ms-auto mt-8 border border-1 border-dark br-40 d-flex justify-content-center align-items-center'>
                                        <span class="material-symbols-outlined">
                                            arrow_forward
                                        </span>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className='main2-desktop my-80 d-none d-xl-block'>
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <p className='fw-700 fs-64 lh-15 fontFamily'>專業服務與方案</p>
                            </div>

                            <div class="col-12 mt-32">
                                <div className='main2-desktop-img-box main2-desktop-img-1 pe-110 d-flex justify-content-end align-items-center'>
                                    <div className='main2-desktop-content-box bg-ffffff p-24'>
                                        <div className='main2-icon-box d-flex justify-content-center align-items-center'>
                                            <div className='main2-icon bg-0027D5'></div>
                                        </div>
                                        <div className='d-flex flex-column gap-8'>
                                            <p className='fw-700 fs-28 lh-15 fontFamily'>履歷健檢</p>
                                            <p className='fw-500 fs-16 lh-15 fontFamily col-4B4B4B'>履歷是打開機會之門的第一步。讓我協助你突顯專業技術與核心能力，並透過簡短模擬面試為你加分，讓面試官第一眼就被你吸引。</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-12 mt-64">
                                <div className='main2-desktop-img-box-2 main2-desktop-img-2 ps-110 d-flex justify-content-start align-items-center'>
                                    <div className='main2-desktop-content-box bg-ffffff p-24'>
                                        <div className='main2-icon-box d-flex justify-content-center align-items-center'>
                                            <div className='main2-icon bg-0027D5'></div>
                                        </div>
                                        <div className='d-flex flex-column gap-8'>
                                            <p className='fw-700 fs-28 lh-15 fontFamily'>線上諮詢</p>
                                            <p className='fw-500 fs-16 lh-15 fontFamily col-4B4B4B'>想快速解決前端學習瓶頸，或需要專業職涯指引？透過線上一對一諮詢，我將協助你更有方向地邁進。</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-12 mt-64">
                                <div className='main2-desktop-img-box main2-desktop-img-1 pe-110 d-flex justify-content-end align-items-center'>
                                    <div className='main2-desktop-content-box bg-ffffff p-24'>
                                        <div className='main2-icon-box d-flex justify-content-center align-items-center'>
                                            <div className='main2-icon bg-0027D5'></div>
                                        </div>
                                        <div className='d-flex flex-column gap-8'>
                                            <p className='fw-700 fs-28 lh-15 fontFamily'>網頁開發</p>
                                            <p className='fw-500 fs-16 lh-15 fontFamily col-4B4B4B'>想打造高效能、具美感的網站？我提供從需求訪談到架構實作的一站式服務，讓你的品牌與產品在線上脫穎而出。</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-12 mt-64">
                                <div className='main2-desktop-img-box-2 main2-desktop-img-2 ps-110 d-flex justify-content-start align-items-center'>
                                    <div className='main2-desktop-content-box bg-ffffff p-24'>
                                        <div className='main2-icon-box d-flex justify-content-center align-items-center'>
                                            <div className='main2-icon bg-0027D5'></div>
                                        </div>
                                        <div className='d-flex flex-column gap-8'>
                                            <p className='fw-700 fs-28 lh-15 fontFamily'>企業內訓</p>
                                            <p className='fw-500 fs-16 lh-15 fontFamily col-4B4B4B'>想讓團隊快速掌握前端最新技術或優化現有專案流程？我可協助打造專業、實用的企業內訓課程，一次解決團隊痛點。</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-12 mt-32">
                               
                                <div className='d-flex justify-content-end align-items-center gap-8'>
                                    <p className='fw-700 fs-28 lh-15 fontFamily'>聯繫我，取得更多資訊！</p>
                                    <div className='main2-icon-box border border-1 border-dark br-40 d-flex justify-content-center align-items-center'>
                                        <span class="material-symbols-outlined">
                                            arrow_forward
                                        </span>
                                    </div>
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className='main3 w-100 border-top border-bottom border-2 border-secondary'>
                <div className='main3-mb my-64 d-block d-xl-none'>
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <p className='fw-700 fs-48 lh-15 fontFamily'>部落格精選</p>
                            </div>
                            <div class="col-12 mt-24">
                                
                                    <Swiper     
                                        // spaceBetween={10} 
                                        slidesPerView={1}
                                        modules={[Navigation]}
                                        navigation={{   prevEl: ".custom-prev", 
                                                        nextEl: ".custom-next" }}
                                        loop autoplay={{ delay: 3000 }}
                                        className=''>

                                        {cards.map((card, index) => (
                                            <SwiperSlide key={index}>
                                                <div className="card border-0">
                                                    <div className='card-img-box'>
                                                        <img
                                                            src={card.mobileImage}
                                                            className="img-set rounded-0 d-block mx-auto"
                                                            alt=""
                                                        />
                                                        {/* "/images/mobile/index/photo2.png" */}
                                                        {/* {card.mobileImage} */}
                                                    </div>
                                                    <div className="card-body mt-16 p-0 d-flex flex-column">
                                                        {/* 時間 */}
                                                        <time dateTime="2025-05-25" className="mb-4 fw-500 fs-16 col-000000 lh-15 fontFamily">{card.time}</time>
                                                        {/* 標籤 */}
                                                        <div className="d-flex">
                                                            {card.tags.map((tag, index) => (
                                                            <span key={index} className="me-2 fw-500 fs-24 col-0027D5 lh-15 fontFamily">#{tag}</span>
                                                            ))}
                                                            {
                                                            card.tagkey && (<span className="ms-8 bg-0027D5 col-ffffff fw-700 fs-16 lh-15 fontFamily py-6 px-12 br-40">人氣文章</span>)
                                                            }
                                                        </div>

                                                        {/* 標題 */}
                                                        <h3 className="mb-8 card-title fw-700 fs-28 col-000000 lh-15 fontFamily">{card.title}</h3>

                                                        {/* 內容 */}
                                                        <p className="mb-16 card-text flex-grow-1 fw-500 fs-16 col-000000 lh-15 fontFamily">
                                                            {card.text}
                                                        </p>

                                                        {/* 按鈕 */}
                                                        <div className='d-flex justify-content-stard'>
                                                            <button type="button" className="card-btn fw-500 fs-16 col-4B4B4B lh-15 fontFamily">
                                                                閱讀內文
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                    {/* 自訂左右箭頭 */}
                                    <div className='custom-box mt-32 d-flex justify-content-end align-items-center gap-24'>
                                        <div className="custom-prev bg-0027D5 br-40 d-flex justify-content-center align-items-center pointer">
                                            <span class="material-symbols-outlined col-ffffff">
                                                arrow_back
                                            </span>
                                        </div>
                                        <div className="custom-next bg-0027D5 br-40 d-flex justify-content-center align-items-center pointer">
                                            <span class="material-symbols-outlined col-ffffff">
                                                arrow_forward
                                            </span>
                                        </div>
                                    </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className='main3-desktop my-80 d-none d-xl-block'>
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <p className='fw-700 fs-64 lh-15 fontFamily'>部落格精選</p>
                            </div>
                            <div class="col-12 mt-24 position-relative">
                                
                                    <Swiper     
                                        spaceBetween={24} 
                                        slidesPerView={3}
                                        modules={[Navigation]}
                                        navigation={{   prevEl: ".custom-desktop-prev", 
                                                        nextEl: ".custom-desktop-next" }}
                                        loop autoplay={{ delay: 3000 }}
                                        className=''>

                                        {cards.map((card, index) => (
                                            <SwiperSlide key={index}>
                                                <div className="card border-0">
                                                    <div className='card-img-box'>
                                                        <img
                                                            src={card.mobileImage}
                                                            className="img-set rounded-0 d-block mx-auto"
                                                            alt=""
                                                        />
                                                        {/* "/images/mobile/index/photo2.png" */}
                                                        {/* {card.mobileImage} */}
                                                    </div>
                                                    <div className="card-body mt-16 p-0 d-flex flex-column">
                                                        {/* 時間 */}
                                                        <time dateTime="2025-05-25" className="mb-4 fw-500 fs-16 col-000000 lh-15 fontFamily">{card.time}</time>
                                                        {/* 標籤 */}
                                                        <div className="d-flex">
                                                            {card.tags.map((tag, index) => (
                                                            <span key={index} className="me-2 fw-500 fs-24 col-0027D5 lh-15 fontFamily">#{tag}</span>
                                                            ))}
                                                            {
                                                            card.tagkey && (<span className="ms-8 bg-0027D5 col-ffffff fw-700 fs-16 lh-15 fontFamily py-6 px-12 br-40">人氣文章</span>)
                                                            }
                                                        </div>

                                                        {/* 標題 */}
                                                        <h3 className="mb-8 card-title fw-700 fs-28 col-000000 lh-15 fontFamily">{card.title}</h3>

                                                        {/* 內容 */}
                                                        <p className="mb-16 card-text flex-grow-1 fw-500 fs-16 col-000000 lh-15 fontFamily">
                                                            {card.text}
                                                        </p>

                                                        {/* 按鈕 */}
                                                        <div className='d-flex justify-content-stard'>
                                                            <button type="button" className="card-btn fw-500 fs-16 col-4B4B4B lh-15 fontFamily">
                                                                閱讀內文
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                    {/* 自訂左右箭頭 */}
                                    <div className='custom-box d-flex justify-content-end align-items-center gap-24'>
                                        <div className="custom-desktop-prev bg-0027D5 br-40 d-flex justify-content-center align-items-center pointer">
                                            <span class="material-symbols-outlined col-ffffff">
                                                arrow_back
                                            </span>
                                        </div>
                                        <div className="custom-desktop-next bg-0027D5 br-40 d-flex justify-content-center align-items-center pointer">
                                            <span class="material-symbols-outlined col-ffffff">
                                                arrow_forward
                                            </span>
                                        </div>
                                    </div>    
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className='main4 w-100'>
                <div className='main4-mb my-64 d-block d-xl-none'>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <p className='fw-700 fs-48 lh-15 fontFamily'>職涯諮詢</p>
                                <p className='fw-700 fs-48 lh-15 fontFamily'>成功案例</p>
                            </div>
                            <div className="col-12 mt-24  main4-mb-bg">
                                <div className='main4-mb-img-box px-24 pt-24'>
                                    <img className='img-set main4-mb-img' src={`${import.meta.env.BASE_URL}images/mobile/index/photo8.png`} alt="" />
                                </div>
                            </div>
                            <div className="col-12 ">
                                <div className='main4-mb-content px-24 py-40'>
                                    <div className='main4-icon-box d-flex justify-content-center align-items-center'>
                                        <div className='main4-icon bg-0027D5'></div>
                                    </div>
                                    <div className='mt-24'>
                                        <p className='fw-700 fs-16 lh-15 fontFamily col-000000'>在職涯發展的關鍵轉折點上，適時的協助與正確的方向至關重要。藉由職涯諮詢，我可以幫助你加速釐清目標、建立更全面的技術與軟實力，並有效<span className='col-0027D5'>突破原有的舒適圈</span>
                                        。</p>
                                    </div>
                                </div>
                                <div className='main4-mb-content2 mt-12 px-24 py-40'>
                                    <div className='main4-icon-box d-flex justify-content-center align-items-center'>
                                        <div className='main4-icon bg-0027D5'></div>
                                    </div>
                                    <div className='mt-24'>
                                        <p className='fw-700 fs-16 lh-15 fontFamily col-000000'>期待在下一個新機會中，我能與你一起攜手邁向更高峰！</p>
                                    </div>
                                    <div className='mt-24 d-flex justify-content-stard'>
                                        <button type="button" className="main4-mb-card-btn fw-700 fs-16 col-0027D5 lh-15 fontFamily br-40">
                                            立即預約諮詢
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mt-40">
                                <div className='main4-mb-content3 p-24'>
                                    <div>
                                        <div className='main4-mb-content3-img-box br-40'>
                                            <img className='img-set' src={`${import.meta.env.BASE_URL}images/mobile/index/people1.png`} alt="" />
                                        </div>
                                        <p className='mt-16 fw-700 fs-24 lh-15 fontFamily col-000000'>無經驗到前端工程師 Offer</p>
                                        <div className='mt-8 d-flex justify-content-start align-items-center gap-8'>
                                            <span class="material-symbols-outlined fs-16 bg-0027D5 col-ffffff rounded-1">
                                                check
                                            </span>
                                            <p className='fw-500 fs-16 lh-15 fontFamily col-4B4B4B'>打造前端專案與履歷亮點</p>
                                        </div>
                                        <div className='mt-8 pb-16 border-bottom border-1 border-secondary d-flex justify-content-start align-items-center gap-8'>
                                            <span class="material-symbols-outlined fs-16 bg-0027D5 col-ffffff rounded-1">
                                                check
                                            </span>
                                            <p className='fw-500 fs-16 lh-15 fontFamily col-4B4B4B'>深度強化面試表現</p>
                                        </div>
                                        <div className='mt-16 d-flex justify-content-stard'>
                                            <button type="button" className="card-btn fw-500 fs-16 col-4B4B4B lh-15 fontFamily">
                                                前往聆聽 podcast
                                            </button>
                                        </div>
                                    </div>
                                    <div className='mt-24'>
                                        <div className='main4-mb-content3-img-box br-40'>
                                            <img className='img-set' src={`${import.meta.env.BASE_URL}images/mobile/index/people2.png`} alt="" />
                                        </div>
                                        <p className='mt-16 fw-700 fs-24 lh-15 fontFamily col-000000'>轉職迷茫到明確學習規劃</p>
                                        <div className='mt-8 d-flex justify-content-start align-items-center gap-8'>
                                            <span class="material-symbols-outlined fs-16 bg-0027D5 col-ffffff rounded-1">
                                                check
                                            </span>
                                            <p className='fw-500 fs-16 lh-15 fontFamily col-4B4B4B'>制訂階段性目標與時間安排</p>
                                        </div>
                                        <div className='mt-8 pb-16 border-bottom border-1 border-secondary d-flex justify-content-start align-items-center gap-8'>
                                            <span class="material-symbols-outlined fs-16 bg-0027D5 col-ffffff rounded-1">
                                                check
                                            </span>
                                            <p className='fw-500 fs-16 lh-15 fontFamily col-4B4B4B'>鼓勵參與前端社群或活動</p>
                                        </div>
                                        <div className='mt-16 d-flex justify-content-stard'>
                                            <button type="button" className="card-btn fw-500 fs-16 col-4B4B4B lh-15 fontFamily">
                                                前往聆聽 podcast
                                            </button>
                                        </div>
                                    </div>
                                    <div className='mt-24'>
                                        <div className='main4-mb-content3-img-box br-40'>
                                            <img className='img-set' src="/images/mobile/index/people3.png" alt="" />
                                        </div>
                                        <p className='mt-16 fw-700 fs-24 lh-15 fontFamily col-000000'>面試緊張到從容應對</p>
                                        <div className='mt-8 d-flex justify-content-start align-items-center gap-8'>
                                            <span class="material-symbols-outlined fs-16 bg-0027D5 col-ffffff rounded-1">
                                                check
                                            </span>
                                            <p className='fw-500 fs-16 lh-15 fontFamily col-4B4B4B'>透過面試模擬找出常犯的邏輯漏洞</p>
                                        </div>
                                        <div className='mt-8 pb-16 border-bottom border-1 border-secondary d-flex justify-content-start align-items-center gap-8'>
                                            <span class="material-symbols-outlined fs-16 bg-0027D5 col-ffffff rounded-1">
                                                check
                                            </span>
                                            <p className='fw-500 fs-16 lh-15 fontFamily col-4B4B4B'>討論遇到不熟悉議題時的回應方式</p>
                                        </div>
                                        <div className='mt-16 d-flex justify-content-stard'>
                                            <button type="button" className="card-btn fw-500 fs-16 col-4B4B4B lh-15 fontFamily">
                                                前往聆聽 podcast
                                            </button>
                                        </div>
                                    </div>
                                    <div className='mt-24'>
                                        <div className='main4-mb-content3-img-box br-40'>
                                            <img className='img-set' src={`${import.meta.env.BASE_URL}images/mobile/index/people4.png`} alt="" />
                                        </div>
                                        <p className='mt-16 fw-700 fs-24 lh-15 fontFamily col-000000'>面試緊張到從容應對</p>
                                        <div className='mt-8 d-flex justify-content-start align-items-center gap-8'>
                                            <span class="material-symbols-outlined fs-16 bg-0027D5 col-ffffff rounded-1">
                                                check
                                            </span>
                                            <p className='fw-500 fs-16 lh-15 fontFamily col-4B4B4B'>擬定進階框架或技術研究目標</p>
                                        </div>
                                        <div className='mt-8 pb-16 border-bottom border-1 border-secondary d-flex justify-content-start align-items-center gap-8'>
                                            <span class="material-symbols-outlined fs-16 bg-0027D5 col-ffffff rounded-1">
                                                check
                                            </span>
                                            <p className='fw-500 fs-16 lh-15 fontFamily col-4B4B4B'>培養跨團隊溝通與簡報能力</p>
                                        </div>
                                        <div className='mt-16 d-flex justify-content-stard'>
                                            <button type="button" className="card-btn fw-500 fs-16 col-4B4B4B lh-15 fontFamily">
                                                前往聆聽 podcast
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='main4-desktop my-80 d-none d-xl-block'>
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <p className='fw-700 fs-64 lh-15 fontFamily'>職涯諮詢成功案例</p>
                            </div>
                            <div class="col-12 mt-24 main4-desktop-bg position-relative">
                               <div className='main4-desktop-img-box px-24 py-24'>
                                    <img className='img-set main4-desktop-img' src={`${import.meta.env.BASE_URL}images/desktop/index/photo8.png`} alt="" />
                                </div>
                                <div className='main4-desktop-content1-box bg-ffffff px-40 py-80 w526 position-absolute'>
                                    <div className='main4-icon-box d-flex justify-content-center align-items-center'>
                                        <div className='main4-icon bg-0027D5'></div>
                                    </div>
                                    <div className='mt-24'>
                                        <p className='w446 fw-700 fs-16 lh-15 fontFamily col-000000'>在職涯發展的關鍵轉折點上，適時的協助與正確的方向至關重要。藉由職涯諮詢，我可以幫助你加速釐清目標、建立更全面的技術與軟實力，並有效。<span className='col-0027D5'>突破原有的舒適圈</span></p>
                                    </div>
                                </div>
                                <div className='main4-desktop-content2-box bg-ffffff px-40 py-80 w526 position-absolute'>
                                    <div className='main4-icon-box d-flex justify-content-center align-items-center'>
                                        <div className='main4-icon bg-0027D5'></div>
                                    </div>
                                    <div className='mt-24'>
                                        <p className='w446 fw-700 fs-16 lh-15 fontFamily col-000000'>期待在下一個新機會中，我能與你一起攜手邁向更高峰！</p>
                                    </div>
                                    <div className='mt-24 d-flex justify-content-stard'>
                                        <button type="button" className="main4-mb-card-btn fw-700 fs-16 col-0027D5 lh-15 fontFamily br-40">
                                            立即預約諮詢
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                <div className='p-24 d-flex justify-content-between align-items-center'>
                                    <div>
                                        <div className='main4-mb-content3-img-box br-40'>
                                            <img className='img-set' src={`${import.meta.env.BASE_URL}images/desktop/index/people1.png`} alt="" />
                                        </div>
                                        <p className='mt-16 fw-700 fs-24 lh-15 fontFamily col-000000'>無經驗到前端工程師 Offer</p>
                                        <div className='mt-8 d-flex justify-content-start align-items-center gap-8'>
                                            <span class="material-symbols-outlined fs-16 bg-0027D5 col-ffffff rounded-1">
                                                check
                                            </span>
                                            <p className='fw-500 fs-16 lh-15 fontFamily col-4B4B4B'>打造前端專案與履歷亮點</p>
                                        </div>
                                        <div className='mt-8 pb-16 border-bottom border-1 border-secondary d-flex justify-content-start align-items-center gap-8'>
                                            <span class="material-symbols-outlined fs-16 bg-0027D5 col-ffffff rounded-1">
                                                check
                                            </span>
                                            <p className='fw-500 fs-16 lh-15 fontFamily col-4B4B4B'>深度強化面試表現</p>
                                        </div>
                                        <div className='mt-16 d-flex justify-content-stard'>
                                            <button type="button" className="card-btn fw-500 fs-16 col-4B4B4B lh-15 fontFamily">
                                                前往聆聽 podcast
                                            </button>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='main4-mb-content3-img-box br-40'>
                                            <img className='img-set' src={`${import.meta.env.BASE_URL}images/desktop/index/people2.png`} alt="" />
                                        </div>
                                        <p className='mt-16 fw-700 fs-24 lh-15 fontFamily col-000000'>轉職迷茫到明確學習規劃</p>
                                        <div className='mt-8 d-flex justify-content-start align-items-center gap-8'>
                                            <span class="material-symbols-outlined fs-16 bg-0027D5 col-ffffff rounded-1">
                                                check
                                            </span>
                                            <p className='fw-500 fs-16 lh-15 fontFamily col-4B4B4B'>制訂階段性目標與時間安排</p>
                                        </div>
                                        <div className='mt-8 pb-16 border-bottom border-1 border-secondary d-flex justify-content-start align-items-center gap-8'>
                                            <span class="material-symbols-outlined fs-16 bg-0027D5 col-ffffff rounded-1">
                                                check
                                            </span>
                                            <p className='fw-500 fs-16 lh-15 fontFamily col-4B4B4B'>鼓勵參與前端社群或活動</p>
                                        </div>
                                        <div className='mt-16 d-flex justify-content-stard'>
                                            <button type="button" className="card-btn fw-500 fs-16 col-4B4B4B lh-15 fontFamily">
                                                前往聆聽 podcast
                                            </button>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='main4-mb-content3-img-box br-40'>
                                            <img className='img-set' src={`${import.meta.env.BASE_URL}images/desktop/index/people3.png`} alt="" />
                                        </div>
                                        <p className='mt-16 fw-700 fs-24 lh-15 fontFamily col-000000'>面試緊張到從容應對</p>
                                        <div className='mt-8 d-flex justify-content-start align-items-center gap-8'>
                                            <span class="material-symbols-outlined fs-16 bg-0027D5 col-ffffff rounded-1">
                                                check
                                            </span>
                                            <p className='fw-500 fs-16 lh-15 fontFamily col-4B4B4B'>透過面試模擬找出常犯的邏輯漏洞</p>
                                        </div>
                                        <div className='mt-8 pb-16 border-bottom border-1 border-secondary d-flex justify-content-start align-items-center gap-8'>
                                            <span class="material-symbols-outlined fs-16 bg-0027D5 col-ffffff rounded-1">
                                                check
                                            </span>
                                            <p className='fw-500 fs-16 lh-15 fontFamily col-4B4B4B'>討論遇到不熟悉議題時的回應方式</p>
                                        </div>
                                        <div className='mt-16 d-flex justify-content-stard'>
                                            <button type="button" className="card-btn fw-500 fs-16 col-4B4B4B lh-15 fontFamily">
                                                前往聆聽 podcast
                                            </button>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='main4-mb-content3-img-box br-40'>
                                            <img className='img-set' src={`${import.meta.env.BASE_URL}images/desktop/index/people4.png`} alt="" />
                                        </div>
                                        <p className='mt-16 fw-700 fs-24 lh-15 fontFamily col-000000'>面試緊張到從容應對</p>
                                        <div className='mt-8 d-flex justify-content-start align-items-center gap-8'>
                                            <span class="material-symbols-outlined fs-16 bg-0027D5 col-ffffff rounded-1">
                                                check
                                            </span>
                                            <p className='fw-500 fs-16 lh-15 fontFamily col-4B4B4B'>擬定進階框架或技術研究目標</p>
                                        </div>
                                        <div className='mt-8 pb-16 border-bottom border-1 border-secondary d-flex justify-content-start align-items-center gap-8'>
                                            <span class="material-symbols-outlined fs-16 bg-0027D5 col-ffffff rounded-1">
                                                check
                                            </span>
                                            <p className='fw-500 fs-16 lh-15 fontFamily col-4B4B4B'>培養跨團隊溝通與簡報能力</p>
                                        </div>
                                        <div className='mt-16 d-flex justify-content-stard'>
                                            <button type="button" className="card-btn fw-500 fs-16 col-4B4B4B lh-15 fontFamily">
                                                前往聆聽 podcast
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='main5 w-100'>
                <div className='main5-mb d-block d-xl-none'>
                    <div className='main5-mb-bg'>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 ">
                            </div>
                            <div className="col-12 py-12">
                                <div className='py-40 px-24'>
                                    <p className='fw-700 fs-48 lh-15 fontFamily'>訂閱電子報</p>
                                    <p className='mt-16 fw-500 fs-20 lh-15 fontFamily'>立即訂閱，搶先掌握<span className='col-0027D5'>前端 x 職涯</span> 的獨家資訊！</p>
                                    <form className='mt-24'>
                                        <input type="text" class="main5-md-input" placeholder="請輸入您的大名"/>
                                        <input type="text" class="main5-md-input" placeholder="請輸入您的電子信箱"/>
                                        <div className='mt-24 d-flex justify-content-stard'>
                                            <button type="submit" className="main4-mb-card-btn fw-700 fs-16 col-0027D5 lh-15 fontFamily br-40">
                                                啟動訂閱
                                            </button>
                                        </div>
                                    </form>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='main5-desktop my-80 d-none d-xl-block'>
                    <div className='d-flex'>
                        <div className="main5-desktop-bg1"></div>
                        <div className="main5-desktop-bg2">
                            <div className='h-100 d-flex justify-content-center align-items-center'>
                                <div className='p-40 bg-ffffff'>
                                    <p className='fw-700 fs-64 lh-15 fontFamily'>訂閱電子報</p>
                                    <p className='mt-16 fw-500 fs-20 lh-15 fontFamily'>立即訂閱，搶先掌握<span className='col-0027D5'>前端 x 職涯</span> 的獨家資訊！</p>
                                    <form className='mt-24'>
                                        <input type="text" class="main5-md-input" placeholder="請輸入您的大名"/>
                                        <input type="text" class="main5-md-input" placeholder="請輸入您的電子信箱"/>
                                        <div className='mt-24 d-flex justify-content-stard'>
                                            <button type="submit" className="main4-mb-card-btn fw-700 fs-16 col-0027D5 lh-15 fontFamily br-40">
                                                啟動訂閱
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
            <div className='main6 w-100'>
                <div className='main6-mb my-64 d-block d-xl-none'>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <p className='fw-700 fs-48 lh-15 fontFamily'>與我聯繫</p>
                            </div>
                            <div className="col-12">
                                <div className='mt-24 pb-16 d-flex flex-column row-gap-8 border-bottom border-1 border-secondary'>
                                    <p className='fw-500 fs-24 lh-15 fontFamily'>alysewang@hexschool.com我我我我我我我我我我我我我我我</p>
                                    <p className='fw-500 fs-24 lh-15 fontFamily'>合作洽談</p>
                                    <span class="material-symbols-outlined pointer">
                                        arrow_forward
                                    </span>
                                </div>
                                <div className='mt-24 pb-20 d-flex flex-column row-gap-8 border-bottom border-1 border-secondary pointer'>
                                    <div className='d-flex justify-content-start align-items-center gap-8'>
                                        <img src={`${import.meta.env.BASE_URL}images/mobile/index/onlyIcon.png`} alt="" />
                                        <p className='fw-500 fs-24 lh-15 fontFamily'>Youtube 職涯諮詢室我我我我我我我我我午我我我我</p>
                                    </div>
                                    <span class="material-symbols-outlined pointer">
                                        arrow_forward
                                    </span>
                                </div>
                                <div className='mt-24 pb-20 d-flex flex-column row-gap-8 border-bottom border-1 border-secondary pointer'>
                                    <div className='d-flex justify-content-start align-items-center gap-8'>
                                        <img src={`${import.meta.env.BASE_URL}images/mobile/index/onlyIcon-1.png`} alt="" />
                                        <p className='fw-500 fs-24 lh-15 fontFamily'>podcast 職涯諮詢室</p>
                                    </div>
                                    <span class="material-symbols-outlined pointer">
                                        arrow_forward
                                    </span>
                                </div>
                                <div className='mt-24 pb-20 d-flex flex-column row-gap-8 border-bottom border-1 border-secondary pointer'>
                                    <div className='d-flex justify-content-start align-items-center gap-8'>
                                        <img src={`${import.meta.env.BASE_URL}images/mobile/index/onlyIcon-2.png`} alt="" />
                                        <p className='fw-500 fs-24 lh-15 fontFamily'>Facebook 前端社群</p>
                                    </div>
                                    <span class="material-symbols-outlined pointer">
                                        arrow_forward
                                    </span>
                                </div>
                                <div className='mt-24 pb-20 d-flex flex-column row-gap-8 border-bottom border-1 border-secondary pointer'>
                                    <div className='d-flex justify-content-start align-items-center gap-8'>
                                        <img src={`${import.meta.env.BASE_URL}images/mobile/index/icons8-linkedin 1.png`} alt="" />
                                        <p className='fw-500 fs-24 lh-15 fontFamily'>linkedin 職涯交流</p>
                                    </div>
                                    <span class="material-symbols-outlined pointer">
                                        arrow_forward
                                    </span>
                                </div>
                                <div className='mt-24 pb-20 d-flex flex-column row-gap-8 border-bottom border-1 border-secondary pointer'>
                                    <div className='d-flex justify-content-start align-items-center gap-8'>
                                        <img src={`${import.meta.env.BASE_URL}images/mobile/index/onlyIcon-3.png`} alt="" />
                                        <p className='fw-500 fs-24 lh-15 fontFamily'>Instagram 日常分享</p>
                                    </div>
                                    <span class="material-symbols-outlined pointer">
                                        arrow_forward
                                    </span>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className='main6-desktop my-80 d-none d-xl-block'>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <p className='fw-700 fs-64 lh-15 fontFamily'>與我聯繫</p>
                            </div>
                            <div className="col-12">
                                <div className='mt-24 pb-16 d-flex justify-content-center align-items-center gap-8 border-bottom border-1 border-secondary pointer'>
                                    <p className='fw-500 fs-32 lh-15 fontFamily'>alysewang@hexschool.com</p>
                                    <p className='fw-500 fs-28 lh-15 fontFamily'>合作洽談</p>
                                    <span class="material-symbols-outlined pointer ms-auto">
                                        arrow_forward
                                    </span>
                                </div>
                                <div className='mt-17 pb-17 d-flex justify-content-start align-items-center gap-8 border-bottom border-1 border-secondary pointer'>
                                    <img src={`${import.meta.env.BASE_URL}images/mobile/index/onlyIcon.png`} alt="" />
                                    <p className='fw-500 fs-24 lh-15 fontFamily'>Youtube 職涯諮詢室</p>
                                    <span class="material-symbols-outlined pointer  ms-auto">
                                        arrow_forward
                                    </span>
                                </div>
                                <div className='mt-17 pb-17 d-flex justify-content-start align-items-center gap-8 border-bottom border-1 border-secondary pointer'>
                                    <img src={`${import.meta.env.BASE_URL}images/mobile/index/onlyIcon-1.png`} alt="" />
                                    <p className='fw-500 fs-24 lh-15 fontFamily'>podcast 職涯諮詢室</p>
                                    <span class="material-symbols-outlined pointer  ms-auto">
                                        arrow_forward
                                    </span>
                                </div>
                                <div className='mt-17 pb-17 d-flex justify-content-start align-items-center gap-8 border-bottom border-1 border-secondary pointer'>
                                    <img src={`${import.meta.env.BASE_URL}images/mobile/index/onlyIcon-2.png`} alt="" />
                                    <p className='fw-500 fs-24 lh-15 fontFamily'>Facebook 前端社群</p>
                                    <span class="material-symbols-outlined pointer  ms-auto">
                                        arrow_forward
                                    </span>
                                </div>
                                <div className='mt-17 pb-17 d-flex justify-content-start align-items-center gap-8 border-bottom border-1 border-secondary pointer'>
                                    <img src={`${import.meta.env.BASE_URL}images/mobile/index/icons8-linkedin 1.png`} alt="" />
                                    <p className='fw-500 fs-24 lh-15 fontFamily'>linkedin 職涯交流</p>
                                    <span class="material-symbols-outlined pointer  ms-auto">
                                        arrow_forward
                                    </span>
                                </div>
                                <div className='mt-17 pb-17 d-flex justify-content-start align-items-center gap-8 border-bottom border-1 border-secondary pointer'>
                                    <img src={`${import.meta.env.BASE_URL}images/mobile/index/onlyIcon-3.png`} alt="" />
                                    <p className='fw-500 fs-24 lh-15 fontFamily'>Instagram 日常分享</p>
                                    <span class="material-symbols-outlined pointer  ms-auto">
                                        arrow_forward
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Index;

