import './_BlogNews.scss';
import { useNavigate } from "react-router-dom";

function BlogNews(){

    const navigate = useNavigate();
    
    const handleGoToDetail = (id) => {
        navigate(`/BlogPage/${id}`);
    };

  return(
    <>
        <div className='blog-news w-100'>
            <div className='blog-news-bg d-flex flex-column flex-lg-row'>
                <div className='blog-news-bg1'></div>
                <div className='blog-news-bg2'>
                    <div className='title-box my-48 mx-12 mx-lg-24 my-lg-0 d-flex justify-content-center align-items-center h-100'>
                        <div className="blog-news-card d-flex flex-column">
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
    </>
  )
}

export default BlogNews;