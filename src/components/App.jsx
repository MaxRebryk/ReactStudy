import Product from './Product';
import { Mailbox } from './Mailbox';
import { BookList } from './Booklist';
import { Alert } from './Alert';
import './App.css';

const favouriteBooks = [
  { id: 'id-1', name: 'JS for beginners' },
  { id: 'id-2', name: 'React basics' },
  { id: 'id-3', name: 'React Router overview' },
];

export default function App() {
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
    </div>
  );
}
