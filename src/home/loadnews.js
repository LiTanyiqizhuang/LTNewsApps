import {
    neturl
} from '../constant'
import {
    requestingnews,
    requestnewssuccess,
    requestnewserror
} from './actions'

export default function getNewsData(dispatch) {
    dispatch(requestingnews())
    fetch(neturl).then(response => {
        if (response.ok) {
            console.log('请求成功')
            let what = response.json()
            return what
        }
        throw new Error('Request failed!');
    }, networkError =>{ 
        console.log(networkError.message)
        dispatch(requestnewserror(100))
    })
    .then(jsonResponse => {
        let news = jsonResponse
        console.log(news)
        if(news) dispatch(requestnewssuccess(news))
    })
}
