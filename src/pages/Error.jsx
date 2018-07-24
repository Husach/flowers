import React from "react";
import Base from "../container/Base.jsx";

class Error extends Base {

  renderContainer() {
    return (
      <div className="page-main">
        <div className="error">
          <img src="img/error.png" alt="error" className="error__img" />
        </div>
      </div>
    );
  }
}

export default Error;
