import React from "react";
import { Card, Col, Container, Image, Row, Button } from "react-bootstrap";
import bigStar from '../assets/big_star.png';

const DevicePage = () => {
    // test plug
    const device = { id: 1, name: 'Iphone12 Pro', price: 100000, rating: 5, img: 'https://pineapple7.ru/image/cache/catalog/tovary/apple/iPhone%2012/iPhone%2012%20Pro%20128-1000x1000.png' }
    const description = [
        { id: 1, title: 'Random access memory', description: '5 GB' },
        { id: 2, title: 'Camera', description: '48 MPx' },
        { id: 3, title: 'CPU', description: '2 GHz' },
        { id: 4, title: 'Accumulator', description: '5000 mAh' },
    ]
    return (
        <Container className='mt-3'>
            <Row>
                {/* image */}
                <Col md={4}>
                    <Image
                        width={300}
                        height={300}
                        src={device.img}
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
                {description.map((info, idx) =>
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