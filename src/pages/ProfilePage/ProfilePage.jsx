import ProfileCard from '../../components/ProfileCard/ProfileCard'
import './ProfilePage.css'
import { Col, Row, Container } from "react-bootstrap"
function ProfilePage() {


    return (
        <div className="ProfilePage">
            <Container>
                <Row className='justify-content-center'>
                    <Col md={6} >
                        <ProfileCard />
                    </Col>
                </Row>
            </Container>


        </div>
    )




}
export default ProfilePage