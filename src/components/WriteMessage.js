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
                        dicesSelected={this.props.dicesSelected}
                        resetDices={this.props.resetDices}
                        restoreLast={this.props.restoreLast}
                    />
                    <div className="textarea-container">
                        <textarea 
                            onKeyDown={this.props.handleKeypress}
                        />
                        <button
                            className="reset"
                            onClick={this.props.resetDices}>
                            <i className="fa fa-trash-o" aria-hidden="true"></i>
                        </button>
                        <button
                            className="restore"
                            onClick={this.props.restoreLast}>
                            <i className="fa fa-refresh" aria-hidden="true"></i>
                        </button>
                        <button
                            className="submit"
                            onClick={this.props.submit}>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

const DicePicker = props => (
    <div className="dice-picker">
        <ul className="dice-list">
            {
                Object.keys(props.dices).map((dice, i) => (
                    <li 
                        key={i}
                        className={'dice-container ' + (props.dicesSelected[dice] === 0 ? 'unselected' : 'selected')}
                    >
                        <input
                            value={props.dicesSelected[dice]}
                            type="text" 
                            className="counter"/>
                        <img                             
                            className="dice"
                            alt={dice.desc}
                            src={props.dices[dice].src}
                            onClick={() => props.selectDice(dice)}
                        />
                        <div className="counter-container">

                            <div className="counter-buttons">
                                <i 
                                    className="fa fa-plus-circle counter-button" 
                                    onClick={() => props.selectDice(dice)}></i>
                                <i 
                                    className="fa fa-minus-circle counter-button"
                                    onClick={() => props.deselectDice(dice)}></i>
                                    
                            </div>
                        </div>
                    </li>
                ))
            }
        </ul>
    </div>
);

export default WriteMessage;
