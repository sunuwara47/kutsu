import React, { Component } from "react";

export default class Contactinfo extends Component {
  render() {
    return (
      <section id="contact">
        <h3 className="footer-h3"> Contact Us:</h3>
        <br />
        <p className="contact-details">
          Phone No: 01-2345678
          <br />
          E-mail: kutsu@business.com
          <br />
        </p>
        <i className="fa fa-map-marker location"></i>Maha Laxmi Tol, Dhumbarahi,
        Ktm
        <br />
        <br />
        <i className="fa social-links fa-facebook"></i>
        <i className="fa social-links fa-twitter"></i>
        <i className="fa social-links fa-google"></i>
        <i className="fa social-links fa-youtube"></i>
        <i className="fa social-links fa-instagram"></i>
      </section>
    );
  }
}
