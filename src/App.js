import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { auth } from './firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import { CompanyProvider } from './context/companyContext'
import { useLocalStorage } from './hooks/useLocalStorage';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import Register from './components/Register/Register';
import ProfilePage from './components/ProfilePage/ProfilePage';
import EditProfile from './components/EditPrifile/EditProfile';
// import { UploadProfileImages } from './components/UploadProfileImages/UploadProfileImages';
import Footer from './components/Footer/Footer';

import {ListOfCompanies} from './components/ListOfCompanies/ListOfCompanies';

import './App.css';

function App() {
  const [user, setUser] = useState({});
  const [isAuth, setIsAuth] = useLocalStorage('isAuth', false);
  
  

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });


  return (
    <div className="App">
      <div className="box">
        
          <Header isAuth={isAuth} user={user}/>
          <CompanyProvider>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login setIsAuth={setIsAuth}/>} />
                <Route path="/logout" element={<Logout setIsAuth={setIsAuth}/>}/>
                <Route path="/register" element={<Register setIsAuth={setIsAuth}/>} />
                <Route path="/edit-profile" element={<EditProfile isAuth={isAuth} user={user}/>} />
                {/* <Route path="/upload-profile-images" element={<UploadProfileImages isAuth={isAuth} user={user}/>} /> */}
                <Route path="/profile-page" element={<ProfilePage />} />

                <Route path="/:categories" element={<ListOfCompanies/>} />
            </Routes>
          </CompanyProvider>         
          <Footer/>
        
      </div>
    </div>
  );
}

export default App;
