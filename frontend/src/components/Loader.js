import { Spinner } from 'react-bootstrap'

const loaderStyle = {
    display: 'block',
    height: '100px',
    margin: 'auto',
    width: '100px',
}

const Loader = () => (
    <Spinner animation="border" role="status" style={loaderStyle}>
        <span className="sr-only">Loading...</span>
    </Spinner>
)

export default Loader
