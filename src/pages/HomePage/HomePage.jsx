import './HomePage.css'
import landinimage from './../../assets/luxury_bg_photoshop_png.png'
const HomePage = () => {

    return (

        <figure style={{ margin: 0, height: '70vh ' }}>
            <img className='landingimage' src={landinimage} alt="landingimage" style={{ width: '100%', display: 'block' }} />
        </figure>

    )
}

export default HomePage

