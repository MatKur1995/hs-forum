import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PostView } from "./pages/PostView/PostView";
import { Home } from "./pages/Home/Home";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/postview/:id" element={<PostView />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
