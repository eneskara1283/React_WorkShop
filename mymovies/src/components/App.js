import React from "react";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";

class App extends React.Component {
  state = {
    movies: [
      {
        id: 1,
        name: "The Flash",
        rating: 8.3,
        overview: "Lorem Ipsum The Flash",
        imageUrl:
          "https://images.hdqwalls.com/wallpapers/the-flash-movie-hb.jpg",
      },
      {
        id: 2,
        name: "Brave Heart",
        rating: 9.8,
        overview: "Lorem Ipsum Brave Heart",
        imageUrl: "https://images3.alphacoders.com/819/81915.jpg",
      },
      {
        id: 3,
        name: "Lord Of The Rings",
        rating: 10,
        overview: "Lorem Ipsum Lord Of The Rings",
        imageUrl: "https://images3.alphacoders.com/819/81915.jpg",
      },
    ],
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SearchBar />
          </div>
        </div>
        <MovieList />
      </div>
    );
  }
}
export default App;
