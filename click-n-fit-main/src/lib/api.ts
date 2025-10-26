// lib/api.ts

export const API_BASE =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api";

function authHeader() {
  if (typeof window === "undefined") return {};
  const token = localStorage.getItem("auth_token");
  return token ? { Authorization: `Bearer ${token}` } : {};
}

/**
 * FIX 1: Make apiGet generic to accept a type R for the response.
 */
export async function apiGet<R = unknown>(path: string): Promise<R> {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { "Content-Type": "application/json", ...authHeader() },
    cache: "no-store",
  });
  if (!res.ok) throw new Error(await res.text());
  // The casting here prevents the 'Type unknown is not assignable to string[]' error later.
  return res.json() as Promise<R>;
}

// Generic POST helper.
export async function apiPost<T = unknown, R = unknown>(
  path: string,
  body: T
): Promise<R> {
  const res = await fetch(`${API_BASE}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...authHeader() },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json() as Promise<R>;
}

export async function apiDelete(path: string) {
  const res = await fetch(`${API_BASE}${path}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json", ...authHeader() },
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

// Define the expected shape for a single exercise item from the API
export type ExerciseItem = {
  id: string;
  name: string;
};

// Catalog
export const Catalog = {
  // Assuming a list of strings or simple objects for muscles
  muscles: () => apiGet<string[]>("/catalog/muscles"),

  /**
   * FIX 2: Specify the return type for exercises is an array of ExerciseItem.
   */
  exercises: (muscle?: string) =>
    apiGet<ExerciseItem[]>(
      `/catalog/exercises${
        muscle ? `?muscle=${encodeURIComponent(muscle)}` : ""
      }`
    ),
};

// Auth
export const Auth = {
  register: (data: {
    email: string;
    password: string;
    name?: string;
    locale?: string;
  }) =>
    /**
     * FIX 3: Corrected generics for apiPost<RequestBody, ResponseBody>
     */
    apiPost<typeof data, { token: string }>("/auth/register", data),

  login: (data: { email: string; password: string }) =>
    /**
     * FIX 4: Corrected generics for apiPost<RequestBody, ResponseBody>
     */
    apiPost<typeof data, { token: string }>("/auth/login", data),

  me: () => apiGet<{ id: string; email: string; name?: string }>("/auth/me"),
};

// Plans
export const Plans = {
  list: () => apiGet("/plans"),
  // Accepts a typed payload instead of `any`. `apiPost` is generic and will
  // infer the request/response types from usage.
  create: <T, R>(data: T) => apiPost<T, R>("/plans", data),
  remove: (id: string) => apiDelete(`/plans/${id}`),
};

// Sessions
export const Sessions = {
  list: () => apiGet("/sessions"),
  // Accepts typed payloads instead of `any`.
  create: <T, R>(data: T) => apiPost<T, R>("/sessions", data),
  addSet: <T, R>(sessionId: string, data: T) =>
    apiPost<T, R>(`/sessions/${sessionId}/sets`, data),
};

// Stats
export const Stats = {
  overview: () => apiGet("/stats/overview"),
};
