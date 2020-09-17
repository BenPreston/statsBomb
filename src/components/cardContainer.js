import React from 'react';
import Card from './card';

export default function cardContainer(props) {
  return (
    <div className="cards-list">
      {props.cards.map((card) => (
        <Card title={card.team} imgUrl={card.imgUrl} />
      ))}
    </div>
  );
}
