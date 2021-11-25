import React,{ Fragment } from 'react';
import {Col, Form, Input, Row} from "antd";
import Button from "antd/es/button";
import TextArea from "rc-textarea";

const AddTodo = () => { 

    return (
        <Fragment>
            <Row className="add-todo-container">
                <Col span={24}>
                    <Form 
                        layout="vertical"
                        className="add-todo-form">
                        <Row align="bottom" gutter={[8,16]}>
                            <Col xs={{span: 24, order: 2}}
                                 sm={{span: 24, order: 2}}
                                 md={{span: 24, order: 2}}
                                 lg={{span: 6, order: 1}}>
                                <Form.Item label="Enter Task Name">
                                    <Input className="text-box"></Input>
                                </Form.Item>
                            </Col>
                            <Col xs={{span: 24, order: 3}} 
                                 sm={{span: 24, order: 3}}
                                 md={{span: 24, order: 3}}
                                 lg={{span: 0}}
                                 xl={{span: 0}}
                                 xxl={{span: 0}}>
                                <Form.Item label="Enter Task description">
                                    <TextArea className="text-box"
                                        rows={4}></TextArea>
                                </Form.Item>
                            </Col>
                            <Col lg={{span: 12, order: 2, offset: 1}} xs={{span: 0}} sm={{span: 0}} md={{span: 0}}>
                                <Form.Item label="Enter Task description">
                                    <Input className="text-box"></Input>
                                </Form.Item>
                            </Col>
                            <Col xs={{span: 24, order: 1}} 
                                 sm={{span: 24, order: 1}}
                                 md={{span: 24, order: 1}}
                                 lg={{span: 3, order: 3, offset: 1}}>
                                <Form.Item>
                                    <Button className="add-btn">ADD</Button>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Fragment>
    );
}

export default AddTodo;
