import { React, useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { ListGroup, Badge } from "react-bootstrap";

const TypeBar = observer(() => {
    const { device } = useContext(Context)
    return (
        <ListGroup>
            {device._types.map(type =>
                <ListGroup.Item
                    style={{ cursor: 'pointer' }}
                    active={type.id === device.selectedType.id}
                    onClick={() => device.setSelectedType(type)}
                    key={type.id}
                    className="d-flex justify-content-between align-items-start"
                >
                    {type.name}
                    <Badge bg="secondary" pill>
                        0
                    </Badge>
                </ListGroup.Item>
            )}
        </ListGroup>
    )
});

export default TypeBar;

