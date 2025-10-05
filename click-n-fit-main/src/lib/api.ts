export const API_BASE =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api";

function authHeader() {
  if (typeof window === "undefined") return {};
  const token = localStorage.getItem("auth_token");
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export async function apiGet(path: string) {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { "Content-Type": "application/json", ...authHeader() },
    cache: "no-store",
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

// Generic POST helper. Accepts an arbitrary body type without resorting to
// `any`. By typing the body as `unknown`, callers are encouraged to supply
// properly typed objects. The return type is left as `Promise<unknown>` so
// that callers can cast or narrow the type themselves.
export async function apiPost<T = unknown, R = unknown>(path: string, body: T): Promise<R> {
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

// Catalog
export const Catalog = {
  muscles: () => apiGet("/catalog/muscles"),
  exercises: (muscle?: string) =>
    apiGet(`/catalog/exercises${muscle ? `?muscle=${encodeURIComponent(muscle)}` : ""}`),
};

// Auth
export const Auth = {
  register: (data: { email: string; password: string; name?: string; locale?: string }) =>
    apiPost("/auth/register", data),
  login: (data: { email: string; password: string }) => apiPost("/auth/login", data),
  me: () => apiGet("/auth/me"),
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
  addSet: <T, R>(sessionId: string, data: T) => apiPost<T, R>(`/sessions/${sessionId}/sets`, data),
};

// Stats
export const Stats = {
  overview: () => apiGet("/stats/overview"),
};
