import React from "react";
import PropTypes from "prop-types";
import Back from "../components/button/BtnBack.jsx";
import Header from "../components/layout/Header.jsx";
import Footer from "../components/layout/Footer.jsx";
import Description from "../components/layout/Description.jsx";

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
