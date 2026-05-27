'use client';

export function Footer() {
  return (
    <footer className="py-5 text-center border-t border-white/5">
      <p className="text-muted-foreground text-xs">
        © {new Date().getFullYear()} Megha R K. All rights reserved.
      </p>
    </footer>
  );
}
