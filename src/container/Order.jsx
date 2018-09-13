import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Modal from "react-responsive-modal";
import Base from "./Base.jsx";
import Preview from "./Preview.jsx";
import OrderItem from "./OrderItem.jsx";
import Checkbox from "material-ui/Checkbox";
import BtnIconClear from "../components/button/BtnIconClear";
import ActionFavorite from "material-ui/svg-icons/action/favorite";
import ActionFavoriteBorder from "material-ui/svg-icons/action/favorite-border";
import { mapStateToProps } from "./ReselectHelper";
import { isModal } from "../redux/actions/Items";

class Order extends Base {
    state = {
        isPost: true
    };

    renderExtraBlock() {
        let dataExtra = this.props.shop.itemsMap.filter(item =>
            item.category.some((itm) =>
                itm === "sweets") && item.city === this.props.shop.selectedCity);

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
                        <div className="order__summary-item"> {this.props.basket.amount} грн.</div>
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
                    this.props.basket.inOrderMap.map((item, index) =>
                        <OrderItem {...item.toJS()} key={index} />
                    ).toArray()
                }
                {this.renderPost()}
                {this.renderSummary()}
            </div>
        )
    }

    onCloseModal = () => {
        this.props.dispatch(isModal({
            isModalFlag: false
        }))
    }

    renderModal() {
        let { isModalFlag } = this.props.basket;

        return (
            <Modal
                open={isModalFlag}
                onClose={this.onCloseModal}
                center
            >
                <h4 className="modal__h4">Если Вы желаете сделать заказ для еще одного города, то завершите пожалуйста оформление заказа для текущего города.</h4>
            </Modal>
        )
    }

    renderContainer() {
        console.log(this.props.basket.isModalFlag);

        return (
            <div className="page-main">
                <div className="order__title">Ваш заказ:</div>
                {this.renderOrder()}
                {this.renderExtraBlock.call(this)}
                {this.renderModal()}
            </div>
        );
    }
}

Order.propTypes = {
    selectedCity: PropTypes.number,
    inOrderMap: PropTypes.object,
    itemsMap: PropTypes.object,
    amount: PropTypes.number
};

export default connect(mapStateToProps)(Order);