import React from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "../auth/helper";

const currentTab = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#000" };
    } else {
        return { color: "#013299" };
    }
};

const Menu = ({ history }) => {
    return (
        <div>

            <nav className="navbar navbar-expand-lg">
                <Link className="navbar-brand" className="heading2" to="/" >Tshirt Store!</Link>
                <button className="navbar-toggler navbar-light" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link
                                style={currentTab(history, "/")}
                                className="nav-link h5"
                                to="/"
                            >
                                HOME
                                </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                style={currentTab(history, "/cart")}
                                className="nav-link h5"
                                to="/cart"
                            >
                                CART
                                </Link>
                        </li>
                        {isAuthenticated() && isAuthenticated().user.role === 0 && (
                            <li className="nav-item">
                                <Link
                                    style={currentTab(history, "/user/dashboard")}
                                    className="nav-link h5"
                                    to="/user/dashboard"
                                >
                                    DASHBOARD
                                    </Link>
                            </li>
                        )}
                        {isAuthenticated() && isAuthenticated().user.role === 1 && (
                            <li className="nav-item">
                                <Link
                                    style={currentTab(history, "/admin/dashboard")}
                                    className="nav-link h5"
                                    to="/admin/dashboard"
                                >
                                    ADMIN DASHBOARD
                        </Link>
                            </li>
                        )}

                        {!isAuthenticated() && (
                            <>
                                <li className="nav-item">
                                    <Link
                                        style={currentTab(history, "/signup")}
                                        className="nav-link h5"
                                        to="/signup"
                                    >
                                        SIGNUP
                            </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        style={currentTab(history, "/signin")}
                                        className="nav-link h5"
                                        to="/signin"
                                    >
                                        SIGNIN
                            </Link>
                                </li>
                            </>
                        )}
                        {isAuthenticated() && (
                            <li className="nav-item">
                                <Link
                                    className="nav-link text-warning h5"
                                    onClick={() => {
                                        signout(() => {
                                            history.push("/");
                                        });
                                    }}
                                >
                                    SIGNOUT
                        </Link>
                            </li>
                        )}

                    </ul>
                </div>
            </nav>

        </div>
    );
};

export default withRouter(Menu);
