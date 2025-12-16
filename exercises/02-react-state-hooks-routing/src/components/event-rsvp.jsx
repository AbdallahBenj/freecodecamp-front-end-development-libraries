import './event-rsvp.css';
import { useState } from 'react';

const EventRSVP = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    numberOfAttendees: '',
    dietaryPreferences: '',
    additionalGuests: false,
  });

  const [results, setResults] = useState();

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      numberOfAttendees: '',
      dietaryPreferences: '',
      additionalGuests: false,
    });
  };

  const clearResults = () => results && setResults({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    clearResults();
  };

  const isChecked = (e) => {
    setFormData((prev) => ({ ...prev, additionalGuests: e.target.checked }));
    clearResults();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid =
      formData.name.trim() &&
      formData.email.trim() &&
      formData.numberOfAttendees.trim();

    if (!isValid) {
      return;
    }
    setResults({ ...formData });
    resetForm();
  };

  return (
    <div className="form-container">
      <h2>Event RSVP Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
        </label>
        <label>
          Number of Attendees:
          <input
            type="number"
            name="numberOfAttendees"
            value={formData.numberOfAttendees}
            onChange={handleChange}
            placeholder="Number of Attendees"
            required
          />
        </label>
        <label>
          Dietary Preferences:
          <input
            type="text"
            name="dietaryPreferences"
            value={formData.dietaryPreferences}
            onChange={handleChange}
            placeholder="Dietary Preferences"
          />
        </label>
        <label>
          Bringing additional guests?
          <input
            type="checkbox"
            name="additionalGuests"
            checked={formData.additionalGuests}
            onChange={isChecked}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {results && results.name && results.email && (
        <div className="results">
          <h2 className="results-title">Form Submitted Successfully</h2>
          <p>
            Name: <span>{results.name}</span>
          </p>
          <p>
            Email: <span>{results.email}</span>
          </p>
          <p>
            Number of Attendees:
            <span> {results.numberOfAttendees}</span>
          </p>
          {results.dietaryPreferences && (
            <p>
              Dietary Preferences:
              <span> {results.dietaryPreferences}</span>
            </p>
          )}
          {results.additionalGuests && (
            <p>
              Bringing additional guests?
              <span>{results.additionalGuests ? ' yes' : ' No'}</span>
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default EventRSVP;
