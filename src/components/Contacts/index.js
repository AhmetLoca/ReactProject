import { useState, useEffect } from 'react'
import List from './List'
import Form from './Form'

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: 'Mehmet',
      phone_number: '1234'
    },
    {
      fullname: 'Ahmet',
      phone_number: '9876'
    },
    {
      fullname: 'Ayşe',
      phone_number: '2345'
    }

  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts])
  return (
    <div>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  )
}
export default Contacts;