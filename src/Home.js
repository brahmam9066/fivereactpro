import React from 'react';
import Dashboard from './Dashboard';
import { Row, Col } from 'antd';

const Home = () => {
    return (
        <Dashboard>
            <Row justify='center' className='home'>
                <Col lg={10} sm={24}>
                    <img src="https://ksreddy.netlify.app/ksrimg4.svg" alt="" height="400" />
                </Col>
                <Col lg={24} sm={24}>
                    <h3 style={{ color: 'tomato' }}><b>Hi  , I am Veera</b></h3>
                    <p>I am a FullStack Web Developer / Freelancer . I use React , Redux as
                        Front-End and Node + Express as Backend and Mongo DB as Database for Web
                        Applications. Firebase for Mobile Applications. Currently I
                        am looking for an opportunity to work as a Front End / React Developer
                        or MERN Stack Developer. </p>
                </Col>
            </Row>
        </Dashboard>
    )
}

export default Home;