"use client";

import { useEffect, useState } from "react";
import {
  contactDetails,
  siteLinks,
  type PublicSiteLinks,
} from "@/shared/data/siteLinks";

export function usePublicSiteSettings(): PublicSiteLinks {
  const [settings, setSettings] = useState<PublicSiteLinks>({
    ...siteLinks,
    ...contactDetails,
  });

  useEffect(() => {
    void fetch("/api/site-settings")
      .then(async (response) => {
        if (!response.ok) return;
        const data = (await response.json()) as Partial<PublicSiteLinks>;
        setSettings((current) => ({ ...current, ...data }));
      })
      .catch(() => {
        // Keep the source-controlled fallback when the public settings API is unavailable.
      });
  }, []);

  return settings;
}
