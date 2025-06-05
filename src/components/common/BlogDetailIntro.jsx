import './_BlogDetailIntro.scss';

function BlogDetailIntro(){
  return(
    <>
        <div className='blog-detail-intro w-100'>
            <div className='blog-detail-intro-bg d-flex flex-column flex-lg-row'>
                <div className='blog-detail-intro-bg1'></div>
                <div className='blog-detail-intro-bg2'>
                    <div className='title-box my-48 mx-12 mx-lg-24 my-lg-0 d-flex justify-content-center align-items-center h-100'>
                        <div className="blog-detail-intro-card d-flex flex-column">
                            {/* 時間 */}
                            <time dateTime="2024-10-21" className="mb-4 fs-16 fw-500 col-000000 lh-15 fontFamily">2024/10/21</time>
                            {/* 標籤 */}
                            <div className="d-flex">
                                <span className="me-2 fs-24 fw-500 col-0027D5 fontFamily">前端開發 x 職涯成長</span>
                                <span className="ms-8 bg-0027D5 col-ffffff fs-16 fw-700 py-6 px-12 br-40">最新文章</span>
                            </div>

                            {/* 標題 */}
                            <h3 className="mb-8 main2-card1-title fs-28 fw-700 col-000000 lh-15 fontFamily">自學前端不用怕：從零開始的三大關鍵</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default BlogDetailIntro;