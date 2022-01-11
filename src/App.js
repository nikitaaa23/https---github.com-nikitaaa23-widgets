import React from "react";
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

export default () => {
    return(
    <div>
        <Dropdown />
    </div>
    );
};