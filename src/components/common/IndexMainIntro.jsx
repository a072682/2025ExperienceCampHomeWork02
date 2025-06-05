import './_IndexMainIntro.scss';

function IndexMainIntro() {
  return (
    <div className='main-intro w-100'>
      <div className='main-intro-bg d-flex flex-column flex-lg-row'>
        <div className='main-intro-bg1'></div>
        <div className='main-intro-bg2'>
          <div className='title-box mt-24 mb-40 d-flex flex-column gap-12'>
            <h1 className='text-center text-lg-start fw-900 lh-15 col-0027D5 fontFamily'>Alyse Wang</h1>
            <h2 className='text-center text-lg-start fw-700 fs-28 lh-15 col-0027D5 fontFamily'>前端工程師 & 職涯諮詢師</h2>
          </div>
        </div>
      </div>
      <div className="container">
          <div className='main-intro-text bg-white py-40 px-24 py-lg-80 px-lg-40'>
            <p className='fw-500 fs-24 fontFamily mb-8'>嗨，我是 <span>Alyse</span></p>
            <p className='fw-500 fs-24 fontFamily mb-16'>一名深耕前端技術的工程師。</p>
            <p className='fw-500 fs-24 fontFamily mb-16'>
              擅長 React、Vue 等框架，同時熱愛為轉職與新手工程師提供職涯指導。
              邀請你與我一起，開啟更具潛能的程式與職涯之旅！
            </p>
            <div className='d-flex flex-wrap gap-4'>
              <a href="#">
                <img src="/images/mobile/index/onlyIcon.png" alt="" />
              </a>
              <a href="#">
                <img src="/images/mobile/index/onlyIcon-1.png" alt="" />
              </a>
              <a href="#">
                <img src="/images/mobile/index/onlyIcon-2.png" alt="" />
              </a>
              <a href="#">
                <img src="/images/mobile/index/icons8-linkedin 1.png" alt="" />
              </a>
              <a href="#">
                <img src="/images/mobile/index/onlyIcon-3.png" alt="" />
              </a>
            </div>
          </div>
        </div>
    </div>
  );
}

export default IndexMainIntro;
