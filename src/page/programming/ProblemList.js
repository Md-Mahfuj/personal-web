import React, {useState} from "react";
//import React, { useContext, useState, useEffect, useRef } from 'react';
//import { Table, Input, Button, Popconfirm, Form } from 'antd';
import { Layout, Menu, Breadcrumb,Tag } from 'antd';
import TableManu from "../../componens/Programming/TableManu";
import CardT from "../../componens/Programming/CardT";
import {Link} from "react-router-dom";
import Portfolio from "../Portfolio";
import Projects from "../Projects";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;



 const ProblemList  =()=>{

     const [complexity, setComplexity] = useState('');
     const [application, setApplication] = useState('');
     // eslint-disable-next-line no-undef
     const [site, setsite] = useState('');
     const [name, setname] = useState('');

     const setAll =(complexity,application,site,name)=>{
         setComplexity(complexity);
         setApplication(application);
         setsite(site);
         setname(name);
     };
 return(


   <div>
       <Layout>

           <Layout className="layout">
               <Header>
                   <div className="logo" />
                   <Menu
                       theme="dark"
                       mode="horizontal"
                       defaultSelectedKeys={['2']}
                       className={"menu"}
                   >
                       <Menu.Item key="1" >Home</Menu.Item>

                       <Menu.Item key="2"><Link to={"ProblemList"}>programming</Link></Menu.Item>

                       <Menu.Item key="3"><Link to={"Portfolio"}>portfolio</Link></Menu.Item>
                       <Menu.Item key="4"><Link to={"Projects"}>Projects</Link></Menu.Item>

                   </Menu>
               </Header>>

           </Layout>

           <Layout>
               <Sider width={200} className="site-layout-background">
                   <Menu
                       className={"Menu-layout-background"}
                       mode="inline"
                       defaultSelectedKeys={['1']}
                       defaultOpenKeys={['sub1']}
                       style={{ height: '100%', borderRight: 0 }}
                   >
                       <div>
                           <TableManu
                               setAll={setAll}
                           />

                       </div>

                   </Menu>
               </Sider>
               <Layout style={{ padding: '0 24px 24px' }}>

                   <Content
                       className="site-layout-background"
                       style={{
                           padding: 24,
                           margin: 0,
                           minHeight: 280,
                       }}
                   >

                        <CardT
                            complexity={complexity}
                            application={application}
                            site={site}
                            name={name}

                        />
                       About not
                   </Content>
               </Layout>
           </Layout>
       </Layout>,

   </div>

 );




 }


 export default ProblemList;
