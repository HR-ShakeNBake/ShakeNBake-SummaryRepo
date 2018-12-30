import React from 'react';
import PhotoGalleryItem from './PhotoGalleryItem.jsx';
import PhotoGalleryList from './PhotoGalleryList.jsx';
import Stars from './Stars.jsx';

const Summary = ({reviews, summary}) => {
  let made = summary.made;
  let stars;
  if (made > 1000) {
    made = Math.floor(made/1000) + 'k';
  }
  let review = summary.reviewNum;
  if (review > 1000) {
    review = Math.floor(review/1000) + 'k';
  }
  let photos = summary.photoNum;
  if (photos > 1000) {
    photos = Math.floor(photos/1000) + 'k';
  }

  return (
    <div id='summary' height="360" width="600">
      <div id='summaryUser'>
        <div id='summaryAvatar'>
          <img src={summary.avatarURL} height="50" width="50" />
        </div>
        <div id='summaryFollowers'>
          <img src='./followers.png' height="15" width="15" /> {summary.followers}
        </div>
      </div>
      <div>
        <h2 id='summaryName'>{summary.recipeName}</h2>
        <Stars stars={summary.avgRating} /> 
        <div id='summaryStats'>
          <span> {made} made it | </span>
          <span> {review} reviews | </span>
          <span> {photos} photos </span>
        </div>
        <div id='summaryOwner'> Recipe by: {summary.username}</div>
        <div id='summaryDescription' > " {summary.recipeDescription} "</div>
      </div>
    </div>
  );
}

export default Summary;