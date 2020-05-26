import React from 'react';


import Card from '../.../shared/components/UIElements/card';
import './PlacesList.css';

const PlacesList = props => {
    if (props.items.length === 0){
        return <div className = "place-list center">
            <Card>
                <h2>
                    No Places Found, Maybe Create one?
                </h2>
                <button>
                    Share Place
                </button>
            </Card>
        </div>
    }
};

export default PlacesList;