import React, { Component } from 'react'

export default class App extends Component {
    render() {
        let arr = [
            "tom",
            "jarray", "susan", "zhaosi"
        ]
        return (
            <div>
                jsx模板自动遍历数组<br />

                <ul>
                    {
                        arr.map((value, index) => {
                            return (
                                <li key={index}>{value}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
