import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export const exportPlanToPDF = async (
  elementId: string,
  fileName = "workout-plan.pdf"
) => {
  const element = document.getElementById(elementId);
  if (!element) return alert("Element not found");

  const canvas = await html2canvas(element);
  const imgData = canvas.toDataURL("image/png");

  const pdf = new jsPDF({
    orientation: "portrait",
    unit: "px",
    format: [canvas.width, canvas.height],
  });

  pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
  pdf.save(fileName);
};
