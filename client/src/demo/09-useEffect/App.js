import { useState, useEffect } from 'react'
import '../../App.css';
import CheckboxListItem from './CheckboxListItem';

const DEFAULT_GENDER = 'female'
function App() {
  const [users, setUsers] = useState([]);
  const [checkedValue, setCheckedValue] = useState({});

  useEffect(() => {
    (async () => {
      // https://jsonplaceholder.typicode.com/users
      const response = await fetch('https://randomuser.me/api/?results=10&nat=us')
      const { results } = await response.json()
      let temporaryObject = {}
      results.filter(({ gender }) => gender === DEFAULT_GENDER).forEach(({ login: { uuid } }) => ((temporaryObject = { ...temporaryObject, [uuid]: true })))
      setCheckedValue({ ...temporaryObject })
      setUsers(results)
    })()
  }, [])

  const handleChange = (event) => {
    const { target: { name, checked } } = event;
    setCheckedValue({ ...checkedValue, [name]: checked })

  }
  const findUserName = (userUUID) => users.filter(({ login: { uuid } }) => uuid === userUUID).map(({ name: { first, last } }) => first + " " + last)
  return (
    <div className="App" >
      <div style={{ margin: '20px 15%', textAlign: 'start', border: '1px solid #cdcdcd', }} >

        <ul style={{ listStyle: "none" }}>
          {users.length ? users.map(({ name: { first, last }, login: { uuid }, email, gender }) =>
          (<CheckboxListItem
            key={uuid}
            defaultChecked={gender === DEFAULT_GENDER}
            checkedValue={checkedValue[uuid]}
            handleChange={handleChange}
            uuid={uuid}
            email={email}
            name={first + " " + last} />)
          ) : (<span>Loading...</span>)}
        </ul>
      </div>
      <div style={{ margin: '20px 15%', textAlign: 'start', border: '1px solid #cdcdcd', }} >
        <ul style={{ listStyle: "none" }}>
          {false ? Object.entries(checkedValue).filter(([_, value]) => (value)).map(([key]) => <li key={key}>{findUserName(key)}</li>) : <li>Add some besties</li>}
        </ul>
      </div>
    </div>
  )
}
//{users !== [] ? <pre>{JSON.stringify(users, null, 4)}</pre> : <h2>Nah</h2>}
export default App;


