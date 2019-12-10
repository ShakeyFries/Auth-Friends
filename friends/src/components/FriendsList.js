import React from "react";
import moment from "moment"; 
import Loader from "react-loader-spinner";
import { axiosWithAuth } from "../axiosWithAuth";

class FriendsList extends React.Component {
  state = {
    friendsList: []
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axiosWithAuth()
    .get("/data")
    .then(res => {
      this.setState({
        friendsList: res.data.data.filter(
          friends => 
            friends.type === 
        )
      })
    })
  }
}