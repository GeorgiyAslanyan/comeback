import React from 'react';
import s from './App.module.css'
import {Route, Routes} from "react-router-dom";
import Header from "./components/header/Header";
import Messages from "./components/messages/Messages";
import Dialog from "./components/messages/dialog/Dialog";

class App extends React.Component {


    render() {
        return (
            <div className={s.app}>
                <Header/>
                <div className={s.appContent}>
                    <Routes>
                        <Route path='/dialogs/*' element={<Messages/>}/>
                    </Routes>
                </div>
            </div>
        );
    }
}

export default App;
