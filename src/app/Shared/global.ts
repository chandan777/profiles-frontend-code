import {environment} from '../../environments/environment'
export class Global{
    public static POLICY_LIST = environment.BASE_ENDPOINT + '/policy';
    public static POLICY = Global.POLICY_LIST;
}