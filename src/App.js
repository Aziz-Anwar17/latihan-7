import React, { Component } from 'react';
import './App.css';
import { Header, Navigation, Drawer,Layout,Content } from 'react-mdl';
import Main from './Component/main';
import { Link } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="demo-big-content">
            <Layout>
                <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}}
            to="/">MycontohLP</Link>} scroll>
                    <Navigation>
                        <a href="/">Pesan</a>
                        <a href="/">Group</a>
                        <a href="/">Notification</a>
                    </Navigation>
                </Header>
                <Drawer title="Dusun">
                    <Navigation>
                        <Link to="/aboutme">AboutMe</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/resume">Resume</Link>
                        <Link to="/projects">Projects</Link>
                    </Navigation>
                </Drawer>
                <Content>
                    <div className="page-content" />
                    <Main/>
                </Content>
            </Layout>
            </div>
        );
    }
}

export default App;
