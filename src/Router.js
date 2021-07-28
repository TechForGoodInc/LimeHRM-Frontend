import { BrowserRouter, Routes, Route, Redirect } from 'react-router-dom';

//Page component imports
import Admin from './components/Administration';
import Dashboard from './components/Dashboard';
import Leave from './components/Leave';
import Login from './components/Login';
import Maintenance from './components/Maintenance';
import Account from './components/MyInfo';
import Pay from './components/Pay'
import Performance from './components/Performance';
import Recruitment from './components/Recruitment';
import Time from './components/Time';

//UrlMappings
//Conditional statement + Redirect = saved state for login.
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Redirect from={UrlRoutes.Root} to={UrlRoutes.Login}></Redirect>
                <Route path={UrlRoutes.Login} element={<Login></Login>}/>
                <Route path={UrlRoutes.Dashboard} element={<Dashboard></Dashboard>}/>
                <Route path={UrlRoutes.Admin} element={<Admin></Admin>}/>
                <Route path={UrlRoutes.Leave} element={<Leave></Leave>}/>
                <Route path={UrlRoutes.Maintenance} element={<Maintenance></Maintenance>}/>
                <Route path={UrlRoutes.Account} element={<Account></Account>}/>
                <Route path={UrlRoutes.Pay} element={<Pay></Pay>}/>
                <Route path={UrlRoutes.Performance} element={<Performance></Performance>}/>
                <Route path={UrlRoutes.Recruitment} element={<Recruitment></Recruitment>}/>
                <Route path={UrlRoutes.Time} element={<Time></Time>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Router;

//A const to be used instead of hard coding pages in each individual component, changes here should change every link in the application
export const UrlRoutes = {
    "Base": "http://localhost:3000",
    "Root": "/",
    "Login": "/login",
    "Dashboard": "/dashboard",
    "Admin": "/admin",
    "Leave": "/leave",
    "Maintenance": "/maintenance",
    "Account": "/account",
    "Pay": "/pay",
    "Performance": "/performance",
    "Recruitment": "/recruitment",
    "Time": "/time"
};

export const ApiRoutes = {
    "Base": "http://localhost:7000",
}

export const navigateTab = (path) => {
    window.open(path);
}

export const navigate = (path) => {
    window.location.href = path;
}
