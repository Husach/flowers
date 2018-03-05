import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const Back = ({history}) => (
  <div className="btn__back">
    <RaisedButton
        label="Вернуться"
        primary={true}
        onClick={() => history.goBack()} />
  </div>
);

export default Back;
