import React from "react";
import Preview from "../container/Preview.jsx";
import Base from "../container/Base.jsx";
import {connect} from "react-redux";

//import { data } from "../data/data";
//const category = ["tulips", "roses"];

class Home extends Base {

    /*newData(tmp) {
        let temp = [];
        for (let i = 0; i < 6; i++) {
            temp[i] = tmp[i];
        }

        return temp;
    }*/

    /*getCategory(itemCategory) {
        let tmp = data.filter(item => item.category.some((itm) => itm === itemCategory));

        debugger
        tmp = this.newData.call(this, tmp);
        debugger

        return tmp.map((item, index) =>
            <Preview item={item} key={index} />
        );
    }*/

    renderContainer() {
        let {homeItems} = this.props;
        debugger
        return (
            <div className="page-main">
                {
                    homeItems.map((items, index) => 
                        <div key={`row-${index}`} className="preview">
                            {
                                items.map((_item, _index) => 
                                    <Preview item={_item} key={`preview-${_index}`}/>
                                )
                            }
                        </div>
                    )
                }
                {/*category.map((item, index) =>
                    <div key={index} className="preview" >
                        {this.getCategory.call(this, item)}
                    </div>
                )*/}
            </div>
        );
    }
}

export default connect(state => {
    return {
        homeItems: state.shop.homeItems
    }
})(Home);
