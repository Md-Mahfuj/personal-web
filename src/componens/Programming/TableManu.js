import React, {useState} from "react";
import {Breadcrumb, Button, List, Tag} from "antd";
import Sider from "antd/es/layout/Sider";
import {data} from '../../data/data';

const TableManu=(props)=>{



    return(
           <div>
               <Sider width={200} className="site-layout-background">
                   <List
                       bordered
                       dataSource={data}
                       renderItem={item => (
                           <List.Item>
                               <Button
                                   onClick={() => {
                                       props.setAll(item.complexity,item.type,item.site,item.name);
                                   }}
                               >

                                   {item.name}
                               </Button>


                           </List.Item>
                       )}
                   />
               </Sider>


           </div>

    );

}






export default TableManu;