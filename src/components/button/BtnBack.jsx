import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const Back = ({history}) => (
  <div className="btn__back">
    <RaisedButton
        label="Вернуться"
        backgroundColor="#efd8bd"
        onClick={() => history.goBack()} />
  </div>
);

export default Back;
