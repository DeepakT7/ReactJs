import React from 'react';

import PlaceItem  from './PlaceItem';
import Card from '../.../shared/components/UIElements/card';
import './PlacesList.css';

const PlacesList = props => {
    if (props.items.length === 0){
        return (
        <div className = "place-list center">
            <Card>
                <h2>
                    No Places Found, Maybe Create one?
                </h2>
                <button>
                    Share Place
                </button>
            </Card>
        </div>
        );
    }

    return (
        <ul className = "place-list">
            {props.items.map(place => <PlaceItem 
            key ={place.id}
            image = {place.imageUrl}
            title = {place.title}
            description = {place.description}
            address = {place.address}
            creatorId = {place.creator}
            coordinates = {place.location}
            />
            )
            }
        </ul>
    );
};

export default PlacesList;