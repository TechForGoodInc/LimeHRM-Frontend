//TODO: FIX SALARY TO MAKE IT BOOLEAN INSTEAD OF STRING, AND FIX DATES AS WELL!!!!!!!!!!!!!

import * as React from "react";
import {
  PlasmicMyInfo,
  DefaultMyInfoProps
} from "./plasmic/lime_hrm_front/PlasmicMyInfo";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { ApiRoutes } from "../Router";

var firstName = "";
var lastName = "";
var teamName = "";
var positionName = "";

var gender = "";
var maritalStatus = "";
var salary = "";

var homeAddress = "";
var department = "";
var jobStatus = "";

var homePhone = "";
var mobile = "";

var birthDate = "";
var startDate = "";
var endDate = "";

var email = "";
var personalEmail = "";
var managerEmail = "";

interface MyInfoProps extends DefaultMyInfoProps {}

function MyInfo_(props: MyInfoProps, ref: HTMLElementRefOf<"div">) {

  return (
    <PlasmicMyInfo
      root={{ ref }}
      {...props} 
      saveButton={{
        className: "saveButton",
        onClick: () => handleSave(firstName, lastName, teamName, positionName, gender, maritalStatus, salary,
                                  homeAddress, department, jobStatus, homePhone, mobile, birthDate, 
                                  startDate, endDate, email, personalEmail, managerEmail)
      }}
      firstName={{
        className: "firstName",
        placeholder: "Enter your first name",
        onChange: (e: React.FormEvent<HTMLInputElement>) => handleFirstNameChange(e)
      }}
      lastName={{
        className: "lastName",
        placeholder: "Enter your last name",
        onChange: (e: React.FormEvent<HTMLInputElement>) => handleLastNameChange(e)
      }}
      teamName={{
        className: "teamName",
        placeholder: "Enter your team name",
        onChange: (e: React.FormEvent<HTMLInputElement>) => handleTeamNameChange(e)
      }}
      positionName={{
        className: "positionName",
        placeholder: "Enter your position name",
        onChange: (e: React.FormEvent<HTMLInputElement>) => handlePositionNameChange(e)
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
        placeholder: "Enter your marital status",
        onChange: (e: React.FormEvent<HTMLInputElement>) => handleMaritalChange(e)
      }}
      salary={{
        className: "salary",
        placeholder: "Enter your first street address",
        onChange: (e: React.FormEvent<HTMLInputElement>) => handleSalaryChange(e)
      }}
      homeAddress={{
        className: "homeAddress",
        placeholder: "Enter your home address",
        onChange: (e: React.FormEvent<HTMLInputElement>) => handleHomeAddressChange(e)
      }}
      department={{
        className: "department",
        placeholder: "Enter your department",
        onChange: (e: React.FormEvent<HTMLInputElement>) => handleDepartmentChange(e)
      }}
      jobStatus={{
        className: "jobStatus",
        placeholder: "Enter your job status",
        onChange: (e: React.FormEvent<HTMLInputElement>) => handleJobStatusChange(e)
      }}
      homePhone={{
        className: "homePhone",
        placeholder: "Enter your home phone #",
        onChange: (e: React.FormEvent<HTMLInputElement>) => handleHomePhoneChange(e)
      }}
      mobile={{
        className: "mobile",
        placeholder: "Enter your mobile phone #",
        onChange: (e: React.FormEvent<HTMLInputElement>) => handleMobileChange(e)
      }}
      birthDate={{
        className: "birthDate",
        placeholder: "Enter your birth date",
        onChange: (e: React.FormEvent<HTMLInputElement>) => handleBirthDateChange(e)
      }}
      startDate={{
        className: "startDate",
        placeholder: "Enter your start date",
        onChange: (e: React.FormEvent<HTMLInputElement>) => handleStartDateChange(e)
      }}
      endDate={{
        className: "endDate",
        placeholder: "Enter your end date",
        onChange: (e: React.FormEvent<HTMLInputElement>) => handleEndDateChange(e)
      }}
      email={{
        className: "email",
        placeholder: "Enter your email",
        onChange: (e: React.FormEvent<HTMLInputElement>) => handleEmailChange(e)
      }}
      personalEmail={{
        className: "personalEmail",
        placeholder: "Enter your personal email",
        onChange: (e: React.FormEvent<HTMLInputElement>) => handlePersonalEmailChange(e)
      }}
      managerEmail={{
        className: "managerEmail",
        placeholder: "Enter your manager's email",
        onChange: (e: React.FormEvent<HTMLInputElement>) => handleManagerEmailChange(e)
      }}
    />
  );
}

const handleSave = (firstName: string, lastName: string, teamName: string, positionName: string, 
                    gender: string, maritalStatus: string, salary: string, homeAddress: string, department: string,
                    jobStatus: string, homePhone: string, mobile: string, birthDate: string, startDate: string, 
                    endDate: string, email: string, personalEmail: string, managerEmail: string) => {
  saveInfo(firstName, lastName, teamName, positionName, gender, maritalStatus, salary,
          homeAddress, department, jobStatus, homePhone, mobile, birthDate, 
          startDate, endDate, email, personalEmail, managerEmail);
  alert("Your info has been saved.");
}

