import React, { Component } from 'react';
import './MusicVids.css';
import ReactPlayer from 'react-player';

class MusicVids extends Component {
    render(){
        return (
            <div className="main-musicvids-container">
                <div className="mv-header">-M USI C VID EO S-</div>
                <div className="doc-vid-container">
                    <div className="video-wrapper" id={'mirrors'}>
                        <div className="video-container">
                            <ReactPlayer height="360px" url='https://vimeo.com/180635933' />
                        </div>
                        <div className="video-info" id={'twomirrors'}>
                            <p className="video-title">Braeyden Jae - Two Mirrors Looking</p>
                            <p className="video-title">Album - Fog Mirror</p>
                            <p className="video-title">Whited Seplucher Records</p>
                            <p className="video-title">2017</p>
                            <p className="video-title">8:07 MIN.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default MusicVids;