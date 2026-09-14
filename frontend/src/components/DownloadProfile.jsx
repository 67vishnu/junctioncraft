import React from "react";
import { Download } from "lucide-react";
import { COMPANY_PROFILE_PDF } from "../api";

// One-click company profile PDF download button.
const DownloadProfile = ({ variant = "solid", className = "" }) => {
  const base =
    "inline-flex items-center gap-2 px-6 py-3.5 rounded-md font-semibold transition-all";
  const styles =
    variant === "outline"
      ? "border border-primary/40 text-primary hover:bg-secondary"
      : variant === "dark"
      ? "bg-emerald-500 text-neutral-950 hover:bg-emerald-400"
      : "bg-primary text-primary-foreground hover:bg-emerald-800";
  return (
    <a
      href={COMPANY_PROFILE_PDF}
      target="_blank"
      rel="noreferrer"
      className={`${base} ${styles} ${className}`}
    >
      <Download className="h-4 w-4" /> Download Company Profile
    </a>
  );
};

export default DownloadProfile;
