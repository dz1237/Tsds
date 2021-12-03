import React, { Component } from 'react'

export default class App extends Component {
    render() {
        let arr = [
            <li key="1">tom</li>,
            <li key="2">jsarra</li>,
            <li key="3">suasn</li>,
            <li key="4">赵四</li>,
            <li key="5">liuneng</li>,
        ]
        return (
            <div>
                jsx模板自动遍历数组<br />

                <ul>
                    {arr}
                </ul>
            </div>
        )
    }
}
