import "./MyPage.scss"
import arrowLink from "../../Assert/img/ArrowLink.png"
import owner from "../../Assert/img/owner.png"
import owner1 from "../../Assert/img/owner1.png"
import myLogo from "../../Assert/img/myLogo.png"
import location from "../../Assert/img/location.png"
import sitelinkpng from "../../Assert/img/sitelink.png"
import born from "../../Assert/img/born.png"
import datesvg from "../../Assert/img/datesvg.png"
import image from "../../Assert/img/image.png"
import gif from "../../Assert/img/gif.png"
import stats from "../../Assert/img/stats.png"
import smile from "../../Assert/img/smile.png"
import date from "../../Assert/img/date.png"
import comment from "../../Assert/img/comment.png"
import retweet from "../../Assert/img/retweet.png"
import retweet2 from "../../Assert/img/retweet2.png"
import like from "../../Assert/img/like.png"
import likefill from "../../Assert/img/likefill.png"
import share from "../../Assert/img/share.png"
import statistics from "../../Assert/img/statistics.png"
import dacha from "../../Assert/img/dacha.png"
import { Link } from "react-router-dom"

function MyPage() {
    
    return ( <div className="Mypage">
        <div className="header">
            <Link to='/userPage' className="">
                <img src={arrowLink} alt="" />
            </Link>
            <div className="header__info">
                <h4 className="userName">Bobur</h4>
                <h4 className="myInfo">1,070 Tweets</h4>
            </div>
        </div>
            <div className="myLogo">
                <img  src={myLogo} alt="" />
            </div>
            <div className="userDetails">
                <a href="#" className="editProfile">Edit profile</a>
                <div className="userDetails__card">
                    <h4 className="myInfoBold userDetails__card__name ">Bobur </h4>
                    <h4 className="myInfo">@bobur_mavlonov</h4>
                    <div className="myInfoBold" style={{marginTop: "15px"}}> UX&UI desined at <span className="myInfoLink">@abutechuz</span></div> 
                </div>
                <div className="userDetails__more">
                    <div className="userDetails__more__block"> <img src={location} alt="" /> <h4 className="myInfo">Mashag'daman</h4></div>
                    <div className="userDetails__more__block"> <img src={sitelinkpng} alt="" /> <h4 className="myInfoLink">t.me/boburjon_mavlonov</h4></div>
                    <div className="userDetails__more__block"> <img src={born} alt="" /> <h4 className="myInfo">Born November 24, 2000</h4></div>
                    <div className="userDetails__more__block"> <img src={datesvg} alt="" /> <h4 className="myInfo">Joined May 2020</h4></div>
                </div>
                <div className="userDetails__more" style={{justifyContent: "left"}}>
                    <div className="userDetails__more__block"> <h4 className="myInfoBold" style={{fontWeight: "bold"}}>67</h4> <h4 style={{ marginTop: '5px'}} className="myInfo">Following</h4></div>
                    <div className="userDetails__more__block"> <h4 className="myInfoBold" style={{fontWeight: "bold", marginLeft: '30px'}}>47</h4> <h4 style={{ marginTop: '5px'}} className="myInfo">Followers</h4></div>
                </div>
            </div>
            <div className="pagesBlock">
                <a className="myInfoBold pagesBlock__link" href="#">Tweets</a>
                <a className="myInfoBold pagesBlock__link" href="#">Tweets & replies</a>
                <a className="myInfoBold pagesBlock__link" href="#">Media</a>
                <a className="myInfoBold pagesBlock__link " href="#">Likes</a>
            </div>
            <div className="follower">
            <img className="follower__img" src={owner}  alt="" /> 
            <div className="follower__card">
                <div className="follower__card__info">
                    <h4 className="follower__card__info__name">Bobur</h4>
                    <a href="#" className="follower__card__info__email">@bobur_mavlonov · </a>
                    <div className="follower__card__info__email" > Apr 1</div>
                </div>
                <p className="follower__card__comment">
                    4-kursni tugatgunimcha kamida bitta biznesim bo'lishini, uylanish uchun moddiy jihatdan to'la-to'kis tayyor bo'lishni, sog'lik va jismoniy holatni normallashtirishni reja qildim
                </p>
                <div className="follower__stats">
                    <div className="follower__stats__card" > <img src={comment} alt="" />  10</div>
                    <div className="follower__stats__card" > <img src={retweet} alt="" />  1</div>
                    <div className="follower__stats__card" > <img src={like} alt="" />  8</div>
                    <div className="follower__stats__card" > <img src={share} alt="" />  </div>
                    <div className="follower__stats__card" > <img src={statistics} alt="" /> </div>
                </div>
            </div>
        </div>
        <div className="follower">
            <img className="follower__img" src={owner}  alt="" /> 
            <div className="follower__card">
                <div className="follower__card__info">
                    <h4 className="follower__card__info__name">Bobur</h4>
                    <a href="#" className="follower__card__info__email">@bobur_mavlonov </a>
                    <div className="follower__card__info__email" > · Apr 1</div>
                </div>
                <p className="follower__card__comment" style={{lineHeight: "24px"}}>
                    Bizda shunaqa bir illat bor: gap bo'lsa bo'ldi, nima deyayotganimizga qarab ham o'tirmaymiz. <br /><br />

                    Bitta biznes trener nito gapirib qo'ysa, hamma biznes trenerlar yomonga chiqadi slishkom aqlli odamlar nazdida. <br /><br />

                    Gap faqat biznes trenerlar haqida emas. 
                </p>
                <div className="follower__stats">
                    <div className="follower__stats__card" > <img src={comment} alt="" />  </div>
                    <div className="follower__stats__card" > <img src={retweet2} alt="" />  5</div>
                    <div className="follower__stats__card" > <img src={likefill} alt="" />  9</div>
                    <div className="follower__stats__card" > <img src={share} alt="" />  </div>
                    <div className="follower__stats__card" > <img src={statistics} alt="" /> </div>
                </div>
            </div>
        </div>
        <div className="follower">
            <img className="follower__img" src={owner}  alt="" /> 
            <div className="follower__card">
                <div className="follower__card__info">
                    <h4 className="follower__card__info__name">Bobur</h4>
                    <a href="#" className="follower__card__info__email">@bobur_mavlonov ·</a>
                    <div className="follower__card__info__email" >Apr 1</div>
                </div>
                <p className="follower__card__comment">
                    A bo'pti maskamasman
                </p>
                <img style={{marginhrefp: "20px"}} src={dacha}  alt="" /> 

                <div className="follower__stats">
                    <div className="follower__stats__card" > <img src={comment} alt="" />  10</div>
                    <div className="follower__stats__card" > <img src={retweet} alt="" />  1</div>
                    <div className="follower__stats__card" > <img src={like} alt="" />  8</div>
                    <div className="follower__stats__card" > <img src={share} alt="" />  </div>
                    <div className="follower__stats__card" > <img src={statistics} alt="" /> </div>
                </div>
            </div>
        </div>
    </div> );
}

export default MyPage;