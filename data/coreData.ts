import { MessageSquare, PenTool, ClipboardCheck, Scissors, Truck, LucideIcon } from "lucide-react";

export interface WorkflowStep {
  num: string;
  title: string;
  desc: string;
  icon: LucideIcon;
}

export const getWorkflowSteps = (t: (key: string) => string): WorkflowStep[] => [
  {
    num: "01",
    title: t("core.step.1.title"),
    desc: t("core.step.1.desc"),
    icon: MessageSquare,
  },
  {
    num: "02",
    title: t("core.step.2.title"),
    desc: t("core.step.2.desc"),
    icon: PenTool,
  },
  {
    num: "03",
    title: t("core.step.3.title"),
    desc: t("core.step.3.desc"),
    icon: ClipboardCheck,
  },
  {
    num: "04",
    title: t("core.step.4.title"),
    desc: t("core.step.4.desc"),
    icon: Scissors,
  },
  {
    num: "05",
    title: t("core.step.5.title"),
    desc: t("core.step.5.desc"),
    icon: Truck,
  },
];
