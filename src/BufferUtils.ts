export class BufferUtils {

    /**
     * 将ArrayBuffer转换为base64
     * @param buffer
     */
    static arrayBufferToBase64(buffer: ArrayBuffer): string {
        const uint8Array = new Uint8Array(buffer);
        let binaryString = '';
        for (let i = 0; i < uint8Array.length; i++) {
            binaryString += String.fromCharCode(uint8Array[i]);
        }
        return btoa(binaryString)
    }

}
