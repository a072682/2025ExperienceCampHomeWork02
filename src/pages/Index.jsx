import './_Index.scss';
import IndexMainContact from '../components/common/IndexMainContact';
import IndexMainSubscribe from '../components/common/IndexMainSubscribe';
import IndexMainCareer from '../components/common/IndexMainCareer';
import IndexMainBlog from '../components/common/IndexMainBlog';
import IndexMainServices from '../components/common/IndexMainServices';
import IndexMainIntro from '../components/common/IndexMainIntro';





function Index (){

    return(
        <>
            
            <div className='IndexMainIntro'>
                <IndexMainIntro />
            </div>
            
            <div className='IndexMainServices'>
                <IndexMainServices />
            </div>
            
            <div className='IndexMainBlog'>
                <IndexMainBlog />
            </div>

            
            <div className='IndexMainCareer'>
                <IndexMainCareer />
            </div>
            
            <div className='IndexMainSubscribe'>
                <IndexMainSubscribe />
            </div>
            
            <div className='IndexMainContact'>
                <IndexMainContact />
            </div>
        </>
    )
}
export default Index;

