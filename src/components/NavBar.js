import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <ul>
                <Link to="/" className="title">Travel back to Earth!</Link>
            </ul>
        </div>
    );
}
