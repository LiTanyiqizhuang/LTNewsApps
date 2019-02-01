import {neturl} from '../constant'

export default function getNewsData() {
    fetch(neturl).then(response => {
        if(response.ok){
            let what = response.json()
            console.log(what)
            return what;
        }
        throw new Error('Request failed!');
    } , networkError => console.log(networkError.message)
    ).then(jsonResponse => jsonResponse)
}