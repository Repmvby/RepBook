import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from "./redux/state";

let rerenderEntireTree = (store) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <App posts={store.state.profileData.posts}
                 dialogs={store.state.dialogsData.dialogs}
                 messages={store.state.dialogsData.messages}
                 friends={store.state.friendList.friends}
                 addPost={store.state.addPost}
                 addMessage={store.state.addMessage}

            />
        </React.StrictMode>
    );
}

rerenderEntireTree(store);
store.state.subscribe(rerenderEntireTree);