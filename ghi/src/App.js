
import './App.css';
import LoginForm from './users/login';
import SignUpForm from './users/signup';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import homePage from './mainpage/Homepage'
import Footer from "./mainpage/Footer";
import ParksList from './parks/ParksList';
import ParkDetails from "./parks/ParkDetails"
import React, { useEffect, useState } from 'react'
import { useAuthContext, useToken } from './Auth'
import Nav from './Nav';


function App(props) {

  const [userName, setUserName] = useState('');
  const [, , logout] = useToken();
  const { token } = useAuthContext();


  return (
    <>
      <Nav logout={logout} token={token} />
      <Routes>
        <Route>
          <Route path="/" element={homePage} />
          <Route path="/parks" element={<ParksList fetchUrl={`${process.env.REACT_APP_PARKS}/parks/list/`} token={token} />} />
          <Route path="parks/:id" element={<ParkDetails detailUrl={`${process.env.REACT_APP_PARKS}/parks/list/`} weatherUrl={'https://api.openweathermap.org/data/2.5/weather?q='} token={token} />} />
        </Route>
        <Route path="/login" element={<LoginForm token={token} />} />
        <Route path="/signup" element={<SignUpForm />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App; 
