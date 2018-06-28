import React from 'react';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import { LightGreenA400 } from 'material-ui/styles/colors';

const btnStyle = {
  width: 230
}

const BtnOrder = ({ item }) => (
  <Link to={`/order/${item.id}`}>
      <div className="btn__order">
          <RaisedButton
              label="ЗАКАЗАТЬ"
              backgroundColor="#d73925"
              labelColor="#fff"
              style={btnStyle} />
      </div>
  </Link>
);

export default BtnOrder;
