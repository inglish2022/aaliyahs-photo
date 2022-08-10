import React from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav() {

    const categories = [
        { name: "babies", description: "Photos of newborns and babies",},
        { name: "couples", description: "Engagements and couples" },
        { name: "seniors", description: "Graduates and singles"},
    ];

    const handleClick = () => {
        console.log("click handled")
      }

    return (
        <header className='flex-row px-1'>
            <h2>
                <a data-testid='link' href="/">
                    <span role="img" aria-label="camera"> 📸</span> Oh Snap!
                </a>

            </h2>
            <nav>
                <ul className='flex-row'>
                    <li className='mx-2'>
                        <a data-testid='about' href="#about" onClick={() => handleClick()}>
                            About me
                        </a>
                    </li>
                    <li>
                        <span onClick={() => handleClick()}>
                            Contact
                            </span>
                    </li>

                    {
                    categories.map((category) => (
                        <li className='mx-1' key={category.name}
                        >
                            <span onClick={() => { handleClick(); }}>
                                {capitalizeFirstLetter(category.name)}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>

        </header>
    )
}

export default Nav;