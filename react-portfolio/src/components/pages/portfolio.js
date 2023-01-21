import React from "react";

function portfolio(){
    return (
        <section>
        <div className="portfolioContainer">
            <h1>Portfolio</h1>
            <div>
                <ul className="row">
                    <div className="column" id="mernStack">
                        <ul>
                            <li>
                                <h1>Mern Stack</h1>
                            </li>
                            <li>
                             <a href='https://github.com/ncortes04' className='gitButtonPortfolio'></a>
                            </li>
                        </ul>
                    </div>
                    <div className="column" id="jate">
                    <ul>
                            <li>
                                <h1>J.A.T.E</h1>
                            </li>
                            <li>
                             <a href='https://github.com/ncortes04/Challenge-19-J.A.T.E' className='gitButtonPortfolio'></a>
                            </li>
                        </ul>
                    </div>
                    <div className="column" id="tictactoe"><ul>
                            <li>
                                <h1>Tic Tac Toe</h1>
                            </li>
                            <li>
                             <a href='https://github.com/ncortes04/Tic-Tac-Toe' className='gitButtonPortfolio'></a>
                            </li>
                        </ul></div>
                    <div className="column" id="datadeposits">
                    <ul>
                            <li>
                                <h1>Data Deposits</h1>
                            </li>
                            <li>
                             <a href='https://github.com/Hrzonca/data-deposits' className='gitButtonPortfolio'></a>
                            </li>
                        </ul>
                    </div>
                    <div className="column" id="weatherforcast">
                    <ul>
                            <li>
                                <h1>Weather Forecast</h1>
                            </li>
                            <li>
                             <a href='https://github.com/ncortes04/weather-forcast' className='gitButtonPortfolio'></a>
                            </li>
                        </ul>
                    </div>
                </ul>
            </div>
        </div>
        </section>
    )
}

export default portfolio