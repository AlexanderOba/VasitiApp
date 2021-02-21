import React from 'react';
import './home.css';
import { Row, Col, Container,Form } from  'react-bootstrap';
import vaslogo from '../../assets/vaslogo.png';
import fairguy from '../../assets/fairguy.png';
import models from '../../assets/models.png';
import curve from '../../assets/curve.png';
import joseph from '../../assets/joseph.png';
import adetola from '../../assets/adetola.png';
import emmanuel from '../../assets/emmanuel.png';
import chisom from '../../assets/chisom.png';
import adeyemi from '../../assets/adeyemi.png';
import chidi from '../../assets/chidi.png';
import atm from '../../assets/atm-lady.png';
import temi from '../../assets/temi.png';
import promise from '../../assets/promise.png';
import feyi from '../../assets/feyi.png';
import karen from '../../assets/karen.png';
import oluchi from '../../assets/oluchi.png';
import amos from '../../assets/amos.png';
import cone from '../../assets/cone.png';
import mobile from '../../assets/mobile.png';
import fb from '../../assets/fb.png';
import ig from '../../assets/ig.png';
import twitter from '../../assets/tw.png';
import linkdin from '../../assets/linkdin.png';
import { Link } from 'react-router-dom';


const Home =()=>{
    return(
        <div>
                <div className="navigation">
                    <div>
                        <img src={vaslogo} alt="logo"/>
                    </div>
                        <ul className="navlist">
                            <li>ABOUT US</li>
                            <li>STORIES</li>
                            <li>CONTACT</li>
                            <li>LOG IN</li>
                            <li className="nav-btn">SIGN UP</li>
                        </ul>
                </div>
                <div className="navsublstdv">
                    <ul className="navsublist">
                        <li>MARKETPLACE</li>
                        <li>WHOLESALE CENTER</li>
                        <li>SELLER CENTER</li>
                        <li>SERVICES</li>
                        <li>INTERNSHIPS</li>
                        <li>EVENTS</li>
                    </ul>
                </div>
                <Container>
                    <div className="amexp-section">
                           <div className="ampdv">
                               <h1 className="amexp-heading">
                                Amazing<br/>
                                Experiences from Our<br/> Wonderful Customers
                               </h1>
                               <p className="amp-par">
                               Here is what customers and vendors are saying 
                               about us, you can share your stories with us too.
                               </p>
                           </div>
                        <div>
                           <img src={fairguy} alt="pic1" className="img-fluid"/>
                        </div>
                    </div>
                   
                </Container>
            <div className="section-3">
               <Container> 
                 <Row className="sction-3row">
                     <Col md={6}>
                        <img src={models} alt="pic2" className="img-fluid"/>
                     </Col>
                     <Col md={6} className="sctn3cntnt">
                        <h1 className="exp-heading">Tolu & Joy’s Experience</h1>
                        <span className="exp-btn">CUSTOMER</span>
                         <p className="exp-parag">I had the best experience shopping with vasiti. 
                            Usability of the website was great, very good customer service, 
                            an all round great experience. I would definately be coming back! I had the best experience shopping with vasiti. Usability of the website
                            was great, very good customer service, an all round great experience. I would definately be coming back!</p>
                        <p className="pwcurvdline"><Link to="/story_page">Share your own story!</Link></p>
                         <img src={curve} alt="pic4"/>
                     </Col>
                 </Row>
               </Container> 
            </div>  
            <div clssName="section-4">
                <Container>
                    <Row className="section-4-row">
                        <Col md={4}>
                            <img src={joseph} className="custimer-img" alt="logo"/>
                            <h3 className="customername">Joseph Ike</h3>
                            <p className="custlocation">In Ikeja <span className="status customer">CUSTOMER</span></p>
                            <p className="customer-comment">Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. 
                              Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor 
                              enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate
                             aute id deserunt nisi. Aliqua id fugiat nostrud
                            irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt 
                            mollit dolore cillum minim tempor enim.</p>
                        </Col>
                        <Col md={4}>
                        <img src={adetola} className="custimer-img" alt="logo" />
                            <h3 className="customername">Adetola Fashina</h3>
                            <p className="custlocation">In Ikeja <span className="status customer">CUSTOMER</span></p>
                            <p className="customer-comment">Aliqua id fugiat nostrud irure ex duis ea quis id 
                            quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deser
                            unt ut voluptate aute id deserunt nisi.
                            Amet minim mollit non deserunt 
                            ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                             Exercitation veniam consequat sunt nostrud amet.

                          </p>
                        </Col>
                        <Col md={4}>
                        <img src={emmanuel} className="custimer-img"  alt="logo"/>
                            <h3 className="customername">Emmanuel Fayemi</h3>
                            <p className="custlocation">In Ikeja <span className="status customer">CUSTOMER</span></p>
                            <p className="customer-comment">Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. 
                              Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor 
                              enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate
                             aute id deserunt nisi. Aliqua id fugiat nostrud
                            irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt 
                            mollit dolore cillum minim tempor enim.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <img src={chisom} className="custimer-img" alt="logo"/>
                            <h3 className="customername">Chisom Obilor</h3>
                            <p className="custlocation">In Magodo<span className="status vendor">CUSTOMER</span></p>
                            <p className="customer-comment">Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. 
                              Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor 
                              enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate
                             aute id deserunt nisi. Aliqua id fugiat nostrud
                            irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt 
                            mollit dolore cillum minim tempor enim.</p>
                        </Col>
                        <Col md={4}>
                        <img src={adeyemi} className="custimer-img" alt="logo"/>
                            <h3 className="customername">Adunoluwa Adeyemi</h3>
                            <p className="custlocation">Iwo Road <span className="status vendor">CUSTOMER</span></p>
                            <p className="customer-comment">Aliqua id fugiat nostrud irure ex duis ea quis id 
                            quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deser
                            unt ut voluptate aute id deserunt nisi.
                            Amet minim mollit non deserunt 
                            ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                             Exercitation veniam consequat sunt nostrud amet.

                          </p>
                        </Col>
                        <Col md={4}>
                        <img src={chidi} className="custimer-img" alt="logo" />
                            <h3 className="customername">Chidi Okeke</h3>
                            <p className="custlocation">In Somolu <span className="status vendor">CUSTOMER</span></p>
                            <p className="customer-comment">Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. 
                              Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor 
                              enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate
                             aute id deserunt nisi. Aliqua id fugiat nostrud
                            irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt 
                            mollit dolore cillum minim tempor enim.</p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="section-5">
                <Container>
                    <Row className="pinkrow">
                        <Col md={6} className="pnkpdddiv">
                          <h3 className="pnkheading">Josiah’s Experience</h3>
                          <span className="status pinkvendor">Vendor</span>
                          <p className="pnkcontent">I had the best experience shopping with vasiti. Usability of the website was great,
                             very good customer service, an all round great experience. I would definately be coming back!
                              I had the best experience shopping with vasiti. Usability of
                             the website was great, very good customer service, an all round great experience. 
                             I would definately be coming back!</p>
                             <p className="pwcurvdline pnkshare"><Link to="/story_page">Share your own story!</Link></p>
                             <img src={curve} alt="pic4"/>
                        </Col>
                        <Col md={6}>
                            <img src={atm} className="img-fluid" alt="logo"/>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="section-6">
                <Container>
                <Row>
                        <Col md={4}>
                            <img src={temi} className="custimer-img" alt="logo" />
                            <h3 className="customername">Temi Obadofin</h3>
                            <p className="custlocation">In Magodo<span className="status vendor">CUSTOMER</span></p>
                            <p className="customer-comment">Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. 
                              Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor 
                              enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate
                             aute id deserunt nisi. Aliqua id fugiat nostrud
                            irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt 
                            mollit dolore cillum minim tempor enim.</p>
                        </Col>
                        <Col md={4}>
                        <img src={promise} className="custimer-img" alt="logo"/>
                            <h3 className="customername">Promise Ejiofor</h3>
                            <p className="custlocation">Iwo Road <span className="status vendor">CUSTOMER</span></p>
                            <p className="customer-comment">Aliqua id fugiat nostrud irure ex duis ea quis id 
                            quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deser
                            unt ut voluptate aute id deserunt nisi.
                            Amet minim mollit non deserunt 
                            ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                             Exercitation veniam consequat sunt nostrud amet.

                          </p>
                        </Col>
                        <Col md={4}>
                        <img src={feyi} className="custimer-img" alt="logo"/>
                            <h3 className="customername">Feyisola Arinola</h3>
                            <p className="custlocation">In Somolu <span className="status vendor">CUSTOMER</span></p>
                            <p className="customer-comment">Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. 
                              Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor 
                              enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate
                             aute id deserunt nisi. Aliqua id fugiat nostrud
                            irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt 
                            mollit dolore cillum minim tempor enim.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <img src={karen} className="custimer-img" alt="logo"/>
                            <h3 className="customername">Karen Ibeh</h3>
                            <p className="custlocation">In Magodo<span className="status vendor">CUSTOMER</span></p>
                            <p className="customer-comment">Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. 
                              Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor 
                              enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate
                             aute id deserunt nisi. Aliqua id fugiat nostrud
                            irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt 
                            mollit dolore cillum minim tempor enim.</p>
                        </Col>
                        <Col md={4}>
                        <img src={oluchi} className="custimer-img" alt="logo" />
                            <h3 className="customername">Oluchi Uzo</h3>
                            <p className="custlocation">Iwo Road <span className="status vendor">CUSTOMER</span></p>
                            <p className="customer-comment">Aliqua id fugiat nostrud irure ex duis ea quis id 
                            quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deser
                            unt ut voluptate aute id deserunt nisi.
                            Amet minim mollit non deserunt 
                            ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                             Exercitation veniam consequat sunt nostrud amet.

                          </p>
                        </Col>
                        <Col md={4}>
                        <img src={amos} className="custimer-img" alt="logo" />
                            <h3 className="customername">Amos Okafor</h3>
                            <p className="custlocation">In Somolu <span className="status vendor">CUSTOMER</span></p>
                            <p className="customer-comment">Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. 
                              Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor 
                              enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate
                             aute id deserunt nisi. Aliqua id fugiat nostrud
                            irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt 
                            mollit dolore cillum minim tempor enim.</p>
                        </Col>
                    </Row>
                </Container>
               
            </div>
            <div className="section-7">
                    <Container>
                        <Row>
                            <Col md={6}>
                              <img src={mobile} className="img-fluid mobilimg" alt="logo"/>  
                            </Col>
                            <Col md={6} className="mbscscndcol">
                               <img src={cone} alt="logo"/>
                                <p className="mobsctnpar">
                                  We’d make sure you’re always first to know what’s happening on Vasiti—thus, the world.
                                </p>
                                <Form className="cnfirmmailform" >
                                   <Row className="cnfirmrow">
                                  <Col md={7}>
                                      <input
                                        type="text"
                                        value=""
                                        size={50}
                                        className="cnfimmailinpt form-control"
                                        placeholder="enter your email address"
                                     />
                                  </Col>
                                  <Col md={4} className="confirmtn-btn">
                                      SUBSCRIBE
                                  </Col>
                              </Row>
                           </Form>
                            </Col>   
                        </Row>
                        <Row className="footer-row">
                            <Col md={2}>
                               <h1 className="footer-header">Company</h1>
                               <ul className="footerlist ftlstmar">
                                   <li>About us</li>
                                   <li>Term of Use</li>
                                   <li>Privacy Policy</li>
                                   <li>Press & Media</li>
                               </ul>
                            </Col>
                            <Col md={2}>
                               <h1 className="footer-header">Products</h1>
                               <ul className="footerlist ftlstmar">
                                 <li>Marketplace</li>
                                 <li>Magazine</li>
                                 <li>Seller</li>
                                 <li>Wholesale</li>
                                 <li>Services</li>
                               </ul> 
                            </Col>
                            <Col md={3}>
                            <h1 className="footer-header">Careers</h1>
                               <ul className="footerlist ftlstmar">
                                 <li>Become a Campus Rep</li>
                                 <li>Become a Vasiti Influencer</li>
                                 <li>Become a Campus writer</li>
                                 <li>Become an Affiliate</li>
                               </ul>
                            </Col>
                            <Col md={2}>
                            <h1 className="footer-header">Get in touch</h1>
                               <ul className="footerlist ftlstmar">
                                 <li>Contact us</li>
                                 <li>Partner with us</li>
                                 <li>Advertise with us</li>
                                 <li>Help/FAQs</li>
                               </ul>
                            </Col>
                            <Col md={3}>
                              <h1 className="footer-header">Join our community</h1>
                                 <ul className="footerlist socialmedia">
                                     <li><img src={fb} alt="logo"/></li>
                                     <li><img src={ig} alt="logo"/></li>
                                     <li><img src={twitter} alt="logo"/></li>
                                     <li><img src={linkdin} alt="logo"/></li>
                                 </ul>
                               <p>Email Newsletter</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
        </div>
    )
}
export default Home;