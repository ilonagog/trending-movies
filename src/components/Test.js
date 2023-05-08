import React, { useState } from 'react'

const Test = () => {
    const [name, setName] = useState("")
    const [number, setNumber] = useState(100)

    const handleSubmit = (e) => {
        e.preventDefault()
        setNumber(number - name.length)
        console.log(name)
        setName("")

    }

    const handleNameChange = (e) => {
        setName(e.target.value)

    }
    const handleClick = () => {
        console.log(number)
    }
    console.log(name)

    return (
        <section>
            <form className='form' onSubmit={handleSubmit}>
                <h1 >{number}</h1>
                <input type="text" id="name" value={name} onChange={handleNameChange}></input>
                <button className='button' onClick={handleClick}>Click me</button>
            </form>
        </section>
    )
}

export default Test

// Create a controlled form that has a text input,
//     a button that says click me 
//  and a counter that starts at 100.

//   Every time you hit submit when there is text in the input box the counter
//  should take off however many characters were in the string in the input field from the counter. 

//   After submitting the input should reset.
