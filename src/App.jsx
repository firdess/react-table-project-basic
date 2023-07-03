
import { useState } from 'react'
import './App.css'
import Table from './components/Table'

function App() {
  const [users, setUsers] = useState([{
    id: 1,
    name: 'Ayşe',
    surname: 'Güler',
    email: 'a.guler@gmail.com',
    age: 30
  },
  {
    id: 2,
    name: 'Kenan',
    surname: 'Şahin',
    email: 'ksahın@gmail.com',
    age: 28
  },
  {
    id: 3,
    name: 'Elif',
    surname: 'Onan',
    email: 'e.onan@gmail.com',
    age: 35
  },
  {
    id: 4,
    name: 'Ahmet',
    surname: 'Gezer',
    email: 'ahmetg@gmail.com',
    age: 27
  },
  ])
  const handleDelete = (userId) => {
    setUsers(prevUsers => prevUsers.filter(user => user.id !== userId))
  }

  return (
    <div className='container'>
      <Table
        head={[
          { name: 'Ad-Soyad', sortable: true },
          { name: 'E-posta' },
          { name: 'Yaş', sortable: true },
          { name: 'İşlemler', width: 100 }]}
        body={users.map((user) => ([
          user.name,
          user.email,
          user.age,
          [
            <button className='btn delete' onClick={() => handleDelete(user.id)}>Sil</button>
          ]

        ]))}
      />
    </div>
  )
}

export default App
