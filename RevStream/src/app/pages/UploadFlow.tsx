import { Outlet, useLocation } from "react-router";
import { Check } from "lucide-react";
import { clsx } from "clsx";

const STEPS = [
  { id: 1, name: "Tải lên", path: "/upload" },
  { id: 2, name: "Xác minh", path: "/upload/step-2" },
  { id: 3, name: "Cấu hình", path: "/upload/step-3" },
  { id: 4, name: "Xác nhận", path: "/upload/step-4" },
];

export function UploadFlow() {
  const location = useLocation();
  
  const currentStepId = (() => {
    if (location.pathname.endsWith("step-4")) return 4;
    if (location.pathname.endsWith("step-3")) return 3;
    if (location.pathname.endsWith("step-2")) return 2;
    return 1;
  })();

  return (
    <div className="flex flex-col h-full bg-bg-subtle">
      {/* Stepper */}
      <div className="bg-white px-8 py-4 border-b border-border-subtle flex-shrink-0">
        <div className="flex items-center justify-between max-w-3xl mx-auto">
          {STEPS.map((step, idx) => {
            const isCompleted = step.id < currentStepId;
            const isActive = step.id === currentStepId;
            return (
              <div key={step.id} className="flex items-center flex-1 last:flex-none">
                <div className="flex items-center gap-3">
                  <div 
                    className={clsx(
                      "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors",
                      isCompleted ? "bg-forest-500 text-white" :
                      isActive ? "bg-forest-900 text-white" :
                      "bg-border-subtle text-text-muted"
                    )}
                  >
                    {isCompleted ? <Check className="w-4 h-4" /> : step.id}
                  </div>
                  <span className={clsx(
                    "text-sm font-semibold",
                    (isActive || isCompleted) ? "text-forest-900" : "text-text-muted"
                  )}>
                    {step.name}
                  </span>
                </div>
                {idx < STEPS.length - 1 && (
                  <div className={clsx(
                    "h-px mx-4 flex-1 transition-colors",
                    isCompleted ? "bg-forest-500" : "bg-border-subtle"
                  )} />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
}
