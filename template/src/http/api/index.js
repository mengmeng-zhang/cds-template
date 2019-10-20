import Http from './http';

export default class DempApi extends Http{
    DempApi(params){
        return this.instance.post(`/`, params);
    }
}