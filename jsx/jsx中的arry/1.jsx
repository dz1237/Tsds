import React, { Component } from 'react'

export default class App extends Component {
    render() {
        let arr = ["tom", "susan", "赵四"]
        return (
            <div>
                jsx模板自动遍历数组<br />
                {arr}
            </div>
        )
    }
}
