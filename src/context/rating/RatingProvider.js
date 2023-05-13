import { useState, useEffect } from 'react';
import { RatingContext } from './context';

import { Loader } from '../../components/Loader';

import { getAllUsers } from '../../api/user';

export const RatingProvider = ({ children }) => {
  const [users, setUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      const response = await getAllUsers();

      if (response.size) {
        setUsers(response.content);
        setIsLoading(false);
      } else {
        setIsLoading(false);
        // TODO: Throw error here or in api. Should discuss
      }
    }
    fetchUsers();
  }, []);

  if (isLoading) {
    return <div style={{ position: 'relative', height: '100%' }}><Loader /></div>;
  }

  return (
    <RatingContext.Provider value={{ users }}>
      {children}
    </RatingContext.Provider>
  );
};
