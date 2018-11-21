import React, { Component } from 'react';
import myPic from '../images/stivan2.jpg';
import macbookPic from '../images/macbook.png';
import codeskillsPic from '../images/codeface.png';
import noa2 from '../images/NOA2.pdf';
import heart from '../images/heart.png';
class Homepage extends Component {
    render() {
        return (
            <div className="wrap">
                <div id="homepage_banner" class="jumbotron text-center">
                    <div class="row align-items-center">
                        <div class="col-md-4">
                            <i id="homepage_icons" class="fa fa-tachometer"></i>
                            <h3 id="homepage_icon_text">Fast</h3>
                            <p id="homepage_icon_text"><small>Fast load times and lag free<br></br> interaction, my highest priority.</small></p>
                            <i id="homepage_icons" class="fa fa-lightbulb-o"></i>
                            <h3 id="homepage_icon_text">API</h3>
                            <p id="homepage_icon_text"><small>Strong preference for creating web apps<br></br> that communicate with computers.</small></p>
                        </div>
                        <div class="col-md-4">
                            <h1 id="white_background_text">Stivan Kitchoukov</h1>
                            <p id="white_background_text">Software Engineer</p>
                            <img src={myPic} class="rounded-circle" alt="Stivan Kitchoukov" width="304" height="275"></img>
                        </div>
                        <div class="col-md-4">
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
                                <img src={macbookPic} width="220" height="196"></img>
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
                <div id="homepage_skills" class="jumbotron text-center">
                    <div class="row align-items-center">
                    <div class="col-sm-12">
                        <h3 id="white_background_text">Technical Skills</h3>
                        <br></br>
                    </div>
                    </div>
                    <div class="row align-items-center">
                        <div class="col-sm-6">
                        <img src={codeskillsPic} width="300" height="266"></img>
                        </div>
                        <div class="col-sm-4">
                            <div class="progress border">
                                <div class="progress-bar bg-info" style={{width:"60%"}}><h6 id="progress-bar-title">CSS</h6></div>
                                <span id="progress-bar-percent">60%</span>
                            </div>
                            <br></br>
                            <div class="progress border">
                                <div class="progress-bar bg-info" style={{width:"90%"}}><h6 id="progress-bar-title">HTML</h6></div>
                                <span id="progress-bar-percent">90%</span>
                            </div>
                            <br></br>
                            <div class="progress border">
                                <div class="progress-bar bg-info" style={{width:"70%"}}><h6 id="progress-bar-title">Python</h6></div>
                                <span id="progress-bar-percent">70%</span>
                            </div>
                            <br></br>
                            <div class="progress border">
                                <div class="progress-bar bg-info" style={{width:"80%"}}><h6 id="progress-bar-title">JavaScript</h6></div>
                                <span id="progress-bar-percent">80%</span>
                            </div>
                            <br></br>
                            <div class="progress border">
                                <div class="progress-bar bg-info" style={{width:"70%"}}><h6 id="progress-bar-title">React</h6></div>
                                <span id="progress-bar-percent">70%</span>
                            </div>
                            <br></br>
                            <div class="progress border">
                                <div class="progress-bar bg-info" style={{width:"50%"}}><h6 id="progress-bar-title">Node</h6></div>
                                <span id="progress-bar-percent">50%</span>
                            </div>
                            <br></br>
                            <div class="progress border">
                                <div class="progress-bar bg-info" style={{width:"90%"}}><h6 id="progress-bar-title">SQL</h6></div>
                                <span id="progress-bar-percent">90%</span>
                            </div>
                            <br></br>
                            <div class="progress border">
                                <div class="progress-bar bg-info" style={{width:"50%"}}><h6 id="progress-bar-title">C++</h6></div>
                                <span id="progress-bar-percent">50%</span>
                            </div>
                            <br></br>
                            <div class="progress border">
                                <div class="progress-bar bg-info" style={{width:"60%"}}><h6 id="progress-bar-title">PHP</h6></div>
                                <span id="progress-bar-percent">60%</span>
                            </div>
                            <br></br>
                            <div class="progress border">
                                <div class="progress-bar bg-info" style={{width:"40%"}}><h6 id="progress-bar-title">Java</h6></div>
                                <span id="progress-bar-percent">40%</span>
                            </div>
                        </div>
                        <div class="col-sm-2"></div>
                    </div>
                </div>


                <div id="hompage_content">
                    <div class="jumbotron text-center">
                        <div class="row align-items-center">
                        
                            <div class="col-sm-5">
                                <img src={heart} width="220" height="196"></img>
                            </div>
                            <div class="col-sm-6">
                                <h3  id="homepage_title_text">
                                    Bebe - Today is a wonderful day! I love you so much - there is still hope. 
                                </h3>
                                <p id="homepage_icon_text"><small>

                                    Dnes e mnogo specialen den za nas. Tazi novina oznachava che mnogo skoro shte 
                                    sme edin do druk kato istinsko semeistvo.
                                    Az naistina ne bqh poluchil email i se sheguvah kogato govorihme po telefona i times
                                    mi se rasurdi... I na istina nqmah idea za pismoto - tatko mi go pokaza sled kato 
                                    ti zaspa. Az se sheguvah a to naistina e bilo vqrno bez da znaem! Na 11/15 do sa 
                                    odobrili bebe! Oshte ima hope da sme zaedno za nova godina!!!!
                                    <br></br><br></br>OBICHAM TE!!!
                                </small></p>
                                <a href={noa2}>Click me BABY!</a>
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