enum Operation {
  GET = "get",
  POST = "post",
  PUT = "put",
  PATCH = "patch",
  DELETE = "delete",
}

const request = async <T>(
  method: Operation,
  url: string,
  body?: unknown,
  config?: RequestInit
): Promise<T> => {
  try {
    console.log(method, url, body, config, "request params"); // Debugging log
    const response = await fetch(`${url}`, {
      method: method.toUpperCase(),
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body) || undefined,
      ...config,
    });

    const responseBody = await response.json().catch(() => null); // JSON 파싱 실패 대비

    return response.headers.get("content-length") === "0"
      ? ({} as T)
      : responseBody;
  } catch (error) {
    throw error;
  }
};

export { Operation, request };
