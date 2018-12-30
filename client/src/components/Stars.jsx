import React from 'react';

const Stars = ({stars}) => {
  if (stars === 0) {
    return (
      <div id='summaryStars'>
        <img src='./empty-star.svg' height="25" width="25" />
        <img src='./empty-star.svg' height="25" width="25" />
        <img src='./empty-star.svg' height="25" width="25" />
        <img src='./empty-star.svg' height="25" width="25" />
        <img src='./empty-star.svg' height="25" width="25" />
      </div>
    )
  }
  if (stars === 0.5) {
    return (
      <div id='summaryStars'>
        <img src='./half-star.svg' height="25" width="25" />
        <img src='./empty-star.svg' height="25" width="25" />
        <img src='./empty-star.svg' height="25" width="25" />
        <img src='./empty-star.svg' height="25" width="25" />
        <img src='./empty-star.svg' height="25" width="25" />
      </div>
    )
  }
  if (stars === 1) {
    return (
      <div id='summaryStars'>
        <img src='./full-star.svg' height="25" width="25" />
        <img src='./empty-star.svg' height="25" width="25" />
        <img src='./empty-star.svg' height="25" width="25" />
        <img src='./empty-star.svg' height="25" width="25" />
        <img src='./empty-star.svg' height="25" width="25" />
      </div>
    )
  }
  if (stars === 1.5) {
    return (
      <div id='summaryStars'>
        <img src='./full-star.svg' height="25" width="25" />
        <img src='./half-star.svg' height="25" width="25" />
        <img src='./empty-star.svg' height="25" width="25" />
        <img src='./empty-star.svg' height="25" width="25" />
        <img src='./empty-star.svg' height="25" width="25" />
      </div>
    )
  }
  if (stars === 2) {
    return (
      <div id='summaryStars'>
        <img src='./full-star.svg' height="25" width="25" />
        <img src='./full-star.svg' height="25" width="25" />
        <img src='./empty-star.svg' height="25" width="25" />
        <img src='./empty-star.svg' height="25" width="25" />
        <img src='./empty-star.svg' height="25" width="25" />
      </div>
    )
  }
  if (stars === 2.5) {
    return (
      <div id='summaryStars'>
        <img src='./full-star.svg' height="25" width="25" />
        <img src='./full-star.svg' height="25" width="25" />
        <img src='./half-star.svg' height="25" width="25" />
        <img src='./empty-star.svg' height="25" width="25" />
        <img src='./empty-star.svg' height="25" width="25" />
      </div>
    )
  }
  if (stars === 3) {
    return (
      <div id='summaryStars'>
        <img src='./full-star.svg' height="25" width="25" />
        <img src='./full-star.svg' height="25" width="25" />
        <img src='./full-star.svg' height="25" width="25" />
        <img src='./empty-star.svg' height="25" width="25" />
        <img src='./empty-star.svg' height="25" width="25" />
      </div>
    )
  }
  if (stars === 3.5) {
    return (
      <div id='summaryStars'>
        <img src='./full-star.svg' height="25" width="25" />
        <img src='./full-star.svg' height="25" width="25" />
        <img src='./full-star.svg' height="25" width="25" />
        <img src='./half-star.svg' height="25" width="25" />
        <img src='./empty-star.svg' height="25" width="25" />
      </div>
    )
  }
  if (stars === 4) {
    return (
      <div id='summaryStars'>
        <img src='./full-star.svg' height="25" width="25" />
        <img src='./full-star.svg' height="25" width="25" />
        <img src='./full-star.svg' height="25" width="25" />
        <img src='./full-star.svg' height="25" width="25" />
        <img src='./empty-star.svg' height="25" width="25" />
      </div>
    )
  }
  if (stars === 4.5) {
    return (
      <div id='summaryStars'>
        <img src='./full-star.svg' height="25" width="25" />
        <img src='./full-star.svg' height="25" width="25" />
        <img src='./full-star.svg' height="25" width="25" />
        <img src='./full-star.svg' height="25" width="25" />
        <img src='./half-star.svg' height="25" width="25" />
      </div>
    )
  }
  if (stars === 5) {
    return (
      <div id='summaryStars'>
        <img src='./full-star.svg' height="25" width="25" />
        <img src='./full-star.svg' height="25" width="25" />
        <img src='./full-star.svg' height="25" width="25" />
        <img src='./full-star.svg' height="25" width="25" />
        <img src='./full-star.svg' height="25" width="25" />
      </div>
    )
  }

  return null;

}

export default Stars;