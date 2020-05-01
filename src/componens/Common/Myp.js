import React from "react"
import {Card} from "antd";


const Myp =()=>{


    return(
        <div className={"projects"}>
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://technext.github.io/DarkJoe/assets/images/portfolio1.jpg" />}
            >
                <h3>this website create by me</h3>
                <h3> My first project</h3>

            </Card>

            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt src="https://technext.github.io/DarkJoe/assets/images/portfolio1.jpg" />}
            >
                <h3>this website create by me</h3>
                <h3> My first project</h3>

            </Card>

            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://technext.github.io/DarkJoe/assets/images/portfolio1.jpg" />}
            >
                <h3>this website create by me</h3>
                <h3> My first project</h3>
            </Card>
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://technext.github.io/DarkJoe/assets/images/portfolio1.jpg" />}
            >
                <h3>this website create by me</h3>
                <h3> My first project</h3>
            </Card>


        </div>
    );
}
export default Myp;