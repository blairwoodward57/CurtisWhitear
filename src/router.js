import React from 'react';
import About from './components/About/About.js';
import Contact from './components/Contact/Contact.js';
import Documentaries from './components/Documentaries/Documentaries.js';
import Home from './components/Home/Home.js';
import MusicVids from './components/MusicVids/MusicVids.js';
import OtherWorks from './components/OtherWorks/OtherWorks.js';

import { BrowserRouter as Router, Route } from 'react-router-dom';

export default (

    <Router>
        <div>
            <Route component={Home} exact path='/'/>
            <Route component={About} exact path='/about'/>
            <Route component={Contact} exact path='/contact'/>
            <Route component={Documentaries} exact path='/docs'/>
            <Route component={MusicVids} exact path='/musicvideo'/>
            <Route component={OtherWorks} exact path='/otherwork'/>
        </div>
    </Router>
)