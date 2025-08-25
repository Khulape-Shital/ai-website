"use client";

import React from "react";
import { ConvexProvider, ConvexReactClient } from "convex/react";

const ConvexClientProvider = ({ children }) => {
  // Try both env variable styles (React/Next)
  const convexUrl =
    process.env.REACT_APP_CONVEX_URL || process.env.NEXT_PUBLIC_CONVEX_URL;

  if (!convexUrl) {
    console.warn(
      "⚠️ Convex URL not found in environment. UI will still render, but Convex queries/mutations will not work."
    );
    return <>{children}</>; // fallback: just render UI
  }

  const convex = new ConvexReactClient(convexUrl);

  return <ConvexProvider client={convex}>{children}</ConvexProvider>;
};

export default ConvexClientProvider;
