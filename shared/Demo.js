import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { httpGet } from './http/httpHandler'


export class Demo extends Component {

    constructor(props) {
        super(props)
      
        this.state = {
           data:'',
           fatched:false
        }
      }

    componentDidMount(){
        this.getDataFromApi()
      }
    

    getDataFromApi(){
        httpGet('connectionService/getConnections').then(
          result =>
          this.setState({
            data:result,
            fatched:true
          })
          )
      }

    render() {
        if(this.state.fatched){
            return (
                <View>
                    <Text> Demo from Shared folder</Text>
                    <Text>Received Data: {this.state.data[0].name}</Text>
                </View>
            )
        }else{
            return (
                <View>
                    <Text> Demo from Shared folder  </Text>
                </View>
            )
        }

    }
}

export default Demo
