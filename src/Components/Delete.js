import React, { Component } from 'react'
import axios from "axios"

export default class Delete extends Component {
    constructor() {
        super()
        this.state = {
            fname: "",
            id: ""
        }
    }
    handleChange = (e) => {
        this.setState({
            fname: e.target.value
        })
    }
    checkUserExist = () => {

        axios.get(`http://localhost:3001/contact`)
            .then((res) => {
                let data = res.data
                console.log(data)
                console.log(data.length)
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
                        // console.log(this.state.fname)
                        // console.log(data[i].id)
                        this.handleDelete(data[i].id)

                    }

                }
            })
            .catch((err) => console.log(err))
    }
    handleDelete = (id) => {
        console.log("Handle Delete called")
        // let id = this.state.id
        console.log(id)
        axios.delete(`http://localhost:3001/contact/${id}`)
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
    }
    render() {
        return (
            <div>
                <h1>Delete Data</h1>
                <label htmlFor="">Enter Name to Delete Record</label>
                <input type="text" onChange={(e) => this.handleChange(e)} />
                <button onClick={this.checkUserExist}>Delete User</button>
            </div>
        )
    }
}
