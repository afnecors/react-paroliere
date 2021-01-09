import React from 'react';
import dice_list from './data';
import './App.css';

function Face(props) {
    return (
        <div className="dice">
            <div className="inner">
                <div className="letter">{props.dice[Math.floor(6 * Math.random())]}</div>
            </div>
        </div>
    );
}

class Timer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            start: 1
        }
    }

    endGame() {
        this.setState({
            start: 0
        });
    }

    render() {
        return (
            <div className="timer-container">
                <div className="timer" onAnimationEnd={this.endGame.bind(this)} start={this.state.start}></div>
            </div>
        );
    }

}

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    shuffle(dice) {
        var j, x, i;
        for (i = dice.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = dice[i];
            dice[i] = dice[j];
            dice[j] = x;
        }
        return dice;
    }

    newGame() {
        this.setState({});
    }

    render() {
        return (
            <div id="container">
                <div className="wrapper" onClick={this.newGame.bind(this)}>
                    {this.shuffle(dice_list).map( (dice, i) => (
                        <Face key={i} dice={dice} />
                    ))}
                </div>
                <Timer key={new Date().getTime()} />
            </div>
        );
    }
}

export default App;