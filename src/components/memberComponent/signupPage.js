import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { Link } from 'react-router-dom';
import {Auth} from 'aws-amplify';

class Login extends Component {
    constructor(props){
        super(props);

        this.state = {
            isLoading: false,
            email: '',
            password: '',
            confirmPassword: '',
            confirmationCode: '',
            newUser: null
        };
    }

    validateForm(){
        return (
            this.state.email.length > 0 && 
            this.state.password.length > 0 &&
            this.state.password === this.state.confirmPassword
        );
    }

    validateConfirmationForm(){
        return this.state.confirmationCode.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]:event.target.value
        });
    }

    handleSubmit = async event => {
        event.preventDefault();
        
        this.setState({isLoading: true});
        
        try{
            const newUser = await Auth.signUp({
                username: this.state.email,
                password: this.state.password
            });
            this.setState({
                newUser
            });
        }catch(e){
            alert(e.message);
        }

        this.setState({isLoading: false});
        // After retrieving the confirmation code from the user
        /*Auth.confirmSignUp(username, code, {
            // Optional. Force user confirmation irrespective of existing alias. By default set to True.
            forceAliasCreation: true    
        }).then(data => console.log(data))
          .catch(err => console.log(err));
        
        Auth.resendSignUp(username).then(() => {
            alert('code resent successfully');
            console.log('code resent successfully');
        }).catch(e => {
            alert(e);
            console.log(e);
        });*/
    }

    handleResendConfirmationSubmit = async event => {
        event. preventDefault();

        try{
            await Auth.resendSignUp(this.state.email);
            alert("Confirmation code has been resent! Please check your email.")
        }catch(e){
            alert(e.message);
        }
    }

    handleConfirmationSubmit = async event => {
        event.preventDefault();
        
        this.setState({isLoading: true});

        try{
            await Auth.confirmSignUp(this.state.email, this.state.confirmationCode);
            //await Auth.signIn(this.state.email, this.state.password);
            this.setState({isAuthenticated:false});
            //this.props.userHasAuthenticated(true); //This can be used to tell if logout/login should be displayed on header
            this.props.history.push("/Login"); // this will be the user dashboard
        }catch(e){
            alert(e.message);
            this.setState({isLoading:false});

        }
    }

    renderConfirmationForm() {
        return (
            <div className="wrap">
                <div id="homepage_banner" class="jumbotron text-center">
                    <div class="row align-items-center">
                        <div class="col-md-4"></div>
                        <div class="col-md-4">
                            <h1 id="white_background_text">Confirmation Code</h1>
                            <hr id="standard_line"></hr>
                        </div>
                        <div class="col-md-4"></div>
                    </div>
                </div>

                 <div class="row align-items-center">
                    <div class="col-md-4"></div>
                    <div class="col-md-4">
                        <form onSubmit={this.handleConfirmationSubmit}>
                            <div class="form-group">
                                <label for="confirmationCode">Code:</label>
                                <input type="tel" value={this.state.confirmationCode} onChange={this.handleChange} class="form-control" id="confirmationCode" tabindex="1" placeholder="Please check your email for the code." name="confirmationCode" required/>
                            </div>
               
                            <br></br>
                            <button disabled={!this.validateConfirmationForm()} ref="btn" type="submit" class="btn btn-primary">Verify</button>
                            <br></br>
                            <Link to={"/Signup"} onClick={this.handleResendConfirmationSubmit}>Resend Confirmation Code</Link>
                        </form>
                    </div>
                    <div class="col-md-4"></div>
                </div>
                <br></br><br></br>
            </div>
        );
    }

    renderForm() {
        return (
            <div className="wrap">
                <div id="homepage_banner" class="jumbotron text-center">
                    <div class="row align-items-center">
                        <div class="col-md-4"></div>
                        <div class="col-md-4">
                            <h1 id="white_background_text">Sign up.</h1>
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
                            <div class="form-group">
                                <label for="confirmPassword">Confirm Password:</label>
                                <input type="password" value={this.state.confirmPassword} onChange={this.handleChange} class="form-control" id="confirmPassword" tabindex="2" placeholder="Confirm Password *" name="confirmPassword" required/>
                            </div>
               
                            <br></br>
                            <button disabled={!this.validateForm()} ref="btn" type="submit" class="btn btn-primary">Continue</button>
                            <br></br>
                            <Link to="/Login">Already have an account?</Link>
                        </form>
                    </div>
                    <div class="col-md-4"></div>
                </div>
                <br></br><br></br>
            </div>
        );
    }














    render() {
        return (
            <div className="Signup">
                {
                    this.state.newUser === null ? this.renderForm() : this.renderConfirmationForm()
                }
            </div>
        );
    }
}

export default withRouter(Login);

