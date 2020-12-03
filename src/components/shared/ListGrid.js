import React from 'react';
import ImageViewBox from './ImageViewBox';

const ListGrid = (props) => {
    const { list } = props;
    return (        
          <div className="row row-cols-1 row-cols-md-6" >
                {
            
            list.map((item) => {
                        return (
                            <ImageViewBox className='col mb-6' key={item.title} 
                                        url={item.images.posterArt.url}
                                        title= {item.title}
                                        description={item.description} />
                        )
                    })
                }
          </div>
    );
}

export default ListGrid;