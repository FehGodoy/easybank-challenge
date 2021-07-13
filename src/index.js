import React from 'react';
import ReactDOM from 'react-dom';
import {Home} from './templates/Home';
import About from './templates/About';
import Contact from './templates/Contact';
import Blog from './templates/Blog';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './globalStyle/style.css';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>      
        <Header />
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/about" component={About} exact/>
          <Route path="/contact" component={Contact} exact/>
          <Route path="/blog" component={Blog} exact/>          
        </Switch>   
        <Footer />   
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
