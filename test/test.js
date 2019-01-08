import App from '../client/src/components/App.jsx';
import Summary from '../client/src/components/Summary.jsx';
import React from 'react';
import { mount } from 'enzyme'; 

test('Summary Module should render recipe summary', () => {
  const currentRecipeInfo = [{ 
    recipeName: 'Sweet Salmon',
    recipeDescription: 'Reiciendis laborum rem. Laudantium minus voluptatem aut dolorem dolor necessitatibus adipisci.',
    made: 60,
    avatarUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/mastermindesign/128.jpg',
    username: 'justAuser',
    followers: 10,
    photoNum: 10,
    reviewNum: 79,
    avgRating: 3.5
   }];
  const wrapper = mount(
    <Summary summary={currentRecipeInfo} />
    )
  const name = wrapper.find('#summaryName');
  expect(name.text()).toBe('Sweet Salmon');
  const username = wrapper.find('#sumUser');
  expect(username.text()).toBe('justAuser');
  const name = wrapper.find('#sumFollowers');
  expect(name.text()).toBe('10');
  const description = wrapper.find('#summaryDescription');
  expect(description.text()).toBe('Reiciendis laborum rem. Laudantium minus voluptatem aut dolorem dolor necessitatibus adipisci.');
});