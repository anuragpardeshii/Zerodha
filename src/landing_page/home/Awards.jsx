import React from 'react';

function Awards() {
    return (
        <div className='container mt-5 text-start mb-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src="media/Images/largestBroker.svg" alt="" />
                </div>
                <div className='col-6 p-4 mt-5'>
                    <h1 className='fs-7'>Largest stock broker in India</h1>
                    <p className='mb-5'>  2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in: </p>
                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    <p>Future and Options</p>
                                </li>
                                <li>
                                    <p>Commodity derivatives</p>
                                </li>
                                <li>
                                    <p>Currency derivatives</p>
                                </li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    <p>Stocks & IPOs</p>
                                </li>
                                <li>
                                    <p>Direct mutual funds</p>
                                </li>
                                <li>
                                    <p>Bonds and Govt. Securities</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center pb-5'>
            <img src="media/Images/pressLogos.png" alt="" style={{width:"60%"}}/>
            </div>
        </div>
    );
}

export default Awards;