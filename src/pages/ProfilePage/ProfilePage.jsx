import ProfileCard from '../../components/ProfileCard/ProfileCard'
import UserFavorites from '../../components/UserFavorites/UserFavorites'
import './ProfilePage.css'
import { Container } from "react-bootstrap"





function ProfilePage() {


    return (
        <div className="ProfilePage">
            <Container>
                <ProfileCard />
                <UserFavorites />
            </Container>
        </div>
    )
}
export default ProfilePage