import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import Music from "./components/music/Music";
import News from "./components/news/News";
import Settings from "./components/settings/Settings";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar friends={props.state.friendList.friends}/>
                <div className='content-wrapper-app'>
                    <Routes>
                        <Route path="/profile" element={<Profile
                            posts={props.state.profileData.posts}
                            newPostBody ={props.state.profileData.newPostBody}
                            dispatch={props.dispatch}
                        />}
                        />
                        <Route path="/messages/*" element={<Dialogs
                            messages={props.state.dialogsData.messages}
                            dialogs={props.state.dialogsData.dialogs}
                            newMessageBody={props.state.dialogsData.newMessageBody}
                            dispatch={props.dispatch}
                        />}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
