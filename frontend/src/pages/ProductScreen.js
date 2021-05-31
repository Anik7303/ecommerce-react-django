import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap'

import Rating from '../components/Rating'
import axios from 'axios'

function ProductScreen() {
    const { id } = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
        async function fetchProduct() {
            const response = await axios.get(`/api/products/${id}`)
            setProduct(response.data)
        }
        fetchProduct()
    }, [id])

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

    return (
        <div>
            <Link to="/" className="btn btn-light my-3">
                Go Back
            </Link>
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
                        <ListGroup.Item>
                            Description: {description}
                        </ListGroup.Item>
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
        </div>
    )
}

export default ProductScreen
