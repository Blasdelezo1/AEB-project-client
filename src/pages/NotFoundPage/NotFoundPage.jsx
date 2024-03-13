import { Container, Row, Col } from "react-bootstrap"
import './NotFoundPage.css'


const NotFoundPage = () => {

    return (
        <Container className="text-center mt-5">
            <Row>
                <Col>
                    <h1>This site is under construction</h1>
                    <hr className="mb-3" />
                    <h3>it will be available soon 😊😊😊</h3>
                </Col>
            </Row>

        </Container>
    )
}

export default NotFoundPage