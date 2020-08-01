import React, { Component } from "react";

export default class Sneakers extends Component {
  constructor() {
    super();
    this.state = { cards: [] };
  }

  componentDidMount = () => {
    fetch(
      "https://my-json-server.typicode.com/sunuwara47/kutsu/cards?categories=Sneakers"
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ cards: data });
      })
      .catch();
  };

  render = () => {
    const { cards } = this.state;
    return (
      <React.Fragment>
        {/* <Slider /> */}

        <article className="card">
          {cards.map((card) => (
            <div className="cards" href="/home" id={card.id}>
              <img alt="card-img" src={card.img} />
              <div className="product_des">
                <h2 className="product_name"> {card.product_name} </h2>
                <p className="price"> Rs.{card.product_price}</p>
                <p className="stocks"> {card.stock} </p>
                <button className="add"> Add to Cart </button>
              </div>
            </div>
          ))}
        </article>
        <div className="clr"></div>
      </React.Fragment>
    );
  };
}
