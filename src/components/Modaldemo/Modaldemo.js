import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import axios from "axios";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Modaldemo = () => {
  var subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const constructor = () => {
   
    handleSubmit = handleSubmit.bind(this);
  };
  constructor();
  function openModal() {
    setIsOpen(true);
  }


  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "blue";
  }

  function closeModal() {
    setIsOpen(false);
  }



  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log(data);
    axios.post('http://localhost/reactJs-dbconn/getData.php' ,data)
        .then(res=>
          console.log("res.data"));
  };
  return (
    <div>
      <button
        variant="primary"
        className="btn btn-info btn-sm glyphicon glyphicon-plus"
        onClick={openModal}
      >
        Add
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button
          type="button"
          class="close"
          data-dismiss="modal"
          aria-hidden="true"
          onClick={closeModal}
        >
          ×
        </button>
        {/* <button className="topnav-right" >close</button> */}
        <center>
          <h2>Insert Data</h2>{" "}
        </center>
        <form class="form-horizontal" onSubmit={handleSubmit}>
          <div class="form-group">
            <label class="control-label col-sm-2" for="Name">
              Name:
            </label>

            <div class="col-sm-12">
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="Enter email"
                name="name"
              />
            </div>
          </div>
          {/* pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" */}
          <div class="form-group">
            <label class="control-label col-sm-2" for="pwd">
              Age:
            </label>
            <div class="col-sm-12">
              <input
                type="number"
                class="form-control"
                id="age"
                min="1"
                max="99"
                placeholder="Enter Age"
                name="age"
              />
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-sm-2" for="pwd">
              Phone Number:
            </label>
            <div class="col-sm-12">
              <input
                type="number"
                class="form-control"
                id="phone"
                pattern="[1-9]{1}[0-9]{9}"
                placeholder="Enter phone"
                name="phone"
              />
            </div>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
              <div class="checkbox">
                <label>
                  <input type="checkbox" name="remember" /> Remember me
                </label>
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
              <button type="submit" class="btn btn-default">
                Submit
              </button>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Modaldemo;
