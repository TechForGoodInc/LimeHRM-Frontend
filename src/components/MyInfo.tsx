import * as React from "react";
import {
  PlasmicMyInfo,
  DefaultMyInfoProps
} from "./plasmic/lime_hrm_front/PlasmicMyInfo";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { ApiRoutes } from "../Router";

/*var state={
  firstName: "",
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
  email: ""
}*/

var firstName = "";
var middleName = "";
var lastName = "";

var gender = "";
var maritalStatus = "";

var street1 = "";
var street2 = "";
var city = "";
var state = "";
var zip = "";
var country = "";

var homePhone = "";
var mobile = "";
var workPhone = "";
var email = "";

interface MyInfoProps extends DefaultMyInfoProps {}

function MyInfo_(props: MyInfoProps, ref: HTMLElementRefOf<"div">) {

  return (
    <PlasmicMyInfo
      root={{ ref }}
      {...props} 
      saveButton={{
        className: "saveButton",
        onClick: () => handleSave(firstName, middleName, lastName, gender, maritalStatus, street1, street2,
                                  city, state, zip, country, homePhone, mobile, workPhone, email)
      }}
      firstName={{
        className: "firstName",
        //value: firstName,
        //placeholder: "Enter your first name",
        onChange: (e: React.FormEvent<HTMLInputElement>) => handleFirstNameChange(e)
      }}
      middleName={{
        className: "middleName",
        value: middleName,
        placeholder: "Enter your middle name",
        onChange: (e: React.FormEvent<HTMLInputElement>) => handleMiddleNameChange(e)
      }}
      lastName={{
        className: "lastName",
        value: lastName,
        placeholder: "Enter your last name",
        onChange: (e: React.FormEvent<HTMLInputElement>) => handleLastNameChange(e)
      }}
      male={{
        className: "male",
        isSelected: () => handleGenderChange("Male")
      }}
      female={{
        className: "female",
        isSelected: () => handleGenderChange("Female")
      }}
      maritalStatus={{
        className: "maritalStatus",
        value: maritalStatus,
        placeholder: "Enter your marital status",
        onChange: (e: React.FormEvent<HTMLInputElement>) => handleMaritalChange(e)
      }}
      street1={{
        className: "street1",
        value: street1,
        placeholder: "Enter your first street address",
        onChange: (e: React.FormEvent<HTMLInputElement>) => handleStreet1Change(e)
      }}
      street2={{
        className: "street2",
        value: street2,
        placeholder: "Enter your second street address",
        onChange: (e: React.FormEvent<HTMLInputElement>) => handleStreet2Change(e)
      }}
      city={{
        className: "city",
        value: city,
        placeholder: "Enter your city",
        onChange: (e: React.FormEvent<HTMLInputElement>) => handleCityChange(e)
      }}
      state={{
        className: "state",
        value: state,
        placeholder: "Enter your state",
        onChange: (e: React.FormEvent<HTMLInputElement>) => handleStateChange(e)
      }}
      zip={{
        className: "zip",
        value: zip,
        placeholder: "Enter your zip code",
        onChange: (e: React.FormEvent<HTMLInputElement>) => handleZipChange(e)
      }}
      country={{
        className: "country",
        value: country,
        placeholder: "Enter your country",
        onChange: (e: React.FormEvent<HTMLInputElement>) => handleCountryChange(e)
      }}
      homePhone={{
        className: "homePhone",
        value: homePhone,
        placeholder: "Enter your home phone #",
        onChange: (e: React.FormEvent<HTMLInputElement>) => handleHomePhoneChange(e)
      }}
      mobile={{
        className: "mobile",
        value: mobile,
        placeholder: "Enter your mobile phone #",
        onChange: (e: React.FormEvent<HTMLInputElement>) => handleMobileChange(e)
      }}
      workPhone={{
        className: "workPhone",
        value: workPhone,
        placeholder: "Enter your work phone #",
        onChange: (e: React.FormEvent<HTMLInputElement>) => handleWorkPhoneChange(e)
      }}
      email={{
        className: "email",
        value: email,
        placeholder: "Enter your work email",
        onChange: (e: React.FormEvent<HTMLInputElement>) => handleEmailChange(e)
      }}
    />
  );
}

