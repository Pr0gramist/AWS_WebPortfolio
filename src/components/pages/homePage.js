import React, { Component } from 'react';
import myPic from '../images/stivan.jpeg';
class Homepage extends Component {
    render() {
        return (
            <div className="wrap">
                <div class="jumbotron text-center">
                    <h1>Stivan Kitchoukov</h1>
                    <p>Software Engineer</p>
                    <img src={myPic} class="rounded-circle" alt="Stivan Kitchoukov" width="304" height="236"></img>
                </div>
                <div className="container">
                    <div class="row align-items-center">
                    
                        <div class="col-sm-4">
                        
                            <h3>
                                Welcome to my personal website. I'm currently working at STS, a software company in Stroudsburg, Pennsylvania. 
                                Please take a look around!  
                            </h3>
                            
                        </div>
                        <div class="col-sm-8">
                                I am passionate about building software that improves peoples everyday tasks. 
                                I specialize in creating financial software for clients ranging from start-ups to large enterprise corporations.
                                My work is produced locally from Stroudsburg, Pennsylvania. Lets say you have a software expert to your availability - What would you do?
                        </div>
                    
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Homepage;