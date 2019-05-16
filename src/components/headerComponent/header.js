import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
        <header>
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
                <Link class="navbar-brand" to="/">STIVAN KITCHOUKOV</Link>
                <ul class="navbar-nav">

                    {/*
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link 1</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link 2</a>
                    </li>
                    */}
                    <li class="nav-item">
                        <Link class="nav-link" to="/Contact">Contact</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/Certification">Certifications</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
  }
}

export default Header;