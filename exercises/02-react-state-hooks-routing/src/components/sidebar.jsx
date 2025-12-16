// Side Bar
import './sidebar.css';

import { NavLink } from 'react-router';

const exercises = [
  {
    name: 'Home Page',
    url: '/',
  },
  {
    name: 'Toggle App',
    url: '/toggle-app',
  },
  {
    name: 'Color Picker',
    url: '/color-picker',
  },
  {
    name: 'Fruits Search',
    url: '/fruits-search',
  },
  {
    name: 'OTP Generator',
    url: '/otp-generator',
  },
  {
    name: 'Superhero Form',
    url: '/superhero-form',
  },
  {
    name: 'Event RSVP',
    url: '/event-rsvp',
  },
  {
    name: 'Shopping List',
    url: '/shopping-list',
  },
];

function Sidebar() {
  return (
    <>
      <aside className="sidebar">
        <h2>Exercise</h2>
        <ul>
          {exercises.map((exercise) => (
            <li key={exercise.url}>
              <NavLink to={exercise.url}>{exercise.name}</NavLink>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}

export default Sidebar;
