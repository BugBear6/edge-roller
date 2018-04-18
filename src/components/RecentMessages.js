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
                                results={this.props.historial[objKey].results} 
                                symbols={this.props.symbols} 
                            />
                        ))
                    }
                </ul>
            </div>
        );
    }
}

const Shout = props => (
    <li className="shout">
        <div className="shout-container">
            {/* <h3 className="user-name">User Name</h3> */}
            <h3 className="char-name">{props.charName}</h3>
            <p className="shout-text">{props.text}</p>
            <div className="shout-roll">
                <ul className="dices-list">
                {/* @TODO */}
                </ul>
                <ul className="results-list">
                    {
                        props.results.split(',').map((item, i) => (
                            <li
                                key={i} 
                                className={'results-item ' + props.symbols[item].type} >
                                <img 
                                    src={props.symbols[item].src}
                                    title={props.symbols[item].desc}
                                    alt={props.symbols[item].desc}
                                    className="results-symbol" />
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </li>
);

export default RecentMessages;