const handleFirstNameChange = (e: React.FormEvent<HTMLInputElement>) => {
  firstName = e.currentTarget.value;
}

const handleLastNameChange = (e: React.FormEvent<HTMLInputElement>) => {
  lastName = e.currentTarget.value;
}

const handleTeamNameChange = (e: React.FormEvent<HTMLInputElement>) => {
  teamName = e.currentTarget.value;
}

const handlePositionNameChange = (e: React.FormEvent<HTMLInputElement>) => {
  positionName = e.currentTarget.value;
}

const handleGenderChange = (g: string) => {
  gender = g;
}

const handleMaritalChange = (e: React.FormEvent<HTMLInputElement>) => {
  maritalStatus = e.currentTarget.value;
}

const handleSalaryChange = (e: React.FormEvent<HTMLInputElement>) => {
  salary = e.currentTarget.value;
}

const handleHomeAddressChange = (e: React.FormEvent<HTMLInputElement>) => {
  homeAddress = e.currentTarget.value;
}

const handleDepartmentChange = (e: React.FormEvent<HTMLInputElement>) => {
  department = e.currentTarget.value;
}

const handleJobStatusChange = (e: React.FormEvent<HTMLInputElement>) => {
  jobStatus = e.currentTarget.value;
}

const handleHomePhoneChange = (e: React.FormEvent<HTMLInputElement>) => {
  homePhone = e.currentTarget.value;
}

const handleMobileChange = (e: React.FormEvent<HTMLInputElement>) => {
  mobile = e.currentTarget.value;
}

const handleBirthDateChange = (e: React.FormEvent<HTMLInputElement>) => {
  birthDate = e.currentTarget.value;
}

const handleStartDateChange = (e: React.FormEvent<HTMLInputElement>) => {
  startDate = e.currentTarget.value;
}

const handleEndDateChange = (e: React.FormEvent<HTMLInputElement>) => {
  endDate = e.currentTarget.value;
}

const handleEmailChange = (e: React.FormEvent<HTMLInputElement>) => {
  email = e.currentTarget.value;
}

const handlePersonalEmailChange = (e: React.FormEvent<HTMLInputElement>) => {
  personalEmail = e.currentTarget.value;
}

const handleManagerEmailChange = (e: React.FormEvent<HTMLInputElement>) => {
  managerEmail = e.currentTarget.value;
}


export function setFirstName(val: string) {
  firstName = val;
}

export function setLastName(val: string) {
  lastName = val;
}

export function setTeamName(val: string) {
  teamName = val;
}

export function setPositionName(val: string) {
  positionName = val;
}

export function setGender(val: string) {
  gender = val;
}

export function setMaritalStatus(val: string) {
  maritalStatus = val;
}

export function setSalary(val: string) {
  salary = val;
}

export function sethomeAddress(val: string) {
  homeAddress = val;
}

export function setDepartment(val: string) {
  department = val;
}

export function setJobStatus(val: string) {
  jobStatus = val;
}

export function sethomePhone(val: string) {
  homePhone = val;
}

export function setMobile(val: string) {
  mobile = val;
}

export function setBirthDate(val: string) {
  birthDate = val;
}

export function setStartDate(val: string) {
  startDate = val;
}

export function setEndDate(val: string) {
  endDate = val;
}

export function setEmail(val: string) {
  email = val;
}

export function setPersonalEmail(val: string) {
  personalEmail = val;
}

export function setManagerEmail(val: string) {
  managerEmail = val;
}


export async function saveInfo(firstName: string, lastName: string, teamName: string, positionName: string, 
                              gender: string, maritalStatus: string, salary: string, homeAddress: string, 
                              department: string, jobStatus: string, homePhone: string, mobile: string, 
                              birthDate: string, startDate: string, endDate: string, email: string, 
                              personalEmail: string, managerEmail: string){
  setFirstName(firstName);
  setLastName(lastName);
  setTeamName(teamName);
  setPositionName(positionName);
  setGender(gender);
  setMaritalStatus(maritalStatus);
  setSalary(salary);
  sethomeAddress(homeAddress);
  setDepartment(department);
  setJobStatus(jobStatus);
  sethomePhone(homePhone);
  setMobile(mobile);
  setBirthDate(birthDate);
  setStartDate(startDate);
  setEndDate(endDate);
  setEmail(email);
  setPersonalEmail(personalEmail);
  setManagerEmail(managerEmail);
  const response = await fetch(
      ApiRoutes.Base + '/api/worker/:workerId="workers/1"?email=' + email + '&first_name=' + firstName 
      + '&last_name=' + lastName + '&personal_email=' + personalEmail + '&home_phone=' + homePhone
      + '&mobile_phone=' + mobile + '&home_address=' + homeAddress + '&sex=' + gender
      + '&marital_status=' + maritalStatus + '&position_name=' + positionName + '&team_name=' + teamName
      + '&salary=' + salary + '&birth_date=' + birthDate + '&start_date=' + startDate + '&end_date=' + endDate
      + '&job_status=' + jobStatus + '&manager_email=' + managerEmail,
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

/*
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
*/

const MyInfo = React.forwardRef(MyInfo_);
export default MyInfo;