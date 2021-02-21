import React from 'react'
import './App.css';
import Checkbox from './Checkbox'
import Dropdown from './Dropdown'
import Table from './Table'

const data =[
  {
    vocab: 'Promise',
    info: 'object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.',
    JS: 'ES6 .then(), .cath(), .finally()'
  },
  {
    vocab: 'Node',
    info: '29',
    JS: '120K'
  }
]

const headers=[
  {
    label: 'Vocab',
    id:'vocab',
  },
  {
    label: 'Info',
    id: 'info'//match id to data 
  },
  {
    label:'Select',
    id:'select',
    component: Checkbox,
  },
  {
    label:'Dropdown',
    id:'dropdown',
    component: Dropdown,
  },
  {
    label: 'JS',
    id:'JS',
  }
] 

const App = () => {
  const onRowSelect = () => {}
  return (
    <div className="App">
    <Table data={data} headers={headers} onRowSelect={onRowSelect}/>
    </div>
  );
}

export default App;
