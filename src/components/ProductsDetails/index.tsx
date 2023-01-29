import React from 'react';
import { Star, ShoppingCart } from 'react-feather';

import { range } from '../../lib/utils';
import VisuallyHidden from '../../lib/VisuallyHidden';

export function ProductDetails({ product }: any) {
    return (
        <article className="product-details">
            <div className="photos-wrapper">
                <PhotoToggle photos={product.photos} />
            </div>
            <div className="product-info">
                <h1>{product.title}</h1>
                <StarRating rating={product.rating} />
                <p className="product-description">
                    {product.description}
                </p>
            </div>
        </article>
    );
}

function PhotoToggle({ photos }: any) {
    const [
        selectedPhotoIndex,
        setSelectedPhotoIndex,
    ] = React.useState(0);

    return (
        <div>
            <img
                className="primary-photo"
                alt=""
                src={photos[selectedPhotoIndex]}
            />
            <div className="buttons">
                {photos.map((photoSrc: any, index: any) => {
                    const isSelected =
                        selectedPhotoIndex === index;

                    return (
                        <button
                            key={index}
                            className="thumbnail-button"
                            onClick={() =>
                                setSelectedPhotoIndex(index)
                            }
                        >
                            <VisuallyHidden>
                                Toggle image #{index + 1}
                            </VisuallyHidden>
                            <img alt="" src={photoSrc} />
                            <span
                                className="selected-ring"
                                style={{
                                    opacity: isSelected ? 1 : 0,
                                }}
                            />
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

function StarRating({ rating }: any) {
    return (
        <div className="star-rating">
            {range(5).map((num) => {
                const className =
                    rating > num
                        ? 'star filled'
                        : 'star hollow';
                return <Star className={className} />;
            })}
        </div>
    );
}