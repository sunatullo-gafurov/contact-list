import React from 'react';
import Contact from './Components/Contact';
import './App.css';

function App() {
  const contacts = [
    {
      id: 1,
      name: 'Eddie',
      online: true,
      imgUrl: 'https://foreverislamic.files.wordpress.com/2012/09/images1.jpg?w=474',
    },
    {
      id: 2,
      name: 'Tim',
      online: false,
      imgUrl: 'https://www.peacetv.tv/content_files/images/tim_humble_b.jpg',
    },
    {
      id: 3,
      name: 'Steve',
      online: true,
      imgUrl: 'https://i1.wp.com/www.stevedabliz.com/wp-content/uploads/2019/07/31e17915-35ed-420e-bbec-be75ad7bfc59.jpg?fit=1024%2C1024&ssl=1',
    }
  ];
  return (
    <div className="App">
      <h2 className="title">Contacts</h2>
      {contacts.map(contact => <Contact {...contact} />)}
    </div>
  );
}

export default App;
