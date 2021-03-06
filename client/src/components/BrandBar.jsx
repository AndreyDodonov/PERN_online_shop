import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Row, Card } from "react-bootstrap";
import { Context } from "..";

const BrandBar = observer(() => {

    const { device } = useContext(Context);

    return (
        <Row className="d-flex">
            {device._brands.map(brand =>
                <Card
                    style={{ width: '100px', cursor: 'pointer' }}
                    key={brand.id}
                    className='p-3'
                    onClick={() => device.setSelectedBrand(brand)}
                    border={brand.id === device.selectedBrand.id ? 'primary' : 'light'}
                >
                    {brand.name}
                </Card>
            )}
        </Row>
    )
});

export default BrandBar;