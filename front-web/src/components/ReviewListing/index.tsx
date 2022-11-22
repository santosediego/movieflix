import React from 'react';
import { Review } from 'types/review';
import './styles.css';

import { ReactComponent as StarImage } from 'assets/images/little_star.svg';

type Props = {
    reviews: Review[];
}

function ReviewListing({ reviews }: Props) {

    return (
        <div className='card-base reviews-container'>
            {reviews.map((review) => (
                <div className="review-area" key={review.id}>
                    <div className='review-area-username'>
                        <StarImage />
                        <h3>{review.user.name}</h3>
                    </div>
                    <div className="review-area-comment">
                        <p>{review.text}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ReviewListing;
