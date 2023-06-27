import React from "react";
import './Footer.css';
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div>
            <footer className="text-center text-white my-0" style={{ backgroundColor: "#f1f1f1" }}>
            {/* <div class="container pt-4">
                <section class="mb-4">
                    <a
                        class="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="#!"
                        role="button"
                        data-mdb-ripple-color="dark"
                    >
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a
                        class="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="#!"
                        role="button"
                        data-mdb-ripple-color="dark"
                    >
                        <i class="fab fa-google"></i
                        ></a>
                    <a
                        class="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="#!"
                        role="button"
                        data-mdb-ripple-color="dark"
                    >
                        <i class="fab fa-instagram"></i>
                    </a>
                </section>
            </div> */}
            <div className="text-center text-dark p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                © 2023 Copyright:
                <Link className="text-dark" href="/">Vegmart.com</Link>
            </div>
        </footer>
        </div>
    );
}

export default Footer;