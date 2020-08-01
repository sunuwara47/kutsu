import React, { Component } from "react";
import Nav from "./nav";
import Search from "./search";

export default class Header extends Component {

  render() {
    return (
      <React.Fragment>
        <header className="header flex">
          <h1 className="logo"> KUTSU </h1>
          <Nav />
          <Search />
        </header>
      </React.Fragment>
    );
  }
}
