import React, { Component } from 'react'
import { Text, View,Button } from 'react-native'
import { httpGet } from './http/httpHandler'


export class Demo extends Component {

    constructor(props) {
        super(props)

        this.state = {
            data: [{ name: '123' }],
            fatched: false
        }
    }

    componentDidMount() {
        this.getDataFromApi()
    }


    getDataFromApi() {
        httpGet('connectionService/getConnections').then(
            (result) => {
                if (result) {
                    return this.setState({
                        data: result,
                        fatched: true
                    });
                }

            },
        )
    }

    render() {
        if (this.state.fatched) {
            return (
                <View>
                    <Text> Demo from Shared folder</Text>
                    <Text>Received Data: {this.state.data[0].name}</Text>
                    <Button title="Click" onPress={() => alert(this.props.name)}/>
                </View>
            )
        } else {
            return (
                <View>
                    <Text> Demo from Shared folder  </Text>
                    <Text>Received Data: NO DATA(network error)</Text>
                </View>
            )
        }

    }
}

export default Demo
