import React from 'react';
import destiny_dark from '../img/icons/destiny_dark.png';
import destiny_light from '../img/icons/destiny_light.png';

class DestinyPoints extends React.Component {
    render() {
        return (
            <div className="destiny-points">
                <h3 className="destiny-points-header">Destiny Points</h3>
                <div className="destiny-points-body">
                    <div className="destiny-points-holder">
                        <ul className="destiny-points-list">
                            <li className="destiny-point-container">
                                <div className="destiny-points-data">
                                    <input 
                                        className="counter"
                                        type="text"
                                        readOnly
                                        value={this.props.destinyPoints.light}
                                    />
                                    <img
                                        className="destiny-point-img"
                                        onClick={() => this.props.addDestinyPoint('light')}
                                        src={destiny_light} 
                                        alt="Destiny Point Light"/>
                                </div>
                                <div className="counter-buttons">
                                    <i 
                                        className="fa fa-plus-circle counter-button" 
                                        onClick={() => this.props.addDestinyPoint('light')}></i>
                                    <i 
                                        className="fa fa-minus-circle counter-button"
                                        onClick={() => this.props.removeDestinyPoint('light')}></i>                                    
                                </div>
                            </li>
                            <li className="destiny-point-container">
                                <div className="destiny-points-data">
                                    <input 
                                        className="counter"
                                        type="text"
                                        readOnly
                                        value={this.props.destinyPoints.dark}
                                    />
                                    <img
                                        className="destiny-point-img"
                                        onClick={() => this.props.addDestinyPoint('dark')}
                                        src={destiny_dark}
                                        alt="Destiny Point Dark"/>
                                </div>
                                <div className="counter-buttons">
                                    <i 
                                        className="fa fa-plus-circle counter-button" 
                                        onClick={() => this.props.addDestinyPoint('dark')}></i>
                                    <i 
                                        className="fa fa-minus-circle counter-button"
                                        onClick={() => this.props.removeDestinyPoint('dark')}></i>                                    
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default DestinyPoints;