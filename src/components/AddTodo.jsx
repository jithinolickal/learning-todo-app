import React from 'react';
import {Col, Form, Input, Row} from "antd";
import Button from "antd/es/button";

const AddTodo = () => {

    const formLayout = {
        labelCol: { span: { sm: 24 }},
        wrapperCol: { span: { sm: 24 }}
     }

    return (
        <>
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
                                 lg={{span: 12, order: 2, offset: 1}}>
                                <Form.Item label="Enter Task description">
                                    <Input className="text-box"></Input>
                                </Form.Item>
                            </Col>
                            <Col xs={{span: 24, order: 1}} 
                                 sm={{span: 24, order: 1}}
                                 md={{span: 24, order: 1}}
                                 lg={{span: 3, order: 3, offset: 1}}>
                                <Form.Item>
                                    <Button className="btn-red">ADD</Button>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </>
    );
}

export default AddTodo;