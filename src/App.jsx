import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import './App.css'
import LoginForm from './components/auth/LoginForm'
import RegisterForm from './components/auth/RegisterForm'
import Header from "./components/elements/Header.jsx";
import Footer from "./components/elements/Footer.jsx";
import TasksPage from "./components/task/TasksPage.jsx";

function App() {
    const isAuthenticated = localStorage.getItem("token");

    return (
        <BrowserRouter>
            <div className="app-container">
                <Header/>
                <main>
                    <Routes>
                        <Route path="/"
                               element={isAuthenticated ? <Navigate to="/home"/> : <Navigate to="/auth/login"/>}/>
                        <Route path="/auth/login" element={<LoginForm/>}/>
                        <Route path="/auth/register" element={<RegisterForm/>}/>
                        <Route path="/home" element={isAuthenticated ? <TasksPage/> : <Navigate to="/auth/login"/>}/>
                    </Routes>
                </main>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App
