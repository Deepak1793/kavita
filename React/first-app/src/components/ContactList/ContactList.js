import React, { Component } from 'react'
import Contacts from '../Contacts/Contacts'

export default class ContactList extends Component {

    constructor(){
        super()
            // this.state={
            //     name:"Manoj",
            //     age:50
            // }

            this.state={
                userData: [
                    {
                      firstName:"Anu",
                      lastName:"manoj",
                      email:"anu@gmail.com",
                      age:25,
                      location:"Udupi"
                    },
                    {
                      firstName:"Arun",
                      lastName:"manoj",
                      email:"a@gmail.com",
                      age:50,
                      location:"Chennai"
                    },
                    {
                      firstName:"Madhu",
                      lastName:"K",
                      email:"madhu@gmail.com",
                      age:60,
                      location:"Gujarat"
                    },
                    {
                      firstName:"Santhosh",
                      lastName:"K",
                      email:"s@gmail.com",
                      age:60,
                      location:"Gujarat"
                    }
                  ]
            }
            this.onChangeState = this.onChangeState.bind(this)
        }
            onChangeState(){
                this.setState({
                    userData :[
                        {
                            firstName:"Madhu",
                            lastName:"K",
                            email:"madhu@gmail.com",
                            age:60,
                            location:"Gujarat"
                          },
                          {
                            firstName:"Santhosh",
                            lastName:"K",
                            email:"s@gmail.com",
                            age:60,
                            location:"Gujarat"
                          }
                    ]
                })
            }
        
    
  render() {
    return (
      <div>
        <h1>ContactList</h1>
        <p>{this.state.name}</p>
        <p>{this.state.age}</p>

        {
   this.state.userData.map(item => <Contacts fname={item.firstName} lname={item.lastName} email={item.email} age={item.age} location={item.location}/>)
   }
        <button className='btn btn-success' onClick={this.onChangeState}>Change State</button>
      </div>
    )
  }
}
