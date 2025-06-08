import './_IndexMainCareer.scss';

function IndexMainCareer(){

    const career = [
                        {
                            img: 'people1.png',
                            title: '無經驗到前端工程師 Offer',
                            items: [
                                    '打造前端專案與履歷亮點',
                                    '深度強化面試表現',
                                    ],
                        },
                        {
                            img: 'people2.png',
                            title: '轉職迷茫到明確學習規劃',
                            items: [
                                    '制訂階段性目標與時間安排',
                                    '鼓勵參與前端社群或活動',
                            ],
                        },
                        {
                            img: 'people3.png',
                            title: '面試緊張到從容應對',
                            items: [
                                    '透過面試模擬找出常犯的邏輯漏洞',
                                    '討論遇到不熟悉議題時的回應方式',
                            ],
                        },
                        {
                            img: 'people4.png',
                            title: '面試緊張到從容應對',
                            items: [
                                    '擬定進階框架或技術研究目標',
                                    '培養跨團隊溝通與簡報能力',
                            ],
                        },
                    ]

    return(
        <>
            <section className="main-career my-64 my-lg-80">
                <div className="container">
                    <h2 className="fw-700 fontFamily mb-24 fs-48 fs-xl-64 d-none d-lg-block">
                        職涯諮詢成功案例 
                    </h2>
                    <h2 className="fw-700 fontFamily mb-24 fs-48 fs-xl-64 d-block d-lg-none">
                        職涯諮詢 
                    </h2>
                    <h2 className="fw-700 fontFamily mb-24 fs-48 fs-xl-64 d-block d-lg-none">
                        成功案例 
                    </h2>
                    <div className="row mb-40">
                        <div className="col-12 d-flex flex-column flex-lg-row position-relative">
                            <div className='main-career-content-img-box px-24 pt-24 p-lg-24'>
                                <div className="main-career-content-img" />
                            </div>
                            <div className='main-career-content-text-box p-lg-24'>
                                <div className="bg-ffffff d-flex flex-column justify-content-center py-40 px-24 p-lg-0 mt-lg-auto py-xxl-80 px-xxl-40 mb-12 mb-lg-0 box-1">
                                    <div className="main-career-icon-box d-flex justify-content-center align-items-center mb-24">
                                        <div className="main-career-icon bg-0027D5" />
                                    </div>
                                    <p className="fw-700 fs-16 lh-15 fontFamily col-000000">
                                        在職涯發展的關鍵轉折點上，適時的協助與正確的方向至關重要。藉由職涯諮詢，我可以幫助你加速釐清目標、建立更全面的技術與軟實力，並有效
                                        <span className="col-0027D5">突破原有的舒適圈</span>。
                                    </p>
                                </div>
                                <div className="bg-ffffff d-flex flex-column justify-content-center py-40 px-24 p-lg-0 py-xxl-80 px-xxl-40 box-2 ">
                                    <div className="main-career-icon-box d-flex justify-content-center align-items-center mb-24">
                                        <div className="main-career-icon bg-0027D5" />
                                    </div>
                                    <p className="fw-700 fs-16 lh-15 fontFamily col-000000 mb-24">
                                        期待在下一個新機會中，我能與你一起攜手邁向更高峰！
                                    </p>
                                    <button type="button" className="main-career-btn fw-700 fs-16 col-0027D5 lh-15 fontFamily br-40 align-self-start">
                                        立即預約諮詢
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col d-lg-flex">
                            {
                                career.map((caseItem, idx) => ( 
                                        <div className="main-career-card d-lg-flex flex-lg-column h-lg-100 p-24" key={idx}>
                                            <div className="main-career-card-img-box br-40 mb-16">
                                                <img className="img-set" src={`${import.meta.env.BASE_URL}images/desktop/index/${caseItem.img}`} alt=""/>
                                            </div>
                                            <h3 className="mt-3 fw-700 fs-24 lh-15 fontFamily col-000000">
                                                {caseItem.title}
                                            </h3>
                                            <div className='pb-16 border-bottom border-1 border-secondary mt-auto'>
                                                {caseItem.items.map((item, i) => (
                                                    <div className="d-flex justify-content-start align-items-center gap-8 mt-8" key={i}>
                                                        <span className="material-symbols-outlined fs-16 bg-0027D5 col-ffffff rounded-1">
                                                            check
                                                        </span>
                                                        <p className="fw-500 fs-16 lh-15 fontFamily col-4B4B4B">{item}</p>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="d-flex justify-content-start">
                                                <button type="button" className="main-career-card-btn fw-500 fs-16 col-4B4B4B lh-15 fontFamily py-8 px-16 border border-1 border-secondary br-40 mt-16">
                                                    前往聆聽 podcast
                                                </button>
                                            </div>
                                        </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default IndexMainCareer;