import './_IndexMainContact.scss';

function IndexMainContact(){
  return(
    <>
      <div className='main-contact my-64 my-xl-80'>
        <div className="container">
          <div className="row">
            <div className="col-12">
              
              {/* 標題 */}
              <h2 className='fw-700 fs-48 fs-xl-64 lh-15 fontFamily'>與我聯繫</h2>

              {/* Email 合作洽談 */}
              <a href="#" className='mt-24 pb-20 d-flex flex-column flex-xl-row row-gap-8 align-items-start align-items-xl-center border-bottom border-1 border-secondary'>
                <div className='d-flex flex-column flex-xl-row row-gap-8 gap-16'>
                  <p className='fw-500 fs-24 fs-xl-32 lh-15 col-000000 fontFamily'>alysewang@hexschool.com</p>
                  <p className='fw-500 fs-24 fs-xl-28 lh-15 col-000000 fontFamily'>合作洽談</p>
                </div>
                <span className="material-symbols-outlined ms-xl-auto col-000000">arrow_forward</span>
              </a>

              {/* Youtube */}
              <a href="#" className='mt-24 pb-20 d-flex flex-column flex-xl-row row-gap-8 align-items-start align-items-xl-center border-bottom border-1 border-secondary'>
                <div className='d-flex justify-content-start align-items-center gap-8'>
                  <img src={`${import.meta.env.BASE_URL}images/mobile/index/onlyIcon.png`} alt="YouTube icon" />
                  <p className='fw-500 fs-24 lh-15 col-000000 fontFamily'>Youtube 職涯諮詢室</p>
                </div>
                <span className="material-symbols-outlined ms-xl-auto col-000000">arrow_forward</span>
              </a>

              {/* Podcast */}
              <a href="#" className='mt-24 pb-20 d-flex flex-column flex-xl-row row-gap-8 align-items-start align-items-xl-center border-bottom border-1 border-secondary'>
                <div className='d-flex justify-content-start align-items-center gap-8'>
                  <img src={`${import.meta.env.BASE_URL}images/mobile/index/onlyIcon-1.png`} alt="Podcast icon" />
                  <p className='fw-500 fs-24 lh-15 col-000000 fontFamily'>podcast 職涯諮詢室</p>
                </div>
                <span className="material-symbols-outlined ms-xl-auto col-000000">arrow_forward</span>
              </a>

              {/* Facebook */}
              <a href="#" className='mt-24 pb-20 d-flex flex-column flex-xl-row row-gap-8 align-items-start align-items-xl-center border-bottom border-1 border-secondary'>
                <div className='d-flex justify-content-start align-items-center gap-8'>
                  <img src={`${import.meta.env.BASE_URL}images/mobile/index/onlyIcon-2.png`} alt="Facebook icon" />
                  <p className='fw-500 fs-24 lh-15 col-000000 fontFamily'>Facebook 前端社群</p>
                </div>
                <span className="material-symbols-outlined ms-xl-auto col-000000">arrow_forward</span>
              </a>

              {/* LinkedIn */}
              <a href="#" className='mt-24 pb-20 d-flex flex-column flex-xl-row row-gap-8 align-items-start align-items-xl-center border-bottom border-1 border-secondary'>
                <div className='d-flex justify-content-start align-items-center gap-8'>
                  <img src={`${import.meta.env.BASE_URL}images/mobile/index/icons8-linkedin 1.png`} alt="LinkedIn icon" />
                  <p className='fw-500 fs-24 lh-15 col-000000 fontFamily'>linkedin 職涯交流</p>
                </div>
                <span className="material-symbols-outlined ms-xl-auto col-000000">arrow_forward</span>
              </a>

              {/* Instagram */}
              <a href="#" className='mt-24 pb-20 d-flex flex-column flex-xl-row row-gap-8 align-items-start align-items-xl-center border-bottom border-1 border-secondary'>
                <div className='d-flex justify-content-start align-items-center gap-8'>
                  <img src={`${import.meta.env.BASE_URL}images/mobile/index/onlyIcon-3.png`} alt="Instagram icon" />
                  <p className='fw-500 fs-24 lh-15 col-000000 fontFamily'>Instagram 日常分享</p>
                </div>
                <span className="material-symbols-outlined ms-xl-auto col-000000">arrow_forward</span>
              </a>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default IndexMainContact;
