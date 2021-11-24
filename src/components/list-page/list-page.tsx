import React from 'react';
import { RootState, useAppDispatch, useTypedSelector } from '../../redux/store';
import { createItem, selectItem, deleteItem } from '../../redux/slices/list-slice';

const ListPage = (): JSX.Element => {

  const items = useTypedSelector((state: RootState) => state.list.items);
  const dispatch = useAppDispatch();

  return (
    <div className='App'>
      <div className='App__head'>
        <h1>Приложение не на чистом JS</h1>
      </div>
      <div className='Controls'>
        <button onClick={() => dispatch(createItem())}> Добавить</button>
      </div>
      <div className='App__center'>
        <div className='List'>{items.map(item =>
          <div
            key={item.code}
            className={'List__item' + (item.selected ? ' List__item_selected' : '')}
          >
            <div className='Item' onClick={() => dispatch(selectItem(item.code))}>
              <div className='Item__number'>{item.code}</div>
              <div className='Item__title'>{item.title} {item.count !== 0 && ` | Выделялся ${item.count} раз`}</div>
              <div className='Item__actions'>
                <button onClick={() => dispatch(deleteItem(item.code))}>
                  Удалить
                </button>
              </div>
            </div>
          </div>
        )}
        </div>
      </div>
    </div>
  );
}

export default ListPage;