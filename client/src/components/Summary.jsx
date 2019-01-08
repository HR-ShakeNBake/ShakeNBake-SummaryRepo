import React from 'react';
import Stars from './Stars.jsx';

const Summary = ({reviews, summary, openModal, closeModal, showModal}) => {
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
      <div>
        <div id='summaryName'>{summary.recipeName}</div>
        <Stars stars={summary.avgRating} /> 
        <div id='summaryStats'>
          <span id='stats'> {made} made it  </span>
          <span id='divider'> | </span>
          <span id='stats'> {review} reviews  </span>
          <span id='divider'> | </span>
          <span id='stats' onClick={e=>openModal(e)} > {photos} photos </span>
        </div>
      </div>

      <div id='summaryUser'>
        <div id='sumLeft'>
          <div id='summaryAv'>
            <img src={summary.avatarURL} height="36" width="36" id='summaryAvatar' />
          </div>
          <div id='summaryFollowers'>
            <span id='sumFollower'>
              <img src='http://3.17.144.156/followers.png' height="20" width="20" />
            </span> 
            <span id='sumFollowers'>{summary.followers}</span>
          </div>
        </div>
        <div id='summaryText'>
          <div id='summaryOwner'> 
            <span id='recipeBy'>Recipe by:</span> 
            <span id='sumUser'>{summary.username}</span>
          </div>
          <div id='summaryDescription' > " {summary.recipeDescription} "</div>
        </div>
      </div>

    </div>
  );
}

export default Summary;