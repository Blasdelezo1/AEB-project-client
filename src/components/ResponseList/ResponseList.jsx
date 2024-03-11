// import './ResponseList.css'
// import { useState, useEffect } from "react"
// import postServices from '../../services/post.services'
// import { Row, Col } from 'react-bootstrap'
// import resposeServices from '../../services/respose.services'
// import ResponseCard from '../ResponseCard/ResponseCard'



// function ResponseList() {

//     const [responses, setResponses] = useState([])

//     useEffect(() => {
//         getAllResponses()
//     }, [])

//     const getAllResponses = () => {
//         resposeServices
//             .getAllResponses()
//             .then((response) => setResponses(response.data))
//             .catch((error) => console.log(error))
//     }


//     return (
//         <>
//             <div className="ResponseList">
//                 <h3>Comentarios</h3>
//                 <hr className='mb-3' />
//                 {
//                     responses.map((response) => (
//                         <Col key={response._id} className='mb-3'>
//                             <ResponseCard  {...response} />
//                         </Col>
//                     ))
//                 }

//             </div>
//         </>
//     )
// }

// export default ResponseList