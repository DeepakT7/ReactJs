import React from 'react';

import './PlaceList.css';
import Card from '../../shared/components/UIElements/Card';

const PlaceItem = props => {
    return <li className = "place-item">
        <Card className = "place-item__content">
        <div className = "place-item__image">
            <img src = {props.image} alt = {props.title}/>
            <div className = "place-item__info">
                <h2>{props.title}</h2>
                <h3>{props.address}</h3>
                <h4>{props.description}</h4>
            </div>
            <div className = "place-item__actions">
                <button>VIEW ON MAP</button>
                <button>EDIT</button>
                <button>DELETE</button>
            </div>
        </div>
        </Card>
    </li>
};

export default PlaceItem;