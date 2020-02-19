import React from "react";
import moment from "moment"; 
import Loader from "react-loader-spinner";
import { axiosWithAuth } from "../axiosWithAuth";
import FriendsForm from "./FriendsForm";

class FriendsList extends React.Component {
  state = {
    friendsList: []
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axiosWithAuth()
    .get("/friends")
    .then(res => {
      this.setState(
        this.state.friendsList = res.data
      )
    })
    .catch(err => {
      console.log(err);
    })
  }

  render () {
    return (
      <div className="friends-list"> 
        <h1>Friends</h1>
        {this.state.friendsList.map(e => {
          return(
            <> 
              <p>{e.name}</p>
              <p>{e.age}</p>
              <br />
              <p>{e.email}</p>
            </>
          )
        })
      }
      <FriendsForm getData={this.getData} />
      </div>
    )
  }
}

export default FriendsList;