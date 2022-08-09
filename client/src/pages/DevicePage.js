import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import {useParams} from 'react-router-dom';
import {addToBasket, fetchOneDevice} from "../http/deviceAPI";

const DevicePage = () => {
    const [device, setDevice] = useState({info: []})
    const {id} = useParams()
    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])

    const add = () => {
        const formData = new FormData()
        formData.append('deviceId', id)
        addToBasket(formData).then(response => alert(`Device ` + device.name + ` added in basket!`))
    }


    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width: 300, height: 300, fontSize: 32, border: 'white'}}
                    >
                        <h1><b>{device.name}</b></h1>

                    </Card>
                </Col>
                <Col md={4}>
                    <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img}/>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                    >
                        <h3>Price: {device.price} $</h3>
                        <Button variant={"outline-dark"} onClick={add} >Add to basket</Button>

                    </Card>
                </Col>
            </Row><br/>
            <Row className="d-flex flex-column m-3">
                <h2><b>Technical characteristics</b></h2>
                {device.info.map((info, index) =>
                    <Row key={info.id} style={{border: '2px solid lightgray', background: index % 2 === 0 ? 'seashell' : 'azure', padding: 10}}>
                        <b>{info.title}:</b><i>{info.description}</i>
                    </Row>
                )}
            </Row>
        </Container>
    );
};
export default DevicePage;
