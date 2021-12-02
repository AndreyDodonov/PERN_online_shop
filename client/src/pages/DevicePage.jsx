import React, { useEffect, useState } from "react";
import {useParams} from 'react-router-dom';
import { Card, Col, Container, Image, Row, Button } from "react-bootstrap";
import bigStar from '../assets/big_star.png';
import { fetchOneDevice } from "../http/deviceAPI";

const DevicePage = () => {
    
    const [device, setDevice] = useState({ info: [] });

    const {id} = useParams();

    useEffect(()=>{
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])




    return (
        <Container className='mt-3'>
            <Row>
                {/* image of device */}
                <Col md={4}>
                    <Image
                        width={300}
                        height={300}
                        src={process.env.REACT_APP_API_URL + device.img}
                    />
                </Col>
                {/* device name */}
                <Col md={4}>
                    <Row className='d-flex flex-column align-items-center'>
                        <h2>{device.name}</h2>
                        <div
                            className='d-flex align-items-center justify-content-center'
                            style={{ background: `url(${bigStar}) no-repeat center center`, width: 240, height: 240, backgroundSize: 'cover', fontSize: 64 }}
                        >
                            {device.rating}
                        </div>
                    </Row>
                </Col>

                <Col md={4}>
                    <Card
                        className='d-flex flex-column justify-content-around align-items-center'
                        style={{ width: 300, height: 300, fontSize: 32, border: '3px solid gray', borderRadius: 5 }}
                    >
                        <h3>{device.price} ₽</h3>
                        <Button>
                            Add to cart
                        </Button>
                    </Card>
                </Col>
            </Row>

            {/* description */}

            <Row className='d-flex flex-column m-3'>
                <h1>Parameters</h1>
                {device.info.map((info, idx) =>
                    <Row
                        key={info.id}
                        style={{ background: idx % 2 ? 'white' : 'gray', padding: 10 }}
                    >
                        {info.title} : {info.description}
                    </Row>
                )}
            </Row>

        </Container>
    );
};

export default DevicePage;