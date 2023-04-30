import './index.css'

const suggestionItem = props => {
  const {suggestionDetails, onClickArrow} = props
  const {id, suggestion} = suggestionDetails

  const searchInputValue = () => {
    onClickArrow(suggestion)
  }

  return (
    <li className="list-item">
      <p className="suggestion">{suggestion}</p>
      <button type="button" className="button" onClick={searchInputValue}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          className="arrow"
          alt="arrow"
        />
      </button>
    </li>
  )
}

export default suggestionItem
