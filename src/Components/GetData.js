import React, { Component } from 'react'
import axios from "axios"
export default class GetData extends Component {
    constructor() {
        super()
        //Created separate state for nameToSearch because if we just display fname,when we want to search other record,
        //state of fname will change because on change,we change its value using e.target.value
        this.state = {
            nameToSearch: "",
            fname: "",
            number: "",
            id: "",
            flag: ""

        }
    }
    handleChange = (e) => {
        this.setState({
            nameToSearch: e.target.value
        })
    }
    getData = (personName) => {
        let person = []
        axios.get(`http://localhost:3001/contact`)
            .then((res) => {
                // Filtering out the required person by comparing their name 
                person = res.data.filter((obj) => obj.fname === personName)
                //update state if that person is found(exists)
                if (person[0]) //since,its an array,if the record is found,it will return truthy value,means user exists
                {
                    this.setState({
                        fname: person[0].fname,
                        number: person[0].number,
                        id: person[0].id,
                        flag: "yes"
                    })
                }
                else {
                    this.setState({
                        flag: "no"
                    })
                }


            })
            .catch((err) => console.log(err))
    }
    render() {
        return (
            <div>
                <h1>Get Record of specific user</h1>
                {/* Taking "id" input from user  */}
                <label>Enter the Person Name</label>
                <input onChange={(e) => this.handleChange(e)} type="" text />
                <button onClick={() => this.getData(this.state.nameToSearch)}>GET DATA</button>
                {/* If id is present,then render the user  */}
                {
                    // Conditional Rendering,if name exists(i.e it returns truthy,only then render)
                    //since we set flag state to "no"
                    (this.state.flag === "no") ?
                        <h2>Record Not Found</h2> :
                        <div>
                            <h3>{this.state.fname}</h3>
                            <h3>{this.state.number}</h3>

                        </div>



                }

            </div>
        )
    }
}
