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

export async function apiPost(path: string, body: any) {
  const res = await fetch(`${API_BASE}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...authHeader() },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
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
  create: (data: any) => apiPost("/plans", data),
  remove: (id: string) => apiDelete(`/plans/${id}`),
};

// Sessions
export const Sessions = {
  list: () => apiGet("/sessions"),
  create: (data: any) => apiPost("/sessions", data),
  addSet: (sessionId: string, data: any) => apiPost(`/sessions/${sessionId}/sets`, data),
};

// Stats
export const Stats = {
  overview: () => apiGet("/stats/overview"),
};
