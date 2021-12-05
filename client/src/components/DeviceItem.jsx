import React from "react";
import { Col, Card, Image } from "react-bootstrap";
import { useHistory } from "react-router";
import star from '../assets/rate_star.png'
import { DEVICE_ROUTE } from "../utils/constants";


const DeviceItem = ({ device }) => {

    const history = useHistory();    

    return (
        <Col 
        md={3} 
        className='mt-2 mr-2'
        onClick={()=>history.push(DEVICE_ROUTE + '/' + device.id)}
        >
            <Card
                style={{ width: '150px', cursor: 'pointer' }}
                border={'light'}
            >
                <Image
                    height={'150px'}
                    width={'150px'}
                    src={process.env.REACT_APP_API_URL + device.img}
                />
                <div className='text-black-50 d-flex justify-content-between align-items-center mt-2'>
                    <div>...Device...</div>
                    {/* TODO: add brand name or device type */}
                    <div className='d-flex align-items-center'>
                        <div>{device.rating}</div>
                        <Image
                            width={'16'}
                            height={'16'}
                            src={star}
                        />
                    </div>
                </div>
                <div>{device.name}</div>
            </Card>
        </Col>
    )
};

export default DeviceItem