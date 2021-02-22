import reactDom from "react-dom";
import React, {useState, useEffect} from 'react'
import {getRandoColor} from './randomColorGenerator'

const Table = (props) =>{
    const { data, headers, onRowSelect } = props
    const [color, setColor] = useState('')

    useEffect(() => {
        sectColor(randomcolor())
    }, [0])
    return(
        <div>
            <table style={{backgroundColor: this.state.childrenColor}}>
                <thead>
                    <tr>{
                        headers.map((h)=>{
                            // h is {label: 'Name', id: 'name'}
                            return(<td key={h.label}>{h.label}
                            
                            </td>)
                        })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(((d,i)=> {
                            // d = { name: 'Allen', age: 35 }
                            return<tr key={`row-${i}`}> 
                                {
                                headers.map((h,j) =>{
                                // h is {label: 'Name', id: 'name', component*: Checkbox}
                                const CellComponenet = h.component 
                                const label = d[h.id]//data[header.id]
                                const key = `cell-${i}-${j}`//ids 
                                if(CellComponenet){
                                    return<CellComponenet key={key} 
                                    onChange={onRowSelect}
                                    label={label}/>
                                }
                                return<td key={key}>{label}</td>
                                })
                                }
                            </tr>
                        }))
                    }
                </tbody>
            </table>
            <button onClick={()=>{}}>Hello Welcome to the JS Study Guide</button>
        </div>
    )

}
export default Table