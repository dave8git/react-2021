import shortid from 'shortid';

// selectors
export const getCardsForColumns = ({cards, searchString}, columnId) => cards.filter(card => (card.columnId == columnId) && (new RegExp(searchString, 'i').test(card.title)));

// action name creator
const reducerName = 'card';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const ADD_CARD = createActionName('ADD_CARD');

// action creators
export const createActionAddCard = payload => ({ payload: { ...payload, id: shortid.generate() }, type: ADD_CARD });

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_CARD:
      console.log('adding card');
      return [...statePart, action.payload];
    default:
      return statePart;
  }
}