import React, { useState } from "react";
import axios from "axios";
import Forms from "../Forms/Forms";
import Modaldemo from "../Modaldemo/Modaldemo";

class Main extends React.Component {
  constructor(props) {
    super(props);
    let i = 0;
    this.state = {
      data: [],
      userid: "",
      username: "",
      age: "",
      phone: "",
      errmsg: "",
      rows: [],
      buttonValue: "Add Record",
    };

    this.handleRemove = this.handleRemove.bind(this);
  }

  // this.state = {};
  // componentDidMount() {
  //   //get request
  //   // url = 'http://localhost/reactJs-dbconn/getData.php';
  //   axios.get("getData.php").then((res) => {
  //     this.setState({ data: res.data });
  //   });
  // }

  handleFormSubmit(event) {
    event.preventDefault();
    let button = this.state.buttonValue;
    console.log(button);
    let username = this.state.username;
    console.log(username);
    let age = this.state.age;
    let phone = this.state.phone;
    console.log(username);

    this.setState({ errmsg: "" });
    let agePattern = "/^[0-9]+${2}/";
    if (username == "") {
      this.setState({ errmsg: "username cannot be empty" });
      return;
    } else if (age == "") {
      this.setState({ errmsg: "Age cannot be empty" });
      return;
    } else if (phone == "") {
      this.setState({ errmsg: "Phone Number cannot be empty" });
      return;
    } else {
      let formData = new FormData();
      formData.append("username", username);
      formData.append("age", age);
      formData.append("phone", phone);
      console.log(formData);
      // <Main newRow = {formData} />
      console.log(this.state.data);
      let data = [...this.state.data];
      if (this.state.buttonValue == "Add Record") {
        console.log("Add record");
        axios
          .post("http://localhost/reactJs-dbconn/insertData.php", formData)
          .then((res) => {
            let userid = res.data;
            let newData = {
              userId: userid,
              name: username,
              age: age,
              phone: phone,
            };
            console.log(res.data);
            data.push(newData);
            console.log(data);
            this.setState({ data: data });
          });
      } else if (this.state.buttonValue == "Update Record") {
        formData.append("userid", this.state.userid);
        axios
          .post("http://localhost/reactJs-dbconn/updateData.php", formData)
          .then((res) => {
            console.log(res);

            let objIndex = this.state.data.findIndex(
              (obj) => obj.userId == this.state.userid
            );

            this.state.data[objIndex].name = username;
            this.state.data[objIndex].age = age;
            this.state.data[objIndex].phone = phone;

            console.log("After update: ", data);
            this.setState({ data: data });
            this.resetForm();
          });
      }
    }
  }
  resetForm() {
    this.setState({
      buttonValue: "Add Record",
      userid: "",
      username: "",
      age: "",
      phone: "",
    });
  }
  componentDidMount() {
    //get request
    // url = 'http://localhost/reactJs-dbconn/getData.php';
    axios
      .get("getData.php")
      .then((res) => {
        this.setState({ data: res.data });
      })
      .catch((error) => {
        this.setState({ data: "" });
        console.error("Internal Server Error");
      });
  }
  handleRemove(id) {
    console.log(id);
    let userid = id;

    let formData = new FormData();
    formData.append("userid", id);
    console.log(this.state.data);
    let data = [...this.state.data];

    axios
      .post("http://localhost/reactJs-dbconn/deleteData.php", formData)
      .then((res) => {
        console.log(userid);
        // for (var i = 0; i < this.state.data.length; i++) {
        // formData.append("userId", res.data);
        // console.log(res.id);
        // data.push(this.formData);
        // }
        // data.push(newData);
        // console.log(res.data);
        for (var i = 0; i < this.state.data.length; i++) {
          if (this.state.data[i].userId == userid) {
            data.splice(i, 1);
            break;
          }
        }
        this.setState({ data: data });
      });
    this.setState({
      data: data,
    });
    //   console.log(i);
  }

  handleUpdate(id) {
    console.log(id);
    let userid = id;
    // let data = [...this.state.data];

    // let userid = res.id
    console.log("Update Id" + userid);
    for (var i = 0; i < this.state.data.length; i++) {
      if (this.state.data[i].userId == userid) {
        console.log(this.state.data[i]);
        this.setState({
          buttonValue: "Update Record",
          userid: this.state.data[i].userId,
          username: this.state.data[i].name,
          age: this.state.data[i].age,
          phone: this.state.data[i].phone,
        });
        break;
      }
    }
  }

  render() {
    return (
      <div id="main">
        <form>
          <p> {this.state.errmsg}</p>
          <p>Enter your name:</p>
          {this.state.username}
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={(e) => this.setState({ username: e.target.value })}
            required
          />

          <p>Enter your age:</p>
          <input
            type="text"
            name="age"
            value={this.state.age}
            onChange={(e) => this.setState({ age: e.target.value })}
            required
          />

          <p>Enter your phone number:</p>
          <input
            type="number"
            name="phone"
            pattern="[0-9]{10}"
            value={this.state.phone}
            onChange={(e) => this.setState({ phone: e.target.value })}
            required
          />

          <br />
          <br />
          <input
            type="submit"
            name="button"
            onClick={(e) => this.handleFormSubmit(e)}
            value={this.state.buttonValue}
          />
        </form>
        <div className="flex-end">
          <Modaldemo />
        </div>

        <table className="table table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((result) => {
              return (
                <tr id={result.userId} key={result.userId}>
                  <td>{result.name}</td>
                  <td>{result.age}</td>
                  <td>{result.phone}</td>
                  <td>
                    <span
                      className="glyphicon glyphicon-pencil"
                      onClick={() => this.handleUpdate(result.userId)}
                    ></span>

                    <span
                      className="glyphicon glyphicon-trash"
                      onClick={(i) => this.handleRemove(result.userId)}
                      // onClick={() => this.handleRemove(result.userId)}
                    ></span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* 
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> */}
      </div>
    );
  }
}

export default Main;
