import { useEffect } from 'react'
import { Link, useHistory, useLocation, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'

import { addToCart, removeFromCart } from '../actions'
import Message from '../components/Message'
import { parseSearchParams } from '../utils'

function CartScreen() {
    const { id } = useParams()
    const history = useHistory()
    const location = useLocation()
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart)

    const { qty } = parseSearchParams(location.search)

    useEffect(() => {
        if (id) {
            dispatch(addToCart(id, qty))
        }
    }, [dispatch, id, qty])

    const checkoutHandler = () => {
        history.push('/login?redirect=shipping')
    }

    return (
        <Row>
            <Col md={8}>
                <h1>Shopping Cart</h1>
                {cart.length === 0 ? (
                    <Message variant="info">
                        Your cart is empty. <Link to="/">Go back</Link>
                    </Message>
                ) : (
                    <ListGroup variant="flush">
                        {cart.map((item) => (
                            <ListGroup.Item key={item._id}>
                                <Row>
                                    <Col md={2}>
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fluid
                                            rounded
                                        />
                                    </Col>
                                    <Col md={3}>
                                        <Link to={`/product/${item._id}`}>
                                            {item.name}
                                        </Link>
                                    </Col>
                                    <Col md={2}>${item.price}</Col>
                                    <Col md={3}>
                                        <Form.Control
                                            as="select"
                                            value={item.qty}
                                            onChange={(e) =>
                                                dispatch(
                                                    addToCart(
                                                        item._id,
                                                        e.target.value
                                                    )
                                                )
                                            }
                                        >
                                            {[
                                                ...Array(
                                                    item.countInStock
                                                ).keys(),
                                            ].map((x) => (
                                                <option key={x} value={x + 1}>
                                                    {x + 1}
                                                </option>
                                            ))}
                                        </Form.Control>
                                    </Col>
                                    <Col md={1}>
                                        <Button
                                            type="button"
                                            variant="light"
                                            onClick={() =>
                                                dispatch(
                                                    removeFromCart(item._id)
                                                )
                                            }
                                        >
                                            <i className="fas fa-trash-alt"></i>
                                        </Button>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                )}
            </Col>
            <Col md={4}>
                <Card>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h2>
                                Subtotal (
                                {cart.reduce((acc, item) => item.qty + acc, 0)})
                                items
                            </h2>
                            $
                            {cart
                                .reduce(
                                    (acc, item) => acc + item.qty * item.price,
                                    0
                                )
                                .toFixed(2)}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button
                                type="button"
                                className="col-12"
                                disabled={cart.length === 0}
                                onClick={checkoutHandler}
                            >
                                Proceed to Checkout
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
    )
}

export default CartScreen
