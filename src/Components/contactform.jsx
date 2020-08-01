import React, { Component } from "react";
import axios from "axios";

export default class Contactform extends Component {
  constructor(props) {
    super(props);
    this.submitMessage = this.submitMessage.bind(this);
  }

  submitMessage(e) {
    e.preventDefault();

    axios
      .post("https://my-json-server.typicode.com/sunuwara47/kutsu/contact", {
        name: document.querySelector(".name").value,
        email: document.querySelector(".email").value,
        message: document.querySelector("#message").value,
      })
      .then(() => {
        console.log("Success");
      })
      .catch(() => {
        console.log("Error");
      });

    e.target.reset();
  }

  render() {
    return (
      <section className="contactform">
        <h3> Wanna tell something? </h3>
        <form
          name="contactForm"
          className="contactForm"
          method="post"
          onSubmit={this.submitMessage}
        >
          <input type="text" className="name" placeholder="Full Name" />
          <input type="email" className="email" placeholder="E-mail" />
          <textarea type="text" id="message" placeholder="Message"></textarea>
          <button id="submit" type="submit">
            {" "}
            Submit{" "}
          </button>
        </form>
      </section>
    );
  }
}
