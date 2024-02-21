export class StreamUtils {


    /**
     *  读取流内容
     * @param stream
     */
    static async readContentSync(stream: ReadableStream): Promise<string> {
        const reader = stream.getReader();
        const decoder = new TextDecoder('utf-8');
        let result = '';

        while (true) {
            const {value, done} = await reader.read();
            if (done) {
                break;
            }
            result += decoder.decode(value, {stream: true});
        }
        result += decoder.decode(); // flush the decoder

        return result;
    }
}
