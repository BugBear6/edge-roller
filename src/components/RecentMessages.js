import React from 'react';

class RecentMessages extends React.Component {
    render() {
        return (
            <div className="recent-messages">
                <ul className="shouts-list">
                    {
                        Object.keys(this.props.historial).map(objKey => (
                            <Shout 
                                key={this.props.historial[objKey].timestamp} 
                                charName={this.props.historial[objKey].charName} 
                                text={this.props.historial[objKey].text} 
                                resultsCalculated={this.props.historial[objKey].resultsCalculated} 
                                dicesSelected={this.props.historial[objKey].dicesSelected}
                                symbols={this.props.symbols}
                                dices={this.props.dices} 
                            />
                        ))
                    }
                </ul>
            </div>
        );
    }
}

const resultsObjToArr = (resultsObj, isResults) => {
    let resultsArr = [];

    for (let key in resultsObj) {
        if (resultsObj.hasOwnProperty(key)) {
            if (isResults && key === 'd10') {
                resultsArr.push(resultsObj[key]);
            } else {
                for (let i = 0; i < resultsObj[key]; i++) {
                    resultsArr.push(key);
                }
            }
        }
    }

    return resultsArr.join(',').split(',');
};

const isSymbol = resultSymbolStr => {
    const symbolsObj = {
        success: true,
        failure: true,
        threat: true,
        advantage: true,
        despair: true,
        triumph: true,
        light: true,
        dark: true
    };
    return symbolsObj[resultSymbolStr] || false;
}

const Shout = props => (
    <li className="shout">
        <div className="shout-container">
            <h3 className="char-name">{props.charName}</h3>
            <div className="shout-roll">
                <ul className="dice-list">
                    {
                        resultsObjToArr(props.dicesSelected, false).map((diceResult, i) => (
                            <li 
                                key={i}
                                className={'dice-container ' + props.dices[diceResult].type} >
                            <img 
                                src={props.dices[diceResult].src}
                                title={props.dices[diceResult].desc}
                                alt={props.dices[diceResult].desc}
                                className="dice" />
                        </li>
                        ))
                    }
                </ul>
                <ul className="results-list">
                    {
                    resultsObjToArr(props.resultsCalculated, true).map((resultSymbolStr, i) => (
                        isSymbol(resultSymbolStr) ? 
                            <li
                                key={i} 
                                className={'results-item ' + props.symbols[resultSymbolStr].type} >
                                <img 
                                    src={props.symbols[resultSymbolStr].src}
                                    title={props.symbols[resultSymbolStr].desc}
                                    alt={props.symbols[resultSymbolStr].desc}
                                    className="results-symbol" />
                            </li>
                        :                       
                            resultSymbolStr.split(',').filter(item => item).map((d10Result, j) => (
                                <li
                                    key={j} 
                                    className={'results-item d10'} >
                                    {d10Result}
                                </li>
                            ))                            
                    ))
                    }
                </ul>
                <p className="shout-text">{props.text}</p>
            </div>
        </div>
    </li>
);

export default RecentMessages;
