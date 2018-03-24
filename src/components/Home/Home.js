import React, { Component } from 'react';
import './Home.css';
import B2N from '../Movies/back2nature.mp4';
import DBOC from '../Movies/duck boy of conchali.mp4';
import EW from '../Movies/Endless Worlds v4.mp4';
import FP from '../Movies/freemont petroglyphs.mp4';
import FOS from '../Movies/fullofstars.mp4';
import ITT from '../Movies/inside trumps tower.mp4';
import ITFS from '../Movies/IntoTheFidgetSpinner.mp4';
import JOB from '../Movies/jesus of bellavista.mp4';
import LLA from '../Movies/like-like automata.mp4';
import ML from '../Movies/MagicLog.final.mp4';
import RK from '../Movies/RedKaaba.mp4';
import SF2016 from '../Movies/SaltFlats2016.mp4';
import TTAC2 from '../Movies/these things are cameras 2.mp4';
import WA from '../Movies/WaspAdventure.mp4';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hello: 0,
            videos: [B2N, DBOC, EW, FP, FOS, ITT, ITFS, JOB, LLA, ML, RK, SF2016, TTAC2, WA]
        };
        this.handleButtonClick = this.handleButtonClick.bind(this)
    }

    handleButtonClick(){
        this.setState(this.state)
    }

    render() {
        const randomVideo = this.state.videos[Math.floor(Math.random() * this.state.videos.length)]
        return (
            <div className="main-home-container">
                <div className="video-container">
                <Video autoPlay loop controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}>
                    <source src={randomVideo}/>
                </Video>
                <a href="/"><div className="another-video-button">AN O THER ONE</div></a>
                </div>
            </div>
        )
    }
}
export default Home;