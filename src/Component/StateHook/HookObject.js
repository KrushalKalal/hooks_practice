import React, { useState } from 'react'

export default function HookObject() {

    const [name, setName] = useState({ firstName: "", lastName: "" })
    const handleChange = (e)=>{
        setName({
            ...name,
            [e.target.name] : e.target.value
        })
    }
    return (
        <div>
            <form>
                <input type="text"
                    name="firstName"
                    value={name.firstName}
                    onChange={handleChange}
                    placeholder="Enter First Name" />

                <input type="text"
                    name="lastName"
                    value={name.lastName}
                    onChange={handleChange}
                    placeholder="Enter Last Name" />
            </form>

            <h2>{name.firstName}</h2>
            <h2>{name.lastName}</h2>
        </div>
    )
}
