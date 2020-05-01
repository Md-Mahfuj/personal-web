import React from "react";
import { Card } from 'antd';




const CardT=(props)=>{


    return(

        <div>

            <Card      hoverable title="code details "   style={{ width:1100}}>
                {props.name}
            </Card>
            <Card     hoverable title="code solve"  style={{ width:1100}}>
                {props.site}
            </Card>

            <Card     hoverable title="Time complexity"  style={{ width:1100}}>
                {props.complexity}
            </Card>

            <Card     hoverable title="application"  style={{ width:1100}}>
                {props.application}
            </Card>





        </div>

    );
}

export default CardT;

