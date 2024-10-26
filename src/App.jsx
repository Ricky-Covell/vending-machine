import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import VendingMachine from './VendingMachine';
import Soda from './Soda';
import Chips from './Chips';
import Gum from './Gum';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path = "/" element={<VendingMachine />}/>
                    <Route exact path = "/soda" element={<Soda />}/>
                    <Route exact path = "/chips" element={<Chips />}/>
                    <Route exact path = "/gum" element={<Gum />}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
