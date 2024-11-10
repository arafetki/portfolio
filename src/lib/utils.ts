import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function objectToFormData<T extends Record<string, unknown>>(
  data: T
): FormData {
  const formData = new FormData();

  Object.entries(data).forEach(([Key, value]) => {
    if (typeof value === "string") {
      formData.append(Key, value);
    } else {
      formData.append(Key, JSON.stringify(value));
    }
  });

  return formData;
}

export function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function safeAsync<T, E = Error>(
  promise: Promise<T>
): Promise<[null, T] | [E, null]> {
  try {
    const res = await promise;
    return [null, res];
  } catch (err) {
    return [err as E, null];
  }
}
