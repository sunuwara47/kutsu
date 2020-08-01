import React, { Component } from "react";
import ContactInfo from "./contactinfo";
import ContactForm from "./contactform";
import About from "./about";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <section className="flex about">
          <About />
          <ContactInfo />
          <ContactForm />
        </section>
        <div className="copyright">
          <Link className="footer-link" to="/policies"> Privacy and policies </Link>
          <Link className="footer-link" to="/tos"> Terms of Services </Link><br />
          &copy;2020 Kutsu, Inc. All rights reserved
        </div>
      </footer>
    );
  }
}
