import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from '../Components/HomePage/HomePage';
import KitchenList from '../Components/Kitchen/KitchenList';
import GiveOrder from '../Components/Meeting-Rooms/GiveOrder';
import MeetingRooms from '../Components/Meeting-Rooms/MeetingRooms';


function IndexRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path='meeting-rooms' element={<MeetingRooms />} />
                <Route path='meeting-rooms/:id' element={<GiveOrder />} />
                <Route path='kitchen-list' element={<KitchenList />} />
            </Routes>
        </BrowserRouter>
    )
}

export default IndexRouter