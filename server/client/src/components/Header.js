import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;

      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );

      default:
        return [
          <li key="2">
            <Payments />
          </li>,
          <li
            key="5"
            style={{ marginLeft: "10px", textTransform: "capitalize" }}
          >
            {" "}
            {this.props.auth.name}
          </li>,
          <li key="3" style={{ margin: "0 10px" }}>
            Credits: {this.props.auth.credits}
          </li>,
          <li key="4">
            <a href="/api/logout">Logout</a>
          </li>,
          <li key="1">
            <img
              src={this.props.auth.photo}
              alt="current user"
              style={{
                borderRadius: "3px",
                width: "50px",
                margin: "7px",
                boxShadow: "0px 0px 5px black"
              }}
            />
          </li>
        ];
    }
  }

  render() {
    return (
      <div className="row">
        <nav>
          <div className="nav-wrapper">
            <Link
              to={this.props.auth ? "/surveys" : "/"}
              className="left brand-logo"
            >
              Emailinx
            </Link>
            <ul className="right">{this.renderContent()}</ul>
          </div>
        </nav>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
