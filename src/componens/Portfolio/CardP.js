import React from "react";
// eslint-disable-next-line no-unused-vars
import {Button, Card,  List, Row} from 'antd';




 const  CardP=()=>{


     return(
         <div /*className={" Cardp-broder"}*/>
             <div className={"Recent-Projects3"}>
                 <h1 className={"title"}> Competitive Programming </h1>
             </div>

             <div className={"CardP2"}>

             <Card title="geeksforgeeks"  className={"CardP"} style={{ width: 300,height:300 }}>

                 <h4 className={"mm"}>problem solve 150+</h4>
                 <h3 className={"mm"}>Data structure,Algorithm</h3>
                 <h4 className={"mm"}>SoloLearn certificate: c++</h4>



                 <Button className={"profile2"}
                         href={"https://www.hackerrank.com/mdraju0162735"}
                 >Profile</Button>

             </Card>

             <Card title="CodeChef" className={"CardP"} style={{ width: 300,height:300,bordered:5  }}>
                 <h4 className={"mm"}>problem solve 150+</h4>
                 <h3 className={"mm"}>HTML,C++, Java</h3>
                 <h4 className={"mm"}>SoloLearn certificate: c++</h4>

                 <Button className={"profile2"}
                         href={"https://www.hackerrank.com/mdraju0162735"}
                 >Profile</Button>

             </Card>
             <Card title="HackerRank" className={"CardP"} style={{ width: 300,height:300  }}>
                 <h4 className={"mm"}>problem solve 150+</h4>
                 <h3 className={"mm"}>HTML,C++, Java </h3>
                 <h4 className={"mm"}>Data structure,Algorithm</h4>

                 <Button className={"profile2"}
                         href={"https://www.hackerrank.com/mdraju0162735"}
                 >Profile</Button>

             </Card>
             <Card title=" URI Online Judge" className={"CardP"} style={{ width: 300,height:300 }}>
                 <h4 className={"mm"}>problem solve 150+  </h4>
                 <h3 className={"mm"} >basic problem</h3>
                 <h4 className={"mm"}>SoloLearn certificate: c++</h4>

                 <Button className={"profile2"}
                         href={"https://www.hackerrank.com/mdraju0162735"}
                 >Profile</Button>

             </Card>
         </div>
             </div>
     );
 }
 export default CardP;