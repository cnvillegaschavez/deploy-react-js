import React, { useState, useEffect } from 'react';
import ImageViewBox from '../shared/ImageViewBox';
import {getAllProgramTypes} from '../../services/CatalogueService';
import { Link } from 'react-router-dom';
const Catalogo = (props) => {
    const [programTypes, setProgramTypes] = useState([]);

    useEffect(() => {
        getCategories();
      }, []);
     
    const getCategories = () => {
        getAllProgramTypes().then(data => setProgramTypes(data));
    };

    return (<div className="mt-2">
        <h1>Catalogo</h1>
        <div className="d-flex justify-content-center">
            {programTypes.map((pt) => {
                return <Link to={"/" + pt.programType} key={pt.programType}>
                <li className="nav-link" >
                    <ImageViewBox key={pt.programType}
                    url={pt.image.url} 
                    description={pt.description} 
                    width={pt.image.width}
                    height={pt.image.height} />
                    </li>
            </Link>
                }
            )}
        </div>
    </div>);
}

export default Catalogo;
