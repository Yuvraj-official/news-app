import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    document.title = `${this.props.category}-NewsMonkey`
  }
  async updateNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });

  }
  async componentDidMount() {
    this.updateNews()
    this.setState({
      page:this.state.page + 1
    })
    
    
  }
  fetchMoreData =async () => {
    this.setState({
      page:this.state.page + 1
    })
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles) ,
      totalResults: parsedData.totalResults,
      loading: false,
    });


  };

  // nextContent = async () => {
  //   if (
  //     this.state.page + 1 >
  //     Math.ceil(this.state.totalResults / this.props.pageSize)
  //   ) {
  //   } else {
  //     this.updateNews()
  //     this.setState({
  //       page: this.state.page + 1
  //     })
  //   }
  // };

  // previousContent = async () => {
  //   this.updateNews()
  //   this.setState({
  //     page: this.state.page - 1
  //   })
  // }

  render() {
    return (
      <>
        <div className="container">
          <h1 className="text-center">NEWSMONKEY daily news</h1>
          <div className="text-center"></div>

          <InfiniteScroll
            className="text-center"
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.totalResults}
            loader={<Spinner/>}
          >
            <div className="container row">
              {this.state.articles.map((element) => {
                return (
                  <div className="container col-md-4" key={element.url}>
                    <NewsItem
                      sources={element.source.name}
                      title={element.title ? element.title.slice(0, 45) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 88)
                          : ""
                      }
                      author={element.author}
                      DateTime={element.publishedAt}
                      imageUrl={
                        element.urlToImage
                          ? element.urlToImage
                          : "https://media.cnn.com/api/v1/images/stellar/prod/220706163236-robb-elementary-school-file-060322.jpg?c=16x9&q=w_800,c_fill"
                      }
                      newsUrl={element.url}
                    />
                  </div>
                );
              })}

            </div>

            </InfiniteScroll>
            {/* <div className="container d-flex justify-content-between">
              <button
                type="button"
                disabled={this.state.page <= 1}
                className="btn btn-dark"
                onClick={this.previousContent}
              >
                &larr; previous
              </button>
              <button
                type="button"
                className="btn btn-dark"
                disabled={
                  this.state.page + 1 >
                  Math.ceil(this.state.totalResults / this.props.pageSize)
                }
                onClick={this.nextContent}
              >
                next &rarr;
              </button>
            </div> */}
        </div>
      </>
    );
  }
}

export default News;
