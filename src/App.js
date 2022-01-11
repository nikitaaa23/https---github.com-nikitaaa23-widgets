import React, {useState} from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";


const items = [
    {
        title: 'What is React?',
        content: 'React is a frontend JS framework'
    },
    {
        title: 'Why use React?',
        content: 'It is fa favorite among engineers.'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components.'
    },
]

const options  = [
    {
        label: 'The color red',
        value: 'red'
    },
    {
        label: 'The color blue',
        value: 'blue'
    },
    {
        label: 'The color green',
        value: 'green'
    }
];

export default () => {
    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true);


    return(
    <div>
        <button onClick ={ () => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
        { showDropdown ? <Dropdown 
        selected = {selected}
        onSelectedChange = {setSelected}
        options = {options} 
        /> : null }
    </div>
    );
};