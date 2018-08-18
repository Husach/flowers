import React from "react";
import IconButton from "material-ui/IconButton";
import ContentClear from "material-ui/svg-icons/content/clear";

const BtnIconClear = () => (
    <IconButton
        tooltip="clear"
        iconStyle={{height: "16", width: "16", color: "888888"}}
        style={{padding: "0"}}
    >
        <ContentClear />
    </IconButton>
);

export default BtnIconClear;