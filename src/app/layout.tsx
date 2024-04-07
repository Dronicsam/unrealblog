import type { PropsWithChildren } from "react";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <div>
          <div className="root">{children}</div>
        </div>
      </body>
    </html>
  );
}
