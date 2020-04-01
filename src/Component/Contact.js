import React, {Component} from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Aziz Anwar</h2>
                        <img
                        src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                        alt="avatar"
                        style={{height: '250px'}}
                        />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>Nazril Irham, more popularly known as Ariel, is an Indonesian rock star. He is the lead singer of Indonesian band Noah. Ariel is of Minangkabau-Mandailing descent from his father's side and Minangkabau from his mother's side. He has appeared in advertisements</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'anton'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true"/>
                                        (0823) 3927-6692
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'anton'}}>
                                        <i className="fa fa-fax" aria-hidden="true"/>
                                        (0823) 3927-6692
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'anton'}}>
                                        <i className="fa fa-envelope" aria-hidden="true"/>
                                        some.@xample.com
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'anton'}}>
                                        <i className="fa fa-skype" aria-hidden="true"/>
                                        my skype id
                                    </ListItemContent>
                                </ListItem>
                
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;