import React from 'react';

import './SiteCard.css';

export default function SiteCard(props) {
  const {
    title, img, msg, tec, link, square, circle, color,
  } = props;
  return (
    <>
      <div id="sd-main">
        <div id="sd-container">
          <img src={img} alt="bg" />
          <div id="sd-body">
            <h2>{title}</h2>
            <h5>
              {msg}
            </h5>
            <h6>
              {tec}
            </h6>
          </div>
          <button
            type="button"
            onClick={() => {
              window.open(link, '_blank');
            }}
            id={color}
          >
            Click e conheça
          </button>
        </div>
      </div>
    </>
  );
}
