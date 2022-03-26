import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
// import './App.css';
// import ChangeModeBtn from './componets/ChangeMode/ChangeModeBtn';
// import Adminlayout from './componets/Layouts/AdminLayout';
// import NoAuthlayout from './componets/Layouts/NoAuthLayout';
// import Login from './componets/Login/Login';
// import MyPage from './componets/MyPage/MyPage';
// import Protectroute from './componets/ProtecRoute/ProtectRoute';
import RightBar from './componets/RightSideBar/RightBar';
import Sidebar from './componets/SideBar/SideBar';
import { useLang } from './Providers/LangProvider';
import { useTheme } from './Providers/MainProvider';
import RightBar2 from './componets/RightBar2/RightBar2';
import Header from './componets/Header/Header';
import { useEffect, useState } from 'react';
import Homepage from './componets/HomePage/HomePage';
import PalyVideos from './componets/PlayVideo/PalyVideos';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTodos } from './store/actions/todos';

function App(){
  // const [dark]= useTheme()
  // const [lang, setLang] = useLang()
  // const handleLangChange =(e) => {
  //   setLang(e.target.value)
  // }
  
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllTodos)
  }, [dispatch])
  const [sidebar, setSidebar] = useState(true)
  const handeleMenu = [sidebar, setSidebar]

  function handleSearch(arr, input) {
    return arr.filter(item=> item.title !== input.current.value)
  }



  return <div className='container'>
    
    <BrowserRouter>
      <Routes>
        <Route index path='' element={
          <>
            <Header handleSearch={handleSearch} />
            <div className='flex-app'>
            <Sidebar handeleMenu={handeleMenu} />
            <Homepage  handleSearch={handleSearch} />            
          </div>
          </>
        }>
        </Route>
        <Route path='/home' element={
          <>
            <Header handeleMenu={handeleMenu} />
            <div className='flex-app'>
            <Sidebar handeleMenu={handeleMenu} />
            <Homepage />            
          </div>
          </>
        }>
        </Route>
        <Route path='channel' element={
          <>
            <Header handeleMenu={handeleMenu} />
            <div className='flex-app'>
              <Sidebar handeleMenu={handeleMenu} />
              {/* <Homepage />             */}
              <PalyVideos />
              <RightBar />
          </div>
          </>
        }>

        </Route>
      </Routes>
    </BrowserRouter>
    
  </div>
  // return <div className="App">
  //     {/* <div className='controls'>
  //       <ChangeModeBtn >{dark ? "Set Light " : "set Dark"}</ChangeModeBtn>
  //       <select onChange={handleLangChange} defaultValue='uz'>
  //         <option value="ru">ru</option>
  //         <option value="uz">uz</option>
  //         <option value="en">en</option>
  //       </select>
  //     </div> */}
  //     <BrowserRouter>
  //       <Routes>
  //         <Route path='/' element={<Adminlayout />} >        
  //           <Route path='' index  element={
  //             <Protectroute>           
  //               <Sidebar />
  //                <MyPage />
  //               <RightBar />
  //             </Protectroute>
  //           }>             
  //         </Route>
        
  //           <Route path='home' element={
  //             <Protectroute>
  //               <Sidebar />
  //                <MyPage />
  //               <RightBar />
  //             </Protectroute>
  //           }>             
  //           </Route>
  //           <Route path='userPage' element={
  //               <Protectroute>
  //                 <Sidebar />
  //                 <MainPage />
  //                 <RightBar2 />
  //               </Protectroute>
  //             }>
                
  //           </Route> 
  //         </Route> 

  //         <Route path='/auth' element={<NoAuthlayout/>}>
  //             {/* <div className='container'> */}
  //             <Route path='' element={<Navigate to='/auth/login' replace={true} />} />
  //             <Route  path='login' index element={<Login/>} />
  //             {/* </div> */}
  //         </Route>

  //       </Routes>
  //     </BrowserRouter>
  //   {/* <Sidebar /> */}
  //   {/* <MainPage /> */}
  //   {/* <MyPage />
  //   <RightBar /> */}
  // </div>
}
export default App

  