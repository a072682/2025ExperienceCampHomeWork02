import './_BlogIntro.scss';

function BlogIntro(){
  return(
    <>
        <div className='blog-intro w-100'>
            <div className='blog-intro-bg d-flex flex-column flex-lg-row'>
                <div className='blog-intro-bg1'></div>
                <div className='blog-intro-bg2'>
                    <div className='title-box mt-24 mb-40 d-flex flex-column gap-12'>
                        <h1 className='text-center text-lg-start fw-900 lh-15 col-0027D5 fontFamily'>BLOG</h1>
                        <h2 className='text-center text-lg-start fw-700 fs-28 lh-15 col-0027D5 fontFamily'>前端工程師 & 職涯諮詢師</h2>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default BlogIntro;