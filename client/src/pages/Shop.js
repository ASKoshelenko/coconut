import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BrandBar from '../components/BrandBar';
import TypeBar from '../components/TypeBar';

const Shop = () => {
    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <BrandBar/>
                    {/* <DeviceList/> */}
                    {/* <Pages/> */}
                </Col>
            </Row>
        </Container>
    )
}

export default Shop