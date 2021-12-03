import React, { Component } from 'react'
import Style from './css/public.css'
export default class App extends Component {
    render() {
        let link = <a href="http://www.baidu.com">百度</a>;
        let name = "tom";
        let S1 = {
            fontSize: "32px",
            backgroundColor: "#669900",
            color: "#fff"

        }
        return (

            <div>
                <h3 className={Style.special}>App组件</h3>
                {
                    link
                }<p>哈哈哈哈{name == "tom" ? 100 : 99}</p>
                <label htmlFor="unserName">用户名：</label>
                <input type="text" id="userName" defaultValue="susuan" />
                <br />
                1.false在标记中当做空标签
                <p>{false}     </p>
                2.在defaultvalue中当做字符串
                <input type="text" name="" defaultValue="false" id="" />
                <br />
                3.行内样式
                <p style={S1}>好好学习·天天向上</p>
                <p style={{ fontSize: "20px", background: "#ff0" }}>知识改变命运</p>
            </div>



        )
    }
}
