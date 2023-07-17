import React from "react";
import { list } from "../data";
import Card from "./Card";

const ListPage = () => {
  return (
    <div className="content">
      <h1>All Items</h1>
      <div className="container">
        {list.map((item) => {
          return <Card key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default ListPage;
