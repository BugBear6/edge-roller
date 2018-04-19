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

const resultsObjToArr = (resultsObj) => {
    console.log('resultsObj', resultsObj)
    let resultsArr = [];

    for (let key in resultsObj) {
        if (resultsObj.hasOwnProperty(key)) {
            
            // @TODO
            // handle d10 in results output
            //
            // if (key === 'd10') {
            //     resultsArr.push(resultsObj[key]);
            // } else {
                for (let i = 0; i < resultsObj[key]; i++) {
                    resultsArr.push(key);
                }
            // }
        }
    }

    console.log('resultsArr', resultsArr)
    return resultsArr.join(',').split(',');
};

const Shout = props => (
    <li className="shout">
        <div className="shout-container">
            <h3 className="char-name">{props.charName}</h3>
            <p className="shout-text">{props.text}</p>
            <div className="shout-roll">
                <ul className="dices-list">
                    {
                        resultsObjToArr(props.dicesSelected).map((diceResult, i) => (
                            <li key={i} >
                            <img 
                                src={props.dices[diceResult].src}
                                title={props.dices[diceResult].desc}
                                alt={props.dices[diceResult].desc}
                                className="results-dice" 
                            />
                        </li>
                        ))
                    }
                </ul>
                <ul className="results-list">
                    {
                    resultsObjToArr(props.resultsCalculated).map((symbolResult, i) => (
                        isNaN(Number(symbolResult)) ? 
                            <li
                                key={i} 
                                className={'results-item ' + props.symbols[symbolResult].type} >
                                <img 
                                    src={props.symbols[symbolResult].src}
                                    title={props.symbols[symbolResult].desc}
                                    alt={props.symbols[symbolResult].desc}
                                    className="results-symbol" 
                            />
                            </li>
                        :
                            <li
                                key={i} 
                                className={'results-item d10'} >
                                {symbolResult}
                            </li>
                    ))
                    }
                </ul>
            </div>
        </div>
    </li>
);

export default RecentMessages;
