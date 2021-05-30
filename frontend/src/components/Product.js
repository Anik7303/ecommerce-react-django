import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import Rating from './Rating'

function Product({ product }) {
    const { _id, image, name, rating, numReviews, price } = product
    return (
        <Card className="my-3 p-3 border-rounded">
            <Link to={`/product/${_id}`}>
                <Card.Img src={image} alt={name} />
            </Link>
            <Card.Body>
                <Link to={`/product/${_id}`}>
                    <Card.Title as="div">
                        <strong>{name}</strong>
                    </Card.Title>
                </Link>
                <Card.Text as="div">
                    <div className="my-3">
                        <Rating
                            value={rating}
                            text={`${numReviews} reviews`}
                            color="#f8e825"
                        />
                    </div>
                </Card.Text>
                <Card.Text as="h3">${price}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Product
