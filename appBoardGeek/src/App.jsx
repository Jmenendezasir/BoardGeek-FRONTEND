import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { gql, useQuery } from '@apollo/client';

const GET_BOARDGAME_QUERY = gql`

  query {
        boardgameList{
          _id
          title
          publisher
        }
  }
`

function App() {
  const [count, setCount] = useState(0)
  const {data, error, loading} = useQuery(GET_BOARDGAME_QUERY)

  if (loading) return "Cargando..."
  if (error) return <pre>{error.message}</pre>
  console.log(data)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            Sumar
          </button>
          <button type="button" onClick={() => setCount((count) => count - 1)}>
            Restar
          </button>
          <p>
          {count}
          </p>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
