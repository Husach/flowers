import React from 'react';
import PropTypes from 'prop-types';
import Back from '../components/button/BtnBack';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Description from '../components/layout/Description';

const Details = ({match: {params}, history}) => {

  return (
    <div className="page">
      <Header params={params} history={history} />
      <div className="page-main">
        <Description params={params} history={history} />
        <Back history={history} />
      </div>      
      <Footer />
    </div>
  );
};

Details.propTypes = {
  router: PropTypes.object
};

export default Details;
