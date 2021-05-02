import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      age: null,
      errormsg: "",
    };
  }
  handleForms = (e) => {
    console.log(e.target.username);
    let name = e.target.name;
    let val = e.target.value;
    let err = "";
    console.log(name);

    console.log(val);

    if (name == "age") {
      if (val != "" && !Number(val)) {
        err = <strong>Age must be a number</strong>;
      }
    }
    this.setState({ errormsg: err });
    this.setState({ [name]: val });
  };


  
  saveData = (e) => {
    e.preventDefault();
    // alert("username" + this.state.username);
    // alert("Age" + this.state.age);
    let data =
      {
        username: this.state.username,

        Age: this.state.age,
      };

      axios.post(`insertData.php`,data).then(result => {  
        console.log(result.data)
      
        });  
      // axios.post('http://localhost/reactJs-dbconn/insertData.php' ,data)
      // .then(res=>
      //   console.log("res.data"));
      console.log(data)
   
  };
  render() {
    return (
      <form action ="insertData.php" method="POST" onSubmit={this.saveData}>
        <h1>hello {this.state.username}</h1>
        <h1>hello {this.state.age}</h1>
        <p>Enter your Name:</p>
        <input type="text" name="username" onChange={this.handleForms} />
        <p>Enter your age:</p>
        <input type="text" name="age" onChange={this.handleForms} />
        {this.state.errormsg}
        <br />
        <input type="submit" />
      </form>
    );
  }
}

export default Forms;
