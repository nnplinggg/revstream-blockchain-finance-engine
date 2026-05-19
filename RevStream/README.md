# RevStream – Frontend

React + TypeScript + Vite app cho SME Portal và Investor Portal của RevStream Capital.

## Setup

```bash
pnpm install
pnpm dev      # dev server tại localhost:5173
pnpm build    # build production → dist/
```

## Cấu trúc

```
src/
├── app/
│   ├── components/
│   │   ├── ui/          # shadcn/ui components
│   │   └── DashboardLayout.tsx
│   ├── pages/
│   │   ├── Dashboard.tsx
│   │   ├── RevenueHealth.tsx
│   │   ├── Facility.tsx
│   │   ├── Documents.tsx
│   │   ├── Repayment.tsx
│   │   ├── Notifications.tsx
│   │   ├── UploadFlow.tsx
│   │   └── upload/      # Step1 → Step4
│   └── routes.tsx
├── styles/
└── main.tsx
```

## Deploy

Push lên `main` → GitHub Actions tự build và deploy lên GitHub Pages.
