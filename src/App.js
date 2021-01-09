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

class App extends React.Component {

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
        this.forceUpdate();
    }

    render() {
        return (
            <div id="container">
                <div className="wrapper" onClick={this.newGame.bind(this)}>
                    {this.shuffle(dice_list).map(dice => (
                        <Face dice={dice} />
                    ))}
                </div>
            </div>
        );
    }
}

export default App;