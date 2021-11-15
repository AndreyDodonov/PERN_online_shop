import React, { useContext, useState } from "react";
import { Modal, Button, Form, Dropdown, FormControl, Col, Row } from "react-bootstrap";
import { Context } from "../../index";

const DeviceCreate = ({ show, onHide }) => {

    const { device } = useContext(Context)
    const [info, setInfo] = useState([])

    const addInfo = () => {
        setInfo([...info, { title: '', description: '', number: Date.now() }])
    }

    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add new device
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>

                    <Dropdown>
                        <Dropdown.Toggle> Choose type </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device._types.map(type =>
                                <Dropdown.Item key={type.id}> {type.name} </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown className="mt-3">
                        <Dropdown.Toggle> Choose brand </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device._brands.map(brand =>
                                <Dropdown.Item key={brand.id}> {brand.name} </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>

                    <FormControl
                        className="mt-3"
                        placeholder="Input device name"
                        type="string"
                    />

                    <FormControl
                        className="mt-3"
                        placeholder="Input device price"
                        type="number"
                    />

                    <FormControl
                        className="mt-3"
                        type="file"
                    />

                    <hr />

                    <Button
                        onClick={addInfo}

                    >
                        Add some pole
                    </Button>
                    {info.map(i =>
                        <Row className="mt-2" key={i.number}>
                            <Col md={4}>
                                <FormControl
                                    placeholder=" name of pole "
                                />
                            </Col>
                            <Col md={4}>
                                <FormControl
                                    placeholder=" value "
                                />
                            </Col>
                            <Col md={4}>
                                <Button
                                    onClick={() => removeInfo(i.number)}
                                >
                                    delete pole
                                </Button>
                            </Col>
                        </Row>
                    )}

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-primary' onClick={onHide}>Close</Button>
                <Button variant='outline-primary' onClick={onHide}>Send</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default DeviceCreate;