import React from "react";
import PropTypes from "prop-types";
import Back from "../components/button/BtnBack.jsx";
import Header from "../container/Header.jsx";
import Footer from "../container/Footer.jsx";
import Description from "../container/Description.jsx";

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
