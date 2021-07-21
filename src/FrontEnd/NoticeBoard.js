import * as React from "react";
import { FaBell, FaLocationArrow } from 'react-icons/fa';

import '../Css/Noticeboard.css'
const NoticeBoard = () => {
    return (
       <>
<div>
  
  <div className="page-content bg-white">
    {/* Slider Banner */}
    <div className="content-block">
      {/* About Us */}
      <div className="section-full content-inner-2 bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-12 col-12">
              <div className="action-box">
                <div className="head">
                  <h4 className="title">Notification</h4>
                </div>
                <div className="action-area marquee1">
                  <ul>
                    <li><a href="/"><FaBell style={{paddingRight:'16px', fontSize:'34px', color:'yellow'}} />RESULT OF SSC CGL 2020 (TIER-3)</a></li>
                    <li><a href="/"><FaBell style={{paddingRight:'16px', fontSize:'34px', color:'yellow'}} />SSC CGL 2020 PRE Application Status</a></li>
                    <li><a href="/"><FaBell style={{paddingRight:'16px', fontSize:'34px', color:'yellow'}} />SSC CHSL 2020 Result Declared</a></li>
                    <li><a href="/"><FaBell style={{paddingRight:'16px', fontSize:'34px', color:'yellow'}} />RESULT OF SSC CGL 2020 (TIER-3)</a></li>
                    <li><a href="/"><FaBell style={{paddingRight:'16px', fontSize:'34px', color:'yellow'}} />SSC CGL 2020 PRE Application Status</a></li>
                    <li><a href="/"><FaBell style={{paddingRight:'16px', fontSize:'34px', color:'yellow'}} />SSC CHSL 2020 Result Declared</a></li>
                    <li><a href="/"><FaBell style={{paddingRight:'16px', fontSize:'34px', color:'yellow'}} />RESULT OF SSC CGL 2020 (TIER-3)</a></li>
                    <li><a href="/"><FaBell style={{paddingRight:'16px', fontSize:'34px', color:'yellow'}} />SSC CGL 2020 PRE Application Status</a></li>
                    <li><a href="/"><FaBell style={{paddingRight:'16px', fontSize:'34px', color:'yellow'}} />SSC CHSL 2020 Result Declared</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 col-12">
              <div className="action-box">
                <div className="head">
                  <h4 className="title">Events</h4>
                </div>
                <div className="action-area">
                  <ul className="event-bx">
                    <li><a href="/"><FaLocationArrow style={{marginRight:'36px', fontSize:'24px', color:'yellow'}} />New SSC-CGL/10+2 batch starts from "24th of June at 7:00 AM" at Tonk Road branch,Jaipur.</a></li>
                    <li><a href="/"><FaLocationArrow style={{marginRight:'36px', fontSize:'24px', color:'yellow'}} />New SSC-CGL MAINS batch starts from "26th of June at 10:00 AM" at Gurjar ki thadi branch,Jaipur.</a></li>
                    <li><a href="/"><FaLocationArrow style={{marginRight:'36px', fontSize:'24px', color:'yellow'}} />New SSC-CGL/10+2 and Bank-PO/Clerk batch starts from "3rd of July at 7:00 AM" at Tonk Road Branch,Jaipur.</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 col-12">
              <div className="action-box">
                <div className="head">
                  <h4 className="title">Blog / Artical</h4>
                </div>
                <div className="action-area">
                  <ul className="blog-artical">
                    <li>
                      <a href="blog-details.html">
                        <div className="date">
                          <span>10</span>
                          <strong>Jan</strong>
                        </div>
                        <h5 className="title">Preparation Strategy for SSC-CGL</h5>
                      </a>
                    </li>
                    <li>
                      <a href="blog-details.html">
                        <div className="date">
                          <span>21</span>
                          <strong>AUG</strong>
                        </div>
                        <h5 className="title">New Pattern of SSC-CGL brings more transparency.</h5>
                      </a>
                    </li>
                    <li>
                      <a href="blog-details.html">
                        <div className="date">
                          <span>06</span>
                          <strong>Mar</strong>
                        </div>
                        <h5 className="title">How to manage time for SSC examination</h5>
                      </a>
                    </li>
                  </ul>
                  <a href="blog-standard.html" className="btn btn-sm">View All</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    
       </>
    )
}

export default NoticeBoard
