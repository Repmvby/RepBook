import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

export let rerenderEntireTree = (state) =>{
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <App posts={state.profileData.posts}
                 dialogs={state.dialogsData.dialogs}
                 messages={state.dialogsData.messages}
                 friends={state.friendList.friends}
            />
        </React.StrictMode>
    );
}

