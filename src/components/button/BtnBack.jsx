import React from "react";
import PropTypes from "prop-types";
import RaisedButton from "material-ui/RaisedButton";

const BtnBack = ({history}) => (
  <div className="btn__back">
    <RaisedButton
        label="Вернуться"
        backgroundColor="#efd8bd"
        onClick={() => history.goBack()} />
  </div>
);

BtnBack.propTypes = {
   history: PropTypes.string
}

export default BtnBack;
