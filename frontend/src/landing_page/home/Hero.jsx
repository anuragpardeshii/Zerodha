import React from 'react';

function Hero() {
    return (
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <img src="media/Images/homeHero.png" alt="Hero Image" className='mb-5'/>
                <h1>Invest in Evenrything</h1>
                <p>Online platform to invest in stocks, derivaties, mutual funds and more</p>
                <button className='p-2 btn btn-primary fs-5' style={{width:"20%", margin:"0 auto"}}>SignUp for free</button>
            </div>
        </div>
    );
}

export default Hero;