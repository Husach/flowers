import React from "react";
import PropTypes from "prop-types";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import BtnBack from "../components/button/BtnBack.jsx";
import Description from "./Description.jsx";

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
    history: PropTypes.object
};

export default Details;
