import React, { Component } from "react";
import PropTypes from "prop-types";
import RaisedButton from "material-ui/RaisedButton";

class Index extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={this.props.className}>
                <RaisedButton
                    label={this.props.label}
                    labelColor={this.props.labelColor}
                    backgroundColor={this.props.bgColor}
                    onClick={this.props.onClick}
                    style={this.props.style}
                />
            </div>
        );
    }
}

Index.defaultProps = {
    label: "",
    labelColor: "",
    bgColor: "",
    className: ""
};

Index.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    labelColor: PropTypes.string,
    bgColor: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.object
};

export default Index;
