import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>

            <section id="intro">

                <div id="intro-content" class="center-content">

                    <div class="center-content-inner">

                        <div class="content-section content-section-margin">

                            <div class="content-section-grid clearfix">

                                <Link to="/nasaphoto" class="button nav-link">

                                    <div class="bottom"></div>

                                    <div class="top">

                                        <div class="label">See a Photo of the Day</div>

                                        <div class="button-border button-border-left"></div>
                                        <div class="button-border button-border-top"></div>
                                        <div class="button-border button-border-right"></div>
                                        <div class="button-border button-border-bottom"></div>

                                    </div>

                                </Link>

                            </div>

                        </div>

                    </div>

                </div>

            </section>            
        </>
    )
}