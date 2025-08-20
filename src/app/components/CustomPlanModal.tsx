"use client";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
  Box,
  Button,
  Chip,
  Divider,
  Stack,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { muscleExercises } from "@/app/data/exercises";

type DayKey = "A" | "B" | "C";
type DayPlan = { muscles: string[]; exercises: string[] };

export interface CustomSavedPlan {
  id: string;
  name: string;
  createdAt: string;
  completed?: boolean; // NEW (optional for older saves)
  plan: Record<DayKey, DayPlan>;
}

interface Props {
  open: boolean;
  onClose: () => void;
  plan: CustomSavedPlan | null;
  /** ask parent to refresh list after delete/complete toggle */
  onChange?: () => void;
}

export default function CustomPlanModal({
  open,
  onClose,
  plan,
  onChange,
}: Props) {
  if (!plan) return null;

  const dayOrder: DayKey[] = ["A", "B", "C"];
  const isCompleted = !!plan.completed;

  const muscleName = (id: string) => muscleExercises[id]?.name ?? id;

  // ------- persistence helpers -------
  const updateLocalStoragePlan = (
    mutator: (p: CustomSavedPlan) => CustomSavedPlan | null
  ) => {
    const raw = JSON.parse(localStorage.getItem("savedPlans") || "[]");
    const updated = raw
      .map((p: any) => (p.id === plan.id ? mutator({ ...p }) : p))
      .filter(Boolean);
    localStorage.setItem("savedPlans", JSON.stringify(updated));
    onChange?.();
  };

  const handleToggleCompleted = () => {
    updateLocalStoragePlan((p) => {
      p.completed = !p.completed;
      return p;
    });
  };

  const handleDelete = () => {
    if (!confirm("Deseja excluir este plano? Essa ação não pode ser desfeita."))
      return;
    const raw = JSON.parse(localStorage.getItem("savedPlans") || "[]");
    const filtered = raw.filter((p: any) => p.id !== plan.id);
    localStorage.setItem("savedPlans", JSON.stringify(filtered));
    onChange?.();
    onClose();
  };

  // ------- export to PDF (print-friendly) -------
  const handleExportPDF = () => {
    const win = window.open("", "_blank");
    if (!win) return;

    const created = new Date(plan.createdAt).toLocaleDateString();

    const dayHtml = (day: DayKey) => {
      const d = plan.plan?.[day];
      if (!d) return "";
      const muscles =
        (d.muscles || []).map((m) => muscleName(m)).join(", ") || "—";
      const exList = (d.exercises || []).map((ex) => `<li>${ex}</li>`).join("");
      return `
        <section style="margin-bottom:16px; page-break-inside:avoid;">
          <h2 style="margin:0 0 6px 0; font-size:18px;">Treino ${day}</h2>
          <div style="font-size:12px; color:#555; margin:4px 0 8px 0;"><strong>Músculos:</strong> ${muscles}</div>
          ${
            exList
              ? `<ol style="margin:0 0 0 20px; padding:0; font-size:14px;">${exList}</ol>`
              : `<div style="font-size:12px; color:#777;">Nenhum exercício adicionado.</div>`
          }
        </section>
      `;
    };

    win.document.write(`
      <html>
        <head>
          <meta charSet="utf-8" />
          <title>${plan.name} - PDF</title>
          <style>
            @page { margin: 16mm; }
            * { box-sizing: border-box; font-family: Arial, Helvetica, sans-serif; }
            h1 { font-size: 22px; margin: 0 0 8px 0; }
            .meta { font-size: 12px; color: #555; margin-bottom: 12px; }
            hr { border: 0; border-top: 1px solid #ddd; margin: 12px 0; }
          </style>
        </head>
        <body>
          <h1>${plan.name}</h1>
          <div class="meta">Criado em: ${created} ${
      plan.completed ? "• Concluído" : ""
    }</div>
          <hr />
          ${dayHtml("A")}
          ${dayHtml("B")}
          ${dayHtml("C")}
        </body>
      </html>
    `);
    win.document.close();
    // give it a tick to render before print
    win.focus();
    win.print();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle sx={{ pr: 6 }}>
        {plan.name}
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: "absolute", right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers sx={{ maxHeight: "70vh" }}>
        <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Criado em {new Date(plan.createdAt).toLocaleDateString()}
          </Typography>
          {isCompleted && (
            <Chip size="small" color="success" label="Concluído" />
          )}
        </Stack>

        {dayOrder.map((day) => {
          const d = plan.plan?.[day];
          if (!d) return null;

          return (
            <Box key={day} sx={{ mb: 3 }}>
              <Typography variant="h6" gutterBottom>
                Treino {day}
              </Typography>

              {/* Muscles */}
              {d.muscles?.length ? (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, my: 1 }}>
                  {d.muscles.map((m) => (
                    <Chip key={`${day}-${m}`} label={muscleName(m)} />
                  ))}
                </Box>
              ) : (
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ my: 1 }}
                >
                  Nenhum músculo selecionado.
                </Typography>
              )}

              {/* Exercises */}
              <Divider sx={{ my: 1 }} />
              {d.exercises?.length ? (
                <Box component="ol" sx={{ pl: 3, m: 0 }}>
                  {d.exercises.map((ex, i) => (
                    <li key={`${day}-ex-${i}`}>
                      <Typography variant="body1">{ex}</Typography>
                    </li>
                  ))}
                </Box>
              ) : (
                <Typography variant="body2" color="text.secondary">
                  Nenhum exercício adicionado.
                </Typography>
              )}
            </Box>
          );
        })}
      </DialogContent>

      <DialogActions sx={{ justifyContent: "space-between" }}>
        <Button color="error" onClick={handleDelete}>
          Excluir
        </Button>

        <Box sx={{ display: "flex", gap: 1 }}>
          <Button variant="outlined" onClick={handleExportPDF}>
            Exportar PDF
          </Button>
          <Button
            variant={isCompleted ? "outlined" : "contained"}
            color={isCompleted ? "inherit" : "success"}
            onClick={handleToggleCompleted}
          >
            {isCompleted ? "Desmarcar concluído" : "Marcar como concluído"}
          </Button>
          <Button onClick={onClose}>Fechar</Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
}
