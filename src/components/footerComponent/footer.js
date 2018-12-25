import React, { Component } from 'react';

var cur_year = new Date().getFullYear();
var footer_text = "Handcrafted by Stivan Kitchoukov \u00A9 " + cur_year;

class Footer extends Component {
  render() {
    return (
        <footer>
          <div class="container">
            <br></br>
            <div class="row align-items-center">
                <div class="col-4"></div>
                <div class="col-4 text-center">
                  <a target="_blank" rel="noopener noreferrer" href="https://stackoverflow.com/users/4651802/stivan">
                    <i id="footer_icon" className="fa fa-stack-overflow fa-2x fa-fw"></i>
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/kitchoukov/">
                    <i id="footer_icon" className="fa fa-linkedin-square fa-2x fa-fw"></i>
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href="https://www.esu.edu">
                    <i id="footer_icon" className="fa fa-graduation-cap fa-2x fa-fw"></i>
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href="https://plus.google.com/u/0/101176701515462868092">
                    <i id="footer_icon" className="fa fa-google-plus-square fa-2x fa-fw"></i>
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href="https://github.com/Pr0gramist">
                    <i id="footer_icon" className="fa fa-github-square fa-2x fa-fw"></i>
                  </a>
                  <br></br>
                 < p className="footer_name">{footer_text}</p>
                </div>
                <div class="col-4"></div>
            </div>
          </div>
        </footer>
    );
  }
}

export default Footer;