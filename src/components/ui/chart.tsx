"use client";

import * as React from "react";
import {
  ResponsiveContainer,
  Tooltip,
  Legend,
  TooltipProps,
  LegendProps,
} from "recharts";

import { cn } from "@/lib/utils";

export function ChartContainer({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("w-full h-[350px]", className)}>
      <ResponsiveContainer width="100%" height="100%">
        {children}
      </ResponsiveContainer>
    </div>
  );
}

export function ChartTooltip({
  content,
}: {
  content?: TooltipProps["content"];
}) {
  return <Tooltip content={content} />;
}

export function ChartLegend(props: LegendProps) {
  return <Legend {...props} />;
}

export function ChartTooltipContent({
  active,
  payload,
  label,
}: TooltipProps) {
  if (!active || !payload?.length) return null;

  return (
    <div className="rounded-lg border bg-background p-2 shadow-sm">
      <div className="mb-1 text-sm font-medium">{label}</div>
      <div className="space-y-1">
        {payload.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between gap-2 text-sm"
          >
            <span>{item.name}</span>
            <span className="font-mono font-medium">
              {item.value as number}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
