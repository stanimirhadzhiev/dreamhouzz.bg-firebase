import { Routes, Route } from 'react-router-dom';



import { AuthProvider } from './context/AuthContext';
import { CompanyProvider } from './context/CompanyContext';
import { ProjectProvider } from './context/ProjectContext';


import Header from './layouts/Header/Header';

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Logout from './pages/Logout/Logout';
import Register from './pages/Register/Register';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import EditProfile from './pages/EditPrifile/EditProfile';
import { CreateProject } from './pages/CreateProject/CreateProject';
import {ListOfCompanies} from './pages/ListOfCompanies/ListOfCompanies';

import Footer from './layouts/Footer/Footer';


import './App.css';

function App() {

  return (
    <div className="App">

        <AuthProvider>
            <CompanyProvider>
                <ProjectProvider>
                    <Header />

                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/logout" element={<Logout />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/:userId/edit-profile" element={<EditProfile />} />
                        <Route path="/:userId/profile-page" element={<ProfilePage />} />
                        <Route path="/create-project" element={<CreateProject />} />


                        <Route path="/:categories" element={<ListOfCompanies />} />
                    </Routes>

                    <Footer />
                </ProjectProvider>
            </CompanyProvider>
        </AuthProvider>

    </div>
  );
}

export default App;
