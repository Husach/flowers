import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Btn from "./index.jsx"
import { addItem } from "../../redux/actions/Items";
//import Modal from "react-responsive-modal";

class BtnOrder extends Component {
/*    constructor() {
        super();
        this.state = {
            modalIsOpen: false
        }
    }

    openModal() {
        this.setState({modalIsOpen: true});
        debugger;
        console.log(this.state.modalIsOpen);
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }*/

    checkDifCity() {
        let item = this.props.item;
        let newCity = item.city;
        let oldMap = this.props.inOrderMap.first();

        if(oldMap) {
            let oldCity = oldMap.get("item").city;
            if(newCity !== oldCity) {
                //this.openModal();
                alert(`В одном заказе возможны позиции только из одного города. Ваш заказ оформлен для города ${oldCity}`)
            } else {
                this.addItem();
            }
        } else {
            this.addItem();
        }
    }

    addItem() {
        this.props.dispatch(addItem({
            item: this.props.item
        }));
    }

    render() {
        //let open = this.state.modalIsOpen;

        return (
            <Link to={`/order/${this.props.item.id}`}>
                <Btn
                    className="btn__order"
                    label="ЗАКАЗАТЬ"
                    labelColor="#fff"
                    bgColor="#7bb262"
                    style={this.props.style}
                    onClick={() => this.checkDifCity()}
                />
                {/*<Modal open={open} onClose={this.closeModal} center>
                    <h4>В одном заказе возможны позиции находящиеся только в одном городе</h4>
                </Modal>*/}
            </Link>
        )
    }
}

BtnOrder.propTypes = {
    inOrderMap: PropTypes.object,
    dispatch: PropTypes.func,
    onClick: PropTypes.func,
    style: PropTypes.object,
    item: PropTypes.object,
    first: PropTypes.func
};

export default connect(state => {
    return {
        inOrderMap: state.basket.inOrderMap
    }
})(BtnOrder);
