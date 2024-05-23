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

  const handleChange = evt => {
    setHasAccepted(evt.target.checked);
  };

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  const handleLogin = userData => {
    console.log(userData);
  };

  useEffect(() => {
    localStorage.setItem('saved-clicks', clicks);
  }, [clicks]);

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
    </div>
  );
}
