import React, {Component} from 'react';
import {
    Tabs,
    Tab,
    Grid,
    Cell,
    Card,
    CardTitle,
    CardActions,
    Button,
    CardText,
    CardMenu,
    IconButton
} from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if(this.state.activeTab === 0) {
            return(
                <div className="projects-grid">
                    {/* projects #1 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background:
                    'url(https://2.bp.blogspot.com/-_K-Rp9gw1aY/UZqAchfSM3I/AAAAAAAAABk/G_kNG8JV5FU/s1600/peterpan-komplit.jpg) center/cover'}}>Peterpan #1</CardTitle>
                    <CardText>
                        Perjalanan Karir Peterpan Band. Pada tahun 1997, awalnya bernamaTopi ketika Andhika (kibor) membentuk band Topi dengan mengajak adik kelasnya di SMU 2 Bandung, Uki (gitar), serta teman mainnya, Abel (bas) dan Ari (drum). ... Tanggal 1 September 2000 secara resmi peterpan terbentuk.
                    </CardText>
                    <CardActions border>
                        <Button colored>WA</Button>
                        <Button colored>FB</Button>
                        <Button colored>IG</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                {/* projects #2 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background:
                    'url(https://2.bp.blogspot.com/-_K-Rp9gw1aY/UZqAchfSM3I/AAAAAAAAABk/G_kNG8JV5FU/s1600/peterpan-komplit.jpg) center/cover'}}>Peterpan #2</CardTitle>
                    <CardText>
                        Perjalanan Karir Peterpan Band. Pada tahun 1997, awalnya bernamaTopi ketika Andhika (kibor) membentuk band Topi dengan mengajak adik kelasnya di SMU 2 Bandung, Uki (gitar), serta teman mainnya, Abel (bas) dan Ari (drum). ... Tanggal 1 September 2000 secara resmi peterpan terbentuk.
                    </CardText>
                    <CardActions border>
                        <Button colored>WA</Button>
                        <Button colored>FB</Button>
                        <Button colored>IG</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                {/* projects #3 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background:
                    'url(https://2.bp.blogspot.com/-_K-Rp9gw1aY/UZqAchfSM3I/AAAAAAAAABk/G_kNG8JV5FU/s1600/peterpan-komplit.jpg) center/cover'}}>Peterpan #3</CardTitle>
                    <CardText>
                        Perjalanan Karir Peterpan Band. Pada tahun 1997, awalnya bernamaTopi ketika Andhika (kibor) membentuk band Topi dengan mengajak adik kelasnya di SMU 2 Bandung, Uki (gitar), serta teman mainnya, Abel (bas) dan Ari (drum). ... Tanggal 1 September 2000 secara resmi peterpan terbentuk.
                    </CardText>
                    <CardActions border>
                        <Button colored>WA</Button>
                        <Button colored>FB</Button>
                        <Button colored>IG</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                </div> 
            )
        }else if(this.state.activeTab === 1) {
            return (
                <div><h1>this is Angular</h1></div>
            )
        }else if(this.state.activeTab === 2) {
            return (
                <div><h1>this is ReactJS</h1></div>
            )
        }else if(this.state.activeTab === 3) {
            return(
                <div><h1>this is VueJS</h1></div>
            )
        }else if(this.state.activeTab === 4) {
            return(
                <div><h1>this is MongoDB</h1></div>
            )
        }
    }
    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>React</Tab>
                    <Tab>Angular</Tab>
                    <Tab>ReactJS</Tab>
                    <Tab>VueJS</Tab>
                    <Tab>MongoDB</Tab>
                </Tabs>

                <section className="projects-grid">
                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                </section>
            </div>
        )
    }
}

export default Projects;