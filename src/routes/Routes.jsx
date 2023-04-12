import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Auth from '../pages/Auth';

function ListRoutes() {
    return (
        <Routes>
            <Route path='/login' element={<Auth />} />
            <Route path='/register' element={<Auth />} />
        </Routes>
    );
}

export default ListRoutes;