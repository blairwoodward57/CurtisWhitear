import React, { Component } from 'react';
import './Documentaries.css';
import ReactPlayer from 'react-player';


class Documentaries extends Component {



    render() {
        return (
            <div className="main-documentaries-container">
                <div className="doc-header">- D OCU MENT A RIES-</div>
                <div className="doc-vid-container">
                    <div className="video-wrapper" id={'hillwrapper'}>
                        <div className="video-container">
                            <ReactPlayer height="360px" url='https://vimeo.com/233422555' />
                        </div>
                        <div className="video-info" id={'hill'}>
                            <p className="video-title">THE HILL CUMORAH</p>
                            <p className="video-title">2017</p>
                            <p className="video-title">14:58 MIN.</p>
                        </div>
                    </div>
                    <div className="video-wrapper">
                        <div className="video-info" id={'drivers'}>
                            <p className="video-title">DRIVERS & DEMAGOGUES</p>
                            <p className="video-title">2017</p>
                            <p className="video-title">8:26 MIN.</p>
                        </div>
                    <div className="video-container">
                        <ReactPlayer height="360px" url='https://vimeo.com/215412807' />
                    </div>
                    </div>
                     <div className="video-wrapper" id={'filmmakerwrapper'}>
                        <div className="video-container">
                            <ReactPlayer height="360px" url='https://vimeo.com/175559835' />
                        </div>
                        <div className="video-info" id={'filmmaker'}>
                            <p className="video-title">NEIGHBORHOOD FILMMAKER</p>
                            <p className="video-title">2017</p>
                            <p className="video-title">9:19 MIN.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Documentaries;