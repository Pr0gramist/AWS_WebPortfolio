import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {Auth} from 'aws-amplify';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    validateForm(){
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]:event.target.value
        });
    }

    handleSubmit = async event => {
        event.preventDefault();
        try{
            await Auth.signIn(this.state.email, this.state.password);
            alert("Logged in");
        }catch(e) {
            alert(e.message);
        }
    }



    render() {
        return (
            <div className="wrap">
                <div id="homepage_banner" class="jumbotron text-center">
                    <div class="row align-items-center">
                        <div class="col-md-4"></div>
                        <div class="col-md-4">
                            <h1 id="white_background_text">Sign in.</h1>
                            <hr id="standard_line"></hr>
                        </div>
                        <div class="col-md-4"></div>
                    </div>
                </div>

                 <div class="row align-items-center">
                    <div class="col-md-4"></div>
                    <div class="col-md-4">
                        <form onSubmit={this.handleSubmit}>
                            <div class="form-group">
                                <label for="email">Email:</label>
                                <input type="email" value={this.state.email} onChange={this.handleChange} class="form-control" id="email" tabindex="1" placeholder="Your Email *" name="email" required/>
                            </div>
                            <div class="form-group">
                                <label for="password">Password:</label>
                                <input type="password" value={this.state.password} onChange={this.handleChange} class="form-control" id="password" tabindex="2" placeholder="Your Password *" name="password" required/>
                            </div>
               
                            <br></br>
                            <button ref="btn" type="submit" class="btn btn-primary">Sign In</button>
                        </form>
                    </div>
                    <div class="col-md-4"></div>
                </div>
                <br></br><br></br>
            </div>
        );
    }
}

export default withRouter(Login);

