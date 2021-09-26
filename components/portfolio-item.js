import React from 'react';

function PortfolioItem(props) {
    return (
        <div className="my-4 xl:relative ">
            <img className="" src={props.image} alt={props.alt} />
            <div className="h-24 py-4 px-4 shadow text-center xl:min-h-full xl:absolute xl:inset-0 xl:bg-black xl:bg-opacity-0 xl:hover:bg-opacity-50 xl:text-opacity-0 xl:hover:text-opacity-100 xl:text-white xl:text-extrabold xl:text-xl xl:py-12 xl:px-8  ">            
                <h3 className=""> 
                    {props.header}
                </h3>
                <p className="">
                    {props.paragraph}
                </p>
            </div>
        </div>
    )
}

export default PortfolioItem
