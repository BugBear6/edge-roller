import React from 'react';

class WriteMessage extends React.Component {
    render() {
        return (
            <div className="write-message">
                <div className="write-message-container">
                    <DicePicker 
                        dices={this.props.dices}
                        selectDice={this.props.selectDice}
                        deselectDice={this.props.deselectDice}
                    />
                    <textarea 
                        onKeyDown={this.props.handleKeypress}
                    />
                </div>
            </div>
        );
    }
}

const DicePicker = props => (
    <div className="dice-picker">
        <ul className="dice-list">
            {
                props.dices.map((dice, i) => (
                    <li className="dice-container" key={i} >
                        <img                             
                            className="dice"
                            alt={dice.desc}
                            src={dice.src}
                            onClick={() => props.selectDice(dice.type)}
                        />
                        <div className="counter-container">
                            <input type="text" className="counter"/>
                            <div className="counter-buttons">
                                <i 
                                    className="fa fa-plus-circle counter-button" 
                                    onClick={() => props.selectDice(dice.type)}></i>
                                <i 
                                    className="fa fa-minus-circle counter-button"
                                    onClick={() => props.deselectDice(dice.type)}></i>
                                    
                            </div>
                        </div>
                    </li>
                ))
            }
        </ul>
    </div>
);

export default WriteMessage;
