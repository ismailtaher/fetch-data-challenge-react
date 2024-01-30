import React from "react";

const Content = ({ items, dataType }) => {
  if (dataType === "users") {
    return (
      <table>
        {items.map((item) => {
          return (
            <tr className="table">
              <td key={item.id}>{item.id}</td>
              <td key={item.id}>{item.name}</td>
              <td key={item.id}>{item.username}</td>
              <td key={item.id}>{item.email}</td>
              <td key={item.id}>{JSON.stringify(item.address)}</td>
              <td key={item.id}>{item.phone}</td>
              <td key={item.id}>{item.website}</td>
              <td key={item.id}>{JSON.stringify(item.company)}</td>
            </tr>
          );
        })}
      </table>
    );
  } else if (dataType === "posts") {
    return (
      <table>
        {items.map((item) => {
          return (
            <tr className="table">
              <td key={item.id}>{item.userId}</td>
              <td key={item.id}>{item.id}</td>
              <td key={item.id}>{item.title}</td>
              <td key={item.id}>{item.body}</td>
            </tr>
          );
        })}
      </table>
    );
  } else if (dataType === "comments") {
    return (
      <table>
        {items.map((item) => {
          return (
            <tr className="table">
              <td key={item.id}>{item.postId}</td>
              <td key={item.id}>{item.id}</td>
              <td key={item.id}>{item.name}</td>
              <td key={item.id}>{item.email}</td>
              <td key={item.id}>{item.body}</td>
            </tr>
          );
        })}
      </table>
    );
  }
};

export default Content;
