import React from "react";

import { Layout, Menu, Breadcrumb } from 'antd';


const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


 const Home  =()=>{


 return(

    <Layout>


     <div>
      <Layout className="layout">
       <Header>
        <div className="logo" />
        <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            className={"menu"}
        >
         <Menu.Item key="1">Home</Menu.Item>

         <Menu.Item key="2">programming</Menu.Item>

         <Menu.Item key="3">portfolio</Menu.Item>
         <Menu.Item key="4">Projects</Menu.Item>
         <Menu.Item key="5">Blog</Menu.Item>
        </Menu>
       </Header>
      </Layout>
     </div>

    </Layout>


 );




 }


 export default Home;
