import { put,takeLatest,call } from 'redux-saga/effects';
import {
  clickTab,
  setmsgcount
} from '../actions';
import {getnotifymessage} from '../actions/sagacallback.js';
import store from '../env/store.js';

function getmsgcount(payload){
   return new Promise((resolve, reject) => {
       console.log('start call getmsgcount:' + JSON.stringify(payload));
        put(getnotifymessage(payload)).then(({result})=>{
            console.log('setmsgcount:' + result.total);
            resolve(result.total);
            //getnotifymessage result=>{"docs":[],"total":0,"limit":10,"page":1,"pages":1}
        });
   });
}
export function* calcmsgcount(action){
    let {payload} = action;
    yield put(clickTab(payload));
    console.log('--------->' + JSON.stringify(payload));
    if(payload.curtabindex === 3){
        let payload = {
            query:{},
            options:{
                page: 1,
                limit: 1,
            }
        };
       console.log('start call getmsgcount');
       const number = yield call(getmsgcount,payload);
       yield put(setmsgcount(number));
    }
}

export function* calcmsgcountflow(){
    yield takeLatest(`${clickTab}`,calcmsgcount);
}