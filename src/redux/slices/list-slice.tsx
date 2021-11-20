import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {code: 1, title: 'Название элемента', selected: false, count: 0},
    {code: 2, title: 'Некий объект', selected: false, count: 0},
    {code: 3, title: 'Заголовок', selected: false, count: 0},
    {code: 4, title: 'Короткое название', selected: false, count: 0},
    {code: 5, title: 'Запись', selected: false, count: 0},
    {code: 6, title: 'Пример названия', selected: false, count: 0},
    {code: 7, title: 'Седьмой', selected: false, count: 0}
  ],
};

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    createItem(state) {
      const code: number = Math.max(0, ...state.items.map(item => item.code)) + 1;
      Object.assign(state, { items: [...state.items, {
        code,
        title: `Новая запись №${code}`,
        selected: false,
        count: 0,
      }]});
    },
    deleteItem(state, action: PayloadAction<number>) {
      Object.assign(state, { items: state.items.filter(item => item.code !== action.payload)});
    },
    selectItem(state, action: PayloadAction<number>) {
      const newItems = state.items.map(item => {
        if (item.code === action.payload){
          if ( !item.selected ) item.count += 1;
          item.selected = !item.selected;
        }
        return item;
      });
      Object.assign(state, { items: [...newItems]});
    },
  }
})

export const {
  createItem,
  deleteItem,
  selectItem
} = listSlice.actions;