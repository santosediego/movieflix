import React from 'react';
import './styles.css';

import { ReactComponent as StarImage } from 'assets/images/little_star.svg';

function ReviewListing() {

    return (
        <div className='card-base reviews-container'>
            <div className="review-area">
                <div className='review-area-username'>
                    <StarImage />
                    <h3>Maria Silva</h3>
                </div>
                <div className="review-area-comment">
                    <p>Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.</p>
                </div>
            </div>

            <div className="review-area">
                <div className='review-area-username'>
                    <StarImage />
                    <h3>Maria Silva</h3>
                </div>
                <div className="review-area-comment">
                    <p>Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.</p>
                </div>
            </div>

            <div className="review-area">
                <div className='review-area-username'>
                    <StarImage />
                    <h3>Maria Silva</h3>
                </div>
                <div className="review-area-comment">
                    <p>Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.</p>
                </div>
            </div>
        </div>
    );
}

export default ReviewListing;
