import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Router from './Router';
import { ApiRoutes } from "./Router";

var state = {
  authToken: "",
  username: "",

  //My Info states
  firstName: "",
  middleName: "",
  lastName: "",
  street1: "",
  street2: "",
  city: "",
  state: "",
  zip: "",
  country: "",
  homePhone: "",
  mobile: "",
  workPhone: "",
  email: ""
  //End of My Info States
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

//My Info page functions
export function setFirstName(val: string) {
  state.firstName = val;
}

export function setMiddleName(val: string) {
  state.middleName = val;
}

export function setLastName(val: string) {
  state.lastName = val;
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
}
//End of My Info page functions

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
  state = {authToken: "", username: "", firstName: "", 
            middleName: "", lastName: "", street1: "", street2: "",
            city: "", state: "", zip: "",
            country: "", homePhone: "", mobile: "",
            workPhone: "", email: ""};
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

export async function saveInfo(firstName: string, middleName: string, lastName: string, street1: string, street2: string,
                              city: string, state: string, zip: string, country: string, homePhone: string, mobile: string,
                              workPhone: string, email: string){
  setFirstName(firstName);
  setMiddleName(middleName);
  setLastName(lastName);
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
      ApiRoutes.Base + '/api/workers?firstName=' + firstName + '&middleName' + middleName + '&lastName=' + lastName
      + '&street1=' + street1 + '&street2=' + street2 + '&city=' + city + '&state=' + state + '&zip=' + zip
      + '&country=' + country + '&homePhone=' + homePhone + '&mobile=' + mobile + '&workPhone=' + workPhone
      + '&email=' + email,
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