import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { useToasts } from "react-toast-notifications";
import Main from "../Main/Main";
class Forms extends React.Component {
  state = {
    username: "",
    age: "",
    phone: "",
    errmsg: "",
    rows: [],
  };
  // this.state = {};
  // componentDidMount() {
  //   //get request
  //   // url = 'http://localhost/reactJs-dbconn/getData.php';
  //   axios.get("getData.php").then((res) => {
  //     this.setState({ data: res.data });
  //   });
  // }
  
  appendRow(event) {
    var rel = event.target.getAttribute("rel");
    rel = parseInt(rel) + 1;

    var joined = this.state.rows.concat(
      <tr>
        <td>
          <input type="text" id={`select-type` + rel} />
        </td>
        <td>
          <input type="text" id={`select-position` + rel} />
        </td>
      </tr>
    );
    this.setState({ rows: joined });
  }
  handleFormSubmit(event) {
    event.preventDefault();
    let username = this.state.username;
    console.log(username);
    let age = this.state.age;
    let phone = this.state.phone;
    console.log(username);
    this.setState({ errmsg: "" });
    let agePattern = "/^[0-9]+${2}/";
    if (username == "") {
      //this.setState.errmsg = "username cannot be empty";
      this.setState({ errmsg: "username cannot be empty" });
      //  alert("username cannot be empty");
      // break;
    } else if (age == "") {
      this.setState({ errmsg: "Age cannot be empty" });
    } else if (phone == "") {
      this.setState({ errmsg: "Phone Number cannot be empty" });
    } else {
      let formData = new FormData();
      formData.append("username", username);
      formData.append("age", age);
      formData.append("phone", phone);
      <Main newRow = {formData} />
      axios
        .post("http://localhost/reactJs-dbconn/insertData.php", formData)
        .then((res) => {
          
          this.setState({ data: res.data });
       
        })
        // axios({
        //   method: "post",
        //   url: "http://localhost/reactJs-dbconn/insertData.php",
        //   data: formData,
        //   config: { headers: { "Content-Type": "multipart/form-data" } },
        // })
        .then((res) => {
          console.log(res);
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });
      // console.log(this.state);
    }
  }

  render() {
    console.log(this.props)
    return (
      <form >
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
          onClick={(e) => this.handleFormSubmit(e)}
          value="Create Record"
        />

        <input
          rel="1"
          type="submit"
          onClick={this.appendRow.bind(this)}
          onClick={(e) => this.appendRow(e)}
          value="Create Record"
        />
      </form>
    );
  }
  
}

export default Forms;
