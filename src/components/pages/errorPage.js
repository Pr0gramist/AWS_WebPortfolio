import React, { Component } from 'react';

class Errorpage extends Component {
    render() {
        return (
            <div className="wrap">
                <div id="homepage_banner" class="jumbotron text-center">
                    <div class="row align-items-center">
                        <div class="col-md-4">
                        </div>
                        <div class="col-md-4">
                            <i id="errorpage_icons" class="fa fa-times-circle"></i>
                            <h1 id="white_background_text"><b>OOPS... An Error Occured</b></h1>
                            <hr id="full_line"></hr>
                            <p id="homepage_icon_text"><small>
                                It appears your network firewall or your web browser's settings
                                are blocking some requests. Unable to send your message at this time.
                                Try again when you are connected to another network.
                            </small></p>
                        </div>
                        <div class="col-md-4">
                        </div>
                    </div>
                </div>
            </div>
        );
    }    
}
export default Errorpage;