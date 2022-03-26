import React from 'react';
import "./HomePage.scss"
import banner from "../../Assert/images/banner.png"
import Jack from "../../Assert/images/Jack.png"
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {Pagination} from '@mui/material'
import { Link } from 'react-router-dom';
const Homepage = () => {
    const itemPerPage = 12
    const [page, setPage] = useState(1)
    
    const [localPhotos, setLocalPhotos] = useState([])
    const todos = useSelector(state => state.todos.todos)
    const dispatch = useDispatch()
    useEffect(() => {
        setLocalPhotos(todos.slice((page-1)*itemPerPage,page*itemPerPage))
    }, [todos, page])
    
    // useEffect(() => {
    //     dispatch(handleSearch)
    //     setLocalPhotos(todos.slice((page-1)*itemPerPage,page*itemPerPage))
    // }, [todos, page])
   const [localUsers, setLocalUsers] = useState([])
   const users = useSelector(state => state.posts.posts)
//    const dispatch1 = useDispatch()
   useEffect(() => {
       setLocalUsers(users)
   }, [users])


    return (
        <div className='homepage'>
            <div className='homepage__banner'>
                <img src={banner} alt="" />
            </div>
            <div className='list-container'>
                    {
                        localPhotos.map((element, index) => {
                            return  <div className='list-box'>
                                    <a target='_blank' href="https://t.me/s/najottalim"><img src={element.url} alt="" className='img1' /></a>
                                    <div className='video-block'>
                                        <img src={Jack} alt="" />
                                        <div className='video-block__info'>
                                            <Link   to='/channel'> {element.title}</Link >
                                           {
                                               localUsers.map((element, index) => {
                                                   return <p key={index}> qani {element.name}</p>
                                               })
                                           }
                                           
                                            <p> 15k Views &bull; 2 days</p>
                                        </div>
                                    </div>
                            </div>

                        })
                    }

                    {/* <div className='list-box'>
                        <a target='_blank' href="https://t.me/s/najottalim"><img src={img1} alt="" className='img1' /></a>
                        <div className='video-block'>
                            <img src={Jack} alt="" />
                            <div className='video-block__info'>
                                <a target='_blank' href="https://t.me/s/najottalim"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi et, reprehenderit modi.</a>
                                <p> Najot Ta'lim</p>
                                <p> 15k Views &bull; 2 days</p>
                            </div>
                        </div>
                    </div> */}
                 
                    
            </div>

            {/* pagination */}
            <div className='paginations'>
                    <Pagination onChange={(e, num) =>{setPage(num)} } count={Math.ceil(todos.length / itemPerPage)} />
                    {/* {
                        pagesArr.map((items, index) => {
                            return <button key={index} style={{backgroundColor:index+1===page ? "black" : "",color:index+1===page ? "white" : ""}} onClick={() => {setPage(index+1)}}>{index+1}</button>
                        })
                    } */}                 
            </div>
        </div>
    );
}

export default Homepage;
