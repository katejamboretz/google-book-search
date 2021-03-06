import React from "react";
import { Link } from "react-router-dom";
import "./style.css"; // not yet adding font attribute

function NavTabs() {
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
                    Home
        </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/saved"
                    className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
                >
                    Saved
        </Link>
            </li>

        </ul>
    );
}

export default NavTabs;
