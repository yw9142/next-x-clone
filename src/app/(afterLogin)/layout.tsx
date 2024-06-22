import { ReactNode } from "react";

export default function AfterLoginLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div>
      afterLogin layout
      {children}
    </div>
  );
}
