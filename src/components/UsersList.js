import React, { Component } from 'react';
import axios from 'axios';


class UsersList extends Component {

  async componentDidMount() {
    try {
      const endpoint = 'http://localhost5000/api/users';
      const response = await fetch(endpoint);
      const json = await response.json();
      console.log(json);
    }
    catch(err) {
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
