import React from 'react';
import { Link } from 'react-router-dom';

import UsersList from './UsersList';
import RecentMessages from './RecentMessages';
import WriteMessage from './WriteMessage';
import DestinyPoints from './DestinyPoints';
import {diceBuilder} from '../js/diceBuilder';

import '../style/ChatApp.css';

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
        userName: 'Janusz',
        charName: 'Jabba the Hutt',
        justSubmitted: false,
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
        destinyPoints: {
            light: 3,
            dark: 2
        },
        historial: {
            1523944250361: {
                charName: 'Jorgen',
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
                },
                resultsCalculated: {
                    success: 3,
                    failure: 0,
                    threat: 1,
                    advantage: 4,
                    despair: 1,
                    triumph: 0,
                    light: 2,
                    dark: 0,
                    d10: '10,4,2'
                }
            },
            1523944250395: {
                charName: 'don Simon',
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
                },
                resultsCalculated: {
                    success: 0,
                    failure: 3,
                    threat: 5,
                    advantage: 2,
                    despair: 2,
                    triumph: 2,
                    light: 0,
                    dark: 0,
                    // d10: '10,4,2'
                }
            }
        },
        usersLastRolls: [{ble: 123}]
    };

    componentDidMount() {
        this.setState({
            userName: this.props.userName,
            charName: this.props.charName
        })
    }

    dices = {
        boost: {
            src: boost,
            type: 'boost',
            desc: 'Boost Dice'
        }, setback: {
            src: setback,
            type: 'setback',
            desc: 'Setback Dice'
        }, ab: {
            src: ab,
            type: 'ab',
            desc: 'Abillity Dice'
        }, dif: {
            src: dif,
            type: 'dif',
            desc: 'Difficulty Dice'
        }, prof: {
            src: prof,
            type: 'prof',
            desc: 'Proficiency Dice'
        }, ch: {
            src: ch,
            type: 'ch',
            desc: 'Challenge Dice'
        }, force: {
            src: force,
            type: 'force',
            desc: 'Force Dice'
        }, d10: {
            src: d10,
            type: 'd10',
            desc: 'd10 Dice'
        }
    };

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
        },
        d10: {
            src: '...',
            desc: 'D10',
            type: 'd10'
        }
    };

    handleKeyControl = ev => {
        if (ev.key === 'Enter') {
            ev.preventDefault();
            ev.stopPropagation();
            this.submit();
            return true;
        }

        if (ev.key === 'ArrowUp') {
            // restore dices
            console.log('ArrowUp keypress!');      
            return true;      
        }
    };

    handleMessageChange = ev => {
        this.setState({
            currentMessage: ev.target.value
        });
    };

    selectDice = diceType => {
        console.log(diceType)
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
            },
            currentMessage: ''
        });
    };

    addDestinyPoint = type => {
        const newState = {...this.state.destinyPoints};
        newState[type] = newState[type] + 1 >= 9 ? 9 : newState[type] + 1;

        this.setState({
            destinyPoints: newState
        });
    };

    removeDestinyPoint = type => {
        const newState = {...this.state.destinyPoints};
        newState[type] = newState[type] - 1 <= 0 ? 0 : newState[type] - 1;

        this.setState({
            destinyPoints: newState
        });
    };

    restoreLast = () => {
        console.log('restoreLast');
    };

    addToHistorial = (resultsCalculated, dicesSelected) => {
        const newHistorial = {...this.state.historial};
        const timestamp = Date.now();
        
        newHistorial[timestamp] = {
            charName: this.state.charName,
            resultsCalculated: resultsCalculated || false,
            timestamp: timestamp,
            dicesSelected: dicesSelected || false,
            text: this.state.currentMessage || ''
        };

        console.log('addToHistorial');

        this.setState({
            historial: newHistorial
        });
    };

    getResults = (dicesSelected) => {
        let dicesToRoll = [];
        let results = [];
        let dicesRolled;

        for (var key in dicesSelected) {
            if (dicesSelected.hasOwnProperty(key)) {
                for (let i = 0; i < dicesSelected[key]; i++) {
                    dicesToRoll.push(new diceBuilder[key]());
                }
            }
        }

        dicesRolled = dicesToRoll
            .map(dice => dice.roll())
            .join(',')
            .split(',');
            // => ["success", "advantage", "advantage", "success", "blank", "threat", "advantage", "advantage", "success", "blank", "failure", "threat"]


        results = dicesRolled.reduce((previousValue, currentValue, i, arr) => {
                let currentResult = arr[i];
                let isCurrentResultNumber = !isNaN(Number(currentResult));
                // console.log('currentResult', currentResult)
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

        return resultsCalculated;
    }

    submit = () => {
        const dicesSelected = {...this.state.dicesSelected};
        const selectedDicesAmout = Object.keys(dicesSelected).reduce((prevVal, currVal, i, arr) => prevVal + dicesSelected[arr[i]], 0);
        console.log('selectedDicesAmout', selectedDicesAmout)

        if (!selectedDicesAmout && !this.state.currentMessage.trim()) {
            return false;
        }

        if (!selectedDicesAmout) {
            this.addToHistorial();
        } else {
            const results = this.getResults(dicesSelected);
            const resultsCalculated = this.calculateResults(results);
    
            this.addToHistorial(resultsCalculated, dicesSelected);   
            this.saveLastUsersRoll();     
        }

        this.resetDices();
        // save private user historial 

        this.setState({
            justSubmitted: true
        });
    };

    afterSubmit = () => {
        this.setState({
            justSubmitted: false
        });
    };

    saveLastUsersRoll = (dicesSelected) => {
        const usersLastRolls = [...this.state.usersLastRolls];

        if (usersLastRolls.length === 5) {
            usersLastRolls.shift();
        }

        usersLastRolls.push(dicesSelected);

        this.setState({
            usersLastRolls: usersLastRolls
        });
    };

    loadLastUSersRoll = () => {

    };

    render() {
        return (
            <div className="chat-app">
                <div className="col-left">
                    <UsersList />
                    <DestinyPoints 
                        destinyPoints={this.state.destinyPoints}
                        addDestinyPoint={this.addDestinyPoint}
                        removeDestinyPoint={this.removeDestinyPoint}
                    />
                </div>
                <div className="col-right">
                    <div className="chat-header">
                        <div className="user-data">
                            <p className="char-name">{this.state.charName}</p>
                            <p className="user-name">{this.state.userName}</p>
                        </div>
                        <div className="user-controls">
                            <Link to="/">
                                <i className="fa fa-sign-out logout" />
                            </Link>
                        </div>                        
                    </div>
                    <RecentMessages 
                        dices={this.dices}
                        symbols={this.symbols}
                        historial={this.state.historial}
                        justSubmitted={this.state.justSubmitted}
                        afterSubmit={this.afterSubmit}
                    />
                    <WriteMessage 
                        dices={this.dices}
                        currentMessage={this.state.currentMessage}
                        selectDice={this.selectDice}
                        deselectDice={this.deselectDice}
                        handleKeyControl={this.handleKeyControl}
                        handleMessageChange={this.handleMessageChange}
                        dicesSelected={this.state.dicesSelected}
                        resetDices={this.resetDices}
                        restoreLast={this.state.restoreLast}
                        usersLastRolls={this.state.usersLastRolls}
                        loadLastUSersRoll={this.loadLastUSersRoll}
                        submit={this.submit}
                    />
                </div>                
            </div>
        );
    }
}

export default ChatApp;
