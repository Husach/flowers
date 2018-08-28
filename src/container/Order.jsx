import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Base from "./Base.jsx";
import Preview from "./Preview.jsx";
import OrderItem from "./OrderItem.jsx";
import Checkbox from "material-ui/Checkbox";
import BtnIconClear from "../components/button/BtnIconClear";
import ActionFavorite from "material-ui/svg-icons/action/favorite";
import ActionFavoriteBorder from "material-ui/svg-icons/action/favorite-border";

class Order extends Base {
    state = {
        isPost: true
    };

    renderExtraBlock() {
        let dataExtra = this.props.itemsMap.filter(item =>
            item.category.some((itm) =>
                itm === "sweets") && item.city === this.props.selectedCity);

        return (
            <div className="order__extra">
                <div className="order__extra-title">Добавить к букету:</div>
                <div className="preview">
                    {dataExtra.map((item, index) =>
                        <Preview item={item} key={index} />
                    ).toArray()}
                </div>
            </div>
        )
    }

    renderPost() {
        if(this.state.isPost) {
            return (
                <div className="order__item">
                    <img
                        className="order__item-img"
                        src="img/post-card.jpg"
                        alt="bonus_card"
                    />
                    <div className="order__item-name">Поздравительнная открытка</div>
                    <div className="order__item-cost">Бесплатно</div>
                    <BtnIconClear
                        onClick={() => {
                            this.setState({isPost: !this.state.isPost})
                        }}
                    />
                </div>
            )
        }
        return null;
    }

    renderSummary() {
        return (
            <div className="order__summary">
                <Checkbox
                    checkedIcon={<ActionFavorite />}
                    uncheckedIcon={<ActionFavoriteBorder />}
                    label="Поздравительнная открытка"
                    checked={this.state.isPost}
                    onClick={() => {
                        this.setState({isPost: !this.state.isPost})
                    }}
                />

                <div className="order__summary-wrapper">
                    <div className="order__summary-row">
                        <div className="order__summary-item">Сумма: </div>
                        <div className="order__summary-item"> {this.props.amount} грн.</div>
                    </div>
                    <div className="order__summary-row">
                        <div className="order__summary-item">Доставка: </div>
                        <div className="order__summary-item"> Бесплатно</div>
                    </div>
                </div>
            </div>
        )
    }

    renderOrder() {
        return (
            <div className="order__body">
                {
                    this.props.inOrderMap.map((item, index) =>
                        <OrderItem {...item.toJS()} key={index} />
                    ).toArray()
                }
                {this.renderPost()}
                {this.renderSummary()}
            </div>
        )
    }

    renderContainer() {
        return (
            <div className="page-main">
                <div className="order__title">Ваш заказ:</div>
                {this.renderOrder()}
                {this.renderExtraBlock.call(this)}
            </div>
        );
    }
}

Order.propTypes = {
    selectedCity: PropTypes.number,
    itemsMap: PropTypes.object,
    inOrderMap: PropTypes.array,
    amount: PropTypes.number
};

export default connect(state => {
    return {
        selectedCity: state.shop.selectedCity,
        itemsMap: state.shop.itemsMap,
        inOrderMap: state.basket.inOrderMap,
        amount: state.basket.amount
    }
})(Order);