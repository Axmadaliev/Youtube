// import { a } from "react-router-dom";
import "./RightBar.scss"
import settings from "../../Assert/img/settings.png"
import more from "../../Assert/img/more.png"
// import search from "../../Assert/img/search.png"
import follower4 from "../../Assert/img/follower4.png"
import follower5 from "../../Assert/img/follower5.png"
import img1 from '../../Assert/images/thumbnail2.png'

function RightBar() {
    return (  
        <div className='right-sidebar'>
                <div className='side-video-list'>
                    <a href="" className='side-video-list__img'> <img src={img1} alt="" /></a>
                    <div className='side-video-list__video-info'>
                        <a href=""> Lorem ipsum dolor sit amet consectetur adipisicing elit.</a>
                        <p> Najot Talim</p>
                        <p> 15k Views &bull; 2 weeks ago </p>
                    </div>
                </div>
                <div className='side-video-list'>
                    <a href="" className='side-video-list__img'> <img src={img1} alt="" /></a>
                    <div className='side-video-list__video-info'>
                        <a href=""> Lorem ipsum dolor sit amet consectetur adipisicing elit.</a>
                        <p> Najot Talim</p>
                        <p> 15k Views &bull; 2 weeks ago </p>
                    </div>
                </div>
                <div className='side-video-list'>
                    <a href="" className='side-video-list__img'> <img src={img1} alt="" /></a>
                    <div className='side-video-list__video-info'>
                        <a href=""> Lorem ipsum dolor sit amet consectetur adipisicing elit.</a>
                        <p> Najot Talim</p>
                        <p> 15k Views &bull; 2 weeks ago </p>
                    </div>
                </div>
                <div className='side-video-list'>
                    <a href="" className='side-video-list__img'> <img src={img1} alt="" /></a>
                    <div className='side-video-list__video-info'>
                        <a href=""> Lorem ipsum dolor sit amet consectetur adipisicing elit.</a>
                        <p> Najot Talim</p>
                        <p> 15k Views &bull; 2 weeks ago </p>
                    </div>
                </div>
            </div>
    );
}

export default RightBar;