import './index.css'

const HistoryItems = props => {
  const {historyDetails, deleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onDeleteItem = () => {
    deleteItem(id)
  }
  return (
    <li className="main-list-container">
      <div className="single-container">
        <p>{timeAccessed}</p>
        <div>
          <div className="domain-container">
            <img src={logoUrl} alt="domain logo" className="icon-logo" />
            <div className="domain-name">
              <p className="title">{title}</p>
              <p className="domainUrl">{domainUrl}</p>
            </div>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="button"
        testid="delete"
        onClick={onDeleteItem}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default HistoryItems
