import React from 'react';

import { useParams } from 'react-router-dom';

const BookDetails = () => {
    // const params = useParams();
    // useParams object akare full properties id ta diye day.
    const {bookId} = useParams();
    // console.log(params);
    console.log(bookId);
    
    return (
        <div>
            <h1>Book Details {bookId}</h1>
        </div>
    );
};

export default BookDetails;