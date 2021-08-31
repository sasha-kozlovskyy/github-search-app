import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { request } from './api';

export const RepoCount = ({ name }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const loadUser = async() => {
        const getUser = await request(`/users/${name}`);

        setUser(getUser);
    }

    loadUser();
  }, [name]);

  return (
    <>
      Repos: {user.public_repos}
    </>
  );
};

RepoCount.propTypes = {
  name: PropTypes.string.isRequired,
};
