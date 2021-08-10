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
  loginTimer: 0,

  //My Info states
  /*firstName: "",
  middleName: "",
  lastName: "",
  gender: "",
  maritalStatus: "",
  street1: "",
  street2: "",
  city: "",
  state: "",
  zip: "",
  country: "",
  homePhone: "",
  mobile: "",
  workPhone: "",
  email: ""*/
  //End of My Info States
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

//My Info page functions
/*export function setFirstName(val: string) {
  state.firstName = val;
}

export function setMiddleName(val: string) {
  state.middleName = val;
}

export function setLastName(val: string) {
  state.lastName = val;
}

export function setGender(val: string) {
  state.gender = val;
}

export function setMaritalStatus(val: string) {
  state.maritalStatus = val;
}

export function setStreet1(val: string) {
  state.street1 = val;
}

export function setStreet2(val: string) {
  state.street2 = val;
}

export function setCity(val: string) {
  state.city = val;
}

export function setState(val: string) {
  state.state = val;
}

export function setZip(val: string) {
  state.zip = val;
}

export function setCountry(val: string) {
  state.country = val;
}

export function setHomePhone(val: string) {
  state.homePhone = val;
}

export function setMobile(val: string) {
  state.mobile = val;
}

export function setWorkPhone(val: string) {
  state.workPhone = val;
}

export function setEmail(val: string) {
  state.email = val;
}*/
//End of My Info page functions

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
      ApiRoutes.Base + '/api/authentication/getToken?userId=' + username + '&password=' + password + '&grant_type=password',
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

/*export async function saveInfo(firstName: string, middleName: string, lastName: string, gender: string, maritalStatus: string, 
                              street1: string, street2: string, city: string, state: string, zip: string, country: string, 
                              homePhone: string, mobile: string, workPhone: string, email: string){
  setFirstName(firstName);
  setMiddleName(middleName);
  setLastName(lastName);
  setGender(gender);
  setMaritalStatus(maritalStatus);
  setStreet1(street1);
  setStreet2(street2);
  setCity(city);
  setState(state);
  setZip(zip);
  setCountry(country);
  setHomePhone(homePhone);
  setMobile(mobile);
  setWorkPhone(workPhone);
  setEmail(email);
  const response = await fetch(
      ApiRoutes.Base + '/api/workers/:workerId="workers/1"?firstName=' + firstName + '&middleName' + middleName 
      + '&lastName=' + lastName + '&gender=' + gender + '&maritalStatus=' + maritalStatus 
      + '&street1=' + street1 + '&street2=' + street2 + '&city=' + city + '&state=' 
      + state + '&zip=' + zip + '&country=' + country + '&homePhone=' + homePhone + '&mobile=' + mobile 
      + '&workPhone=' + workPhone + '&email=' + email,
      {
          method: 'PATCH',
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

export async function getInfo(){
  const response = await fetch(
    ApiRoutes.Base + '/api/workers/:workerId="workers/1"?',
    {
      method: 'GET',
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
}*/