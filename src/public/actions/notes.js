// import axios for getting data from API
import axios from 'axios';

// export action that get notes
export const getNotes = () => {
    return {
        type: 'GET_NOTES',
        payload: axios.get('http://34.226.154.250:3000/engineers/users?limit=50')
    }
}
export default getNotes

// export const updateNote = (id) => {
//     return {
//         type: 'GET_NOTES',
//         payload: axios.get('https://randomuser.me/api/id)
//     }
// }

// export const getCategory = () => {
//     return {
//         type: 'GET_NOTES',
//         payload: axios.get('https://randomuser.me/api?results=10')
//     }
// }