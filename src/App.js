import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./routes/HomePage";
import MoviePage from "./routes/MoviePage";
import ErrorPage from "./routes/ErrorPage";
import ScrollToTop from './utils/ScrollToTop';
import DraftsPage from './routes/DraftsPage/DraftsPage';

import './index.css'

const App = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [url, setUrl] = useState('https://api.kinopoisk.dev/v1.4/movie?page=1&limit=15&selectFields=id&selectFields=externalId&selectFields=name&selectFields=description&selectFields=type&selectFields=year&selectFields=rating&selectFields=ageRating&selectFields=votes&selectFields=genres&selectFields=movieLength&selectFields=isSeries&selectFields=totalSeriesLength&selectFields=countries&selectFields=poster&selectFields=videos&selectFields=persons&selectFields=top10&selectFields=top250&selectFields=audience&notNullFields=id&notNullFields=name&notNullFields=type&notNullFields=year&notNullFields=externalId.kpHD&notNullFields=rating.imdb&notNullFields=votes.imdb&notNullFields=ageRating&notNullFields=persons.name&notNullFields=genres.name&notNullFields=countries.name&notNullFields=poster.url&notNullFields=watchability.items.name&notNullFields=audience.count&sortField=rating.imdb&sortField=votes.imdb&sortType=-1&sortType=-1');

  const options = {
    method: 'GET',
    headers: { accept: 'application/json', 'X-API-KEY': 'Y42XJJR-M6Z4YDD-JQ61SZ7-N10PVN6' }
  };

  useEffect(() => {
    fetch(url, options)
      .then(response => response.json())
      .then(json => setData(json.docs))
      .catch(err => console.log(err));

  }, [url]);

  const changeQueryHandler = (e) => {
    setQuery(e.target.value);
  }

  const searchURL = () => {
    setUrl(`https://api.kinopoisk.dev/v1.4/movie/search?page=1&limit=30&query=${query}`);
  }

  const popularMoviesURL = () => {
    setUrl('https://api.kinopoisk.dev/v1.4/movie?page=1&limit=30&selectFields=id&selectFields=externalId&notNullFields=externalId.kpHD&selectFields=name&selectFields=description&selectFields=type&selectFields=year&selectFields=rating&selectFields=ageRating&selectFields=votes&selectFields=genres&selectFields=movieLength&selectFields=isSeries&selectFields=totalSeriesLength&selectFields=countries&selectFields=poster&selectFields=videos&selectFields=persons&selectFields=top10&selectFields=top250&notNullFields=id&notNullFields=name&notNullFields=type&notNullFields=year&notNullFields=rating.imdb&notNullFields=votes.imdb&notNullFields=ageRating&notNullFields=persons.name&notNullFields=genres.name&notNullFields=countries.name&notNullFields=poster.url&sortField=votes.imdb&sortType=-1&type=movie')
  }

  const popularAnimationsURL = () => {
    setUrl('https://api.kinopoisk.dev/v1.4/movie?page=1&limit=30&selectFields=id&selectFields=externalId&notNullFields=externalId.kpHD&selectFields=name&selectFields=description&selectFields=type&selectFields=year&selectFields=rating&selectFields=ageRating&selectFields=votes&selectFields=genres&selectFields=movieLength&selectFields=isSeries&selectFields=totalSeriesLength&selectFields=countries&selectFields=poster&selectFields=videos&selectFields=persons&selectFields=top10&selectFields=top250&notNullFields=id&notNullFields=name&notNullFields=type&notNullFields=year&notNullFields=rating.imdb&notNullFields=votes.imdb&notNullFields=ageRating&notNullFields=persons.name&notNullFields=genres.name&notNullFields=countries.name&notNullFields=poster.url&sortField=votes.imdb&sortType=-1&&type=cartoon&type=animated-series&type=anime')
  }

  const popularSeriesURL = () => {
    setUrl('https://api.kinopoisk.dev/v1.4/movie?page=1&limit=30&selectFields=id&selectFields=externalId&notNullFields=externalId.kpHD&selectFields=name&selectFields=description&selectFields=type&selectFields=year&selectFields=rating&selectFields=ageRating&selectFields=votes&selectFields=genres&selectFields=movieLength&selectFields=isSeries&selectFields=totalSeriesLength&selectFields=countries&selectFields=poster&selectFields=videos&selectFields=persons&selectFields=top10&selectFields=top250&notNullFields=id&notNullFields=name&notNullFields=type&notNullFields=year&notNullFields=rating.imdb&notNullFields=votes.imdb&notNullFields=ageRating&notNullFields=persons.name&notNullFields=genres.name&notNullFields=countries.name&notNullFields=poster.url&sortField=votes.imdb&sortType=-1&type=tv-series')
  }

  const topMoviesURL = () => {
    setUrl('https://api.kinopoisk.dev/v1.4/movie?page=1&limit=30&selectFields=id&selectFields=externalId&notNullFields=externalId.kpHD&selectFields=name&selectFields=description&selectFields=type&selectFields=year&selectFields=rating&selectFields=ageRating&selectFields=votes&selectFields=genres&selectFields=movieLength&selectFields=isSeries&selectFields=totalSeriesLength&selectFields=countries&selectFields=poster&selectFields=videos&selectFields=persons&selectFields=top10&selectFields=top250&notNullFields=id&notNullFields=name&notNullFields=type&notNullFields=year&notNullFields=rating.imdb&notNullFields=votes.imdb&notNullFields=ageRating&notNullFields=persons.name&notNullFields=genres.name&notNullFields=countries.name&notNullFields=poster.url&notNullFields=watchability.items.name&notNullFields=audience.count&sortField=rating.imdb&sortField=votes.imdb&sortType=-1&sortType=-1&type=movie');
  }

  const topSeriesURL = () => {
    setUrl('https://api.kinopoisk.dev/v1.4/movie?page=1&limit=30&selectFields=id&selectFields=externalId&notNullFields=externalId.kpHD&selectFields=name&selectFields=description&selectFields=type&selectFields=year&selectFields=rating&selectFields=ageRating&selectFields=votes&selectFields=genres&selectFields=movieLength&selectFields=isSeries&selectFields=totalSeriesLength&selectFields=countries&selectFields=poster&selectFields=videos&selectFields=persons&selectFields=top10&selectFields=top250&notNullFields=id&notNullFields=name&notNullFields=type&notNullFields=year&notNullFields=rating.imdb&notNullFields=votes.imdb&notNullFields=ageRating&notNullFields=persons.name&notNullFields=genres.name&notNullFields=countries.name&notNullFields=poster.url&sortField=rating.imdb&sortField=votes.imdb&sortType=-1&sortType=-1&type=tv-series');
  }

  const topAnimationsURL = () => {
    setUrl('https://api.kinopoisk.dev/v1.4/movie?page=1&limit=30&selectFields=id&selectFields=externalId&notNullFields=externalId.kpHD&selectFields=name&selectFields=description&selectFields=type&selectFields=year&selectFields=rating&selectFields=ageRating&selectFields=votes&selectFields=genres&selectFields=movieLength&selectFields=isSeries&selectFields=totalSeriesLength&selectFields=countries&selectFields=poster&selectFields=videos&selectFields=persons&selectFields=top10&selectFields=top250&notNullFields=id&notNullFields=name&notNullFields=type&notNullFields=year&notNullFields=rating.imdb&notNullFields=votes.imdb&notNullFields=ageRating&notNullFields=persons.name&notNullFields=genres.name&notNullFields=countries.name&notNullFields=poster.url&notNullFields=watchability.items.name&notNullFields=audience.count&sortField=rating.imdb&sortField=votes.imdb&sortType=-1&sortType=-1&type=cartoon&type=animated-series&type=anime');
  }

  const newMoviesURL = () => {
    let currentYear = new Date().getFullYear();
    setUrl(`https://api.kinopoisk.dev/v1.4/movie?page=1&limit=30&selectFields=id&selectFields=externalId&notNullFields=externalId.kpHD&selectFields=name&selectFields=description&selectFields=type&selectFields=year&selectFields=rating&selectFields=ageRating&selectFields=votes&selectFields=genres&selectFields=movieLength&selectFields=isSeries&selectFields=totalSeriesLength&selectFields=countries&selectFields=poster&selectFields=videos&selectFields=persons&selectFields=top10&selectFields=top250&notNullFields=id&notNullFields=name&notNullFields=type&notNullFields=year&notNullFields=rating.imdb&notNullFields=votes.imdb&notNullFields=ageRating&notNullFields=persons.name&notNullFields=genres.name&notNullFields=countries.name&notNullFields=poster.url&notNullFields=watchability.items.name&notNullFields=audience.count&sortField=rating.imdb&sortField=votes.imdb&sortType=-1&sortType=-1&type=movie&year=${Number(currentYear) - 2}-${currentYear}`);
  }

  const newSeriesURL = () => {
    let currentYear = new Date().getFullYear();
    setUrl(`https://api.kinopoisk.dev/v1.4/movie?page=1&limit=30&selectFields=id&selectFields=externalId&notNullFields=externalId.kpHD&selectFields=name&selectFields=description&selectFields=type&selectFields=year&selectFields=rating&selectFields=ageRating&selectFields=votes&selectFields=genres&selectFields=movieLength&selectFields=isSeries&selectFields=totalSeriesLength&selectFields=countries&selectFields=poster&selectFields=videos&selectFields=persons&selectFields=top10&selectFields=top250&notNullFields=id&notNullFields=name&notNullFields=type&notNullFields=year&notNullFields=rating.imdb&notNullFields=votes.imdb&notNullFields=ageRating&notNullFields=persons.name&notNullFields=genres.name&notNullFields=countries.name&notNullFields=poster.url&sortField=rating.imdb&sortField=votes.imdb&sortType=-1&sortType=-1&type=tv-series&isSeries=true&year=${Number(currentYear) - 2}-${currentYear}`);
  }

  const newAnimationsURL = () => {
    let currentYear = new Date().getFullYear();
    setUrl(`https://api.kinopoisk.dev/v1.4/movie?page=1&limit=30&selectFields=id&selectFields=externalId&notNullFields=externalId.kpHD&selectFields=name&selectFields=description&selectFields=type&selectFields=year&selectFields=rating&selectFields=ageRating&selectFields=votes&selectFields=genres&selectFields=movieLength&selectFields=isSeries&selectFields=totalSeriesLength&selectFields=countries&selectFields=poster&selectFields=videos&selectFields=persons&selectFields=top10&selectFields=top250&notNullFields=id&notNullFields=name&notNullFields=type&notNullFields=year&notNullFields=rating.imdb&notNullFields=votes.imdb&notNullFields=ageRating&notNullFields=persons.name&notNullFields=genres.name&notNullFields=countries.name&notNullFields=poster.url&notNullFields=watchability.items.name&notNullFields=audience.count&sortField=rating.imdb&sortField=votes.imdb&sortType=-1&sortType=-1&type=cartoon&type=animated-series&type=anime&year=${Number(currentYear) - 2}-${currentYear}`)
  }


  const functionsURL = {
    newAnimationsURL,
    newSeriesURL,
    newMoviesURL,
    topAnimationsURL,
    topSeriesURL,
    topMoviesURL,
    popularSeriesURL,
    popularAnimationsURL,
    popularMoviesURL,
    changeQueryHandler,
    searchURL
  }

  return (
    <div className="app">
      <Router>
        <ScrollToTop />
        <Header functionsURL={functionsURL} />

        <Routes>
          <Route path='/' element={<HomePage data={data} />} />
          <Route path='/movies/:movieId' element={<MoviePage data={data} />} />
          <Route path='/drafts' element={<DraftsPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;