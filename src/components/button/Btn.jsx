import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class Btn extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={this.props.className}>
                <RaisedButton
                    label={this.props.label}
                    backgroundColor={this.props.bgColor}
                    onClick={this.props.onClick}
                />
            </div>
        );
    }

}

Btn.defaultProps = {
    label: '',
    bgColor: '',
    className: ''
}

export default Btn;