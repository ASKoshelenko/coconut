import React from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import bigStar from '../assets/bigStar.png'

const DevicePage = () => {
    const device =  {id: 1, name: 'Samsung', price: 25000, rating: 5, img: 'https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iphone/iphone12pro/iphone12-pro-colors.jpg'}
    const description = [
        {id: 1, title: 'RAM', description: '8 Gb'},
        {id: 1, title: 'ROM', description: '800 Gb'},
        {id: 1, title: 'Core', description: '16'},
    ]
    return (
        <Container className={"mt-3"}>
            <Row>
            <Col md={4}>
                <Image width={300} height={300} src={device.img} />
            </Col>
            <Col md={4}>
                <Row className="d-flex flex-column align-items-center">
                    <h2>{device.name}</h2>
                    <div
                            className="d-flex align-items-center justify-content-center"
                            style={{background: `url(${bigStar}) no-repeat center center`, width:240, height: 240, backgroundSize: 'cover', fontSize:64}}
                        >
                        {device.rating}
                    </div>
                </Row>
            </Col>
            <Col md={4}>
                <Card 
                    className="d-flex flex-column align-items-center justify-content-around"
                    style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgrey'}}
                >
                    <h3>От: {device.price} гривен</h3>
                    <Button variant={'outline-dark'}>Добавить в корзину</Button>
                </Card>
            </Col>
            </Row>
            <Row className="d-flex flex-column mt-3">
                <h1>Характеристики:</h1>
                {description.map((info, index) =>
                    <Row key={info.id}
                        style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}
                    >
                        {info.title}: {info.description}
                    </Row>    
                )}
            </Row>
        </Container>
    )
}

export default DevicePage