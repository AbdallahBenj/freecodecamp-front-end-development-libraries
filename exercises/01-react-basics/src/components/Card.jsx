import './Card.css';

const CardItem = ({ name, title, bio }) => {
  return (
    <div className="card">
      <h2 className="">{name}</h2>
      <p className="card-title">{title}</p>
      <p>{bio}</p>
    </div>
  );
};

const Card = () => {
  const profiles = [
    {
      id: 1,
      name: 'Mark',
      title: 'Frontend developer',
      bio: 'I like to work with different frontend technologies and play video games.',
    },
    {
      id: 2,
      name: 'Tiffany',
      title: 'Engineering Manager',
      bio: 'I have worked in tech for 15 years and love to help people grow in this industry.',
    },
    {
      id: 3,
      name: 'Doug',
      title: 'Backend developer',
      bio: 'I have been a software developer for over 20 years and I love working with Go and Rust.',
    },
  ];

  return (
    <div className="flex-container">
      {profiles.map((profile) => (
        <CardItem
          key={profile.id}
          name={profile.name}
          title={profile.title}
          bio={profile.bio}
        />
      ))}
    </div>
  );
};

export default Card;
