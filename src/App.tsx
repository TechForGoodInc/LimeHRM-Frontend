import React from 'react';
import logo from './logo.svg';
import './App.css';
import Router from './Router';
import { ApiRoutes } from "./Router";

var authToken = "";
var username = "";

function App() {
  return (
    <Router/>
  );
}
export default App;

export function setUsername(val: string){
  username = val
}

export function setToken(val: string){
  authToken = val;
}

export function getToken(){
  return authToken
}

export function getUsername(){
 return username;
}

export async function getLoginToken(username: string, password: string){
    setUsername(username);
    const response = await fetch(
        ApiRoutes.Base + '/api/authentication/getToken?email=' + username + '&password=' + password + '&grant_type=password',
        {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
        }
    );
    return response.json();
}
