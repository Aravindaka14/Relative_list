import React, { useState } from "react";
import '../styles/App.css';

function App() {

    const [input, setInput] = useState("")
    const [list, setList] = useState([])
    const handlelist = (e) => {
        e.preventDefault()
        return (
            setList([...list, input]), setInput("")
        )
    }
    return (
        <div id="main">
            {/* Do not remove the main div */}
            <h1>Relative List</h1>
            <div className="content">
                <form onSubmit={handlelist}>
                    <input type="text" onChange={(e) => { setInput(e.target.value) }} value={input} required />
                    <button type="submit" >Add name</button>
                </form>
                <ol key="relativeList">
                    {
                        list.map((ele, i) => {
                            return (
                                <li className="list" key={`relativeList${i}`}>{ele}</li>
                            )
                        })
                    }
                </ol>
            </div>
        </div>
    )

}


export default App;
