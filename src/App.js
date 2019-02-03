import React, { Component } from 'react';
import './App.css';
import Quarter from './components/Quarter';
import people from './data/people';

import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      homeFirstQuarter: null,
      homeHalfTime: null,
      homeThirdQuarter: null,
      homeFinal: null,

      awayFirstQuarter: null,
      awayHalfTime: null,
      awayThirdQuarter: null,
      awayFinal: null,

      homeFirstQuarterLast: null,
      homeHalfTimeLast: null,
      homeThirdQuarterLast: null,
      homeFinalLast: null,

      awayFirstQuarterLast: null,
      awayHalfTimeLast: null,
      awayThirdQuarterLast: null,
      awayFinalLast: null,

      firstQuarterWinner: null,
      halftimeWinner: null,
      thirdQuarterWinner: null,
      finalWinner: null
    };
  }

  componentDidMount() {
    this.getGameData();

    window.setInterval(() => this.updateScore(), 5000);
    window.setInterval(() => this.getGameData(), 60000);
  }

  updateScore = () => {
    const { data } = this.state;
    if (data.home.score) {
      this.setState(
        {
          homeFirstQuarter: data.home.score[1],
          homeHalfTime: data.home.score[1] + data.home.score[2],
          homeThirdQuarter:
            data.home.score[1] + data.home.score[2] + data.home.score[3],
          homeFinal:
            data.home.score[1] +
            data.home.score[2] +
            data.home.score[3] +
            data.home.score[4] +
            data.home.score[5]
        },
        () => {
          this.setState({
            homeFirstQuarterLast: Number(
              this.state.homeFirstQuarter
                .toString()
                .split('')
                .pop()
            ),
            homeHalfTimeLast: Number(
              this.state.homeHalfTime
                .toString()
                .split('')
                .pop()
            ),
            homeThirdQuarterLast: Number(
              this.state.homeThirdQuarter
                .toString()
                .split('')
                .pop()
            ),
            homeFinalLast: Number(
              this.state.homeFinal
                .toString()
                .split('')
                .pop()
            )
          });
        }
      );
    }

    if (data.away.score) {
      this.setState(
        {
          awayFirstQuarter: data.away.score[1],
          awayHalfTime: data.away.score[1] + data.away.score[2],
          awayThirdQuarter:
            data.away.score[1] + data.away.score[2] + data.away.score[3],
          awayFinal:
            data.away.score[1] +
            data.away.score[2] +
            data.away.score[3] +
            data.away.score[4] +
            data.away.score[5]
        },
        () => {
          this.setState({
            awayFirstQuarterLast: Number(
              this.state.awayFirstQuarter
                .toString()
                .split('')
                .pop()
            ),
            awayHalfTimeLast: Number(
              this.state.awayHalfTime
                .toString()
                .split('')
                .pop()
            ),
            awayThirdQuarterLast: Number(
              this.state.awayThirdQuarter
                .toString()
                .split('')
                .pop()
            ),
            awayFinalLast: Number(
              this.state.awayFinal
                .toString()
                .split('')
                .pop()
            )
          });
        }
      );
    }
    this.returnWinner();
  };

  returnWinner = () => {
    const {
      awayFinalLast,
      awayThirdQuarterLast,
      awayHalfTimeLast,
      awayFirstQuarterLast,
      homeFirstQuarterLast,
      homeHalfTimeLast,
      homeThirdQuarterLast,
      homeFinalLast
    } = this.state;
    if (people[awayFirstQuarterLast][homeFirstQuarterLast]) {
      this.setState({
        firstQuarterWinner: people[awayFirstQuarterLast][homeFirstQuarterLast]
      });
    }
    if (people[awayHalfTimeLast][homeHalfTimeLast]) {
      this.setState({
        halftimeWinner: people[awayHalfTimeLast][homeHalfTimeLast]
      });
    }
    if (people[awayThirdQuarterLast][homeThirdQuarterLast]) {
      this.setState({
        thirdQuarterWinner: people[awayThirdQuarterLast][homeThirdQuarterLast]
      });
    }
    if (people[awayFinalLast][homeFinalLast]) {
      this.setState({
        finalWinner: people[awayFinalLast][homeFinalLast]
      });
    }
  };

  componentDidUpdate() {}

  getGameData = () => {
    axios
      .get('http://www.nfl.com/liveupdate/scores/scores.json')
      .then(response => {
        const stats = response.data[2019020300];
        this.setState({
          data: stats
        });
      })
      .catch(error => {
        return error;
      });
  };
  render() {
    const {
      firstQuarterWinner,
      halftimeWinner,
      thirdQuarterWinner,
      finalWinner
    } = this.state;
    return (
      <div className="App">
        <div className="welcome">
          Check if you an EC Baller <br />
          <span className="lit">
            for Superbowl LIII<span className="t">(t)</span>
          </span>
        </div>
        <Quarter
          quarter="1st Quarter"
          person={firstQuarterWinner}
          prize="$75"
        />
        <Quarter quarter="Halftime" person={halftimeWinner} prize="$125" />
        <Quarter
          quarter="3rd Quarter"
          person={thirdQuarterWinner}
          prize="$75"
        />
        <Quarter quarter="Final" person={finalWinner} prize="$225" />
        <div className="footer">
          made by <span className="devgod">earthcamdevgod1</span>
        </div>
      </div>
    );
  }
}

export default App;
