import React from 'react';
import { Col, Row, Container} from 'react-bootstrap';
import messagecone from '../../assets/messagecone.png';


const Message=()=>{
    return(
        <div>
            <section className="message-section">
                <Container>
                    <Row className="messagerow">
                        <Col md={6} className="messabebody">
                           <img src={messagecone} alt="pic12"/>
                           <h3>Thank you for <br/>  sharing your story!</h3>
                            <p>Lorem ipsum dolor sit amet,
                           consectetur adipiscing elit, sed do eiusmod tempor 
                           incididunt ut labore et dolore magna aliqua.</p>
                           <div className="mssdv"><span className="mssgbtn">Close</span></div>                
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}
export default Message;