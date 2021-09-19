import React from 'react';
import Footer from '../component/Footer';
import Header from '../component/Header';
import Login from '../login/Login';

const LoginPage = () => {
    return (
        <div>
            <Header/>
            <Login />
            <Footer/>
        </div>
    );
};

export default LoginPage;