import React from 'react';
import Profile from './profile/Profile';
import Statistics from './statistics/Statistics';
import user from './data/profile/user.json';
import statisticalData from './data/statistics/statistical-data.json';

const App = () => {
  return (
    <>
      <Profile
        name={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
    </>
  );
};

export default App;
