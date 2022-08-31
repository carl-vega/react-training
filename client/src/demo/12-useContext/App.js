import { useEffect } from 'react';
import { ClientProvider } from './utils/ClientContext';
import ClientList from './components/ClientList';
// import NewList from './components/NewList'
import '../../App.css';

/* 

*/
export default function App() {
  const title = 'useReducer and useContext';
  useEffect(() => {
    document.title = title;
  }, []);

  return (
    <div className="App">
      <h1>Demo: useReducer and useContext<br />
        <span style={{ fontSize: '1.5rem', color: 'lightseagreen' }}>{title}</span>
      </h1>
      {/* Provider wraps all the logic that handles/updates our state */}
      <ClientProvider>
        <ClientList />
      </ClientProvider>
    </div>
  );
}
// <NewList /> 


