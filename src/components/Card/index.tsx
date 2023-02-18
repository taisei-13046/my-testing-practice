import React from "react";

export const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-3 bg-green-100 rounded-lg shadow-sm">{children}</div>
  );
};
