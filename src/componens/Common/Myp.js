import React from "react"
import {Card} from "antd";


const Myp = (props) => {


    return (
        <div className={"projectst"}>


            {

                props.projects.map((item, i) => <Card
                    hoverable
                    style={{width: 240}}
                    cover={<img alt="example" src="https://technext.github.io/DarkJoe/assets/images/portfolio1.jpg"/>}
                >
                    <h3>{item.title}</h3>
                    <h3>{item.description}</h3>

                </Card>)
            }


        </div>
    );
}
export default Myp;