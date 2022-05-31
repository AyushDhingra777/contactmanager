import React, { Component } from 'react'
import axios from "axios"
export default class AddData extends Component {
    constructor() {
        super()
        this.state = {
            fname: "",
            number: "",
            id: ""
        }
    }
    // get ID of the last record,setState that id ,then add our new data with id=id+1
    //res.data is array of object
    componentDidMount() {
        axios.get(`http://localhost:3001/contact`)
            .then((res) => {
                let arr = res.data
                let id = arr[arr.length - 1].id
                this.setState({
                    id: id
                })
                console.log(this.state.id)
            })
            .catch((err) => console.log(err))
    }
    handleName = (e) => {
        this.setState({
            fname: e.target.value
        })
    }
    handleNumber = (e) => {
        this.setState({
            number: e.target.value
        })
    }
    handleSubmit = () => {
        let obj = {
            fname: this.state.fname,
            number: this.state.number,
            id: this.state.id + 1
        }
        axios.post(`http://localhost:3001/contact`, obj)
            .then((res) => console.log(res))
            .catch((err) => console.log(err))

    }


    render() {
        return (
            <div>
                <h1>Enter Name and Number to add</h1>
                <input type="text" onChange={(e) => this.handleName(e)} />
                <input type="number" onChange={(e) => this.handleNumber(e)} />
                <button onClick={this.handleSubmit}>Submit Record</button>
            </div>
        )
    }
}
