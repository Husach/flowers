import React from "react";
import PropTypes from "prop-types";
import Header from "../container/Header.jsx";
import Footer from "../container/Footer.jsx";
import BtnBack from "../components/button/BtnBack.jsx";
import Description from "../container/Description.jsx";

const Details = ({match: {params}, history}) => {

    return (
        <div className="page">
            <Header params={params} history={history} />
            <div className="page-main">
                <Description params={params} history={history} />
                <BtnBack history={history} />
            </div>
            <Footer />
        </div>
    );
};

Details.propTypes = {
    router: PropTypes.object,
    match: PropTypes.object,
    history: PropTypes.string
};

export default Details;
