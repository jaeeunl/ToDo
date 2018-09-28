import React, {Component} from 'react'
import axios from 'axios'
import List from '../List/List.js'

class Favorites extends Component {
    state = {
        list: []
      }
      componentDidMount() {
          this.getList()
      }
      getList() {
        const options = {
            method: 'GET',
            headers: {"Access-Control-Allow-Origin": "*"},
            url:`http://localhost:5000/favorites`
        };
     
        axios(options).then(response => {
            this.setState({
                list: response.data
              })
        })
      }
      updateList() {
          
      }
    render () {
        return (
            <div>
                <section className="favorites-header header">
                    <h2>Your Favorite GIFs</h2>
                </section>
                <List list={this.state.list}/>
            </div>
        )
    }
}

export default Favorites