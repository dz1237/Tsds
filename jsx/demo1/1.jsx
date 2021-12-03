import React, { Component } from 'react'

export default class App extends Component {
    render() {
        let nume = "tom";
        let S1 = {
            backgroundColor: "#ffff00",
            color: "#fff",
            fontSize: "32px"
        }
        return (
            <div>
                这是app组件
                <p style={S1}>{nume == "tom" ? 100 : 101}</p>
                <a style={{ background: "#f0f", fontSize: "20px" }}>{nume}</a>
            </div>
        )
    }
}
