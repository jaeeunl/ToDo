import React, {Component} from 'react'
import axios from 'axios'
import List from '../List/List.js'

class Search extends Component {
    state = {
        searchTerm: '',
        list: []
      }
      getList() {
        const url = `https://api.giphy.com/v1/gifs/search?q=${this.state.query}&api_key=GZKGwdu6xlIM0iV58yFKJOFLqj0NLXFw`
    
        axios.get(url)
        .then(response => {
          this.setState({
            list: response.data.data
          })
        })
      }
      updateQueryHandler (e) {
        this.setState({
          query: e.target.value
        }, ()=> {
          if (this.state.query) this.getList()
        })
      }  
    render () {
        return (
            <div>
                <section className="search-header header">
                    <input 
                        className="search-input" 
                        placeholder="Search for..." 
                        type="text" 
                        onChange={(e)=>this.updateQueryHandler(e)}/>
                </section>
                <List list={this.state.list}/>
            </div>
        )
    }
}

export default Search