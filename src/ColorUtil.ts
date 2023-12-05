import {colord} from "colord";

export class ColorUtil{

    /**
     *	获取颜色的rgb值
     * @param color 颜色
     */
    static getRgbOfColor(color: string) {
        return colord(color).toRgb();
    }

}
