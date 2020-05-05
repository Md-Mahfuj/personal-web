import React from "react";

import { List, Typography, Divider } from 'antd';

import {data} from "../../data/data"


const Table=()=>{
    return(
        <div>
            <List

                bordered
                dataSource={data}

                renderItem={item => (
                    <List.Item>
                        <button>
                            {item.name}

                        </button>
                    </List.Item>
                )}
            />
        </div>
    );
};
export default Table;