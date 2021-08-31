import React, { useEffect, useState } from 'react';
import { request } from '../api';
import { RepoList } from '../RepoList/RepoList';
import "./UserDetails.css";

export const UserDetails = ({
  userLogin,
  isUserSelected,
  hideUserDetails,
}) => {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const loadUser = async() => {
      const loadedUser = await request(`/users/${userLogin}`);
      const loadedRepos = await request(`/users/${userLogin}/repos`);
      setUser(loadedUser);
      setRepos(loadedRepos);

    };

    loadUser();
  }, [userLogin]);

  if (!repos.length) {
    return null;
  }

    return (
      <>
        {!isUserSelected
          ? null
          : (
            <>
              <div className="container details">
                  <div className="row no-gutters">
                    <div className="col-md-4">
                      <img
                        src={user.avatar_url}
                        className="card-img"
                        alt="avatar"
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{user.login}</h5>
                        <p className="card-text">
                          {user.email && `email: ${user.email}`}
                        </p>
                        <p className="card-text">
                          {user.location && `location: ${user.location}`}
                        </p>
                        <p className="card-text">
                          {user.created_at
                          && `Join Date: ${user.created_at.slice(0, 10)}`}
                        </p>
                        <p className="card-text">
                          {user.followers && `${user.followers} Followers`}
                        </p>
                        <p className="card-text">
                          {user.location && `Following ${user.following}`}
                        </p>
                        <div>
                          <p className="card-text">
                            <small className="text-muted">
                              {user.bio && `User's biography: ${user.bio}`}
                            </small>
                          </p>
                          <button
                            type="button"
                            className="btn btn-danger"
                            onClick={hideUserDetails}
                          >
                            Hide Details
                          </button>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
              <div>
                <RepoList
                  repos={repos}
                  userLogin={userLogin}
                  isUserSelected={isUserSelected}
                />
              </div>
            </>
          )
        }
      </>
    );
};
