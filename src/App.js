import React from 'react';
import UserProfile from './components/user-profile/user-profile';
import UserList from './components/user-list/user-list';

import './App.scss';

function App() {
  return (
    <div className='app'>
      <UserList
        dataSource='https://jsonplaceholder.typicode.com/users'
      />
      <UserProfile
        name='Denisse'
        email='denisse@email.com'
        dataSource='https://jsonplaceholder.typicode.com/posts'
      />
    </div>
  );
}

export default App;
