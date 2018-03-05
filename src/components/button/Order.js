import React from 'react';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';

const Order = ({ item }) => (
  <Link to={`/order`}>
      <div className="btn__order">
          <RaisedButton
              label="ЗАКАЗАТЬ"
              primary={true} />
      </div>
  </Link>
);

export default Order;
