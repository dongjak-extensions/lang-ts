import {cloneDeep} from 'lodash-es';

export class ObjectUtil {

    static cloneDeep<T>(t: T) {
        return cloneDeep(t)
    }
}
