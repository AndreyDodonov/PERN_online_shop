import React, { useState } from "react";
import { Modal, Button, Form, FormControl } from "react-bootstrap";
import { createBrand } from "../../http/deviceAPI";

const BrandCreate = ({ show, onHide }) => {

    const [value, setvalue] = useState(' ');

    const createNewBrand = () => {
        createBrand({ name: value })
            .then(data => setvalue(' '))
            .catch(err => alert(err));
        onHide();    
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
                    Add new brand
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <FormControl
                        value={value}
                        onChange={e => setvalue(e.target.value)}
                        placeholder={'type name of brand'}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-primary' onClick={onHide}>Close</Button>
                <Button variant='outline-primary' onClick={createNewBrand}>Send</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default BrandCreate;