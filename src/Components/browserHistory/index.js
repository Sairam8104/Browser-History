import {Component} from 'react'
import './index.css'
import HistoryItems from '../HistroyItems/index'

class Browserhistroy extends Component {
  state = {searchInput: '', historyList: []}

  componentDidMount() {
    const {initialHistoryList} = this.props
    this.setState({historyList: initialHistoryList})
  }

  onChange = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteItem = id => {
    const {historyList} = this.state
    const FilterList = historyList.filter(eachItem => eachItem.id !== id)
    this.setState({historyList: FilterList})
  }

  render() {
    const {searchInput, historyList} = this.state
    const searchResult = historyList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="main-container">
        <div>
          <div className="container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              alt="app logo"
              className="history-logo"
            />
            <div className="search-container">
              <div className="search-logo-background">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                  alt="search"
                  className="search-logo"
                />
              </div>
              <div>
                <input
                  type="search"
                  className="input-element"
                  onChange={this.onChange}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="list-main-container">
          {searchResult.length === 0 ? (
            <p className="no-history">There is no history to show</p>
          ) : (
            <ul className="list-container">
              {searchResult.map(eachItem => (
                <HistoryItems
                  historyDetails={eachItem}
                  key={eachItem.id}
                  deleteItem={this.deleteItem}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default Browserhistroy
