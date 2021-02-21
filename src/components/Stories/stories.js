import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import './stories.css';
import pin from '../../assets/pin.png';
import {Link} from 'react-router-dom';


const Story =()=>{
    return(
        <div>
            <section className="story-section">
             <Container>
                <Row className="story-sectionrow">
                    <Col md={7}>
                        <form className="form-story">
                            <h1>
                                Share Your Amazing Story!
                            </h1>
                            <label>
                                Upload your Picture
                            <input
                            type="text"
                            size={65}
                            placeholder="Choose Image"
                            className="form-control imgfld"
                            />
                            </label>
                            <div className="inptbcgdimg">
                                <img src={pin}  className="pinimg" alt="logo"/>
                            </div>
                            <Row className="formstrow">
                                <Col md={6}>
                                    <label>
                                        First Name
                                      <input type="text" size={30} className="form-control namefld"/>
                                    </label>
                                </Col>
                                <Col md={6}>
                                    <label>
                                        Last Name
                                      <input type="text" size={30} className="form-control namefld"/>
                                    </label>
                                </Col>
                            </Row>
                            <label>
                                Share your story
                               <textarea
                                 rows={5}
                                 cols={70}
                                 className="form-control txtareafld"
                                />
                           </label>
                           <div className="radiobtndiv"> 
                              <p>What did you interact with Vasiti as?</p>
                              <label className="radiolabels cusdrdbtn">
                                  <input type="radio" />
                                  <div className="radiobtns"></div>
                                  Customer
                              </label>
                              <label className="radiolabels">
                                  <input type="radio" />
                                  <div className="radiobtns"></div>
                                  Vendor
                              </label>
                           </div>
                           <label>
                               City or Higher Institution (for Students)
                            <input
                            type="text"
                            size={65}
                            placeholder=""
                            className="form-control imgfld"
                            />
                            </label>
                           <div className="strdv"> <Link to="/message_sent"><span className="story-btn">Share your story!</span></Link></div>
                        </form>
                    </Col>
                </Row>
             </Container>
          </section>
        </div>
    )
}
export default Story;