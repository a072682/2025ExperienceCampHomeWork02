import './_IndexMainServices.scss';

function IndexMainServices() {
  const Services = [
    [
        {
            title: '履歷健檢',
            text: '履歷是打開機會之門的第一步。讓我協助你突顯專業技術與核心能力，並透過簡短模擬面試為你加分，讓面試官第一眼就被你吸引。',
            mobileImg: 'mobile/index/photo1.png',
        },
        {
            title: '線上諮詢',
            text: '想快速解決前端學習瓶頸，或需要專業職涯指引？透過線上一對一諮詢，我將協助你更有方向地邁進。',
            mobileImg: 'mobile/index/photo2.png',
        },
    ],
    [
        {
            title: '網頁開發',
            text: '想打造高效能、具美感的網站？我提供從需求訪談到架構實作的一站式服務，讓你的品牌與產品在線上脫穎而出。',
            mobileImg: 'mobile/index/photo3.png',
        },
        {
            title: '企業內訓',
            text: '想讓團隊快速掌握前端最新技術或優化現有專案流程？我可協助打造專業、實用的企業內訓課程，一次解決團隊痛點。',
            mobileImg: 'mobile/index/photo4.png',
        },
    ],
  ];


  return (
    <div className='main-services w-100'>
      <div className='my-64 my-xl-80'>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className='text-center text-xl-start fw-700 fs-48 fs-xl-64 lh-15 fontFamily'>專業服務與方案</h2>
            </div>

            {Services.map((group, groupIndex) => (
                group.map((item, itemIndex) => {
                    const isReverse = itemIndex === 1; // 第二個項目為反向排版
                    return (
                    <div className="col-12 mt-32 mt-xl-64" key={`${groupIndex}-${itemIndex}`}>
                        <div className={`main-services-box d-block d-xl-flex ${isReverse ? 'flex-xl-row-reverse' : ''}`}>
                            <div className='main-services-img-box'>
                                <img className='img-set' src={`${import.meta.env.BASE_URL}images/${item.mobileImg}`} alt="" />
                            </div>
                            <div className='main-services-text-box d-xl-flex justify-content-xl-center align-items-xl-center'>
                                <div className={`p-24 ${isReverse ? 'text-box2' : 'text-box1'} bg-ffffff`}>
                                    <div className='main-services-icon-box d-flex justify-content-center align-items-center'>
                                        <div className='main-services-icon bg-0027D5'></div>
                                    </div>
                                    <div className='d-flex flex-column gap-8'>
                                        <p className='fw-700 fs-28 lh-15 fontFamily'>{item.title}</p>
                                        <p className='fw-500 fs-16 lh-15 fontFamily col-4B4B4B'>{item.text}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    );
                })
            ))}
            <div className="col-12 mt-32">
              <a className="d-flex flex-column flex-lg-row justify-content-end align-items-end gap-8 pointer col-000000">
                <p className="fw-700 fs-28 lh-15 fontFamily">聯繫我，取得更多資訊！</p>
                <div className="main-services-icon-box border border-1 border-dark br-40 d-flex justify-content-center align-items-center">
                  <span className="material-symbols-outlined">arrow_forward</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndexMainServices;
