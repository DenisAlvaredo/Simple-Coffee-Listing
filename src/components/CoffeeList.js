import React, { useState, useEffect } from "react";
import './styles.css'

const CoffeeList = () => {
    const [coffeeData, setCoffeeData] = useState([]);
    const [showAll, setShowAll] = useState(true);


    useEffect(() =>{
        fetch('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json')
            .then(response => response.json())
            .then(data => setCoffeeData(data))
            .catch(error => console.error('Error fetching coffee data:', error));
    }, []);

    const handleShowAll = () => {
        setShowAll(true);
    };
    
    const handleShowAvailable = () => {
        setShowAll(false);
    };

    return (
        <>
            <div id='buttons'>
                <button onClick={handleShowAll} className={`btn ${showAll ? 'active' : ''}`}>All Products</button>
                <button onClick={handleShowAvailable} className={`btn ${!showAll ? 'active' : ''}`}>Available Now</button>
            </div>
            <div id="coffee-container">
                {coffeeData
                .filter((coffee) => (showAll ? true : coffee.available))
                .map(coffee => (
                    <div key={coffee.id} id="coffee-card">
                        <img src={coffee.image} alt={coffee.name} id="coffee-img"/>
                        {coffee.popular && <p id="popularity">Popular</p>}
                        <>
                            <div id="coffee-data">
                                <h2 id="coffee-name">{coffee.name}</h2>
                                <p id="coffee-price">{coffee.price}</p>
                            </div>
                        </>
                        {coffee.rating !== null ? (
                            <div id="coffee-rating">
                                <img src='./Star_fill.svg' alt="Rating Image" />
                                <p id="coffee-punt">{coffee.rating}</p>
                                <p id="coffee-votes">({coffee.votes} votes)</p>
                            </div>
                        ) : (
                            <div id="coffee-rating">
                                <img src='./Star.svg' alt="Default Image" />
                                <p id="coffee-votes">No Ratings</p>
                            </div>
                        )}
                        {!coffee.available && <p id="coffee-unavailable">Sold Out</p>}
                    </div>
                ))}
            </div>
        </>
    );
};

export default CoffeeList;