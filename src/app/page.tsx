"use client";

import QuickNavigation from "./components/QuickNavigation";
import DailyTip from "./components/DailyTip";
import ProgressPreview from "./components/ProgressPreview";
import PageWrapper from "./components/PageWrapper";

export default function Home() {
  return (
    <PageWrapper>
      <QuickNavigation />
      <DailyTip />
      <ProgressPreview />
    </PageWrapper>
  );
}
