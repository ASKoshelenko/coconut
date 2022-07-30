import React, { useContext, useState } from 'react';
import { Col, Dropdown, Form, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Context } from '../..';

const CreateDevice = ({show, onHide}) => {
    const {device} = useContext(Context)
    const [info, setInfo] = useState([])

    const addInfo = () => {
      setInfo([...info, {title: '', description: '', number: Date.now()}])
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
            Добавить тип
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Dropdown className="mt-2 mb-2">
              <Dropdown.Toggle>Выберите тип</Dropdown.Toggle>
              <Dropdown.Menu>
                {device.types.map(type => 
                    <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                  )}
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="mt-2 mb-2">
              <Dropdown.Toggle>Выберите бренд</Dropdown.Toggle>
              <Dropdown.Menu>
                {device.brands.map(brand => 
                    <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
                  )}
              </Dropdown.Menu>
            </Dropdown>
            <Form.Control
              className="mt-3"
              placeholder="Введите название устройства"
            />
            <Form.Control
              className="mt-3"
              placeholder="Введите стоимость устройства"
              type="number"
            />
            <Form.Control
              className="mt-3"
              type="file"
            />
            <hr/>        
            <Button
              variant="outline-dark"
              onClick={addInfo}
            >Добавить новое свойство
            </Button>
            {
                info.map(i =>
                  <Row className="mt-4" key={i.number}>
                    <Col md={4}>
                      <Form.Control 
                        placeholder="Введите название свойства"
                      />
                    </Col>
                    <Col md={4}>
                      <Form.Control 
                        placeholder="Введите описание свойства"
                      />
                    </Col>
                    <Col md={4}>
                      <Button 
                        onClick={() => removeInfo(i.number)}
                        variant="outline-danger">
                        Удалить
                      </Button>
                    </Col>
                  </Row>
                  )
            }    
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
          <Button variant="outline-success" onClick={onHide}>Добавить</Button>
        </Modal.Footer>
      </Modal>
    )
}

export default CreateDevice

