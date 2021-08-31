import React, { useState } from 'react';
import PropTypes from 'prop-types';
import "./RepoList.css";

export const RepoList = ({ repos, userLogin }) => {
  const [queryRepo, setInputRepo] = useState('');
  const filteredRepos = repos.filter(repo => repo.name.includes(queryRepo));
  const handleQueryRepo = (event) => {
    setInputRepo(event.target.value);
  };

  return (
    <>
      <div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            name="queryRepo"
            placeholder="Search for Repos"
            value={queryRepo}
            onChange={handleQueryRepo}
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
        </div>

        <div className="container">
          <h3>Repo List</h3>
          {filteredRepos.map(repo => (
            <div
              className='card mb-3 repo-block'
              key={repo.id}
            >
              <button
                type="button"
                className="btn btn-secondary"
                onClick={
                  // eslint-disable-next-line max-len
                  () => window.open(`https://github.com/${userLogin}/${repo.name}`, '_blank')
                }
              >
                <div className="row no-gutters field">
                  <div className="col-md-4 p-3">
                    <h5 className="card-title">
                      {`${repo.name}`}
                    </h5>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <p className="card-text">
                        {`Forks: ${repo.forks_count}`}
                      </p>
                      <p className="card-text">
                        {`Stars: ${repo.stargazers_count}`}
                      </p>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          ))
          }
        </div>
      </div>
    </>
  );
};

RepoList.propTypes = {
  repos: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
  userLogin: PropTypes.string.isRequired,
};
