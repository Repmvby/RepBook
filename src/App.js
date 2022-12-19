import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Music from "./components/music/Music";
import News from "./components/news/News";
import Settings from "./components/settings/Settings";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import UsersContainer from "./components/users/usersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";

const App = () => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='content-wrapper-app'>
                    <Routes>
                        <Route path="/profile" element={<ProfileContainer/>}/>
                        <Route path="/messages/*" element={<DialogsContainer/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                        <Route path="/users" element={<UsersContainer/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
