/**
 * 表示一个`json`格式的服务端响应
 *
 * 另外它还提供了一些静态方法来快速创建表示`成功`或`失败`的响应。
 *
 * @author dongjak
 * @since 1.0
 * @date 2023/10/7
 */
export class JsonResponse<T> {
    // 定义成功或者失败的常量代码和消息
    private static OK_CODE = 1;
    private static OK_MESSAGE = "Success";
    private static FAILURE_CODE = 0;
    private static FAILURE_MESSAGE = "Failure";

    code: number
    message?: string
    data?: T

    /**
     * 创建一个新的 `JSONResponse` 实例。
     * @param code - 响应的代码
     * @param message - 响应的消息
     * @param data - 响应的数据
     */
    constructor(code: number, message?: string, data?: T) {
        this.code = code;
        this.message = message;
        this.data = data;
    }

    /**
     * 判断响应是否成功。
     * @returns 如果响应代码为 `OK_CODE` 则返回 `true`，否则返回 `false`。
     */
    isSuccessful() {
        return this.code === JsonResponse.OK_CODE;
    }

    /**
     * 创建一个新的 `JSONResponse` 实例。
     * @param code - 响应的代码
     * @param message - 响应的消息
     * @param data - 响应的数据
     * @returns `JSONResponse` 的新实例
     */
    static createJsonResponse<T>(code: number, message?: string, data?: T): JsonResponse<T> {
        return new JsonResponse<T>(code, message, data);
    }


    /**
     * 将`json`字符串或者`json`对象解析为`JSONResponse`实例。
     * @param json - `json`字符串或者`json`对象
     * @returns `JSONResponse` 的新实例
     */
    static parse<T>(json: string | object): JsonResponse<T> {
        if (typeof json === 'string') {
            return JsonResponse.parse(JSON.parse(json));
        }
        const obj = json as any;
        return new JsonResponse<T>(obj.code, obj.message, obj.data);
    }

    /**
     * 创建一个表示成功的`JsonResponse`实例。
     * @param data - 响应的数据，默认为 `null`
     * @param message - 响应的消息，默认为 `OK_MESSAGE`
     * @returns 表示成功的 `JsonResponse` 实例
     */
    static ok<T>(message: string = JsonResponse.OK_MESSAGE, data?: T): JsonResponse<T> {
        return JsonResponse.createJsonResponse(JsonResponse.OK_CODE, message, data);
    }

    /**
     * 创建一个表示失败的`JsonResponse`实例。
     * @param data - 响应的数据，默认为 `null`
     * @param message - 响应的消息，默认为 `FAILURE_MESSAGE`
     * @returns 表示失败的 `JsonResponse` 实例
     */
    static failure<T>(message: string = JsonResponse.FAILURE_MESSAGE, data?: T): JsonResponse<T> {
        return JsonResponse.createJsonResponse(JsonResponse.FAILURE_CODE, message, data);
    }
}
