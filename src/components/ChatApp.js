import React from 'react';
import UsersList from './UsersList';
import RecentMessages from './RecentMessages';
import WriteMessage from './WriteMessage';

import ab from '../img/dices/ab.png';
import ch from '../img/dices/ch.png';
import d10 from '../img/dices/d10.png';
import boost from '../img/dices/boost.png';
import setback from '../img/dices/setback.png';
import force from '../img/dices/force.png';
import prof from '../img/dices/prof.png';
import dif from '../img/dices/dif.png';

class ChatApp extends React.Component {
    state = {
        dicesSelected: [],
        roll: [],
        results: [],
        currentMessage: '',
        users: []
    }

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

    handleKeypress = ev => {
        console.log('handle keypress!')

        if (ev.key === 'Enter') {
            ev.preventDefault();
            ev.stopPropagation();
            console.log('enter keypress!');
        }
    };

    selectDice = diceType => {        
        console.log('select diceType', diceType);        
    };

    deselectDice = diceType => {        
        console.log('deselect diceType', diceType);        
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
                    />
                    <WriteMessage 
                        dices={this.dices}
                        selectDice={this.selectDice}
                        deselectDice={this.deselectDice}
                        handleKeypress={this.handleKeypress}
                    />
                </div>                
            </div>
        );
    }
}

export default ChatApp;
