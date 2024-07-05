import Home from './Pages/Home/Home';
import {Routes, Route} from 'react-router-dom';
import Login from './Pages/Login/Login';
import Player from './Pages/Player/Player';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignUp from './Pages/SignUp/SignUp';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "./firebase2";
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';

function App() {
  const [user] = useAuthState(auth);
const navigate = useNavigate();
  useEffect(() => {
    if (user) {
        //  home فى حاله لو  مسجل دخول يروح على صفحه ال 
      navigate('/')
    } else{
      // Sign in فى حاله لو مش مسجل دخول يروح على صفحه ال 
        navigate('/login')
      }
  },[user]);

  return (
    <div>
      <ToastContainer theme='dark' />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/player/:id' element={<Player/>}/>
      </Routes>
     
    </div>
  )
}

export default App
