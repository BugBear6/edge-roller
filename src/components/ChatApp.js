import React from 'react';
import UsersList from './UsersList';
import RecentMessages from './RecentMessages';
import WriteMessage from './WriteMessage';
import {diceBuilder} from '../js/diceBuilder';

import ab from '../img/dices/ab.png';
import ch from '../img/dices/ch.png';
import d10 from '../img/dices/d10.png';
import boost from '../img/dices/boost.png';
import setback from '../img/dices/setback.png';
import force from '../img/dices/force.png';
import prof from '../img/dices/prof.png';
import dif from '../img/dices/dif.png';

import advantage from '../img/icons/advantage.png';
import dark from '../img/icons/dark.png';
import despair from '../img/icons/despair.png';
import failure from '../img/icons/failure.png';
import light from '../img/icons/light.png';
import success from '../img/icons/success.png';
import threat from '../img/icons/threat.png';
import triumph from '../img/icons/triumph.png';


class ChatApp extends React.Component {
    state = {
        dicesSelected: {
            boost: 0,
            setback: 0,
            ab: 0,
            dif: 0,
            prof: 0,
            ch: 0,
            force: 0,
            d10: 0
        },
        currentMessage: '',
        users: [],
        historial: {
            1523944250361: {
                charName: 'Jorgen',
                roll: 'boost,boost,setback',
                results: 'failure,success,triumph,success',
                text: 'First roll',
                timestamp: '1523944250361',
                dicesSelected: {
                    boost: 1,
                    setback: 5,
                    ab: 2,
                    dif: 3,
                    prof: 3,
                    ch: 1,
                    force: 1,
                    d10: 1
                }
            },
            1523944250395: {
                charName: 'don Simon',
                roll: 'boost,setback,setback,ab, dif',
                results: 'failure,success,triumph,success,despair,threat',
                text: 'Second roll',
                timestamp: '1523944250395',
                dicesSelected: {
                    boost: 2,
                    setback: 1,
                    ab: 2,
                    dif: 3,
                    prof: 0,
                    ch: 0,
                    force: 0,
                    d10: 0
                }
            }
        }
    };

    dices = [{
        src: boost,
        type: 'boost',
        desc: 'Boost Dice'
    }, {
        src: setback,
        type: 'setback',
        desc: 'Setback Dice'
    }, {
        src: ab,
        type: 'ab',
        desc: 'Abillity Dice'
    }, {
        src: dif,
        type: 'dif',
        desc: 'Difficulty Dice'
    },{
        src: prof,
        type: 'prof',
        desc: 'Proficiency Dice'
    }, {
        src: ch,
        type: 'ch',
        desc: 'Challenge Dice'
    }, {
        src: force,
        type: 'force',
        desc: 'Force Dice'
    }, {
        src: d10,
        type: 'd10',
        desc: 'd10 Dice'
    }];

    symbols = {
        advantage: {
            src: advantage,
            desc: 'Advantage',
            type: 'advantage'
        },
        dark: {
            src: dark,
            desc: 'Dark',
            type: 'dark'
        },
        despair: {
            src: despair,
            desc: 'Despair',
            type: 'despair'
        },
        failure: {
            src: failure,
            desc: 'Failure',
            type: 'failure'
        },
        light: {
            src: light,
            desc: 'Light',
            type: 'light'
        },
        success: {
            src: success,
            desc: 'Success',
            type: 'success'
        },
        threat: {
            src: threat,
            desc: 'Threat',
            type: 'threat'
        },
        triumph: {
            src: triumph,
            desc: 'Triumph',
            type: 'triumph'
        }
    };

    handleKeypress = ev => {
        console.log('handle keypress!')

        if (ev.key === 'Enter') {
            ev.preventDefault();
            ev.stopPropagation();
            console.log('enter keypress!');
        }

        if (ev.key === 'ArrowUp') {
            // restore dices
            console.log('ArrowUp keypress!');            
        }
    };

    selectDice = diceType => {
        let newDices = {...this.state.dicesSelected};
        newDices[diceType] = newDices[diceType] + 1;


        if (newDices[diceType] > 9) {
            newDices[diceType] = 9;
        }

        this.setState({
            dicesSelected: newDices
        });
    };

