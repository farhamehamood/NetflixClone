import Navbar from './components/Navbar';
import Home from './pages/Home';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import Row from './components/Row';
import requests from './Request';

function App() {
  return (
    <div className="App">
      
     <Navbar/>
     {/* <Routes>
      <Route path='/' element={<Home/>}/>
     </Routes> */}
    <Main/>
        <Row title={"Netflix Orignals"} fetchUrl={requests.fetchNetflixOriginals}  isLargeRow={true}  />
        <Row title={"Trending"} fetchUrl={requests.fetchTrending}  />
        <Row title={"Top Rated"} fetchUrl={requests.fetchTopRated} />
        <Row title={"Action"} fetchUrl={requests.fetchActionMovies} />
        <Row title={"Romance"} fetchUrl={requests.fetchRomanceMovies} />
        <Row title={"Comedy"} fetchUrl={requests.fetchComedyMovies} />
        <Row title={"Documentries"} fetchUrl={requests.fetchDocumentaries} />
        <Row title={"Horror"} fetchUrl={requests.fetchHorrorMovies} />
    </div>
  );
}

export default App; 