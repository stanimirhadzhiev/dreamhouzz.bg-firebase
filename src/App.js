import { Routes, Route } from 'react-router-dom';



import { AuthProvider } from './context/AuthContext';
import { CompanyProvider } from './context/CompanyContext'


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

  return (
    <div className="App">
      
        <AuthProvider>
          <CompanyProvider>
            <Header/>
            
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/logout" element={<Logout />}/>
                  <Route path="/register" element={<Register />} />
                  <Route path="/edit-profile" element={<EditProfile/>} />
                  <Route path="/profile-page" element={<ProfilePage />} />
                  <Route path="/create-project" element={<CreateProject/>} />


                  <Route path="/:categories" element={<ListOfCompanies/>} />
              </Routes>
                    
            <Footer/>
          </CompanyProvider> 
        </AuthProvider>
      
    </div>
  );
}

export default App;
