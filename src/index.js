import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const style = {
  table: {
    borderCollapse: 'collapse',
  },
  tableCell: {
    border: '1px solid gray',
    margin: 0,
    padding: '5px 10px',
    width: 'max-content',
    minWidth: '150px',
  },
  form: {
    container: {
      padding: '20px',
      border: '1px solid #F0F8FF',
      borderRadius: '15px',
      width: 'max-content',
      marginBottom: '40px',
    },
    inputs: {
      marginBottom: '5px',
    },
    submitBtn: {
      marginTop: '10px',
      padding: '10px 15px',
      border: 'none',
      backgroundColor: 'lightseagreen',
      fontSize: '14px',
      borderRadius: '5px',
    },
  },
};

function PhoneBookForm({ handleAddNewPhone }) {
  const [firstName, setFirstName] = useState('Coder');
  const [lastName, setLastName] = useState('Byte');
  const [phone, setPhone] = useState('8885559999');

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleAddNewPhone(firstName, lastName, phone);
        setFirstName('');
        setLastName('');
        setPhone('');
      }}
      style={style.form.container}
    >
      <label>First name:</label>
      <br />
      <input
        style={style.form.inputs}
        className='userFirstname'
        name='userFirstname'
        type='text'
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}

      />
      <br/>
      <label>Last name:</label>
      <br />
      <input
        style={style.form.inputs}
        className='userLastname'
        name='userLastname'
        type='text'
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        className='userPhone'
        name='userPhone'
        type='text'
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <br/>
      <input
        style={style.form.submitBtn}
        className='submitButton'
        type='submit'
        value='Add User'
      />
    </form>
  )
}

function InformationTable({ phoneBook }) {
  return (
    <table style={style.table} className='informationTable'>
      <thead>
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
      </thead>
      <tbody>
        {phoneBook.map(({ firstName, lastName, phone }) => (
          <tr key={phone}>
            <td style={style.tableCell}>{firstName}</td>
            <td style={style.tableCell}>{lastName}</td>
            <td style={style.tableCell}>{phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function Application(props) {
  const [phoneBook, setPhoneBook] = useState([]);

  const handleAddNewPhone = (firstName, lastName, phone) => {
    setPhoneBook((prevPhoneBook) => [...prevPhoneBook, {
      firstName,
      lastName,
      phone,
    }].sort((a, b) => a.firstName.localeCompare(b.firstName)));
  };

  return (
    <section>
      <PhoneBookForm handleAddNewPhone={handleAddNewPhone} />
      <InformationTable phoneBook={phoneBook} />
    </section>
  );
}

ReactDOM.render(
  <Application />,
  document.getElementById('root')
);
