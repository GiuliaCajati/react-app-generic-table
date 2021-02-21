import reactDom from "react-dom";
import React from 'react'

const Table = (props) =>{
    const { data, headers, onRowSelect } = props
    return(
        <div>
            <table>
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
        </div>
    )

}
export default Table