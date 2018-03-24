import React, { Component } from 'react';
import './OtherWorks.css';
import ReactPlayer from 'react-player';

class OtherWorks extends Component {
    render(){
        return (
            <div className="main-otherworks-container">
                <div className="ow-header">- OT HER WO RK S-</div>
                <div className="doc-vid-container">
                    <div className="video-wrapper">
                        <div className="video-container">
                            <ReactPlayer height="360px" url='https://vimeo.com/59324993/8f876bbd1e' />
                        </div>
                        <div className="video-info" id={'twodoors'}>
                            <p className="video-title">TWO DOORS</p>
                            <p className="video-title">2013</p>
                            <p className="video-title">1:15 MIN.</p>
                        </div>
                    </div>
                    <div className="video-wrapper">
                        <div className="video-info" id={'downthehole'}>
                            <p className="video-title">DOWN THE HOLE</p>
                            <p className="video-title">2015</p>
                            <p className="video-title">13:31 MIN.</p>
                        </div>
                    <div className="video-container">
                        <ReactPlayer height="360px" url='https://vimeo.com/128172143/8ed958b25e' />
                    </div>
                    </div>
                     <div className="video-wrapper">
                        <div className="video-container">
                            <ReactPlayer height="360px" url='https://vimeo.com/79824957/fd6bf391af' />
                        </div>
                        <div className="video-info" id={'formation'}>
                            <p className="video-title">FORMATION</p>
                            <p className="video-title">2014</p>
                            <p className="video-title">5:40 MIN.</p>
                        </div>
                    </div>
                    <div className="video-wrapper" id={'fridechikn'}>
                        <div className="video-info" id={'fride'}>
                            <p className="video-title">FRIDE CHIK'N MAN</p>
                            <p className="video-title">2014</p>
                            <p className="video-title">5:24 MIN.</p>
                        </div>
                    <div className="video-container">
                        <ReactPlayer height="360px" url='https://vimeo.com/89026333/d1a74eabb0' />
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default OtherWorks;