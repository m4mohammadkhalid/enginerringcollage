import React from 'react'
import '../Css/HomeSlider.scss'

const HomeSlider = () => {
    return (
        <>


            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="csslider1 autoplay">
                            <input name="cs_anchor1" autoComplete="off" id="cs_slide1_0" type="radio" className="cs_anchor slide" />
                            <input name="cs_anchor1" autoComplete="off" id="cs_slide1_1" type="radio" className="cs_anchor slide" />
                            <input name="cs_anchor1" autoComplete="off" id="cs_slide1_2" type="radio" className="cs_anchor slide" />
                            <input name="cs_anchor1" autoComplete="off" id="cs_slide1_3" type="radio" className="cs_anchor slide" />
                            <input name="cs_anchor1" autoComplete="off" id="cs_play1" type="radio" className="cs_anchor" defaultChecked />
                            <input name="cs_anchor1" autoComplete="off" id="cs_pause1" type="radio" className="cs_anchor" />
                            <ul>
                                <div style={{ width: '100%', visibility: 'hidden', fontSize: 0, lineHeight: 0 }}>
                                    <img src="image/slider1.jpg" alt="khalid" />
                                </div>
                                <li className="num0 img">
                                    <img src="image/slider2.jpg" alt="Buns"  />
                                </li>
                                <li className="num1 img">
                                    <img src="image/slider4.jpg" alt="Croissant"  />
                                </li>
                                <li className="num2 img">
                                    <img src="image/slider3.jpg" alt="Lemon pie"  />
                                </li>
                                <li className="num3 img">
                                    <img src="image/slider4.jpg" alt="Breakfast" />
                                </li>
                            </ul>
                            <div className="cs_description">
                                <label className="num0">
                                    <span className="cs_title"><span className="cs_wrapper">Buns</span></span>
                                    <br /><span className="cs_descr"><span className="cs_wrapper">Curd buns</span></span>
                                </label>
                                <label className="num1">
                                    <span className="cs_title"><span className="cs_wrapper">Croissant</span></span>
                                    <br /><span className="cs_descr"><span className="cs_wrapper">Chocolate croissant</span></span>
                                </label>
                                <label className="num2">
                                    <span className="cs_title"><span className="cs_wrapper">Lemon pie</span></span>
                                    <br /><span className="cs_descr"><span className="cs_wrapper">Two pieces of lemon pie</span></span>
                                </label>
                                <label className="num3">
                                    <span className="cs_title"><span className="cs_wrapper">Breakfast</span></span>
                                    <br /><span className="cs_descr"><span className="cs_wrapper">Chocolate croissant</span></span>
                                </label>
                            </div>
                            <div className="cs_bullets">
                                <label className="num0" htmlFor="cs_slide1_0">
                                    <span className="cs_point" />
                                    <span className="cs_thumb"><img src="image/slider1.jpg" alt="Buns" title="Buns" /></span>
                                </label>
                                <label className="num1" htmlFor="cs_slide1_1">
                                    <span className="cs_point" />
                                    <span className="cs_thumb"><img src="image/slider2.jpg"  alt="Croissant" title="Croissant" /></span>
                                </label>
                                <label className="num2" htmlFor="cs_slide1_2">
                                    <span className="cs_point" />
                                    <span className="cs_thumb"><img src="image/slider3.jpg" alt="Lemon pie" title="Lemon pie" /></span>
                                </label>
                                <label className="num3" htmlFor="cs_slide1_3">
                                    <span className="cs_point" />
                                    <span className="cs_thumb"><img src="image/slider4.jpg" alt="Breakfast" title="Breakfast" /></span>
                                </label>
                            </div>
                        </div>
                    </div>
                    








                </div>
            </div>


        </>
    )
}

export default HomeSlider
