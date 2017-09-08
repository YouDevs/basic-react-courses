// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import Header from './global/Header.js';
import Content from './global/Content.js';
import Footer from './global/Footer.js';

// Data
import items from '../data/menu';

class App extends Component {
    // Children es un prop de react
    // y es el contenido que hay por ejemplo entre las etiquetas de mi component App
    static propTypes = {
        children: PropTypes.object.isRequired
    };

    render() {
        const {children} = this.props;

        return (
            <div className="App">
                <Header title="YouDevs" items={items}/>
                <Content body={children}/>
                <Footer copyright="&copy; YouDevs 2017"/>
            </div>
        );
    }
}

export default App;
