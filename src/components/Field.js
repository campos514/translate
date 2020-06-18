import React from 'react';
import LaunguageContext from '../contexts/LanguageContext';

class Field extends React.Component {
    static contextType = LaunguageContext;
    render() {
        const text = this.context.language === 'english' ? 'Name' : 'Naam';
            return(
            <div className="ui field">
                <label>{text}</label>
                <input />
            </div>
            );
        
    }
}

export default Field;