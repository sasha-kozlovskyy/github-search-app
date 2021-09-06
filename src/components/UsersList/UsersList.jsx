import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { request } from '../api';
import { RepoCount } from '../RepoCount';
import "./UsersList.css";

export const UsersList = ({
  selectUser,
  hideUserDetails,
}) => {
  const [queryUser, setInputUser] = useState('');
  const [users, setUser] = useState([]);
  const [userError, setUserError] = useState(null);
  const [error, setError] = useState(true);
  const handleQueryUser = (event) => {
    setInputUser(event.target.value);
    hideUserDetails();
  };

  useEffect(() => {
    if (queryUser.length > 0) {
      const loadUser = async() => {
        try {
          const loadedUser = await request(`/search/users?q=${queryUser}`);
          setUser(loadedUser);
          setError(true);
        }
        catch (errorUser) {
          setUserError(`Loading error: User is not found`);
          setError(false);
        }

      };
  
      loadUser();
    }

  }, [queryUser]);

  return (
    <>
      <input
        type="text"
        className="form-control input"
        name="queryUser"
        placeholder="Search for Users"
        value={queryUser}
        onChange={handleQueryUser}
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
      />
        {(!error)
      ? <div className="alert" role="alert">
        <h1>{userError}</h1>
      </div>

      : <div className="row">
        <div className="col-sm-12">
              {users.map(user => (
                <div className="card mb-3" key={user.login}>
                  <div className="row g-0">
                    <div className="col-md-3">
                      <img src={user.avatar_url} class="img-fluid rounded-start" alt="avatar"></img>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{user.login}</h5>
                          <p className="card-text">
                            <RepoCount name={user.login} />
                          </p>
                          <button className="btn btn-primary" onClick={() => selectUser(user.login)}>Details</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
}
    </>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
  selectUser: PropTypes.func.isRequired,
  hideUserDetails: PropTypes.func.isRequired,
  isUserSelected: PropTypes.bool.isRequired,
};
