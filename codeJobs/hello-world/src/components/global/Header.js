// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

// Assets
import logo from './img/logo.svg';
import './css/Header.css';

// Components
class Header extends React.Component {
    // Definimos los props que vamos a recibir
    static PropTypes = {
        title: PropTypes.string.isRequired,
        items: PropTypes.array.isRequired
    }

    render() {
        // props contiene las propiedades
        // console.log(this.props);

        // const title = this.props.title;
        // const items = this.props.items;
        // Mejor manera: ES6
        const {title, items} = this.props;

        return (
            <div className="Header">
                <div className="Logo">
                    <img src={logo} alt="logo" />
                    <h2>{title}</h2>
                    <ul className="Menu">
                        {
                            items && items.map(
                                (item, k) => <li key={k}> <Link to={item.url}>{item.title}</Link> </li>
                                )}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Header;
