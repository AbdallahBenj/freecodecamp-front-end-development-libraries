import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="ordered-lists">
        <ul className="list-items">
          <li className="item">
            <a href="#">Fitness Dashboard</a>
          </li>
          <li className="item">
            <a href="#">Services</a>
          </li>
        </ul>
        <ul className="list-items">
          <li className="item">
            <a href="#">Watch Videos</a>
          </li>
          <li className="item">
            <a href="#">Discord</a>
          </li>
        </ul>
        <ul className="list-items">
          <li className="item">
            <a href="#">Privacy Policy</a>
          </li>
          <li className="item">
            <a href="#">Terms & Conditions</a>
          </li>
        </ul>
      </div>
      <p className="copyright">
        © 2024 Fitness Dashboard. All Rights Reserved.
      </p>
      <ul className="list-icons">
        <li className="icon">
          <a href="#">🎮</a>
        </li>
        <li className="icon">
          <a href="#">🐦</a>
        </li>
        <li className="icon">
          <a href="#">💻</a>
        </li>
        <li className="icon">
          <a href="#">🏀</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