    deselectDice = diceType => {        
        let newDices = {...this.state.dicesSelected};
        newDices[diceType] = newDices[diceType] - 1;

        if (newDices[diceType] < 0) {
            newDices[diceType] = 0;
        }

        this.setState({
            dicesSelected: newDices
        });       
    };

    resetDices = () => {
        this.setState({
            dicesSelected: {
                boost: 0,
                setback: 0,
                ab: 0,
                dif: 0,
                prof: 0,
                ch: 0,
                force: 0,
                d10: 0
            }
        });
    };

    restoreLast = () => {
        console.log('restoreLast');
    };

    addToHistorial = (resultsCalculatedString, dicesSelected) => {
        const newHistorial = {...this.state.historial};
        const timestamp = Date.now();
        
        newHistorial[timestamp] = {
            charName: 'don Jesus',
            roll: 'xxx',
            result: resultsCalculatedString,
            timestamp: timestamp,
            dicesSelected: dicesSelected
        };

        console.log('addToHistorial');

        this.setState({
            historial: newHistorial
        });
    };

    getResults = (dicesSelected) => {
        let dicesToRoll = [];
        let results = [];

        for (var key in dicesSelected) {
            if (dicesSelected.hasOwnProperty(key)) {
                for (let i = 1; i < dicesSelected[key]; i++) {
                    dicesToRoll.push(new diceBuilder[key]());
                }
            }
        }

        results = dicesToRoll
            .map(dice => dice.roll())
            .join(',')
            .split(',')
            // => ["success", "advantage", "advantage", "success", "blank", "threat", "advantage", "advantage", "success", "blank", "failure", "threat"]

            .reduce((previousValue, currentValue, i, arr) => {
                let currentResult = arr[i];
                let isCurrentResultNumber = !isNaN(Number(currentResult));
                console.log('currentResult', currentResult)
                if (isCurrentResultNumber) {
                    previousValue.d10 += `${currentResult},`;
                } else {
                    previousValue[currentResult] += 1;
                }

                return previousValue;
            }, { failure: 0, success: 0, despair: 0, triumph: 0, threat: 0, advantage: 0, light: 0, dark: 0, blank: 0, d10: '' });
        // => { failure: 1, success: 2, advantage: 3, d10: '9,10,5,' ... }

        return results;
        
    };

    calculateResults = (results) => {
        let resultsArr = [];

        const resultsCalculated = {
            success: Math.max(0, results.success - results.failure),
            failure: Math.max(0, results.failure - results.success),
            threat: Math.max(0, results.threat - results.advantage),
            advantage: Math.max(0, results.advantage - results.threat),
            despair: results.despair,
            triumph: results.triumph,
            light: results.light,
            dark: results.dark,
            d10: results.d10
        };

        for (let key in resultsCalculated) {
            if (resultsCalculated.hasOwnProperty(key)) {
                if (key === 'd10') {
                    resultsArr.push(resultsCalculated[key]);
                } else {
                    for (let i = 0; i < resultsCalculated[key]; i++) {
                        resultsArr.push(key);
                    }
                }
            }
        }

        return resultsArr.join(',');
    }

    submit = () => {
        const dicesSelected = {...this.state.dicesSelected};
        const results = this.getResults(dicesSelected);
        const resultsCalculatedString = this.calculateResults(results);

        console.log('results', results);
        console.log('resultsCalculatedString', resultsCalculatedString);

        // @TODO
        // save results in object type

        this.addToHistorial(resultsCalculatedString, dicesSelected);   

        // @TODO
        // clear the roll
        // save private user historial 
    };

    render() {
        return (
            <div className="chat-app">
                <div className="col-left">
                    <UsersList />
                </div>
                <div className="col-right">
                    <RecentMessages 
                        dices={this.dices}
                        symbols={this.symbols}
                        historial={this.state.historial}
                    />
                    <WriteMessage 
                        dices={this.dices}
                        selectDice={this.selectDice}
                        deselectDice={this.deselectDice}
                        handleKeypress={this.handleKeypress}
                        dicesSelected={this.state.dicesSelected}
                        resetDices={this.state.resetDices}
                        restoreLast={this.state.restoreLast}
                        submit={this.submit}
                    />
                </div>                
            </div>
        );
    }
}

export default ChatApp;
