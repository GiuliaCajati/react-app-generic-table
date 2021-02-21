import React from 'react'

const Checkbox = (props) => {
    const { onSelect } = props
    return(<td><input type="checkbox" onChange={onSelect}/></td>)
}
export default Checkbox