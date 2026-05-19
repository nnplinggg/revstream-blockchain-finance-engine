import { createHashRouter } from "react-router";
import { DashboardLayout } from "./components/DashboardLayout";
import { Dashboard } from "./pages/Dashboard";
import { RevenueHealth } from "./pages/RevenueHealth";
import { UploadFlow } from "./pages/UploadFlow";
import { Step1 } from "./pages/upload/Step1";
import { Step2 } from "./pages/upload/Step2";
import { Step3 } from "./pages/upload/Step3";
import { Step4 } from "./pages/upload/Step4";
import { Facility } from "./pages/Facility";
import { Documents } from "./pages/Documents";
import { Repayment } from "./pages/Repayment";
import { Notifications } from "./pages/Notifications";

export const router = createHashRouter([
  {
    path: "/",
    Component: DashboardLayout,
    children: [
      { index: true, Component: Dashboard },
      { path: "revenue-health", Component: RevenueHealth },
      { path: "facility", Component: Facility },
      { path: "documents", Component: Documents },
      { path: "repayment", Component: Repayment },
      { path: "notifications", Component: Notifications },
      {
        path: "upload",
        Component: UploadFlow,
        children: [
          { index: true, Component: Step1 },
          { path: "step-2", Component: Step2 },
          { path: "step-3", Component: Step3 },
          { path: "step-4", Component: Step4 }
        ]
      }
    ],
  },
]);
