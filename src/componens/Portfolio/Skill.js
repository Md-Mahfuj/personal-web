import React from "react"
import {Progress} from "antd";

const Skill =()=>{


    return(
        <div className={"skill-bar"}>
            <h1 className={"title"}>My Skills</h1>
            <h4 className={"h4"}>HTML5</h4>
            <Progress percent={60} />
            <h4 className={"h4"}>CSS</h4>
            <Progress
                strokeColor={{
                    '0%': '#108ee9',
                    '100%': '#87d068',
                }}
                percent={50}
            />
            <h4 className={"h4"}>React</h4>
            <Progress percent={30} status="active" />
            <h4 className={"h4"}>C language</h4>
            <Progress
                strokeColor={{
                    '0%': '#108ee9',
                    '100%': '#87d068',
                }}
                percent={70}
            />


        </div>

    );
}
export  default Skill;