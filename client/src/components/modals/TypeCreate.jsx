import React from "react";
import { Modal, Button, Form, FormControl } from "react-bootstrap";

const TypeCreate = ({show, onHide}) => {
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
                    Add new type
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <FormControl
                        placeholder={'type name of brand'}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-primary' onClick={onHide}>Close</Button>
                <Button variant='outline-primary' onClick={onHide}>Send</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default TypeCreate;