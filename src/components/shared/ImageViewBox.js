import React from 'react';

const ImageViewBox = (props) => {

    return (<div className="card border border-info bg-light" 
            style={{width: props.width, height: props.height}}>
            <img className="card-img-top"style={{maxHeight: 250}}  src={props.url} alt={props.description} />
            <div className="card-body">
                   {props.title && <h5 className='card-title'>{props.title}</h5>} 
                   <p className='card-text'> {props.description} </p>
            </div>
        </div>
        );
}

export default ImageViewBox;