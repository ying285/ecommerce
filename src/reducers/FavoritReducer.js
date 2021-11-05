import PopularaData from '../components/data/PopularaData';

export const favoritReducer = (state, action) => {
  if (action.type === 'HEART') {
    if (state.items.find((item) => item.id === action.id)) {
      return state;
    }
    const changedItems = [...state.items];
    changedItems.push(PopularaData.find((elem) => elem.id === action.id));
    return { ...state, items: changedItems };
  } else if (action.type === 'NO_HEART') {
    const changedItems = state.items.filter((item) => item.id !== action.id);
    return { ...state, items: changedItems };
  }
  return state;
};
