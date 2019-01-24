import React, { Component } from 'react';
import axios from 'axios';
import { ListGroup, ListGroupItem  } from 'react-bootstrap';
import styled from 'styled-components';

const UsersWrapper = styled.div`
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;


class UsersList extends Component {
    state = {
      users: []
    }

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
      this.setState({
        users: res.data.users
      })
    }
    catch (err) {
      console.error('ERR', err)
    }
  }

  render() {
    return (
      <UsersWrapper >
          <ListGroup>
            {this.state.users.map (user => <ListGroupItem key={user.id} header={user.username}><strong>Department:</strong> {user.department}</ListGroupItem>)}
          </ListGroup>;
      </UsersWrapper>
    );
  }
}

export default UsersList;
