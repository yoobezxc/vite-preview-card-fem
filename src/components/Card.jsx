import article from "../assets/images/illustration-article.svg"
import avatar from "../assets/images/image-avatar.webp"
import "./card.css"

function Card() {
  return (
    <div className="card">
      <img className="card-img" src={article} alt="" />  
     
      <div>
        <div className="card-learning">
          <h2>
            Learning
          </h2>
        </div>

        <h2 className="card-date">
          Published 21 Dec 2021
        </h2>
      </div>

      <h1 className="card-title">
        HTML & CSS foundations
      </h1>

      <p className="card-text">
        These Languages are the backbone of every website, defining structure, content and presentation.
      </p>

      <div className="card-avatar-container">
        <img className="card-avatar" src={avatar} alt="" />
        <h4 className="card-avatar-name">Greg Hooper</h4>
      </div>
    </div>
  )
}

export default Card