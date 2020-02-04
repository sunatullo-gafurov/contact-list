import React from 'react';

export default function Contact(props) {
    const {id, name, online, imgUrl} = props;
    return (
        <div key={id} className="contact">
            <div className="person">
                <img className="img" src={imgUrl} alt=""/>
            <div className="status">
                <div><h3 className="name">{name}</h3></div>
                <div>{online ? <span className="online">online</span> : <span className="seen">last seen yesterday</span>}</div>
            </div>
            </div>
        </div>
    );
}
