import React, { Component } from "react";
import {Link} from 'react-router-dom';

export default class Nav extends Component {

  render() {
    return (
      <nav>
        <ul className="nav-ul">
          <Link className="header-link" to="/"><li className="nav-li"> Home </li></Link>
          <li className="nav-li"> Brands 
                            <ul className="dropdown">
                          <Link className="header-link" to ="/nike"><li> Nike </li></Link>
                                <Link className="header-link" to ="/adidas"><li> Adidas </li></Link> 
                                <Link className="header-link" to ="/361"><li> 361 </li></Link> 
                                <Link className="header-link" to ="/vans"><li> Vans </li></Link> 
                                <Link className="header-link" to ="/converse"><li> Converse </li></Link> 
                            </ul>
          </li>
          <li className="nav-li"> Categories
                            <ul className="dropdown">
                                <Link className="header-link" to ="/sneakers"><li> Sneakers </li></Link> 
                                <Link className="header-link" to ="/casuals"><li> Casuals </li></Link> 
                                <Link className="header-link" to ="/boots"><li> Boots </li></Link>  
                                <Link className="header-link" to ="/sports"><li> Sports </li></Link> 
                              <Link className="header-link" to ="/running"><li> Running </li></Link>
                            </ul>
          </li>
          <li className="nav-li"><a className="header-link" href="#about"> About </a> </li>
          <li className="nav-li"><a className="header-link" href="#contact"> Contact </a></li>
        </ul>
      </nav>
    );
  }
}
