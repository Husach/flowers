import React from "react";
import Preview from "../container/Preview.jsx";
import Base from "../container/Base.jsx";
import { data } from "./../data/data";

const category = ["tulips", "roses", "bouquet"];

class Home extends Base {

  getCategory(itemCategory) {
    let tmp = data.filter(item => item.category.some((itm) => itm === itemCategory));
    return tmp.map((item, index) =>
         <Preview item={item} key={index} />
    );
  }

  renderContainer() {
    return (
        <div className="page-main">
          {category.map((item, index) =>
            <div key={index} className="preview" >
              {this.getCategory.call(this, item)}
            </div>
          )}
        </div>
    );
  }
}

export default Home;
