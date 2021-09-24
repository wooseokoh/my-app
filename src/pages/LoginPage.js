import React from 'react';
import Footer from '../component/Footer';
import Header from '../component/Header';
import Login from '../login/Login';

const LoginPage = (props) => {
    const { history } = props;
    console.log("LoginPage",props);
    console.log("id",props.match.params.id);
    return (
        <div>
            <button onClick={() => history.push('/')}>뒤로가기</button>
            <Login />
        </div>
    );
};

export default LoginPage;