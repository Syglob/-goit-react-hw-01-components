import Profile from './user/Profile.js';
import DataStats from './data-stats/data-stats.js';
import user from './user/user.json';
import data from './data-stats/data.json';

export default function App() {
  return (
    <div className="app">
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <DataStats title="Upload stats" stats={data} />
      <DataStats stats={data} />
    </div>
  );
}
