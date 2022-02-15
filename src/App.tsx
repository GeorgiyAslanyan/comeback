import React from 'react';
import s from './App.module.css'
import {Route, Routes} from "react-router-dom";
import Dialogs from './components/dialogs/Dialogs'
import Dialog from "./components/dialog/Dialog";

class App extends React.Component {


    render() {
        return (
            <div className={s.app}>
                <div className={s.people}>
                    <Dialogs />
                </div>
                <div className={s.content}>
                    <Routes>
                        <Route path='/dialogs/:dialogsId?' element={<Dialog/>} />
                    </Routes>
                </div>
            </div>
        );
    }
}

export default App;
