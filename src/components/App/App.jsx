import { useState, useEffect } from 'react';
import Product from '../Product/Product';
import { Mailbox } from '../Mailbox/Mailbox';
import { BookList } from '../Booklist/Booklist';
import { Alert } from '../Alert/Alert';
import { UserMenu } from '../HiUser/HiUser';
import Button from '../Button/Button.jsx';
import Form from '../Form/Form.jsx';
import SearchBar from '../SearchBar/SearchBar.jsx';
import LangSwitcher from '../LangSwitcher/LangSwitcher.jsx';
import Radio from '../Radio/Radio.jsx';
import Checkbox from '../Checkbox/Checkbox.jsx';
import FormikForm from '../FormikForm/FormikForm.jsx';
import './App.css';
import axios from 'axios';
import { Audio } from 'react-loader-spinner';
import { fetchArticlesWithTopic } from '../articles-api.js';
import { useMemo } from 'react';
import { useRef } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import About from '../../pages/About.jsx';
import ProductPage from '../../pages/ProductPage.jsx';
import Home from '../../pages/Home.jsx';
import NotFound from '../../pages/NotFound.jsx';
import ProductDetails from '../../pages/ProductDetails.jsx';

// import { fetchArticlesWithTopic } from '../articles-api.js';

const favouriteBooks = [
  { id: 'id-1', name: 'JS for beginners' },
  { id: 'id-2', name: 'React basics' },
  { id: 'id-3', name: 'React Router overview' },
];

export default function App() {
  const [clicks, setClicks] = useState(() => {
    const savedClicks = localStorage.getItem('saved-clicks');
    return savedClicks !== null ? JSON.parse(savedClicks) : 0;
  });

  const [lang, setLang] = useState('uk');

  const [coffeeSize, setCoffeeSize] = useState('sm');

  const [hasAccepted, setHasAccepted] = useState(false);

  const [articles, setArticles] = useState([]);

  const [error, setError] = useState(false);

  const [planets, setPlanets] = useState(['Earth', 'Mars', 'Jupiter', 'Venus']);
  const [query, setQuery] = useState('');

  const playerRef = useRef();

  const source = 'http://media.w3.org/2010/05/sintel/trailer.mp4';

  const play = () => playerRef.current.play();

  const pause = () => playerRef.current.pause();

  const handleChange = evt => {
    setHasAccepted(evt.target.checked);
  };

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  const handleLogin = userData => {
    console.log(userData);
  };

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem('saved-clicks', clicks);
  }, [clicks]);

  useEffect(() => {
    async function fetchArticles() {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchArticlesWithTopic('react');
        setArticles(data);
      } catch (error) {
        // Встановлюємо стан error в true
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchArticles();
  }, []);

  const filteredPlanets = useMemo(
    () => planets.filter(planet => planet.includes(query)),
    [planets, query]
  );

  return (
    <div>
      <h1>Best Order</h1>

      <Product
        name="Tacos With Lime"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        price={10.99}
      />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        price={14.29}
      />
      <Mailbox username="Max" messages={['hello', 'how are you', 'hi']} />

      <BookList books={favouriteBooks} />
      <>
        <Alert variant="info">
          Would you like to browse our recommended products?
        </Alert>
        <Alert variant="error" outlined={true}>
          There was an error during your last transaction
        </Alert>
        <Alert variant="success" elevated={true}>
          Payment received, thank you for your purchase
        </Alert>
        <Alert variant="warning" elevated={true}>
          Please update your profile contact information
        </Alert>
      </>
      <UserMenu name="Max" />

      <Button value={clicks} onUpdate={handleClick} />
      <Button value={clicks} onUpdate={handleClick} />
      <Form onLogin={handleLogin} />
      <SearchBar />
      <p>Selected language: {lang}</p>
      <LangSwitcher value={lang} onSelect={setLang} />
      <Radio value={coffeeSize} onSelect={setCoffeeSize} />
      <Checkbox checked={hasAccepted} onChange={handleChange} />
      <FormikForm />

      <div>
        <h1>Latest articles</h1>
        {loading && (
          <Audio
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="three-dots-loading"
            wrapperStyle
            wrapperClass
          />
        )}
        {error && (
          <p>Whoops, something went wrong! Please try reloading this page!</p>
        )}

        {articles.length > 0 && (
          <ul>
            {articles.map(({ objectID, url, title }) => (
              <li key={objectID}>
                <a href={url} target="_blank" rel="noreferrer noopener">
                  {title}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>

      <ul>
        {filteredPlanets.map(planet => (
          <li key={planet}>{planet}</li>
        ))}
      </ul>
      <div>
        <video ref={playerRef} src={source}>
          Sorry, your browser does not support embedded videos.
        </video>
        <div>
          <button onClick={play}>Play</button>
          <button onClick={pause}>Pause</button>
        </div>
      </div>
      <div>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/products">Products</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}
