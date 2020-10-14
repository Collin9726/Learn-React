import React from 'react'

const Hello = () => {
    //JSX
    // return(
    //     <div className = 'dummyClass'>
    //         <h1>Hello JSX</h1>
    //     </div>
    // )

    //No JSX
    return React.createElement(
        'div',
        { id: 'dummyID', className: 'dummyClass'},
        React.createElement('h1', null, 'Hello No JSX')
    )
}

export default Hello