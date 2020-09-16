import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/navbar';
import Container from 'react-bootstrap/Container';
import CardContainer from './components/cardContainer';

function App() {
  const seed = 1;

  const cardsData = [
    {
      id: 1,
      title: 'CARD 1',
      content: 'Clark Kent',
      imgUrl: `https://picsum.photos/seed/${seed + 1}/200/300`,
    },
    {
      id: 2,
      title: 'CARD 2',
      content: 'Bruce Wayne',
      imgUrl: `https://picsum.photos/seed/${seed + 2}/200/300`,
    },
    {
      id: 3,
      title: 'CARD 3',
      content: 'Peter Parker',
      imgUrl: `https://picsum.photos/seed/${seed + 3}/200/300`,
    },
    {
      id: 4,
      title: 'CARD 4',
      content: 'Tony Stark',
      imgUrl: `https://picsum.photos/seed/${seed + 4}/200/300`,
    },
    {
      id: 5,
      title: 'CARD 5',
      content: 'Reed Richards',
      imgUrl: `https://picsum.photos/seed/${seed + 5}/200/300`,
    },
    {
      id: 6,
      title: 'CARD 6',
      content: 'Wade Wilson',
      imgUrl: `https://picsum.photos/seed/${seed + 6}/200/300`,
    },
    {
      id: 7,
      title: 'CARD 7',
      content: 'Peter Quill',
      imgUrl: `https://picsum.photos/seed/${seed + 7}/200/300`,
    },
    {
      id: 8,
      title: 'CARD 8',
      content: 'Steven Rogers',
      imgUrl: `https://picsum.photos/seed/${seed + 8}/200/300`,
    },
    {
      id: 9,
      title: 'CARD 9',
      content: 'Bruce Banner',
      imgUrl: `https://picsum.photos/seed/${seed + 9}/200/300`,
    },
    {
      id: 10,
      title: 'CARD 10',
      content: 'Vincent Strange',
      imgUrl: `https://picsum.photos/seed/${seed + 10}/200/300`,
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
