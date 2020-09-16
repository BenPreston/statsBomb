import React from 'react';

export default function card(props) {
  return (
    <div className="card">
      <img src={props.imgUrl} alt={props.alt || 'Image'} />
      <div className="card-content">
        <h2>{props.title}</h2>
        <p>{props.content}</p>
      </div>
    </div>
  );
}
