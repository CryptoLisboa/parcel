import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Oi = () => {
    const [get, set] = useState(0)
    return <div onClick={ _ => set(get+1)}>{`Ago galera !!! Contador => ${get}`}</div>
}

ReactDOM.render(<Oi />, document.getElementById('app'))