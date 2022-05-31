import React, { Component } from 'react'
import AddData from './AddData'
import Delete from './Delete'
import GetAllData from './GetAllData'
import GetData from './GetData'
import UpdateData from './UpdateData'

export default class MainPage extends Component {
    render() {
        return (
            <div>
                <GetAllData />
                {/* <GetData /> */}
                {/* <AddData /> */}
                {/* <UpdateData /> */}
                {/* <Delete /> */}
            </div>
        )
    }
}
