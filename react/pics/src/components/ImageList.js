import React from 'react';
import '../imageList.css';
import ImageCard from './ImageCard';

const ImageList = (props) => {
    console.log(props.images);

    const images = props.images.map((image, key) => {

        return (
            <ImageCard key={key} image={image} />
        );
    })

    return (
        <div className="image-list">
            {images}
        </div>
    );
}


export default ImageList;