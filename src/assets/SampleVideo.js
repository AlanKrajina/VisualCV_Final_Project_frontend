import React, {Component} from 'react';
import sample from '../assets/sample.mp4';

class SampleVideo extends Component {

    render () {
        return (
            <video id="background-video" loop autoPlay muted>
                <source src={sample} type='video/mp4' />
            </video>
        )
    }
};

export default SampleVideo;