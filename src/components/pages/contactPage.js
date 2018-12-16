import React, { Component } from 'react';
import Recaptcha from 'react-recaptcha';
import * as emailjs from 'emailjs-com';
import {
	withRouter
} from 'react-router-dom';

class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {
            contact_name: '',
            contact_email: '',
            contact_phone: '',
            contact_message: '',
            isHuman: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
        this.recaptchaVerified = this.recaptchaVerified.bind(this);
    }

    handleChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event){
        if(this.state.isHuman){
            //Disable button after first click to prevent multiple messages
            this.refs.btn.setAttribute("disabled", "disabled");

            var templateParams = {
                from_name: this.state.contact_name,
                from_email: this.state.contact_email,
                from_phone: this.state.contact_phone,
                from_message: this.state.contact_message
            };
       
            emailjs.send('skitchoukov_gmail_com','template_pX57uEpP', templateParams, 'user_hl29IGKtGP2h5Sjxv6544').then(function(response) {
                //alert("Thank you for your message. I will get in touch with you shortly.");
                console.log('SUCCESS!', response.status, response.text);
            }, function(err) {
                alert("Oops... Something seems to be borken. Please try again later.");
                console.log('FAILED...', err);
            });

            this.props.history.push('/Thankspage');
            event.preventDefault();
        }else{
            alert("Please verify that you are a human!");
            event.preventDefault();
        }
    }

    recaptchaLoaded(){
        console.log("Capcha successfully laoded");
    }

    recaptchaVerified(response){
        if(response){
            this.setState({
                isHuman: true
            })
        }
    }

    render() {
        return (
            <div className="wrap">
                <div id="homepage_banner" class="jumbotron text-center">
                    <div class="row align-items-center">
                        <div class="col-md-4"></div>
                        <div class="col-md-4">
                            <h1 id="white_background_text">Contact</h1>
                        </div>
                        <div class="col-md-4"></div>
                    </div>
                </div>

                 <div class="row align-items-center">
                    <div class="col-md-4"></div>
                    <div class="col-md-4">
                        <form onSubmit={this.handleSubmit}>
                            <div class="form-group">
                                <label for="contact_name">Name:</label>
                                <input type="text" value={this.state.contact_name} onChange={this.handleChange} class="form-control" id="contact_name" placeholder="Your Name *" name="contact_name" required/>
                            </div>
                            <div class="form-group">
                                <label for="contact_email">Email:</label>
                                <input type="email" value={this.state.contact_email} onChange={this.handleChange} class="form-control" id="contact_email" placeholder="Your Email *" name="contact_email" required/>
                            </div>
                            <div class="form-group">
                                <label for="contact_phone">Phone:</label>
                                <input type="text" value={this.state.contact_phone} onChange={this.handleChange} class="form-control" id="contact_phone" placeholder="Your Phone" name="contact_phone"/>
                            </div>
                            <div class="form-group">
                                <label for="contact_message">Message:</label>
                                <textarea type="text" value={this.state.contact_message} onChange={this.handleChange} class="form-control" id="contact_message" placeholder="Your Message *" name="contact_message" required/>
                            </div>

                            <Recaptcha
                                sitekey="6LelI4EUAAAAAOLSM1-3cAODKI_Fx4-r_hbxnH0J"
                                render="explicit"
                                onloadCallback={this.recaptchaLoaded}
                                verifyCallback={this.recaptchaVerified}
                            />

                            <button ref="btn" type="submit" class="btn btn-primary">Send</button>
                        </form>
                    </div>
                    <div class="col-md-4"></div>
                </div>
                <br></br><br></br>
            </div>
        );
    }
}

export default withRouter(Contact);

