import React, { Component } from 'react';
import myPic from '../images/stivan.jpeg';
class Homepage extends Component {
    render() {
        return (
            <div className="wrap">
                <div id="homepage_banner" class="jumbotron text-center">
                    <div class="row align-items-center">
                        <div class="col-4">
                            <i id="homepage_icons" class="fa fa-tachometer"></i>
                            <h3 id="homepage_icon_text">Fast</h3>
                            <p id="homepage_icon_text"><small>Fast load times and lag free<br></br> interaction, my highest priority.</small></p>
                            <i id="homepage_icons" class="fa fa-lightbulb-o"></i>
                            <h3 id="homepage_icon_text">API</h3>
                            <p id="homepage_icon_text"><small>Strong preference for creating web apps<br></br> that communicate with computers.</small></p>
                        </div>
                        <div class="col-4">
                            <h1 id="white_background_text">Stivan Kitchoukov</h1>
                            <p id="white_background_text">Software Engineer</p>
                            <img src={myPic} class="rounded-circle" alt="Stivan Kitchoukov" width="304" height="236"></img>
                        </div>
                        <div class="col-4">
                            <i id="homepage_icons" class="material-icons">security</i>
                            <h3 id="homepage_icon_text">Secure</h3>
                            <p id="homepage_icon_text"><small>My software is created <br></br>and tested with latest security.</small></p>
                            <i id="homepage_icons" class="fa fa-space-shuttle"></i>
                            <h3 id="homepage_icon_text">Dynamic</h3>
                            <p id="homepage_icon_text"><small>Websites don't have to be static, I love<br></br> making pages come to life.</small></p>
                        </div>
                    </div>
                </div>
                <div id="hompage_content">
                <div class="jumbotron text-center">
                        <div class="row align-items-center">
                        
                            <div class="col-sm-5">
                                <i id="homepage_info_icon" class="fa fa-laptop"></i>
                            </div>
                            <div class="col-sm-6">
                                <h3  id="homepage_title_text">
                                    I'm currently working at STS, a software company in Stroudsburg, Pennsylvania. 
                                </h3>
                                <p id="homepage_icon_text"><small>
                                    I am passionate about building software that improves peoples everyday tasks. 
                                    I specialize in creating financial software for clients ranging from start-ups to large enterprise corporations.
                                    My work is produced locally from Stroudsburg, Pennsylvania.
                                </small></p>
                                <a href="#">Let's Make something together!</a>
                            </div>
                            <div class="col-sm-1"></div>
                        
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Homepage;