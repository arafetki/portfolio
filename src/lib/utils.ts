import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { BackOffOptions } from "@/types";

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

export function isBlank(str: string): boolean {
  return str.trim().length === 0;
}

export async function retryWithBackoff<T>(
  fn: Promise<T>,
  opts?: BackOffOptions
): Promise<T> {
  const retries = opts?.retries ?? 3;
  const factor = opts?.factor ?? 2;

  let attempt = 0;
  let currentDelay = opts?.delay ?? 500;

  while (attempt < retries) {
    const [error, result] = await safeAsync<T>(fn);

    if (!error) {
      return result;
    }

    attempt++;
    console.log(
      `Attempt ${attempt} failed: ${error.message}. Retrying in ${currentDelay} ms...`
    );

    if (attempt < retries) {
      await wait(currentDelay); // Wait for the current delay
      currentDelay *= factor; // Increase the delay for the next attempt
    } else {
      throw new Error(`Failed after ${retries} retries: ${error.message}`);
    }
  }

  throw new Error("All retry attempts failed"); // Fallback error if loop exits unexpectedly
}
