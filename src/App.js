import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';


import { AuthProvider } from './context/AuthContext';
import { CompanyProvider } from './context/CompanyContext'
import { useLocalStorage } from './hooks/useLocalStorage';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import Register from './components/Register/Register';
import ProfilePage from './components/ProfilePage/ProfilePage';
import EditProfile from './components/EditPrifile/EditProfile';
import { CreateProject } from './components/CreateProject/CreateProject';
//  
import Footer from './components/Footer/Footer';

import {ListOfCompanies} from './components/ListOfCompanies/ListOfCompanies';

import './App.css';

function App() {
  
  const [isAuth, setIsAuth] = useLocalStorage('isAuth', false);
  
  




  return (
    <div className="App">
      <div className="box">
        <AuthProvider>
          <Header />
          <CompanyProvider>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Logout />}/>
                <Route path="/register" element={<Register setIsAuth={setIsAuth}/>} />
                <Route path="/edit-profile" element={<EditProfile isAuth={isAuth}/>} />
                {/* <Route path="/upload-profile-images" element={<UploadProfileImages isAuth={isAuth} user={user}/>} /> */}
                <Route path="/profile-page" element={<ProfilePage />} />
                <Route path="/create-project" element={<CreateProject/>} />


                <Route path="/:categories" element={<ListOfCompanies/>} />
            </Routes>
          </CompanyProvider>         
          <Footer/>
        </AuthProvider>
      </div>
    </div>
  );
}

export default App;
