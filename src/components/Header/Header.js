import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render(){
        return (
            <div className="header-root">
            <div className="main-header-container">
                <div className="header-header">
                    <a href="/"><span>C</span> <span>UR</span> <span>T</span> <span>IS</span> <span>WH</span> <span>I</span> <span>TEA</span> <span>R</span></a>
                </div>
                <nav className="main-header-nav">
                    <a href="/docs"><p>D OC UMEN TA RIES</p></a>
                    <a href="/musicvideo"><p>M USIC VI D EOS</p></a>
                    <a href="/otherwork"><p>OT HE R WOR KS</p></a>
                    <a href="/about"><p>ABO UT</p></a>
                    <a href="/contact"><p>C ON TAC T</p></a>
                </nav>
                <hr/>
            </div>
            </div>
        )
    }
}
export default Header;