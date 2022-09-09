import './App.css';
import React, { useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout'
import Login from './Login';
import Payment from './Payment';
import { useStateValue } from './StateProvider';
import {auth} from './firebase'
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'
import Orders from './Orders';

const promise=loadStripe
 ('pk_test_51Lc4AXIsQAs2CJr6mYmc5aDy5APf5QGvmUpSOE9MAbnnzVY6IBul7nODGdGnpiknDH06HaXBdZWrmMwVP0210icF00HPq0w7aq');

function App() {

const [{user},dispatch]=useStateValue();
//code run based on given condition
useEffect(()=>{
  auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        //the user is logged 
        dispatch({
          type: "SET_USER",
          user: authUser,
          } )
      }
      else
      {
             //the user is logged out
             dispatch({
              type: "SET_USER",
              user: null
              } );
      }
    });
    // return()=>{
    //   unSubscribe();
    // };
},[]);
//  console.log("the user is >>",user);
  return (
    <Router>
    <div className="App">
      <Routes>
      <Route path="/login" element={<Login />} />
          <Route path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          />
          <Route path="/"
            element={<><Header /><Home /></>} />
          <Route path="/checkout" element={<><Header /><Checkout /></>} />
          <Route path="/orders" element={<><Header /><Orders /></>} />
      </Routes>
    </div>
    </Router>
  
  );
}

export default App;
