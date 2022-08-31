import React, { Component } from "react";

export class NewsItem extends Component {
  render() {

    let { title, description, imageUrl, newsUrl, author, DateTime, sources } = this.props;
    return (
      <>
        <div className="card my-2 mx-2" style={{ width: "18rem" }}>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{left:"90%", zIndex:"1"}}>
              {sources}
              <span className="visually-hidden" >unread messages</span>
            </span>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">
              Read More
            </a>
            <p className="card-text"><small className="text-muted">by {author ? author : "unknown"} on {new Date(DateTime).toString()}</small></p>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;
