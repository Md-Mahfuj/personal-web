import React from "react";
import {Row, Col, Card} from 'antd';
import { Layout, Menu, Breadcrumb,Progress} from 'antd';
import { HeartTwoTone} from '@ant-design/icons';
import { Form, Input, InputNumber, Button } from 'antd';

const { Header} = Layout;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not validate email!',
        number: '${label} is not a validate number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};





const About =()=>{

    const onFinish = values => {
        console.log(values);
    };

    return(

         <div>
        <Layout>
            <Header className="header">
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
            </Header>

            <div className={"ab"}>
                <h1 > About Us</h1>
            </div>
            </Layout>

             <Layout className={"skill"}>


                <div>
                   <h1 className={"title"}>Who I Am</h1>
                    <p>
                        Hi, I am web developer. I am<br/>
                        beginner competitive programmer<br/>
                        with good knowledge of front-end<br/>
                        techniques.

                    </p>


                </div>

                 <div>
                     <img  className={"img"} src={"https://scontent.fdac25-1.fna.fbcdn.net/v/t1.0-9/92464232_644770219434594_4180252348771205120_n.jpg?_nc_cat=109&_nc_sid=85a577&_nc_ohc=lfG75LVI3acAX9QUTOa&_nc_ht=scontent.fdac25-1.fna&oh=e69d6a8a25be24667ea274e3c4d41143&oe=5EB63ECC"} alt={"image mahfuj"}/>

                 </div>

                 <div>
                      <h1 className={"title"}>Details</h1>
                     <h4>Name: Md.mahfuj ahamed</h4>
                     <h4>University: southeast university</h4>
                     <h4>Age:  19 years</h4>
                     <h4>Location:Dhaka,mirpur-1</h4>
                 </div>


             </Layout>

             <div>

                 <Form  className={"from"}{...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                     <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
                         <Input />
                     </Form.Item>
                     <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
                         <Input />
                     </Form.Item>


                     <Form.Item name={['user', 'introduction']} label="Message">
                         <Input.TextArea />
                     </Form.Item>

                     <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                         <Button type="primary" htmlType="submit">
                             Submit
                         </Button>
                     </Form.Item>
                 </Form>
             </div>

             <Layout className={"service"}>

                 <div className={"Footer"}>

                     <h2 className={"title"}>©2018 Created by md.mahfuj</h2>
                     <HeartTwoTone twoToneColor="#eb2f96" />
                 </div>
             </Layout>

         </div>





    );




}
export default About;
