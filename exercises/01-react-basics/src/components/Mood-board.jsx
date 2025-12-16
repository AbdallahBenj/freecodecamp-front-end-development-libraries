import './Mood-board.css';

const MoodBoardItem = ({ color, image, description }) => {
  return (
    <div className="mood-board-item" style={{ backgroundColor: `${color}` }}>
      <img className="mood-board-image" src={image} alt={description} />
      <h3 className="mood-board-text">{description}</h3>
    </div>
  );
};

const MoodBoard = () => {
  const moods = [
    {
      id: 1,
      color: 'oklch(76.9% 0.188 70.08)',
      image: 'https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg',
      description: 'Caribbean',
    },
    {
      id: 2,
      color: 'oklch(69.6% 0.17 162.48)',
      image: 'https://cdn.freecodecamp.org/curriculum/labs/shore.jpg',
      description: 'Gawadar Beach',
    },
    {
      id: 3,
      color: 'oklch(71.5% 0.143 215.221)',
      image: 'https://cdn.freecodecamp.org/curriculum/labs/grass.jpg',
      description: 'Cape Town',
    },
    {
      id: 4,
      color: 'oklch(58.5% 0.233 277.117)',
      image: 'https://cdn.freecodecamp.org/curriculum/labs/ship.jpg',
      description: 'Suez Canal',
    },
    {
      id: 5,
      color: 'oklch(64.5% 0.246 16.439)',
      image: 'https://cdn.freecodecamp.org/curriculum/labs/santorini.jpg',
      description: 'Santorini',
    },
    {
      id: 6,
      color: 'oklch(55.2% 0.016 285.938)',
      image: 'https://cdn.freecodecamp.org/curriculum/labs/pigeon.jpg',
      description: 'Istanbul',
    },
  ];

  return (
    <div>
      <h1 className="mood-board-heading">Destination Mood Board</h1>
      <div className="mood-board">
        {moods.map((mood) => (
          <MoodBoardItem
            key={mood.id}
            color={mood.color}
            image={mood.image}
            description={mood.description}
          />
        ))}
      </div>
    </div>
  );
};

export default MoodBoard;
