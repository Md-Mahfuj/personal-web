import React from 'react';
import { Button } from 'antd';
import './App.css';
import Breadcrumb from "antd/es/breadcrumb";
import Menu from "antd/es/menu";
import Layout from "antd/es/layout";
import about from "./page/About";
import { Tag } from 'antd';
import CardT from "./componens/Programming/CardT";
import T from "./componens/Programming/Buttont";
import Sider from "antd/es/layout/Sider";
import {HeartTwoTone} from "@ant-design/icons";
import {Link} from "react-router-dom";
import ProblemList from "./page/programming/ProblemList";
import Portfolio from "./page/Portfolio";
import Projects from "./page/Projects";
import CardP from "./componens/Portfolio/CardP";
import CardE from "./componens/Portfolio/CardE";
import Myp from "./componens/Common/Myp";
import "./componens/Portfolio/Portfolio.css"
import ProAbout from "./componens/Portfolio/About";
import "./componens/Projects/Project.css"
import Education from "./componens/Portfolio/education";



const { Header, Content, Footer } = Layout;


let projectList;
const App = (props) => (

    <div className="App">

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
          </Header>
      </Layout>

       < Content
        className="site-layout-background"
        style={{
        padding: 24,
        margin: 0,
        minHeight: 280,
    }}
        >



     <div >



         <CardE/>

     </div>






         <ProAbout/>



         <Education/>





    </Content>



    </div>
);

export default App;
