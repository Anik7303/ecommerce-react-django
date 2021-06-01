import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'

import { listProducts } from '../actions'
import Product from '../components/Product'
import Loader from '../components/Loader'
import Message from '../components/Message'

function Home() {
    const { error, loading, products } = useSelector(
        (state) => state.productList
    )
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    if (loading) return <Loader />
    if (error) return <Message variant="danger">{error}</Message>

    return (
        <div>
            <h1>Latest Products</h1>
            <Row>
                {products.map((product) => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default Home
