"use client";

import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Divider,
} from "@mui/material";
import {
  FitnessCenter,
  EmojiEvents,
  PeopleAlt,
  Insights,
  Settings,
} from "@mui/icons-material";
import BottomNav from "../../components/BottomNav";
import Header from "../../components/Header";

const featuresComingSoon = [
  {
    icon: <EmojiEvents fontSize="large" />,
    title: "Gamificação e Pontos",
    description:
      "Ganhe pontos por treinar, desbloqueie conquistas e desafie seus limites todos os dias!",
  },
  {
    icon: <Insights fontSize="large" />,
    title: "Acompanhe seu Progresso",
    description:
      "Visualize suas estatísticas, compare sua evolução e mantenha o foco nos resultados.",
  },
  {
    icon: <PeopleAlt fontSize="large" />,
    title: "Comunidade Fitness",
    description:
      "Conecte-se com outras pessoas, compartilhe treinos e encontre motivação diária.",
  },
  {
    icon: <FitnessCenter fontSize="large" />,
    title: "Planos de Treino Inteligentes",
    description:
      "Planos personalizados de acordo com seus objetivos, nível e equipamentos disponíveis.",
  },
  {
    icon: <Settings fontSize="large" />,
    title: "Integrações com Dispositivos",
    description:
      "Conecte wearables e apps de saúde para uma experiência ainda mais completa.",
  },
];

export default function ComingSoonPage() {
  return (
    <Box
      sx={{
        p: 10,
        textAlign: "center",
        minHeight: "100vh",
        backgroundColor: (theme) => theme.palette.background.default,
      }}
    >
      <Header />
      <Typography variant="h3" gutterBottom fontWeight={600}>
        Em Breve no Click’n’Fit
      </Typography>
      <Typography variant="h6" color="text.secondary" gutterBottom>
        Estamos preparando novas funcionalidades para levar seu treino a outro
        nível.
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Grid container spacing={4} justifyContent="center">
        {featuresComingSoon.map((feature, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
            <Card elevation={3} sx={{ height: "100%", borderRadius: 4 }}>
              <CardContent sx={{ textAlign: "center", p: 4 }}>
                <Box color="primary.main" mb={2}>
                  {feature.icon}
                </Box>
                <Typography variant="h6" fontWeight={600} gutterBottom>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography variant="body2" color="text.disabled" sx={{ mt: 6 }}>
        Continue treinando com o que já está disponível. O melhor ainda está por
        vir 💪
      </Typography>

      <BottomNav />
    </Box>
  );
}
