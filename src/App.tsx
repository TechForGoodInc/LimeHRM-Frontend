import React from 'react';
import logo from './logo.svg';
import './App.css';
import Router from './Router';
import { ApiRoutes } from "./Router";

var state = {
  authToken: "",
  username: ""
};

function App() {
  loadFromLocalStorage();
  console.log("%cDEBUG:\nCurrent Bearer Token: " + state.authToken, "background-color: #1f4221;");
  return (
    <Router/>
  );
}
export default App;

export function setUsername(val: string){
  state.username = val
}

export function setToken(val: string){
  state.authToken = val;
}

export function getToken(){
  return state.authToken
}

export function getUsername(){
 return state.username;
}

const saveToLocalStorage = () => {
  try {localStorage.setItem('state', JSON.stringify(state));}
  catch (err) {console.log("Error in saving local storage: " + err);}
}

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('state');
    state = serializedState !== null ? JSON.parse(serializedState) : {authToken: "", username: ""};
  }
  catch (err) {console.log("Error in loading local storage: " + err);}
}

export const deleteFromLocalStorage = () => {
  localStorage.removeItem('state');
  state = {authToken: "", username: ""};
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

window.onbeforeunload = (e) => {
  saveToLocalStorage();
}