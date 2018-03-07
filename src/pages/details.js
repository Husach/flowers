import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Back from './../components/button/BtnBack';

import Header from './../components/layout/Header';
import Description from './../components/Description';

const Details = ({match: {params}, history}) => {

  return (
    <div className="page">
      <Header params={params} history={history} />
      <Description params={params} history={history} />
      <Back history={history} />
    </div>
  );
};

Details.propTypes = {
  router: PropTypes.object
};

export default Details;
