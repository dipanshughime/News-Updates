import React, { Component } from 'react'

export class NewsItem extends Component {


  render() {
    

    let{tittle,description ,picurl,newsurl}=this.props;
    return (
      <div className="my-4">
       <div className="card "  >
  <img src={picurl} className="card-img-top" alt="heheh"/>
  <div className="card-body">
    <h5 className="card-title">{tittle}</h5>
    <p className="card-text">{description}</p>
    <a href={newsurl} target="_blank"className="btn btn-sm btn-primary btn-light ">Read News</a>
  </div>
</div> 
      </div>
    );
  }
}

export default NewsItem
