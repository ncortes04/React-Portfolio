import React from 'react'

function navigation({currentPage, handlePageChange }){
    return(
        <ul className='navBarList'>
            <li>
                <a href="#home" onClick={() => handlePageChange('Home')}
                className={currentPage === 'Home' ? 'active' : 'anchor'}
                > 
                About Me
                </a>
                
            </li>
            <li>
                <a href='#portfolio' onClick={() => handlePageChange('Portfolio')}
                className={currentPage === 'Portfolio' ? 'active' : 'anchor'}
                >Portfolio
                </a>
            </li>
            <li>
                <a href='#contact' onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'active' : 'anchor'}
                >Contact
                </a>
            </li>
            <li>
                <a href='#resume' onClick={() => handlePageChange('Resume')}
                className={currentPage === 'Resume' ? 'active' : 'anchor'}
                >
                Resume</a>
            </li>
        </ul>
    )
}

export default navigation