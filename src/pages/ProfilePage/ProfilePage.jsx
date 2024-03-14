import ProfileCard from '../../components/ProfileCard/ProfileCard'
import './ProfilePage.css'
import { Col, Row, Container } from "react-bootstrap"



function ProfilePage() {


    return (
        <div className="ProfilePage">
            <Container>
                <ProfileCard />
            </Container>
        </div>
    )
}
export default ProfilePage