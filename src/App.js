
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Expertise from './components/pages/Expertise';
import Products from './components/pages/Products.js';
import Edit from './components/pages/posts/Edit';
import editpost from './components/pages/posts/editpost';


import Profile from './components/pages/Profile';
import Evaluation from './components/pages/Evaluation';
import Project from './components/pages/Project';
import Survey from './components/pages/Survey';
import Community from './components/pages/Community';
import Clients from './components/pages/Clients';
import Institute from './components/pages/Institute'
import React from 'react';
import Login from './components/pages/posts/Login';
import Register from './components/pages/posts/Register';
import Dashboard from './components/pages/posts/Dashboard';
// import DetailMovies from './components/DetailMovies';


function App() {
 

  return (
  
 

    <>
    
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/profile' component={Profile} />
          <Route path='/expertise' component={Expertise} />
          <Route path='/clients' component={Clients} />
          <Route path='/edit' component={Edit} />
          
          <Route path='/editpost/edit/:id' component={editpost} />
          



          <Route path='/products' component={Products} />
         
          <Route path='/Evaluation' component={Evaluation} />
          <Route path='/Project' component={Project} />
          <Route path='/Survey' component={Survey} />
          <Route path='/Community' component={Community} />
          <Route path='/Institute' component={Institute} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/dashboard' component={Dashboard} />
          
          {/* <Route path="/DetailMovies/:id" component={DetailMovies} /> */}
          
          
        </Switch>
      </Router>
     
    </>
    
    
  );
}

export default App;
