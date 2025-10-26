export const API_BASE =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api";

function authHeader(): Record<string, string> {
  if (typeof window === "undefined") return {};
  const token = localStorage.getItem("auth_token");
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export async function apiGet<T = unknown>(path: string): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { "Content-Type": "application/json", ...authHeader() },
    cache: "no-store",
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json() as Promise<T>;
}

export async function apiPost<TResp = unknown, TBody = unknown>(
  path: string,
  body: TBody
): Promise<TResp> {
  const res = await fetch(`${API_BASE}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...authHeader() },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json() as Promise<TResp>;
}

// ---- Auth
export const Auth = {
  register: (data: {
    email: string;
    password: string;
    name?: string;
    locale?: string;
  }) => apiPost<{ token: string }, typeof data>("/auth/register", data),
  login: (data: { email: string; password: string }) =>
    apiPost<{ token: string }, typeof data>("/auth/login", data),
  me: () => apiGet<{ id: string; email: string; name?: string }>("/auth/me"),
};

export async function apiDelete<T = unknown>(path: string): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json", ...authHeader() },
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json() as Promise<T>;
}

// ---- Catalog
export const Catalog = {
  muscles: () => apiGet<string[]>("/catalog/muscles"),
  exercises: (muscle?: string) =>
    apiGet<Array<{ name: string }>>(
      `/catalog/exercises${
        muscle ? `?muscle=${encodeURIComponent(muscle)}` : ""
      }`
    ),
};

// ---- Plans
export const Plans = {
  list: () => apiGet<Array<{ id: string; name: string }>>("/plans"),
  create: (data: { name: string; description?: string }) =>
    apiPost<{ id: string }, typeof data>("/plans", data),
  remove: (id: string) => apiDelete<{ ok: true }>(`/plans/${id}`),
};

// ---- Sessions
export const Sessions = {
  list: () => apiGet<Array<{ id: string; date: string }>>("/sessions"),
  create: (data: { planId: string; date: string }) =>
    apiPost<{ id: string }, typeof data>("/sessions", data),
  addSet: (
    sessionId: string,
    data: { exercise: string; reps: number; weight?: number }
  ) =>
    apiPost<{ id: string }, typeof data>(`/sessions/${sessionId}/sets`, data),
};

// ---- Stats
export const Stats = {
  overview: () =>
    apiGet<{ workoutsThisWeek: number; minutesTrained: number }>(
      "/stats/overview"
    ),
};
