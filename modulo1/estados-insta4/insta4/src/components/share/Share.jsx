import React, { useState } from 'react';
import share from '../../img/share.png';

export function Share() {

    const [text, setText] = useState('');

    function handleClickSelect(e){
        console.log(`Post Compartilhado no ${e.target.innerHTML}: ${text}`)
    }

    function handleClick(e) {
        setText(e.target.value)
    }
    
    return (
        <>
            <div className="dropdown">
                <img alt='' src={share} id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                </img>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1" >
                    <li onClick={handleClickSelect}><a className="dropdown-item" href="#1">Instagram</a></li>
                    <li onClick={handleClickSelect}><a className="dropdown-item" href="#2">Facebook</a></li>
                    <li onClick={handleClickSelect}><a className="dropdown-item" href="#3">Twiter</a></li>

                    <input onChange={handleClick} type="text" placeholder='Digite sua mensagem'/>

                </ul>
            </div>
        </>
    )
}