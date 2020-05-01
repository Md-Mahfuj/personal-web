import React from "react";
import { Button } from 'antd';



const ProAbout=()=>{
    return(
        <div className={"protfolioAboout"}>
             <div className={"protfolioAbouT"}>
                 <h4 className={"hello"} >Hello</h4>
                 <h1 className={"web"} >i’m Mahfuj Ahamed</h1>
                 <p>A web developer</p>
                 <Button type="primary" className={"button"} >contact</Button>
             </div>


             <img  className={"protfolioAbooutImg"} src={"https://scontent.fdac25-1.fna.fbcdn.net/v/t1.0-9/50589048_834766723537289_405707833460391936_n.jpg?_nc_cat=110&_nc_sid=13bebb&_nc_ohc=9ekgCUSCmowAX_QCDZs&_nc_ht=scontent.fdac25-1.fna&oh=13d19827f58bc3a4efd46c50a6f83b58&oe=5ECF4C17"}/>
        </div>
    );
};

export default ProAbout;