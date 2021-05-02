import React from 'react'
import  { Component } from 'react';
import Datacomponet from '../datacomponet/datacomponet';


// const Stateful = () => {
//   return (
//   <h1>hello from stateful</h1>
//   );
// };


class Stateful extends Component{
constructor(){
super();
this.state = {

  data:[

    {

      "id":1,
      "name":"dev",
      "age":25
    },
    {
      
      "id":2,
      "name":"bittu",
      "age":22
    },
    {
    "id":3,
    "name":"devasri",
    "age":24
    }
  ]
}


}
  render(){
   
    var myStyle={

      color:'red' 
    }
    console.log(this.state.data);
return(
  <div>

  <h1 style={myStyle}>hello from stateful</h1>
 


 
  {this.state.data.map((s,i) => (<li data ={i} key={i}>{s.age}</li>))}
  {this.state.data.map((s,i) => (<li data ={i} key={i}>{s.age}</li>))}

<Datacomponet data={this.state.data}/>
   
  </div>

)

  }
}

export default Stateful;
