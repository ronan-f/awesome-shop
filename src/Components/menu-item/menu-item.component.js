import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({ title, subtitle, imageUrl, size }) => (
  <div
    style={{
      backgroundImage: `url(${imageUrl})`
    }}
    className={`${size} menu-item`}
  >
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span>{subtitle}</span>
    </div>
  </div>
)

export default MenuItem;