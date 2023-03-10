import { useState, useEffect } from 'react';
import { AuthContext } from './context';

import { getCurrentUser } from '../../api/user';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      const userResponse = await getCurrentUser();

      if (userResponse.id) {
        setUser(userResponse);
        setIsLoading(false);
      } else {
        setIsLoading(false);
        // TODO: Throw error here or in api. Should discuss
      }
    }
    fetchUser();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
