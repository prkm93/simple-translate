import React, {useState} from 'react';
import UserCreate from './UserCreate';

function App() {

    const [language, setLanguage] = useState('english');

    const languageHandler = (lan) => {
        setLanguage(lan);
    }
    
    return (
        <div className="ui container">
            <div className="">
                Select a language: 
                <i className="flag us" onClick={() => languageHandler('english')}/>
                <i className="flag nl" onClick={() => languageHandler('dutch')}/>
            </div >
            <UserCreate/>
        </div>
    )
}

export default App;
