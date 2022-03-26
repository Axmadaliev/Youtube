import  "./SideBar.scss"
import home from "../../Assert/images/home.png"
import explore from "../../Assert/images/explore.png"
import subscriprion from "../../Assert/images/subscriprion.png"
import library from "../../Assert/images/library.png"
import history from "../../Assert/images/history.png"
import playlist from "../../Assert/images/playlist.png"
import messages from "../../Assert/images/messages.png"
import showMore from "../../Assert/images/show-more.png"
import Jack from "../../Assert/images/Jack.png"
// import { Link } from "react-router-dom"
import { memo } from "react"
// import { Link } from "react-router-dom"

function Sidebar() {
    console.log('leftbar');
    return <div className="sideBar" id="scollbar1">
        {/* <Link to='/'>
            <img className="sidebar__img" src={twitterLogo} alt="" />
        </Link> */}
       <div className="sideBar__navigations">
        <a href=""><img src={home} alt="" /><p> Home</p> </a>
            <a href=""><img src={explore} alt="" /><p> Explore</p> </a>
            <a href=""><img src={subscriprion} alt="" /><p> Subscriprion</p> </a>
            <a href=""><img src={library} alt="" /><p> Library</p> </a>
            <a href=""><img src={history} alt="" /><p> History</p> </a>
            <a href=""><img src={playlist} alt="" /><p> Playlist</p> </a>
            <a href=""><img src={messages} alt="" /><p> Messages</p> </a>
            <a href=""><img src={showMore} alt="" /><p> ShowMore</p> </a>
            <hr />
       </div>
       <div className="sideBar__subscribed-list" >
            <h3 className="">SUBSCRIBED</h3>
            <a href=""> <img src={Jack} alt="" /> <p>Jack Nicholson</p></a>
            <a href=""> <img src={Jack} alt="" /> <p>Jack Nicholson</p></a>
            <a href=""> <img src={Jack} alt="" /> <p>Jack Nicholson</p></a>
            <a href=""> <img src={Jack} alt="" /> <p>Jack Nicholson</p></a>
            <a href=""> <img src={Jack} alt="" /> <p>Jack Nicholson</p></a>
            <a href=""> <img src={Jack} alt="" /> <p>Jack Nicholson</p></a>
            <a href=""> <img src={Jack} alt="" /> <p>Jack Nicholson</p></a>
            <a href=""> <img src={Jack} alt="" /> <p>Jack Nicholson</p></a>
            <a href=""> <img src={Jack} alt="" /> <p>Jack Nicholson</p></a>
            <a href=""> <img src={Jack} alt="" /> <p>Jack Nicholson</p></a>
            <a href=""> <img src={Jack} alt="" /> <p>Jack Nicholson</p></a>
            <a href=""> <img src={Jack} alt="" /> <p>Jack Nicholson</p></a>
            <a href=""> <img src={Jack} alt="" /> <p>Jack Nicholson</p></a>
            <a href=""> <img src={Jack} alt="" /> <p>Jack Nicholson</p></a>
       </div>
    </div>
}

export default memo(Sidebar) ;