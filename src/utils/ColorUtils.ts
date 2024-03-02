export class ColorUtils {


    /**
     * 接受一个字符串`key`作为参数,然后检查`localStorage`中是否已经存在这个字符串对应的颜色值.
     *
     * 如果存在,它就会返回这个颜色.
     *
     * 如果不存在,它将生成一个新的随机颜色,将它保存到`localStorage`,然后返回这个颜色值.
     *
     * @param key
     */
    static getColorForString(key: string): string {
        // 定义在localStorage中保存颜色映射的键名
        const storageKey = 'stringColorMappings';

        // 尝试从localStorage获取现有的颜色映射
        const mappingsRaw = localStorage.getItem(storageKey);
        let mappings = mappingsRaw ? JSON.parse(mappingsRaw) as Record<string, string> : {};

        // 如果键对应的颜色已经存在，则直接返回这个颜色
        if (mappings[key]) {
            return mappings[key];
        }

        // 否则，生成一个新的随机颜色
        const newColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;

        // 将新颜色添加到映射中
        mappings[key] = newColor;

        // 将更新后的颜色映射保存回localStorage
        localStorage.setItem(storageKey, JSON.stringify(mappings));

        // 返回新颜色
        return newColor;
    }
}
