import React, { Component } from 'react';
import axios from 'axios';


class UsersList extends Component {

  // async componentDidMount() {
  //   try {
  //     const endpoint = 'http://localhost5000/api/users';
  //     const response = await fetch(endpoint);
  //     const json = await response.json();
  //     console.log(json);
  //   }
  //   catch(err) {
  //     console.error('ERR', err)
  //   }
  // }

  componentDidMount(){
      this.getData();
  }

  async getData() {
    try {
      const endpoint = 'http://localhost:5000/api/users';
      const token = localStorage.getItem('jwtToken');

      const options = {
        headers: {
          Authorization: token
        }
      }
      const res = await axios.get(endpoint, options);
      const { data } = await res;
      console.log(data)
    }
    catch (err) {
      console.error('ERR', err)
    }
  }

  render() {
    return (
      <div >
          Users
      </div>
    );
  }
}

export default UsersList;
