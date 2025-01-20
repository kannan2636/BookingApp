import { useEffect, useState } from "react";

function Activa() {
    const [colorChange, setColorChange] = useState("colorChange");
    const [numberChange, setNumberChange] = useState(0);
    const [list, setList] = useState([]);
    const [liscount, setLiscount] = useState(0);
    const [name , setName] = useState({});



    const decrease = () => {
        setNumberChange(prevNumber => prevNumber - 1);
    };

    const increase = () => {
        setNumberChange(prevNumber => prevNumber + 1);
    };

    function additeams() {
        let countIteam = liscount;
        setList(prevState => [...prevState, "List->" + countIteam]);
        setLiscount(prevStateCount => prevStateCount + 1);
    }

    useEffect(() => {
        console.log("Check Use Effect");
        setTimeout(()=>{
            setLiscount((preCount)=>{ return preCount+1 })
        },1000);
    }, [decrease]);

    return (
        <>
            <h1>Add Active Class which is {colorChange}</h1>
            <h1>We will see setCount {liscount}</h1>
            <button onClick={() => setColorChange('ChangedColor')}>Change Color</button>

            <h1>We can operate Number</h1>
            <p>{numberChange}</p>
            <button onClick={decrease}>Decrement</button>
            <button onClick={increase}>Increment</button>

            <h1>Fetch List Data</h1>
            <ul>
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

            <button onClick={additeams} > Add Iteams</button>
        </>
    );
}

export default Activa;
