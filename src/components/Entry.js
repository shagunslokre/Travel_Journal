import React from "react";

const Entry = (props) => {
    return (
        <article className="entry">
            <img className="entry__image" src={`/images/${props.item.imageURL}`} alt={`${props.item.title}`} />

            <section className="entry__box">
                <div className="entry__info">
                    <p className="entry__location">
                        <i className="fas fa-map-marker-alt"></i> {props.item.location}
                    </p>
                    <a href={props.item.googleMaps} className="entry__google-maps" target="_blank" rel="noreferrer"> View on Google Maps </a>
                </div>
                <h2 className="entry__title">{props.item.title}</h2>
                <p className="entry__desc"> {props.item.description} </p>
            </section>
        </article>
    )

}

export default Entry;