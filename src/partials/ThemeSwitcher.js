import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMoon, faSun} from '@fortawesome/free-solid-svg-icons';

export default class ThemeSwitcher extends React.Component {
    render() {
        var color = this.props.darkModeActive ? '#FFA500' : '#4D5B6B'
        var icon = this.props.darkModeActive ?  faSun : faMoon;
        return (
            <button className="app__dark-mode-btn icon level-right" onClick={this.props.toggleDarkMode}>
                <FontAwesomeIcon icon={icon} color={color}/>
            </button>
        );
    }

}