const handleSave = (firstName: string, middleName: string, lastName: string, gender: string, maritalStatus: string, 
  street1: string, street2: string, city: string, state: string, zip: string, country: string, homePhone: string, 
  mobile: string, workPhone: string, email: string) => {
  saveInfo(firstName, middleName, lastName, gender, maritalStatus, street1, street2, city, state,
          zip, country, homePhone, mobile, workPhone, email);
  alert("Your info has been saved.");
}

const handleFirstNameChange = (e: React.FormEvent<HTMLInputElement>) => {
  firstName = e.currentTarget.value;
}

const handleMiddleNameChange = (e: React.FormEvent<HTMLInputElement>) => {
  middleName = e.currentTarget.value;
}

const handleLastNameChange = (e: React.FormEvent<HTMLInputElement>) => {
  lastName = e.currentTarget.value;
}

const handleGenderChange = (g: string) => {
  gender = g;
}

const handleMaritalChange = (e: React.FormEvent<HTMLInputElement>) => {
  maritalStatus = e.currentTarget.value;
}

const handleStreet1Change = (e: React.FormEvent<HTMLInputElement>) => {
  street1 = e.currentTarget.value;
}

const handleStreet2Change = (e: React.FormEvent<HTMLInputElement>) => {
  street2 = e.currentTarget.value;
}

const handleCityChange = (e: React.FormEvent<HTMLInputElement>) => {
  city = e.currentTarget.value;
}

const handleStateChange = (e: React.FormEvent<HTMLInputElement>) => {
  state = e.currentTarget.value;
}

const handleZipChange = (e: React.FormEvent<HTMLInputElement>) => {
  zip = e.currentTarget.value;
}

const handleCountryChange = (e: React.FormEvent<HTMLInputElement>) => {
  country = e.currentTarget.value;
}

const handleHomePhoneChange = (e: React.FormEvent<HTMLInputElement>) => {
  homePhone = e.currentTarget.value;
}

const handleMobileChange = (e: React.FormEvent<HTMLInputElement>) => {
  mobile = e.currentTarget.value;
}

const handleWorkPhoneChange = (e: React.FormEvent<HTMLInputElement>) => {
  workPhone = e.currentTarget.value;
}

const handleEmailChange = (e: React.FormEvent<HTMLInputElement>) => {
  email = e.currentTarget.value;
}


export function setFirstName(val: string) {
  firstName = val;
}

export function setMiddleName(val: string) {
  middleName = val;
}

export function setLastName(val: string) {
  lastName = val;
}

export function setGender(val: string) {
  gender = val;
}

export function setMaritalStatus(val: string) {
  maritalStatus = val;
}

export function setStreet1(val: string) {
  street1 = val;
}

export function setStreet2(val: string) {
  street2 = val;
}

export function setCity(val: string) {
  city = val;
}

export function setState(val: string) {
  state = val;
}

export function setZip(val: string) {
  zip = val;
}

export function setCountry(val: string) {
  country = val;
}

export function setHomePhone(val: string) {
  homePhone = val;
}

export function setMobile(val: string) {
  mobile = val;
}

export function setWorkPhone(val: string) {
  workPhone = val;
}

export function setEmail(val: string) {
  email = val;
}


export async function saveInfo(firstName: string, middleName: string, lastName: string, gender: string, maritalStatus: string, 
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
      ApiRoutes.Base + '/api/worker/:workerId="workers/1"?firstName=' + firstName + '&middleName' + middleName 
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
}


const MyInfo = React.forwardRef(MyInfo_);
export default MyInfo;