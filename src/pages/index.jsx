import React from "react";
import Preview from "../container/Preview.jsx";
import Base from "../container/Base.jsx";
import { data } from "../data/data";

const category = ["tulips", "roses"];

class Home extends Base {

    newData(tmp) {
        let temp = [];
        for (let i = 0; i < 6; i++) {
            temp[i] = tmp[i];
        }

        return temp;
    }

    getCategory(itemCategory) {
        let tmp = data.filter(item => item.category.some((itm) => itm === itemCategory));

        debugger
        tmp = this.newData.call(this, tmp);

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
