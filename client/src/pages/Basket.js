import React, { useEffect } from 'react';
import { useContext } from 'react';
import { Context } from '..';
import { getBasket } from '../http/deviceAPI';

import { Card, Col, Container, Row } from 'react-bootstrap'
import { observer } from 'mobx-react-lite';


const Basket = observer(() => {
    const {device} = useContext(Context)

    useEffect(() => {
        getBasket().then(data => device.setBaskets(data))
    }, [])

    let prices = 0;
    {device.basket.map(price =>
        prices += Number(price.device.price)
    )}
    return (
        <Container
            className="d-flex flex-sm-column justify-content-center align-items-center mt-3"
        >
            <h1 className="pb-2">Basket</h1>

            <Card className="d-flex flex-row  p-2 justify-content-between align-items-center mb-2">
                <h2 className="pr-2">Total:</h2>
                <h3 className="pl-2">{prices}<span className="font-weight-light pl-2">$</span></h3>
            </Card>



            {device.basket.map(product =>
                <Card className="d-flex w-100 p-2 justify-content-center mb-2" key={product.id}>
                    <Row className="d-flex w-100">
                        <Col>
                            <div className="d-flex flex-row align-items-center">
                                <img src={process.env.REACT_APP_API_URL + product.device.img} width={50} />
                                <h1 className="pl-3">{product.device.name}</h1>
                            </div>
                        </Col>
                        <Col>
                            <div className="d-flex h-100 flex-row justify-content-end align-items-center">
                                <h2 className="font-weight-light">{product.device.price} $</h2>
                            </div>
                        </Col>
                    </Row>

                </Card>
            )}
        </Container>
    );
});

export default Basket;
