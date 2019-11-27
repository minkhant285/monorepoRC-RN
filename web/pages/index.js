import React, {Component} from 'react'
import Nav from '../components/nav'
import Demo from '../../shared/Demo'
import { httpGet } from '../../shared/http/httpHandler'



class Home extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       data:'',
       fatched:false
    }
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

  componentDidMount(){
    //this.getDataFromApi()
  }

  render() {
      return (
        <div>
          <Nav/>
          <Demo name="mktk"/>
        </div>
      )
    }
}

export default Home
