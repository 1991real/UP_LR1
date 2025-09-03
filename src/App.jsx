import { StrictMode, useState } from 'react'
import Home from "./home"
import About from "./about"
import Product from "./product"
import Login from "./login"
import Menu from "./menu"
import BasketProvider from './basketContext'
import GlobalStyles from "./globalStyles"
import { BrowserRouter, Routes,Route,Link, NavLink } from 'react-router-dom';
import './App.css';
import { ThemeContext, ThemeProvider } from './themeContext'

function App() {
  return (
    <ThemeProvider>
      <BasketProvider>
      <BrowserRouter>
       <GlobalStyles>
        <Menu/>
       </GlobalStyles>
      </BrowserRouter>
      </BasketProvider>
    </ThemeProvider>
    
  );
}

export default App
