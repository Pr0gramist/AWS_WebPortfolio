import React, { Component } from 'react';
import loadingGif from '../images/loading.gif';

class Loadingpage extends Component {
    render() {
        return (
            <div className="wrap">
                <div id="homepage_banner" class="jumbotron text-center">
                    <div class="row align-items-center">
                        <div class="col-md-4">
                        </div>
                        <div class="col-md-4">
                            <img src={loadingGif}></img>
                            <hr id="half_line"></hr>
                            <h1 id="white_background_text"><b>Please Wait...</b></h1>
                        </div>
                        <div class="col-md-4">
                        </div>
                    </div>
                </div>
            </div>
        );
    }    
}
export default Loadingpage;