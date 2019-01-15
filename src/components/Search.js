import React from 'react'
import { Button, Select, Input } from 'semantic-ui-react'

const options = [
  { key: 'all', text: 'All', value: 'all' },
  { key: 'name', text: 'Name', value: 'name' },
  { key: 'genre', text: 'Genre', value: 'genre' },
]

const SearchComponent = () => (
  <Input type='text' placeholder='Search...' fluid>
    <input />
    <Select compact options={options} defaultValue='all' />
    <Button type='submit'>Search</Button>
  </Input>
)

export default SearchComponent