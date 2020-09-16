import React from 'react';
import Card from './card'

export default function cardContainer(props) {
 
    return (
    <div className="cards-container">
      {props.cards.map((card) => (
        <Card title={card.title} content={card.content} imgUrl={card.imgUrl} />
      ))}
    </div>
  );
}
