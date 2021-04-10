import React from "react";

const ListGroup = (props) => {
  const {
    items,
    onItemSelect,
    textProperty,
    selectedItem,
    valueProperty,
  } = props;
  return (
    <ul className="list-group">
      {/* <li className="list-group-item active" aria-current="true" key="a">
        All Genres
      </li> */}
      {items.map((item) => (
        <li
          key={item[valueProperty]}
          className={
            item === selectedItem ? "list-group-item active" : "list-group-item"
          }
          onClick={() => onItemSelect(item)}
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};
ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
