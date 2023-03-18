import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BookList from './Components/BooksList'
import { ApolloClient } from '@apollo/client'
import { InMemoryCache } from '@apollo/client/cache'
import { ApolloProvider } from '@apollo/client/react'
import AddBook from './Components/AddBook'
import BookDetails from './Components/BookDetails'

function App() {
  
  const appoloClient  = new ApolloClient({
    uri:"http://localhost:4000/graphql",
    cache: new InMemoryCache()
  })

  return (
    <div className="App">
      <h1>GraphQL Course' tutorial</h1>
      <ApolloProvider client={appoloClient} >
        <BookList />
        <AddBook />
        <BookDetails />
      </ApolloProvider>
    </div>
  )
}

export default App
