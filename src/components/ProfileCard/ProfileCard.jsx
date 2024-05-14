// import './ProfileCard.css'
// import { AuthContext } from '../../Context/Auth.context'
// import { Card, Col, Row } from "react-bootstrap"
// import { useContext } from 'react'


// function ProfileCard() {

//     const { user } = useContext(AuthContext)

//     return (
//         <>
//             <h1 className='Profile-title'>Mi Perfil</h1>

//             <Card className='mb-4'>
//                 <Row className='Align '>
//                     <Col className='ProfileCard' md={4} >

//                         <figure className='profileAVatar'>
//                             {
//                                 user.avatar && <img src={user.avatar} alt='ProfileAvatar' className='profileAVatar' />
//                             }
//                         </figure>

//                     </Col>
//                     <Col md={8}>
//                         <h2 className='mt-3'> {user.name}</h2>
//                         <hr />
//                         <p>🔹Pais: <strong>España</strong> </p>
//                         <p>🔹Correo Electronico: <strong>{user.email}</strong></p>
//                         <p>🔹Rank EBIF: <strong><a target='_blank' href='https://www.wbif.net/index.php?nav_id=62'>Perfil de Ebif</a></strong></p>
//                     </Col>
//                 </Row>

//             </Card>

//         </>
//     )
// }

// export default ProfileCard

//segundo tipo de dashboard... aunque habria que hacerlo de nuevo, con las modificaciones de los modelos en un proyecto nuevo mas coherente.

import './ProfileCard.css'
import { AuthContext } from '../../Context/Auth.context'
import { Card, Col, Row } from "react-bootstrap"
import { useContext } from 'react'

function ProfileCard() {
    const { user } = useContext(AuthContext)

    return (
        <>
            <h1 className='Profile-title'>Mi Perfil</h1>
            <Card className='ProfileCard mb-4 shadow'>
                <Row className='Align'>
                    <Col md={4} className='p-0'>
                        <figure className='profileAvatar'>
                            {user.avatar && <img src={user.avatar} alt='Profile Avatar' />}
                        </figure>
                    </Col>
                    <Col md={8} className='p-4 '>
                        <h2>{user.name.toUpperCase()}</h2>
                        <hr />
                        <p>🔹 País: <strong>España</strong></p>
                        <p>🔹 Correo Electrónico: <strong>{user.email}</strong></p>
                        <p>🔹 <strong><a href='https://www.wbif.net/index.php?nav_id=62' target='_blank'>EBIF Oficial Backgammon Internet Federation</a></strong></p>
                    </Col>
                </Row>
            </Card>
        </>
    )
}

export default ProfileCard
