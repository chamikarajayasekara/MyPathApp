import React from 'react';
import {Card} from "antd";
import './coursecard.css'
import {Link} from "react-router-dom";
export default function CharacterList(props) {
    const characters = props.characters.map((character, index) =>
        <Link to={"/courseDet/"+character._id} style={{textDecoration:"none"}}>
            <div className="card d-flex  flex-wrap card-client mb-3 mt-3 ml-lg-3 text-center" key={index}>
                <div className="card-header card-client-head">
                    <p className="text-left">{character.institute}</p>
                    <p className="text-white">{character.name}</p>
                </div>
                <div className="card-body">
                    <p>{character.category}&nbsp;{character.level}</p>
                </div>
            </div>
        </Link>

    );
    return (
        <div className="row" aria-live="polite">
            {characters}
        </div>

    );
}
