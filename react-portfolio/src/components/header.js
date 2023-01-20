import React from 'react';
import Navigation from './navigation'
function header({currentPage, handlePageChange}){
    return (
        <header>
                <h1 className="container">Lerantino</h1>
                <nav>
                <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
                </nav>
         </header>
    )
}
export default header