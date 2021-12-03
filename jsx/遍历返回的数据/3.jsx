import React, { Component } from 'react'

export default class componentName extends Component {
    render() {
        let obj = {
            ststus: "10001", msg: "ok", data: [
                {
                    id: "10001", name: "tom", age: 19, sex: "男"
                },
                {
                    id: "10002", name: "susan", age: 22, sex: "女"
                },
                {
                    id: "10003", name: "jarray", age: 21, sex: "女"
                },
                {
                    id: "10004", name: "赵四", age: 57, sex: "男"
                }


            ]
        }
        return (
            <div>
                {
                    obj.data.map((value) => {
                        return (
                            <li key={value.id}>
                                编号：{value.id},
                                名字：{value.name},
                                年龄:{value.age},
                                性别：{value.sex}
                            </li>
                        )
                    })
                }
            </div>
        )
    }
}
