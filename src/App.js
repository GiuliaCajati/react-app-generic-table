import React from 'react'
import './App.css';
import Checkbox from './Table'

const data =[
  {
    name: 'Bob',
    age: '29',
    salary: '120K'
  }

]

const headers=[
  {
    label: 'Name',
    id:'name'
  },
  {
    label: 'Age',
    id: 'age'
  },
  {
    label: 'Salary',
    id:'salary'
  }
]

function App() {
  return (
    <div className="App">
      <Table data={data} headers={headers}/>
    </div>
  );
}

export default App;
