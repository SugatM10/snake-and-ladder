import React from "react";
import { Route, BrowserRouter as Router, Routes  } from "react-router-dom";
import LoginBox from './Login'
import Die from './Die'

import { Provider } from 'react-redux'
import store from './store'
import {persistor} from './store'
import { PersistGate } from 'redux-persist/integration/react' 
import Registration from "./registration";


function App() {
    
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}> 
                <Router>
                    <Routes>
                        <Route exact path="/" element={<LoginBox />} />
                        <Route path="/die" element={<Die />} />
                        <Route path="/registration" element={<Registration />} /> 
                        <Route path="*" element={<h1>Page Not Found</h1>} />
                        {/* <Route path="/board" element={<Board />} /> */}
                    </Routes>
                </Router>
            </PersistGate> 
        </Provider>
    );
}

export default App;
