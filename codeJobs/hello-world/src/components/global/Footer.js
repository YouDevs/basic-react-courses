// Dependencies
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './css/Footer.css';

class Footer extends Component {
    static PropTypes = {
        copyright: PropTypes.string
    };

    render(){
        // Sí el prop no es obligatorio, tenemos que asignar un valor por defecto.
        const {copyright = '&copy; React 2017'} = this.props;
        return (
            <div className="Footer">
                <p dangerouslySetInnerHTML={{__html: copyright}} />
            </div>
        )
    }
}

export default Footer;
