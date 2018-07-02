import React, { Component } from "react";
import { Link } from "react-router-dom";
import BtnOrder from "../components/button/BtnOrder.jsx";

/*import {connect} from "react-redux";
import {fetchCards} from "../redux/actions/index";
import {getCards} from "../redux/selectors";*/

class Card extends Component {

  /*componentDidMount() {
    this.props.fetchCards()
  }

  renderCard (card, index) {
    return (
      <div>
        <Link className="card__info" to={`details/${card.id}`} >
          <img className="card__img"
               src={card.src}
               alt={card.name}
          />
          <div className="card__name">{card.name}</div>
          <div className="card__price">{card.price} грн.</div>
        </Link>
      </div>
    )
  }*/

    //const {cards} = this.props;

    //{cards.map((phone,index) => this.renderCard(phone, index))}

  render() {
    return (
      <div className="card">
          <div className="card__wrapper">
            <Link className="card__info" to={`details/${this.props.item.id}`} >
              <img className="card__img" src={this.props.item.src} alt={this.props.item.name} />
              <div className="card__name">{this.props.item.name}</div>
              <div className="card__price">{this.props.item.price} грн.</div>
            </Link>
            <div className="card__btn">
              <BtnOrder item={this.props.item} />
            </div>
          </div>
      </div>
    );
  }
}

/*const mapStateToProps = state => ({
  cards: getCards(state)
})

const mapDispatchToProps = {
  fetchCards
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);*/

export default Card;
