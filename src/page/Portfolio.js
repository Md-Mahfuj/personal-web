import React, {Component, useState} from "react";
import ReactDM from "react-dom"

import {Card, Layout, Menu, Button, Progress} from 'antd';
import {HeartTwoTone} from "@ant-design/icons";
import {Link} from "react-router-dom";
import ProblemList from "./programming/ProblemList";
import Projects from "./Projects";
import CardP from "../componens/Portfolio/CardP";
import ProAbout from "../componens/Portfolio/About";
import Skill from "../componens/Portfolio/Skill"
import Myp from "../componens/Common/Myp";
import CardE from "../componens/Portfolio/CardE";
import MobileApp from "../componens/Common/MobileA";
import Education from "../componens/Portfolio/education";
import Data from "../api/data/data";


const {SubMenu} = Menu;
const {Header} = Layout;


function Portfolio() {

    const [projectList, setProjects] = useState(Data.webProjects);
    // const [Education, setEducation] = useState(Data. Education);

    const changeProjectType = (type) => {
        if (type == 'web')
            setProjects(Data.webProjects)
        else
            setProjects(Data.mobileProjects)
    };

    return (
        <Layout>
            <Layout className="layout">
                <Header>
                    <div className="logo"/>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        className={"menu"}
                    >
                        <Menu.Item key="1">Home</Menu.Item>

                        <Menu.Item key="2"><Link to={"ProblemList"}>programming</Link></Menu.Item>

                        <Menu.Item key="3"><Link to={"Portfolio"}>portfolio</Link></Menu.Item>
                        <Menu.Item key="4"><Link to={"Projects"}>Projects</Link></Menu.Item>

                    </Menu>
                </Header>
            </Layout>


            <ProAbout/>


            <CardP/>

            <div>
                <Card bordered={true} className={"card-pro"}
                      hoverable

                >

                    <div>
                        <div className={"Recent-Projects"}>
                            <h1 className={"title"}>My Recent Projects</h1>
                        </div>
                        <div className={"Recent-Projects2"}>

                            <Button
                                type="primary"
                                onClick={() => {
                                    changeProjectType('web');
                                }}
                            >web</Button>
                            <Button type="primary" className={"ButtonM"}
                                    onClick={() => {
                                        changeProjectType('mobile');
                                    }}
                            >MoblieApp</Button>

                        </div>

                        <div id={"Mobile"}
                        >
                            <Myp projects={projectList}/>

                        </div>

                    </div>


                </Card>


                <Card bordered={true} className={"card-pro2"}
                      hoverable
                >

                    <div className={"Recent-Projects4"}>
                        <h1 className={"title"}> My Experience</h1>
                    </div>


                    <CardE/>


                </Card>

                {/*<div className={"experience"}>*/}
                {/*    <h1 className={"title"}>Educations</h1>*/}
                {/*    <h4>University: southeast University</h4>*/}
                {/*    <h4>College:Vashantek Govt.college,Dhaka</h4>*/}
                {/*    <h4>School:Mirpur Sidhanta HiGH School</h4>*/}

                {/*</div>*/}

                  <div className={"Footer2"}>

                    <h2 className={"title"}>©2018 Created by md.mahfuj</h2>
                    <HeartTwoTone twoToneColor="#eb2f96"/>


                </div>


            </div>
        </Layout>
    );

}

export default Portfolio;