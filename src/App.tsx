import React from 'react';
import s from './App.module.css'
import {Route, Routes} from "react-router-dom";
import Header from "./components/header/Header";
import Messages from "./components/messages/Messages";
import Settings from "./components/settings/Settings";
import Profile from "./components/profile/Profile";

class App extends React.Component {


    render() {
        return (
            <div className={s.app}>
                <Header/>
                <div className={s.appContent}>
                    <Routes>
                        <Route path='/dialogs/*' element={<Messages/>}/>
                        <Route path='/settings/*' element={<Settings/>}/>
                        <Route path='/profile/*' element={<Profile/>}/>
                    </Routes>
                </div>
            </div>
        );
    }
}

export default App;
