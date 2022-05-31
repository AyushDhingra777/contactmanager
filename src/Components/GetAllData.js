import React, { Component } from 'react'
import axios from "axios"

export default class GetAllData extends Component {
    constructor() {
        super()
        this.state = {
            contact: [{ fname: "", number: "", id: "" }]
        }
    }
    getData = () => {
        let data = []
        // console.log("getData called")
        axios.get(`http://localhost:3001/contact`)
            .then((res) => {
                data = res.data
                // console.log(typeof (data))
                console.log(data)

                this.setState({
                    contact: [...data]
                })
                console.log(this.state.contact)
            })
            .catch((err) => console.log(err))

    }
    render() {
        return (
            <div>
                <button onClick={this.getData}>Get All Records</button>

                {
                    this.state.contact.map((obj) => (
                        <div>
                            <h2>{obj.fname}</h2>
                            <h2>{obj.number}</h2>
                        </div>

                    ))

                }

            </div>
        )
    }
}
