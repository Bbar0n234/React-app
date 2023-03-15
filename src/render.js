import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = (state, addPost, sendMessage) =>{
    root.render(
      <React.StrictMode>
        <App data = {state} addPost = {addPost} sendMessage = {sendMessage}/>
      </React.StrictMode>
    );
  }