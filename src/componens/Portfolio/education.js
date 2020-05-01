import React from "react";
import { Card } from 'antd';





const Education=()=>{

    return(
        <div>
            <h1 className={"EducationTitle"}>Education</h1>
            <div className={"educationLayout"}>
                <img className={"educationImage"} src={"https://scontent.fdac25-1.fna.fbcdn.net/v/t1.0-9/s960x960/79776706_1077879655892660_6715394724091396096_o.jpg?_nc_cat=103&_nc_sid=85a577&_nc_ohc=Yc5vcF6GM8cAX9JoC_v&_nc_ht=scontent.fdac25-1.fna&_nc_tp=7&oh=0b1cf56077f95742a246dfdad1356d1e&oe=5ED12D87"}/>
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