export async function safeAsync<T, E = Error>(
  promise: Promise<T>,
): Promise<[null, T] | [E, null]> {
  try {
    const res = await promise;
    return [null, res];
  } catch (err) {
    return [err as E, null];
  }
}

export async function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
