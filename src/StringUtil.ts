import {kebabCase} from 'lodash-es';

export class StringUtil {

    static toKebabCase(s: string) {
        return kebabCase(s)
    }
}
