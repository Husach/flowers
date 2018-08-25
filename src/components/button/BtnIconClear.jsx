import React, {Component} from "react";
import PropTypes from "prop-types";
import IconButton from "material-ui/IconButton";
import ContentClear from "material-ui/svg-icons/content/clear";

class BtnIconClear extends Component {
    render() {
        return (
            <IconButton
                tooltip="clear"
                iconStyle={{height: "16", width: "16", color: "888888"}}
                style={{padding: "0"}}
                onClick={this.props.onClick}
            >
                <ContentClear />
            </IconButton>
        )
    }
}

BtnIconClear.propTypes = {
    onClick: PropTypes.func
}

export default BtnIconClear;