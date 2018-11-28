import React, { Component } from 'react';

class Contact extends Component {
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
                        <from>
                            <div class="form-group">
                                <label for="contact_name">Name:</label>
                                <input type="text" class="form-control" id="contact_name" placeholder="Your Name *" name="contact_name"></input>
                            </div>
                            <div class="form-group">
                                <label for="contact_email">Email:</label>
                                <input type="email" class="form-control" id="contact_email" placeholder="Your Email *" name="contact_email"></input>
                            </div>
                            <div class="form-group">
                                <label for="contact_phone">Phone:</label>
                                <input type="text" class="form-control" id="contact_phone" placeholder="Your Phone" name="contact_phone"></input>
                            </div>
                            <div class="form-group">
                                <label for="contact_message">Message:</label>
                                <textarea type="text" class="form-control" id="contact_message" placeholder="Your Message *" name="contact_message"></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary">Send</button>
                        </from>
                    </div>
                    <div class="col-md-4"></div>
                </div>
                <br></br><br></br>
            </div>
        );
    }
}

export default Contact;