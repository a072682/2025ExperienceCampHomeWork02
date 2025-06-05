import './_IndexMainSubscribe.scss';

function IndexMainSubscribe(){
  return(
    <>
        <div className='main-subscribe my-64 my-xl-80'>

            {/* 桌面背景 */}
            <div className='d-flex flex-column flex-lg-row'>
                <div className='main-subscribe-bg1'></div>
                <div className='main-subscribe-bg2'>

                    {/* 訂閱內容 */}
                    <div className='container h-100'>
                        <div className='row justify-content-center h-100'>
                            <div className='col-12 col-xl-8 d-flex justify-content-center align-items-center'>
                                <div className='p-24 p-xl-40 bg-ffffff'>
                                    <h2 className='fw-700 fs-48 fs-xl-64 lh-15 fontFamily'>訂閱電子報</h2>
                                    <p className='mt-16 fw-500 fs-20 lh-15 fontFamily'>
                                        立即訂閱，搶先掌握<span className='col-0027D5'>前端 x 職涯</span> 的獨家資訊！
                                    </p>
                                    <form className='mt-24'>
                                        <input type="text" className="main-subscribe-input" placeholder="請輸入您的大名" />
                                        <input type="email" className="main-subscribe-input" placeholder="請輸入您的電子信箱" />
                                        <div className='mt-24 d-flex justify-content-start'>
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

            
        </div>

    </>
  )
}

export default IndexMainSubscribe;
