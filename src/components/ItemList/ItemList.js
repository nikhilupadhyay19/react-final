import React from 'react';

const ItemList = (props) => {
  const { data } = props;
  return (
    <div className="item-list">
      <p>Itemlist.... {JSON.stringify(data)}</p>
    </div>
  );
};

export { ItemList };
