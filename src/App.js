import React from 'react'
import './App.css';
import Checkbox from './Checkbox'
import Dropdown from './Dropdown'
import Table from './Table'

const data =[
  {
    vocab: 'Javasctript',
    info: '',
    JS: 'ES5',
    pros:'',
    cons:''
  },
  {
    vocab: 'Use strict',
    info: 'prevetns from creating random variables',
    JS: '',
    pros:'',
    cons:''
  },
  {
    vocab: 'IFI',
    info: '',
    JS: '',
    pros:'',
    cons:''
  },
  {
    vocab: 'Promise',
    info: 'object represents the eventual completion (or failure) of an asynchronous operation and its resulting value....asynch async await',
    JS: 'ES6 .then(), .cath(), .finally()',
  },
  {
    vocab: 'Callback',
    info: '',
    JS: 'ES5',
  },
  {
    vocab: 'Hoisting',
    info: '29',
    JS: '120K',
  },
  {
    vocab: 'Node.js',
    info: '29',
    JS: '120K',
    pros:'hello',
    cons:'hello'
  },{
    vocab: 'async',
  },{
    vocab: 'sync',
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
    label: 'Pros',
    id:'pros',
  },
  {
    label: 'Cons',
    id:'cons'
  },
  {
    label: 'JS',
    id:'JS',
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

] 
//dot vs braket(dinamic) notation 
const App = () => {
  const onRowSelect = () => {}
  return (
    <div className="App">
    <Table data={data} headers={headers} onRowSelect={onRowSelect}/>
    </div>
  );
}

export default App;
