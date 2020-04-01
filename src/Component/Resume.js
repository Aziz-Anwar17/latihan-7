import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './Education';
import Experience from './experience';
import Skills from './skill';

class Resume extends Component {
    render() {
        return(
            <Grid>
                <Cell col={4}>
                    <div style={{textAlign: 'center'}}>
                        <img 
                            src="https://upload.wikimedia.org/wikipedia/en/thumb/8/86/Avatar_Aang.png/220px-Avatar_Aang.png"
                            alt="avatar"
                            style={{height: '200px'}}
                        />
                    </div>
                    
                    <h2 style={{paddingTop: '2em'}}>Avatar Ange</h2>
                    <h2 style={{color: 'grey'}}>Pegendara Udara</h2>
                    <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
                    <p>Avatar (marketed as James Cameron's Avatar) is a 2009 American epic science fiction film directed, written, produced, and co-edited by James Cameron and stars Sam Worthington, Zoe Saldana, Stephen Lang, Michelle Rodriguez, and Sigourney Weaver.</p>
                    <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
                    <h5>Address</h5>
                    <p>Desa Kebon Ayu Kecanatan Gerung</p>
                    <h5>Phone</h5>
                    <p>082 339 276 692</p>
                    <h5>Email</h5>
                    <p>azizanwar1726@gmail.com</p>
                    <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
                </Cell>
                <Cell className="resume-right-col" col={8}>


                    <h2>Education</h2>

                    <Education
                        startYear={2013}
                        endYear={2016}
                        schoolName="My Univercity"
                        schoolDescription="The University of Mataram is a public university in Mataram, West Nusa Tenggara, Indonesia. It was established on October 1, 1962. Its rector is Prof Sunarpi."
                    />

                    <Education
                        startYear={2017}
                        endYear={2019}
                        schoolName="My 2nd Univercity"
                        schoolDescription="The University of Mataram is a public university in Mataram, West Nusa Tenggara, Indonesia. It was established on October 1, 1962. Its rector is Prof Sunarpi."
                    />
                    <hr style={{borderTop: '3px solid #e22947'}} />
                    <h2>Experience</h2>
                    <Experience 
                        startYear={2019}
                        endYear={2020}
                        jobName="Teacher"
                        jobDescription="Teacher in YANMU NW PRAYA AND teacing about Budaya culture of Since"
                    />
                    <hr style={{borderTop: '3px solid #e22947'}} />
                    <h2>Skill</h2>
                    <Skills
                        skill="layangan"
                        progress={100}
                    />
                    <Skills
                        skill="Sendekker"
                        progress={75}
                    />
                    <Skills
                        skill="karet"
                        progress={50}
                    />
                    <Skills
                        skill="Gangsing"
                        progress={80}
                    />

                </Cell>
            </Grid>
        )
    }
}

export default Resume;