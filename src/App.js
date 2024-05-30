import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./routes/HomePage";
import MoviePage from "./routes/MoviePage";
import ErrorPage from "./routes/ErrorPage";
import ScrollToTop from './utils/ScrollToTop';
import DraftsPage from './routes/DraftsPage/DraftsPage';

import { API_KEY } from './data/data';
import './index.css'

const App = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState({ docs: [], pages: 0 });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [disabled, setDisabled] = useState({
    left: true,
    right: false,
  });

  const [requests, setRequests] = useState({
    page: 1,
    isSearch: '',
    fields: '&selectFields=id&selectFields=externalId&selectFields=name&selectFields=description&selectFields=type&selectFields=year&selectFields=rating&selectFields=ageRating&selectFields=votes&selectFields=genres&selectFields=movieLength&selectFields=isSeries&selectFields=totalSeriesLength&selectFields=countries&selectFields=poster&selectFields=videos&selectFields=persons&selectFields=top10&selectFields=top250&notNullFields=id&notNullFields=name&notNullFields=type&notNullFields=year&notNullFields=externalId.kpHD&notNullFields=rating.imdb&notNullFields=votes.imdb&notNullFields=ageRating&notNullFields=persons.name&notNullFields=genres.name&notNullFields=countries.name&notNullFields=poster.url',
    sortFields: '&sortField=rating.imdb&sortField=votes.imdb&sortType=-1&sortType=-1',
    filters: '',
  });

  const url = `https://api.kinopoisk.dev/v1.4/movie${requests.isSearch}?page=${requests.page}&limit=15${requests.fields}${requests.sortFields}${requests.filters}`;

  const options = {
    method: 'GET',
    headers: { accept: 'application/json', 'X-API-KEY': API_KEY }
  };

  useEffect(() => {
    function catchErr(err) {
      setError(
        err instanceof Error ? err.message : 'Unknown Error: cannot get API'
      );
      console.log(error);
      setData({ docs: [], pages: 0 });
    }

    (async () => {
      setIsLoading(true);
      setError(null);

      await fetch(url, options)
        .then(response => response.json())
        .then(json => setData(json))
        .catch(err => catchErr(err))
        .finally(() => setIsLoading(false));
    })();
  }, [url]);

  const onNextPageClick = () => {
    let i = requests.page + 1;

    if (requests.page < data.pages) {
      setRequests({
        ...requests,
        page: i,
      });
      setDisabled({
        left: false,
        right: false,
      })
    } else setDisabled({
      ...disabled,
      right: true,
    })
  }

  const onPrevPageClick = () => {
    let i = requests.page - 1;

    if (requests.page > 1) {
      setRequests({
        ...requests,
        page: i,
      })
      setDisabled({
        right: false,
        left: false,
      })
    } else setDisabled({
      ...disabled,
      left: true,
    })
  }

  const changeQueryHandler = (e) => {
    setQuery(e.target.value);
  }

  const searchURL = () => {
    setRequests({
      ...requests,
      page: 1,
      isSearch: '/search',
      fields: '',
      sortFields: '',
      filters: `&query=${query}`,
    })
  }

  const popularMoviesURL = () => {
    setRequests({
      ...requests,
      page: 1,
      filters: '&type=movie',
      fields: '&selectFields=id&selectFields=externalId&selectFields=name&selectFields=description&selectFields=type&selectFields=year&selectFields=rating&selectFields=ageRating&selectFields=votes&selectFields=genres&selectFields=movieLength&selectFields=isSeries&selectFields=totalSeriesLength&selectFields=countries&selectFields=poster&selectFields=videos&selectFields=persons&selectFields=top10&selectFields=top250&notNullFields=id&notNullFields=name&notNullFields=type&notNullFields=year&notNullFields=externalId.kpHD&notNullFields=rating.imdb&notNullFields=votes.imdb&notNullFields=ageRating&notNullFields=persons.name&notNullFields=genres.name&notNullFields=countries.name&notNullFields=poster.url',
      sortFields: '&sortField=votes.imdb&sortType=-1',
      isSearch: '',
    })
  }

  const popularAnimationsURL = () => {
    setRequests({
      ...requests,
      page: 1,
      filters: '&type=cartoon&type=animated-series&type=anime',
      sortFields: '&sortField=votes.imdb&sortType=-1',
      fields: '&selectFields=id&selectFields=externalId&selectFields=name&selectFields=description&selectFields=type&selectFields=year&selectFields=rating&selectFields=ageRating&selectFields=votes&selectFields=genres&selectFields=movieLength&selectFields=isSeries&selectFields=totalSeriesLength&selectFields=countries&selectFields=poster&selectFields=videos&selectFields=persons&selectFields=top10&selectFields=top250&notNullFields=id&notNullFields=name&notNullFields=type&notNullFields=year&notNullFields=externalId.kpHD&notNullFields=rating.imdb&notNullFields=votes.imdb&notNullFields=ageRating&notNullFields=persons.name&notNullFields=genres.name&notNullFields=countries.name&notNullFields=poster.url',
      isSearch: '',
    })
  }

  const popularSeriesURL = () => {
    setRequests({
      ...requests,
      page: 1,
      filters: '&type=tv-series',
      sortFields: '&sortField=votes.imdb&sortType=-1',
      fields: '&selectFields=id&selectFields=externalId&selectFields=name&selectFields=description&selectFields=type&selectFields=year&selectFields=rating&selectFields=ageRating&selectFields=votes&selectFields=genres&selectFields=movieLength&selectFields=isSeries&selectFields=totalSeriesLength&selectFields=countries&selectFields=poster&selectFields=videos&selectFields=persons&selectFields=top10&selectFields=top250&notNullFields=id&notNullFields=name&notNullFields=type&notNullFields=year&notNullFields=externalId.kpHD&notNullFields=rating.imdb&notNullFields=votes.imdb&notNullFields=ageRating&notNullFields=persons.name&notNullFields=genres.name&notNullFields=countries.name&notNullFields=poster.url',
      isSearch: '',
    })
  }

  const topMoviesURL = () => {
    setRequests({
      ...requests,
      page: 1,
      filters: '&type=movie',
      fields: '&selectFields=id&selectFields=externalId&selectFields=name&selectFields=description&selectFields=type&selectFields=year&selectFields=rating&selectFields=ageRating&selectFields=votes&selectFields=genres&selectFields=movieLength&selectFields=isSeries&selectFields=totalSeriesLength&selectFields=countries&selectFields=poster&selectFields=videos&selectFields=persons&selectFields=top10&selectFields=top250&notNullFields=id&notNullFields=name&notNullFields=type&notNullFields=year&notNullFields=externalId.kpHD&notNullFields=rating.imdb&notNullFields=votes.imdb&notNullFields=ageRating&notNullFields=persons.name&notNullFields=genres.name&notNullFields=countries.name&notNullFields=poster.url&notNullFields=watchability.items.name&notNullFields=audience.count',
      sortFields: '&sortField=rating.imdb&sortField=votes.imdb&sortType=-1&sortType=-1',
      isSearch: '',
    })
  }

  const topSeriesURL = () => {
    setRequests({
      ...requests,
      page: 1,
      filters: '&type=tv-series',
      fields: '&selectFields=id&selectFields=externalId&selectFields=name&selectFields=description&selectFields=type&selectFields=year&selectFields=rating&selectFields=ageRating&selectFields=votes&selectFields=genres&selectFields=movieLength&selectFields=isSeries&selectFields=totalSeriesLength&selectFields=countries&selectFields=poster&selectFields=videos&selectFields=persons&selectFields=top10&selectFields=top250&notNullFields=id&notNullFields=name&notNullFields=type&notNullFields=year&notNullFields=externalId.kpHD&notNullFields=rating.imdb&notNullFields=votes.imdb&notNullFields=ageRating&notNullFields=persons.name&notNullFields=genres.name&notNullFields=countries.name&notNullFields=poster.url',
      sortFields: '&sortField=rating.imdb&sortField=votes.imdb&sortType=-1&sortType=-1',
      isSearch: '',
    })
  }

  const topAnimationsURL = () => {
    setRequests({
      ...requests,
      page: 1,
      filters: '&type=cartoon&type=animated-series&type=anime',
      fields: '&selectFields=id&selectFields=externalId&selectFields=name&selectFields=description&selectFields=type&selectFields=year&selectFields=rating&selectFields=ageRating&selectFields=votes&selectFields=genres&selectFields=movieLength&selectFields=isSeries&selectFields=totalSeriesLength&selectFields=countries&selectFields=poster&selectFields=videos&selectFields=persons&selectFields=top10&selectFields=top250&notNullFields=id&notNullFields=name&notNullFields=type&notNullFields=year&notNullFields=externalId.kpHD&notNullFields=rating.imdb&notNullFields=votes.imdb&notNullFields=ageRating&notNullFields=persons.name&notNullFields=genres.name&notNullFields=countries.name&notNullFields=poster.url&notNullFields=watchability.items.name&notNullFields=audience.count',
      sortFields: '&sortField=rating.imdb&sortField=votes.imdb&sortType=-1&sortType=-1',
      isSearch: '',
    })
  }

  const newMoviesURL = () => {
    let currentYear = new Date().getFullYear();

    setRequests({
      ...requests,
      page: 1,
      filters: `&type=movie&year=${Number(currentYear) - 2}-${currentYear}`,
      fields: '&selectFields=id&selectFields=externalId&selectFields=name&selectFields=description&selectFields=type&selectFields=year&selectFields=rating&selectFields=ageRating&selectFields=votes&selectFields=genres&selectFields=movieLength&selectFields=isSeries&selectFields=totalSeriesLength&selectFields=countries&selectFields=poster&selectFields=videos&selectFields=persons&selectFields=top10&selectFields=top250&notNullFields=id&notNullFields=name&notNullFields=type&notNullFields=year&notNullFields=externalId.kpHD&notNullFields=rating.imdb&notNullFields=votes.imdb&notNullFields=ageRating&notNullFields=persons.name&notNullFields=genres.name&notNullFields=countries.name&notNullFields=poster.url&notNullFields=watchability.items.name&notNullFields=audience.count',
      sortFields: '&sortField=rating.imdb&sortField=votes.imdb&sortType=-1&sortType=-1',
      isSearch: '',
    })
  }

  const newSeriesURL = () => {
    let currentYear = new Date().getFullYear();

    setRequests({
      ...requests,
      page: 1,
      filters: `&type=tv-series&isSeries=true&year=${Number(currentYear) - 2}-${currentYear}`,
      fields: '&selectFields=id&selectFields=externalId&selectFields=name&selectFields=description&selectFields=type&selectFields=year&selectFields=rating&selectFields=ageRating&selectFields=votes&selectFields=genres&selectFields=movieLength&selectFields=isSeries&selectFields=totalSeriesLength&selectFields=countries&selectFields=poster&selectFields=videos&selectFields=persons&selectFields=top10&selectFields=top250&notNullFields=id&notNullFields=name&notNullFields=type&notNullFields=year&notNullFields=externalId.kpHD&notNullFields=rating.imdb&notNullFields=votes.imdb&notNullFields=ageRating&notNullFields=persons.name&notNullFields=genres.name&notNullFields=countries.name&notNullFields=poster.url',
      sortFields: '&sortField=rating.imdb&sortField=votes.imdb&sortType=-1&sortType=-1',
      isSearch: '',
    })
  }

  const newAnimationsURL = () => {
    let currentYear = new Date().getFullYear();

    setRequests({
      ...requests,
      page: 1,
      filters: `&type=cartoon&type=animated-series&type=anime&year=${Number(currentYear) - 2}-${currentYear}`,
      fields: '&selectFields=id&selectFields=externalId&selectFields=name&selectFields=description&selectFields=type&selectFields=year&selectFields=rating&selectFields=ageRating&selectFields=votes&selectFields=genres&selectFields=movieLength&selectFields=isSeries&selectFields=totalSeriesLength&selectFields=countries&selectFields=poster&selectFields=videos&selectFields=persons&selectFields=top10&selectFields=top250&notNullFields=id&notNullFields=name&notNullFields=type&notNullFields=year&notNullFields=externalId.kpHD&notNullFields=rating.imdb&notNullFields=votes.imdb&notNullFields=ageRating&notNullFields=persons.name&notNullFields=genres.name&notNullFields=countries.name&notNullFields=poster.url&notNullFields=watchability.items.name&notNullFields=audience.count',
      sortFields: '&sortField=rating.imdb&sortField=votes.imdb&sortType=-1&sortType=-1',
      isSearch: '',
    })
  }

  const paginationProps = {
    onPrevPageClick,
    onNextPageClick,
    rightIsDisable: disabled.right,
    leftIsDisable: disabled.left,
    current: requests.page,
    total: data.pages,
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
          <Route path='/' element={<HomePage data={data.docs || []} paginationProps={paginationProps} isLoading={isLoading} />} />
          <Route path='/movies/:movieId' element={<MoviePage data={data.docs || []} />} />
          <Route path='/drafts' element={<DraftsPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;