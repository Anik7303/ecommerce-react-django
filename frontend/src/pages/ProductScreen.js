import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap'

import { listProductDetails } from '../actions'
import Rating from '../components/Rating'
import Loader from '../components/Loader'
import Message from '../components/Message'

function ProductScreen() {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { error, loading, product } = useSelector(
        (state) => state.productDetails
    )

    useEffect(() => {
        dispatch(listProductDetails(id))
    }, [dispatch, id])

    const {
        name,
        image,
        rating,
        numReviews,
        price,
        description,
        countInStock,
    } = product

    const isInStock = countInStock > 0

    const renderProductDetails = (
        <Row>
            <Col md={6}>
                <Image src={image} alt={name} fluid />
            </Col>
            <Col md={3}>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <h3>{name}</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        {
                            <Rating
                                value={rating}
                                text={`${numReviews} reviews`}
                                color="#f8e825"
                            />
                        }
                    </ListGroup.Item>
                    <ListGroup.Item>Price: ${price}</ListGroup.Item>
                    <ListGroup.Item>Description: {description}</ListGroup.Item>
                </ListGroup>
            </Col>
            <Col md={3}>
                <Card>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <Row>
                                <Col>Price:</Col>
                                <Col>
                                    <strong>${price}</strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>Status:</Col>
                                <Col>
                                    <strong>
                                        {isInStock
                                            ? 'In Stock'
                                            : 'Out of Stock'}
                                    </strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button
                                className="col-12"
                                type="button"
                                disabled={!isInStock}
                            >
                                Add to Cart
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
    )

    return (
        <div>
            <Link to="/" className="btn btn-light my-3">
                Go Back
            </Link>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant="danger">{error}</Message>
            ) : (
                renderProductDetails
            )}
        </div>
    )
}

export default ProductScreen
