import React from "react";

const Datacomponet = (props) => {
  console.log(props.data);
  return (
    <div id="parent">
      <h1>hello world from datacompoent</h1>
      {/* <p>{this.props}</p> */}
      <table>
        <tbody>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
          {props.data.map((person, index) => (
            <tr data={index} key={index}>
              <td>{person.id}</td>
              <td>{person.name}</td>
              <td>{person.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Datacomponet;
