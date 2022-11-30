import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { auth } from './firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import { useLocalStorage } from './hooks/useLocalStorage';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import Register from './components/Register/Register';
import ProfilePage from './components/ProfilePage/ProfilePage';
import EditProfile from './components/EditPrifile/EditProfile';
import Footer from './components/Footer/Footer';

import ArchitectureCompaniesList from './components/ArchitectureCompaniesList/ArchitectureCompaniesList';
import InteriorDesign from './components/InteriorDesign/InteriorDesign';
import LandscapeArchitect from './components/LandscapeArchitect/LandscapeArchitect';
import BuildingCompanies from './components/BuildingCompanies/BuildingCompanies';

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
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login setIsAuth={setIsAuth}/>} />
              <Route path="/logout" element={<Logout setIsAuth={setIsAuth}/>}/>
              <Route path="/register" element={<Register setIsAuth={setIsAuth}/>} />
              <Route path="/edit-profile" element={<EditProfile isAuth={isAuth} user={user}/>} />
              <Route path="/profile-page" element={<ProfilePage />} />

              <Route path="/architecture-companies" element={<ArchitectureCompaniesList/>} />
              <Route path="/interior-design" element={<InteriorDesign/>} />
              <Route path="/landscape-architect" element={<LandscapeArchitect/>} />
              <Route path="/building-companies" element={<BuildingCompanies/>} />
          </Routes>
                    
          <Footer/>
      </div>
    </div>
  );
}

export default App;
