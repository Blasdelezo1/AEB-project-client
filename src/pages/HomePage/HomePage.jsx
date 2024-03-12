import './HomePage.css'
import heroLayout from './../../assets/backgammon_layout.jpg'
import secondSection from './../../assets/backgmmon tournament.jpg'
import wtcham from './../../assets/WTCHAMP.jpg'
import { Row, Col, Container } from 'react-bootstrap'
const HomePage = () => {

    return (
        < div className="HomePage" >
            <section className='HomePage-section'>
                <Row className='align-items-center'>
                    <Col md={6} className='text-center'>
                        <div className='container-text'>
                            <h1>Bienvenido a la Asociación Española de Backgammon</h1>
                            <hr className='ml-3' />
                            <div className='descriptiontext'>
                                <p>
                                    ¡Bienvenidos a nuestra comunidad de backgammon!

                                </p>
                                <p>
                                    Estamos aquí con una motivación única: ser la plataforma que reúna a todos los entusiastas de este apasionante juego en España. Nos dimos cuenta de que no existía un lugar en línea que representara adecuadamente la riqueza y la diversidad del backgammon en nuestro país, ¡así que decidimos crearlo nosotros mismos!
                                </p>
                                <p>
                                    Nuestro objetivo es simple pero ambicioso: unir y difundir el amor por el backgammon en cada rincón de España. Queremos ofrecer un espacio donde jugadores de todos los niveles puedan conectar, aprender, y compartir su pasión por este juego milenario. ¡Únete a nosotros y juntos hagamos crecer esta comunidad, disfrutando de emocionantes partidas y compartiendo nuestra fascinación por el backgammon!
                                </p>
                            </div>
                        </div>

                    </Col>
                    <Col md={6}>
                        <div className='background-image'>
                            <img src={heroLayout} alt="heroLayout" className='heroLayout-img' />
                        </div>
                    </Col>
                </Row>
            </section>
            <section>

                <Row className='align-items-center'>

                    <Col md={6}>
                        <div className='background-image'>
                            <img src={secondSection} alt="heroLayout" className='heroLayout-img' />
                        </div>
                    </Col>
                    <Col md={6} className='text-center'>
                        <div className='container-text'>
                            <h1>Regístrate y no te pierdas las últimas noticias y eventos de backgammon</h1>
                            <hr className='ml-3' />
                            <div className='descriptiontext'>
                                <p>
                                    ¡Atención a todos nuestros miembros apasionados del backgammon! Queremos compartir una emocionante oportunidad con ustedes: ¡participar en eventos internacionales de backgammon!

                                </p>
                                <p>
                                    Estos eventos son una ventana al mundo del backgammon, donde jugadores de diferentes países se reúnen para competir, aprender y compartir su amor por este juego tan especial. Es una oportunidad única para enfrentarse a nuevos desafíos, conocer a otros jugadores apasionados y sumergirse en la rica cultura del backgammon a nivel global.
                                </p>
                                <p>
                                    No importa tu nivel de experiencia, desde principiante hasta experto, siempre hay algo que aprender y disfrutar en estos eventos internacionales. ¡Así que únete a nosotros en esta emocionante aventura y llevemos el nombre de nuestra comunidad de backgammon a lo más alto en la escena internacional
                                </p>
                            </div>
                        </div>

                    </Col>

                </Row>
                <Row className='align-items-center'>
                    <Col md={6} className='text-center'>
                        <div className='container-text'>
                            <h1>Únete a nuestra comunidad y lleva tu juego de backgammon al siguiente nivel.</h1>
                            <hr className='ml-3' />
                            <div className='descriptiontext'>
                                <p>
                                    ¡Entonces únete a nosotros en nuestra misión de representar a España en eventos internacionales! Desde torneos regionales hasta campeonatos mundiales, hay numerosas oportunidades para mostrar tus habilidades y llevar la bandera de nuestro país a lo más alto.

                                </p>
                                <p>
                                    No importa si eres un jugador experimentado o estás empezando en el mundo del backgammon, siempre hay algo nuevo que aprender y mejorar. Participar en eventos internacionales no solo te brinda la oportunidad de competir con los mejores jugadores del mundo, sino también de conocer gente nueva, aprender nuevas estrategias y enriquecer tu experiencia en el juego.
                                </p>
                                <p>
                                    ¡Únete a nosotros en este emocionante viaje y juntos llevemos el nombre de España a lo más alto en el escenario internacional del backgammon!
                                </p>
                            </div>
                        </div>

                    </Col>
                    <Col md={6}>
                        <div className='background-image'>
                            <img src={wtcham} alt="heroLayout" className='heroLayout-img' />
                        </div>
                    </Col>
                </Row>


            </section>
        </div >

    )
}

export default HomePage



// <div className="HomePage">
//     <section className='HomePage-sectio1'>
//         <div className="contentContainer">
//             <h1 className="title">Asociación Española de Backgammon</h1>
//             <p className="description">Únete a nuestra comunidad de entusiastas del backgammon!</p>
//         </div>

//     </section>

// </div>