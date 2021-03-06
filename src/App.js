import React, { useEffect, useState } from 'react';
import { request } from './components/api';
import './App.css';
import { UserDetails } from './components/UserDetails/UserDetails';
import { UsersList } from './components/UsersList/UsersList';
require('dotenv').config();

const App = () => {
  const [users, setUsers] = useState([]);
  const [userLogin, setUserLogin] = useState('');
  const [isUserSelected, setUserSelected] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getUsers = async() => {
        const loadedUsers = await request('/users');
        setUsers(loadedUsers);
    };
    getUsers();
  }, []);

  const selectUser = (userLogin) => {
    setUserLogin(userLogin);
    setUserSelected(true);
    setLoading(true);
  };

  const hideUserDetails = () => {
    setUserLogin('');
    setUserSelected(false);
  };

  return (
    <div className="app container">
      <div className="row">
        <div className="col">
          <h1>
            Users list
          </h1>
          {!users.length
            ? (
              <div className="d-flex align-items-center">
                <strong>Loading...</strong>
                <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
              </div>
            )
            : (
              <UsersList
                users={users}
                setUsers={setUsers}
                selectUser={selectUser}
                hideUserDetails={hideUserDetails}
              />
            )}
          </div>
          <div className="col">
            {!isUserSelected
              ? null
              : (
                <UserDetails
                  userLogin={userLogin}
                  isUserSelected={isUserSelected}
                  hideUserDetails={hideUserDetails}
                  setLoading={setLoading}
                  loading={loading}
                />
              )}
          </div>
        </div>
      </div>
    );
  };

export default App;
