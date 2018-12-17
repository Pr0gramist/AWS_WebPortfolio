import React, { Component } from 'react';

class Thankspage extends Component {
    render() {
        return (
            <div className="wrap">
                <div id="homepage_banner" class="jumbotron text-center">
                    <div class="row align-items-center">
                        <div class="col-md-4">
                        </div>
                        <div class="col-md-4">
                            <i id="thankspage_icons" class="fa fa-check-circle"></i>
                            <h1 id="white_background_text"><b>THANK <span id="blue_text">YOU!</span></b></h1>
                            <hr id="thankspage_line"></hr>
                            <p id="homepage_icon_text"><small>I will get back to you as soon as possible.<br></br> For urgent matters please contact me on LinkedIn found on the bottom of this page.</small></p>
                        </div>
                        <div class="col-md-4">
                        </div>
                    </div>
                </div>
            </div>
        );
    }    
}
export default Thankspage;