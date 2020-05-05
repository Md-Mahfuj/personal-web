import React from "react";
import { Card } from 'antd';





const Education=(prpos)=>{

    return(
        <div>

            <h1 className={"EducationTitle"}>Education</h1>
            <div className={"educationLayout"}>
                <div className={"educationImage"} ></div>

                <div>
                    <Card    hoverable className={"educationCard"}>
                        <h2>University</h2>
                        <h4>Southeast university(BSc in CSE) </h4>
                        <p> I love my university this university speen 4 years <br/> i lot of time study  </p>
                    </Card>
                    <Card    hoverable className={"educationCard"}>
                        <h2>University</h2>
                        <h4>Southeast university(BSc in CSE) </h4>
                        <p> I love my university this university speen 4 years <br/> i lot of time study  </p>
                    </Card>
                    <Card    hoverable className={"educationCard"}>
                        <h2>University</h2>
                        <h4>Southeast university(BSc in CSE) </h4>
                        <p> I love my university this university speen 4 years <br/> i lot of time study  </p>
                    </Card>
                </div>

            </div>
        </div>
    );
};
export default Education;