import {useState} from 'react'
import './index.css'

const Feedback = props => {
  const [isClicked, setIsClicked] = useState(false)

  const onButtonClick = () => setIsClicked(preState => !preState)

  const {resources} = props
  console.log(resources.emojis)

  return (
    <div className="app-container">
      {isClicked ? (
        <div className="card">
          <img
            src={resources.loveEmojiUrl}
            alt="love emoji"
            className="love-img"
          />
          <h1>Thank You!</h1>
          <p>
            We will see your feedback to improve our customer support
            performance
          </p>
        </div>
      ) : (
        <div className="card">
          <h1 className="description">
            How satisfied are you with our customer support performance
          </h1>
          <ul className="list-container">
            {resources.emojis.map(each => (
              <li key={each.id}>
                <button
                  type="button"
                  className="custom-btn"
                  onClick={onButtonClick}
                >
                  <img
                    src={each.imageUrl}
                    alt={each.name}
                    className="custom-img"
                  />
                </button>
                <p className="img-title">{each.name}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Feedback
