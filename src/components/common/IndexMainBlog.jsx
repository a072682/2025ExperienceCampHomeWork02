import './_IndexMainBlog.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

function IndexMainBlog(){

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
        <div className='main-blog w-100 border-top border-bottom border-2 border-secondary my-80 '>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='my-64 my-lg-80 position-relative'>
                            <h2 className='fw-700 fs-48 fs-xl-64 lh-15 fontFamily mb-24'>部落格精選</h2>
                            <Swiper
                                    spaceBetween={24}
                                    breakpoints={{
                                        0: { slidesPerView: 1 },
                                        1200: { slidesPerView: 3 }
                                    }}
                                    modules={[Navigation]}
                                    navigation={{ prevEl: ".custom-prev", nextEl: ".custom-next" }}
                                    loop autoplay={{ delay: 3000 }}
                            >
                                {cards.map((card, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="card border-0">
                                            <div className='card-img-box'>
                                                <img
                                                    src={card.mobileImage}
                                                    className="img-set rounded-0 d-block mx-auto"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="card-body mt-16 p-0 d-flex flex-column">
                                                <time dateTime="2025-05-25" className="mb-4 fw-500 fs-16 col-000000 lh-15 fontFamily">{card.time}</time>
                                                <div className="d-flex">
                                                    {card.tags.map((tag, index) => (
                                                        <span key={index} className="me-2 fw-500 fs-24 col-0027D5 lh-15 fontFamily">#{tag}</span>
                                                    ))}
                                                    {card.tagkey && (
                                                        <span className="ms-8 bg-0027D5 col-ffffff fw-700 fs-16 lh-15 fontFamily py-6 px-12 br-40">人氣文章</span>
                                                    )}
                                                </div>
                                                <h3 className="mb-8 card-title fw-700 fs-28 col-000000 lh-15 fontFamily">{card.title}</h3>
                                                <p className="mb-16 card-text flex-grow-1 fw-500 fs-16 col-000000 lh-15 fontFamily">
                                                    {card.text}
                                                </p>
                                                <div className='d-flex justify-content-start'>
                                                    <button type="button" className="card-btn fw-500 fs-16 col-4B4B4B lh-15 fontFamily">
                                                        閱讀內文
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <div className='custom-box d-flex justify-content-end align-items-center gap-24 mt-32'>
                                <div className="custom-prev bg-0027D5 br-40 d-flex justify-content-center align-items-center pointer">
                                    <span className="material-symbols-outlined col-ffffff">arrow_back</span>
                                </div>
                                <div className="custom-next bg-0027D5 br-40 d-flex justify-content-center align-items-center pointer">
                                    <span className="material-symbols-outlined col-ffffff">arrow_forward</span>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default IndexMainBlog;
