import { Alert } from 'react-bootstrap'

const Message = ({ children, variant }) => (
    <Alert variant={variant}>{children}</Alert>
)

export default Message
