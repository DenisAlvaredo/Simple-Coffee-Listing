import React, { useState, useEffect } from "react";
import './styles.css'

const CoffeeList = () => {
    const [coffeeData, setCoffeeData] = useState([]);

    useEffect(() =>{
        fetch('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json')
            .then(response => response.json())
            .then(data => setCoffeeData(data))
            .catch(error => console.error('Error fetching coffee data:', error));
    }, []);

    return (
        <div id="coffee-container">
                {coffeeData.map(coffee => (
                    <div key={coffee.id} id="coffee-card">
                        <img src={coffee.image} alt={coffee.name}/>
                        {coffee.popular && <p id="popularity">Popular</p>}
                        <>
                            <div id="coffee-data">
                                <h2>{coffee.name}</h2>
                                <p>{coffee.price}</p>
                            </div>
                        </>
                        {coffee.rating !== null ? (
                            <div id="coffee-rarting">
                                <img src='./Star_fill.svg' alt="Rating Image" />
                                <p id="coffee-punt">{coffee.rating}</p>
                                <p id="coffee-votes">({coffee.votes} votes)</p>
                            </div>
                        ) : (
                            <div id="coffee-rarting">
                                <img src='./Star.svg' alt="Default Image" />
                                <p id="coffee-no-rating">No Rantings</p>
                            </div>
                        )}
                        {!coffee.available && <p id="coffee-unavailable">Sold Out!</p>}
                    </div>
                ))}
        </div>
    );
};

export default CoffeeList;