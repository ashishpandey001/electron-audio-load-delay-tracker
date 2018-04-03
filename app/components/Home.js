import moment from 'moment';
import React, { Component } from 'react';
import { Howl } from 'howler';

const path = require('path');

const electron = require('electron').remote;

const { app } = electron;

const defState = {
  isSSPlaying: false,
  isCC128Playing: false,
  isCC320Playing: false,
  isLongTrack128Playing: false,
  isLongTrack256Playing: false,
};

let loadStartTime;
let loadEndTime;
let loadDiffTime;
let loadDuration;

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = defState;
    this.ss = null;
    this.cc128 = null;
    this.cc320 = null;
    this.longTrack128 = null;
    this.longTrack256 = null;
  }

  onSSPlayStop = () => {
    loadStartTime = moment();
    this.setState({
      isSSPlaying: !this.state.isSSPlaying,
    }, () => {
      if (this.state.isSSPlaying) {
        this.ss = new Howl({
          src: [`${path.dirname(app.getAppPath())}/assets/audio/hdfc_d_s_1_1 - 320.mp3`],
          html5: true,
          onload: () => {
            loadEndTime = moment();
            loadDiffTime = loadEndTime.diff(loadStartTime);
            loadDuration = moment.duration(loadDiffTime);
            const playerLabel = document.getElementById('ss-loadlabel');
            playerLabel.innerHTML = `${loadDuration.asMilliseconds()}`;
            this.ss.play();
          },
        });
      } else if (!this.state.isSSPlaying) {
        if (this.ss != null) {
          this.ss.stop();
        }
      }
    });
  }

  onCC128PlayStop = () => {
    loadStartTime = moment();
    this.setState({
      isCC128Playing: !this.state.isCC128Playing,
    }, () => {
      if (this.state.isCC128Playing) {
        this.cc128 = new Howl({
          src: [`${path.dirname(app.getAppPath())}/assets/audio/Cosmic Chant - 128.mp3`],
          html5: true,
          onload: () => {
            loadEndTime = moment();
            loadDiffTime = loadEndTime.diff(loadStartTime);
            loadDuration = moment.duration(loadDiffTime);
            const playerLabel = document.getElementById('cc-128-loadlabel');
            playerLabel.innerHTML = `${loadDuration.asMilliseconds()}`;
            this.cc128.play();
          },
        });
      } else if (!this.state.isCC128Playing) {
        if (this.cc128 != null) {
          this.cc128.stop();
        }
      }
    });
  }

  onCC320PlayStop = () => {
    loadStartTime = moment();
    this.setState({
      isCC320Playing: !this.state.isCC320Playing,
    }, () => {
      if (this.state.isCC320Playing) {
        this.cc320 = new Howl({
          src: [`${path.dirname(app.getAppPath())}/assets/audio/Cosmic Chant - 320.mp3`],
          html5: true,
          onload: () => {
            loadEndTime = moment();
            loadDiffTime = loadEndTime.diff(loadStartTime);
            loadDuration = moment.duration(loadDiffTime);
            const playerLabel = document.getElementById('cc-320-loadlabel');
            playerLabel.innerHTML = `${loadDuration.asMilliseconds()}`;
            this.cc320.play();
          },
        });
      } else if (!this.state.isCC320Playing) {
        if (this.cc320 != null) {
          this.cc320.stop();
        }
      }
    });
  }

  onLongTrack128PlayStop = () => {
    loadStartTime = moment();
    this.setState({
      isLongTrack128Playing: !this.state.isLongTrack128Playing,
    }, () => {
      if (this.state.isLongTrack128Playing) {
        this.longTrack128 = new Howl({
          src: [`${path.dirname(app.getAppPath())}/assets/audio/long track - 128.mp3`],
          html5: true,
          onload: () => {
            loadEndTime = moment();
            loadDiffTime = loadEndTime.diff(loadStartTime);
            loadDuration = moment.duration(loadDiffTime);
            const playerLabel = document.getElementById('long-track-128-loadlabel');
            playerLabel.innerHTML = `${loadDuration.asMilliseconds()}`;
            this.longTrack128.play();
          },
        });
      } else if (!this.state.isLongTrack128Playing) {
        if (this.longTrack128 != null) {
          this.longTrack128.stop();
        }
      }
    });
  }

  onLongTrack256PlayStop = () => {
    loadStartTime = moment();
    this.setState({
      isLongTrack256Playing: !this.state.isLongTrack256Playing,
    }, () => {
      if (this.state.isLongTrack256Playing) {
        this.longTrack256 = new Howl({
          src: [`${path.dirname(app.getAppPath())}/assets/audio/long track - 256.mp3`],
          html5: true,
          onload: () => {
            loadEndTime = moment();
            loadDiffTime = loadEndTime.diff(loadStartTime);
            loadDuration = moment.duration(loadDiffTime);
            const playerLabel = document.getElementById('long-track-256-loadlabel');
            playerLabel.innerHTML = `${loadDuration.asMilliseconds()}`;
            this.longTrack256.play();
          },
        });
      } else if (!this.state.isLongTrack256Playing) {
        if (this.longTrack256 != null) {
          this.longTrack256.stop();
        }
      }
    });
  }

  render() {
    return (
      <div>
        <div className="player">
          <p>soniqspaces</p>
          <button onClick={this.onSSPlayStop}>{this.state.isSSPlaying ? 'Stop' : 'Play'}</button>
          <p id="ss-loadlabel" />
        </div>
        <div className="player">
          <p>cosmic chants - 128</p>
          <button onClick={this.onCC128PlayStop}>{this.state.isCC128Playing ? 'Stop' : 'Play'}</button>
          <p id="cc-128-loadlabel" />
        </div>
        <div className="player">
          <p>cosmic chants - 320</p>
          <button onClick={this.onCC320PlayStop}>{this.state.isCC320Playing ? 'Stop' : 'Play'}</button>
          <p id="cc-320-loadlabel" />
        </div>
        <div className="player">
          <p>long track - 128</p>
          <button onClick={this.onLongTrack128PlayStop}>{this.state.isLongTrack128Playing ? 'Stop' : 'Play'}</button>
          <p id="long-track-128-loadlabel" />
        </div>
        <div className="player">
          <p>long track - 256 using HTML5 Audio API</p>
          <button onClick={this.onLongTrack256PlayStop}>{this.state.isLongTrack256Playing ? 'Stop' : 'Play'}</button>
          <p id="long-track-256-loadlabel" />
        </div>
      </div>
    );
  }
}
