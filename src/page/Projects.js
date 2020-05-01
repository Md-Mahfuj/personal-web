import React, {Component} from "react";
import {List, Card, Layout, Menu, Button} from 'antd';
import {data} from '../data/data2';
import {HeartTwoTone} from "@ant-design/icons";

import {Link} from "react-router-dom";
import ProblemList from "./programming/ProblemList";
import Portfolio from "./Portfolio";
import CardOne from "../componens/Projects/CardOne";





const { Header} = Layout;



class Projects extends Component{

    render() {
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
                                <Menu.Item key="1" >Home</Menu.Item>

                                <Menu.Item key="2"><Link to={"ProblemList"}>programming</Link></Menu.Item>

                                <Menu.Item key="3"><Link to={"Portfolio"}>portfolio</Link></Menu.Item>
                                <Menu.Item key="4"><Link to={"Projects"}>Projects</Link></Menu.Item>

                            </Menu>
                        </Header>
                    </Layout>
                </div>

                <div >
                    <div className={"CardOnebutton"}>
                        <div className={"buttonDiv"}>
                            <h1 className={"Mywork"}>My Works</h1>
                            <Button type="primary" className={"Allbutton"}>All</Button>
                            <Button type="primary" className={"Allbutton"}>Web</Button>
                            <Button type="primary" className={"Moblile"}>Mobile</Button>

                        </div>
                    </div>

                      <div className={"CardOne"}>
                          <CardOne/>
                      </div>

                </div>

                    <div className={"Footer2"}>

                        <h2 className={"title"}>©2018 Created by md.mahfuj</h2>
                        <HeartTwoTone twoToneColor="#eb2f96" />


                    </div>



            </Layout>

        );
    }

}

export default Projects;