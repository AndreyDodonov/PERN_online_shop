import React, { useContext, useState, useEffect } from "react";
import { Modal, Button, Form, Dropdown, FormControl, Col, Row } from "react-bootstrap";
import { Context } from "../../index";
import { getTypes, fetchBrands } from "../../http/deviceAPI";
import { observer } from "mobx-react-lite";

const DeviceCreate = observer(({ show, onHide }) => {

    useEffect(() => {
        getTypes().then(data => device.setTypes(data));
        fetchBrands().then(data => device.setBrands(data));
    }, [])

    const { device } = useContext(Context);
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [file, setFile] = useState(null);
    // const [brand, setBrand] = useState(null);
    // const [type, setType] = useState(null);
    const [info, setInfo] = useState([])

    const addInfo = () => {
        setInfo([...info, { title: '', description: '', number: Date.now() }])
    }

    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    const selectFile = (e) => {
        // console.log(e.target.files);
        setFile(e.target.files[0]);
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
                        <Dropdown.Toggle>{device.selectedType.name || "Choose type"} </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device._types.map(type =>
                                <Dropdown.Item
                                    key={type.id}
                                    onClick={() => device.setSelectedType(type)}
                                >
                                    {type.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown className="mt-3">
                        <Dropdown.Toggle> {device.selectedBrand.name || "Choose brand"} </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device._brands.map(brand =>
                                <Dropdown.Item
                                    key={brand.id}
                                    onClick={() => device.setSelectedBrand(brand)}
                                >
                                    {brand.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>

                    <FormControl
                        className="mt-3"
                        placeholder="Input device name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        type="string"
                    />

                    <FormControl
                        className="mt-3"
                        placeholder="Input device price"
                        value={price}
                        onChange={e => setPrice(Number(e.target.value))}
                        type="number"
                    />

                    <FormControl
                        className="mt-3"
                        type="file"
                        onChange={selectFile}
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
});

export default DeviceCreate;