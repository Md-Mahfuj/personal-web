import React from  "react"
import { Card } from 'antd';
import e from "../../assets/exprience.png"

    

const CardE =()=>{

    return(

        <div className={"ex"}>
             <div className={"ex2"}>
                 <Card
                     hoverable
                     style={{ width: 240 }}
                     cover={<img alt="example" src={e}/>}
                 >
                     <h3>this website create by me</h3>
                     <h3> My first project</h3>

                 </Card>
             </div>

            <div>

                    <div className={"CardE"} >
                    <h2 className={"e"}>Previous Ltd Co.</h2>

                    <h3 className={"D"}>2019-2020</h3>


                    <p className={"p"}>
                        Lorem ipsum dolor sit amet.Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias<br/> consequatur aut perferendis doloribus bangladesh most butiful countriy hi do you know me  .what your name some thing tell you
                    </p>

                    </div>


                <div className={"CardE"} >
                    <h2 className={"e"}>Previous Ltd Co.</h2>
                    <h3 className={"D"}>2019-2020</h3>
                    <p className={"p"}>
                        Lorem ipsum dolor sit amet.Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias<br/> consequatur aut perferendis doloribus bangladesh most butiful countriy hi do you know me  .what your name some thing tell you
                    </p>

                </div>



                <div className={"CardE"}  >
                    <h2 className={"e"}>Previous Ltd Co.</h2>
                    <h3 className={"D"}>2019-2020</h3>
                    <p className={"p"}>
                        Lorem ipsum dolor sit amet.Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias<br/> consequatur aut perferendis doloribus bangladesh most butiful countriy hi do you know me  .what your name some thing tell you
                    </p>

                </div>

            </div>


        </div>

    );
}

export default CardE;