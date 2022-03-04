import React from 'react';
import { Routes, Route } from "react-router-dom";
import Login from '../components/login/Login';
import Home from '../components/home/Home';
import SignUp from '../components/signup/SignUp';
import Header from '../components/header/Header';
import Favourites from '../components/favourite/Favourite';
import AuthenticatedRoute from './AuthenticatedRoute';
import NotFoundPage from "../components/notfound/NotFoundPage";


const AppRouter = () => (

    <div>

        <Header />

        <Routes>
            <Route path="/" element={<Home />} exact={true} />
            <Route path="/news" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="favourites" element={
                <AuthenticatedRoute>
                    <Favourites />
                </AuthenticatedRoute>
            } />
            <Route path='*' element={<NotFoundPage />} />
        </Routes>

    </div>

);

export default AppRouter;