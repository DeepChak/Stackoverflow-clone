import React,{useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import Avathar from '../component/Avathar/Avathar'
import './NavBars.css'
import { setCurrentUser } from '../actions/currentUser'
import decode from 'jwt-decode'

import logo from '../../src/assets/logo.png'
const NavBars=()=> {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    var User = useSelector((state)=>(state.currentUserReducer))

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
        navigate("/");
        dispatch(setCurrentUser(null));
    };
    useEffect(() => {
         const token = User?.token;
        if (token) {
          const decodedToken = decode(token);
          if (decodedToken.exp * 1000 < new Date().getTime()) {
            handleLogout();
          }
        }
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
      }, [User?.token, dispatch]);
             
  return(
    <nav className='main-nav'>
        <div className='navbar'>
            <Link to='/' className='nav-item nav-logo'>
                <img src={logo} alt='logo' style={{width:"200px",height:"30px"}}/>
            </Link>
            <Link to='/' className='nav-item nav-btn'>About</Link>
            <Link to='/' className='nav-item nav-btn'>Products</Link>
            <Link to='/' className='nav-item nav-btn'>For Terms</Link>
            <form>
                <input type='text' placeholder='Search...' />
                <div className='search-icon'><i className="fa-solid fa-magnifying-glass"></i></div>
            </form>
            {User===null ?
                <Link to='Auth' className='nav-item nav-links'>Log in</Link> :
                <>
                    <Avathar backgroundColor="#009dff" px="10px" py="7px" borderRadius="50%" color="white"><Link to={`/Users/${User?.result?._id}`} style={{textDecoration:"none",color:"white"}}>{User.result.name.charAt(0).toUpperCase()}</Link></Avathar>
                    <button className='nav-item nav-links' onClick={handleLogout}>Log out</button>
                </>
            }

        </div>
    </nav>
  )
}

export default NavBars