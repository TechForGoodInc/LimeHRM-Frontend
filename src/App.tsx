import React from 'react';
import logo from './logo.svg';
import './App.css';
import Router from './Router';
import { UrlRoutes, ApiRoutes, navigate } from "./Router";
import PopupLogout from "./components/PopupLogout";
import { useState } from 'react';

var state = {
  authToken: "",
  username: "",
  loginTimer: 0
};

startCountdown();

function App() {
  const [timerPopup, setTimerPopup] = useState(false);
  if (state.authToken !== "" || state.authToken !== undefined) {
    loadFromLocalStorage();
    displayPopupLogout = (val: boolean) => {
      setTimerPopup(val);
    }
  }
  console.log("%cDEBUG:\nCurrent Bearer Token: " + state.authToken, "background-color: #1f4221;");
  return (
    <div>
      <Router/>
      <PopupLogout trigger={timerPopup}/>
    </div>
  );
}
export default App;


//State var gets/sets
export function setUsername(val: string){
  state.username = val
}
export function setToken(val: string){
  state.authToken = val;
}
export function resetTimer(){
  state.loginTimer = 1800; //Time to log out in seconds
}
export function getToken(){
  return state.authToken
}
export function getUsername(){
  return state.username;
}
export function getTimer(){
  return state.loginTimer;
}


//Storing state var
const saveToLocalStorage = () => {
  try {localStorage.setItem('state', JSON.stringify(state));}
  catch (err) {console.log("Error in saving local storage: " + err);}
}
const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('state');
    state = serializedState !== null ? JSON.parse(serializedState) : {authToken: "", username: "", loginTimer: 0};
  }
  catch (err) {console.log("Error in loading local storage: " + err);}
}
export const deleteFromLocalStorage = () => {
  localStorage.removeItem('state');
  state = {authToken: "", username: "", loginTimer: 0};
}
window.onbeforeunload = (e) => {
  saveToLocalStorage();
}

//API Calls
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
    resetTimer();
    return response.json();
}

//Login handlers
var displayPopupLogout = (val: boolean) => {}
function startCountdown(){
  const interval = setInterval(() => {
    if (state.loginTimer <= 0) clearInterval(interval);
    state.loginTimer -= 1;
    if (state.loginTimer <= 60 && state.loginTimer > 1) handleLogoutWarning();
    if (state.loginTimer == 1){
      clearInterval(interval);
      handleLogout();
    }
  }, 1000);
}
const handleLogoutWarning = () => {
  saveToLocalStorage();
  displayPopupLogout(true);
}
export const handleLogoutCancel = () => {
  resetTimer();
  saveToLocalStorage();
  displayPopupLogout(false);
}
export const handleLogout = () => {
  deleteFromLocalStorage();
  navigate(UrlRoutes.Login);
}