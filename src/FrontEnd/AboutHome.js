import React from 'react'
import '../Css/AboutHome.scss'

const AboutHome = () => {
    return (
        <>

            <section className="about-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about-img mr-15">
                                <img src="image/about-img.jpg" alt="khalid" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-content ml-15">
                                <span>About our SKITM</span>
                                <h2>Our education system inspires the next generation</h2>
                                <p>Curabitur aliquet quam id dui posuere blandit. Praesent sapien massa, convallis a
                                pellentesque nec, egestas non nisi. Donec rutrum congue leo eget malesuada. Pellentesque in
                                ipsum id orci porta dapibus. Proin eget tortor risus. Vestibulum ante ipsum primis in
                                faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet
            aliquam vel, ullamcorper sit amet ligula.</p>
                                <a href="about.html" className="default-btn">
                                    Find out more
            <i className="ri-arrow-right-line" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default AboutHome
