import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from 'prop-types'

export class news extends Component {



constructor(props){
  super(props);
  console.log("constructoe called");
  this.state={
    articles: [],
   
    page:1
  }
  
}

async componentDidMount(){
  console.log("cdm");
  let url=`
  https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=0ab0e36858604c71bc2acf79abc937c7`;
  let data = await fetch(url);
  let parsedData = await data.json();
  console.log(parsedData);
  this.setState({articles:parsedData.articles });
}

 nextPg = async ()=>{
  console.log("cdm");
  let zurl=`https://newsapi.org/v2/everything?q=${this.props.category}&from=2022-12-20&to=2022-12-20&sortBy=popularity&apiKey=0ab0e36858604c71bc2acf79abc937c7`;
  let zdata = await fetch(zurl);
  let zparsedData = await zdata.json();
  console.log(zparsedData);
  this.setState({articles:zparsedData.articles });
  

}
  render() {
    return (
      <>
     
        <div className="container mx-8 my-3">
          <h2 className="text-center gFont" style={{margin:'40px 0px'}}> VES-Headline</h2>
          
          <div className="row" >
          {this.state.articles.map((element)=>{
           
           return <div className="col-md-4" key={element.url}>
              <NewsItem tittle ={element.title?element.title:""} description ={element.description?element.description:""} picurl={!element.urlToImage?"https://www.reuters.com/resizer/pmo4OHS8dTcmT2tBSLsUiSVtqqI=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/4LLW6X5B4ZN2ZC3VXZMDSLEH4M.jpg:element.urlToImage":element.urlToImage} newsurl={element.url}/>
            </div>
          

          })}
          </div>
          <div className="d-flex justify-content-between">

          <button type="button"  className="btn btn-dark">Previous</button>
          <button type="button"onClick={this.nextPg} className="btn btn-dark">next</button>
          </div>
        </div>
      </>
    );
  } 
}

export default news;
