import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {

    let {title, descreption, imgUrl, newsUrl, author , date, source} = this.props;
    return (
      <div>
        <div className='container my-4' >
            <div className="card" style={{width: "18rem"}}>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{source}
              <span className="visually-hidden">unread messages</span>
            </span>
            <img src={imgUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{descreption}</p>
                <p className="card-text"><small className="text-body-secondary">By {author} on {date}</small></p>
                <a href={newsUrl} className="btn btn-primary " target='_black'>Go somewhere</a>
            </div>
            </div>
        </div>
      </div>
    )
  }
}
