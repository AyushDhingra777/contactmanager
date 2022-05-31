import React, { Component } from 'react'
import axios from "axios"
//set res to state and then call handleUpdate

export default class UpdateData extends Component {
    constructor() {
        super()
        this.state = {
            fname: "",
            number: "",
            id: "",

        }
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
    checkUserExist = () => {

        axios.get(`http://localhost:3001/contact`)
            .then((res) => {
                let data = res.data
                console.log(data)
                console.log(res.data.length)
                for (let i = 0; i < (data.length); i++) {
                    // console.log("data.length", data.length)
                    // console.log("data[i].id", data[i].id)
                    if (data[i].fname === this.state.fname) {
                        console.log("user Found")
                        //In the code below,if we set State of id and in handleDelete,pass the id through state,it shows error
                        //Instead of passing id through state,pass the id as argument 
                        // this.setState({
                        //     id: data[i].id
                        // })
                        // this.handleUpdate()
                        // console.log(this.state.fname)
                        // console.log(data[i].id)
                        this.handleUpdate(data[i].id)

                    }

                }
            })
            .catch((err) => console.log(err))
    }
    handleUpdate = (id) => {
        console.log("handleUpdate called")

        // let id=this.state.id
        // console.log(this.state.id)
        console.log(`http://localhost:3001/contact/${id}`)
        axios.patch(`http://localhost:3001/contact/${id}`, {
            number: this.state.number
        })
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
    }
    render() {
        return (
            <div>
                <h1>Enter Name of user to update Data</h1>
                <label htmlFor="">Enter Name</label>
                <input type="text" onChange={(e) => this.handleName(e)} />
                <label htmlFor="">Enter Number to Update</label>
                <input type="text" onChange={(e) => this.handleNumber(e)} />
                <button onClick={this.checkUserExist}>Update User</button>





            </div>
        )
    }
}
