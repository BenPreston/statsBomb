import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

// internal
import './App.css';
import Navbar from './components/navbar';
import CardContainer from './components/cardContainer';

function App() {

  const cardsData = [
    {
      id: 1,
      team: 'CHELSEA',
      alt: 'Chelsea FC Logo',
      imgUrl:
        'https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/180px-Chelsea_FC.svg.png',
    },
    {
      id: 1,
      team: 'MANCITY',
      alt: 'Manchester City FC Logo',
      imgUrl:
        'https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/170px-Manchester_City_FC_badge.svg.png',
    },
  ];

  return (
    <div className="App">
      <Container>
        <Navbar />
        <CardContainer cards={cardsData} />
      </Container>
    </div>
  );
}

export default App;
