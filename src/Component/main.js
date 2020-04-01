import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './LandingPage';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/AboutMe" component={AboutMe} />
        <Route path="/Projects" component={Projects} />
        <Route path="/Resume" component={Resume} />
        <Route path="/Contact" component={Contact} />
    </Switch>
)

export default Main;