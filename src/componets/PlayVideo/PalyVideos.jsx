import React from 'react';
import video1 from '../../Assert/images/video.mp4';
import img1 from '../../Assert/images/Jack.png'
import like from '../../Assert/images/like.png'
import dislike from '../../Assert/images/dislike.png'
import share from '../../Assert/images/share.png'
import save from '../../Assert/images/save.png'
import "./PlayVidos.scss"
const PalyVideos = () => {
    return (
        <div className='playContainer'>
            <div className='playblock'>
                <div className='play-video'>
                    <video className='video' src={video1} controls ></video>

                <div className='tags'>
                    <a href="">#Coding </a><a href="">#JavaScript </a><a href="">#React Js </a>
                </div>
                <h3> Best chanel to learn web development</h3>
                <div className='play-video__info'>
                    <p> 1224 Views &bull; 2 days ago </p>
                    <div className='play-video__info__about'>
                        <a href=""><img src={like} alt="" />125 </a>
                        <a href=""><img src={dislike} alt="" />2 </a>
                        <a href=""><img src={share} alt="" /> Share</a>
                        <a href=""><img src={save} alt="" /> Save</a>
                    </div>
                    <hr />
                </div>
                {/* Publisher */}
                <div className='publisher'>
                    <img src={img1} alt="" />
                    <div>
                        <p> Najot Talim</p>
                        <span> 500k Subscibers</span>
                    </div>
                    <button type='button'>Subscibe</button>
                </div>
                <div className='video-desc'>
                    <p>Channel that makes learing easy</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, doloribus. Ea, dolorum nisi! Culpa nemo saepe autem aut dolores delectus praesentium excepturi non ducimus architecto. Quae quasi enim modi amet.</p>
                    <hr />
                    <h4>207 Comments</h4>

                    <div className="add-comment">
                        <img src={img1} alt="" />
                        <input type="text" placeholder='Write comments...' />
                    </div>
                    <div className='old-comments'>
                        <img src={img1} alt="" />
                        <div>
                            <h3>Axadbek Axmadaliev <span>2 days ago</span> </h3>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus dignissimos, deleniti, illo magni maiores omnis necessitatibus culpa saepe magnam repudiandae porro, dolores impedit itaque unde reiciendis similique id. Error, voluptatibus.
                            </p>
                            <div className='comment-action'>
                                <img src={like} alt="" />
                                <span>3244</span>
                                <img src={dislike} alt="" />                                
                                <span>28</span>
                                <a>All replies</a>
                            </div>
                        </div>
                    </div>
                
                </div>

            </div>
        </div>
            {/* <div className='right-sidebar'>
                <div className='side-video-list'>
                    <a href="" className='side-video-list__img'> <img src={img1} alt="" /></a>
                    <div className='video-info'>
                        <a href=""> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam natus culpa adipisci </a>
                        <p> Najot Talim</p>
                        <p> 15k Views &bull; 2 weeks ago </p>
                    </div>
                </div>
            </div> */}
        </div>
    );
}
export default PalyVideos;
