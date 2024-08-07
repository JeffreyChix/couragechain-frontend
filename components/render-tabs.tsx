"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { useRouterQueryState } from "@/hooks/useRouterQueryState";
import { useState } from "react";

interface RenderTabsProps {
  defaultValue: string;
  tabs: Tab[];
  className?: string;
  onChange?: (val: string) => void;
}

export default function RenderTabs({
  defaultValue,
  onChange,
  tabs,
  className,
}: RenderTabsProps) {
  const [tab, setTab] = useRouterQueryState("tab", defaultValue);

  const onTabChange = (val: string) => {
    setTab(val);
    onChange?.(val);
  };
  return (
    <Tabs value={tab} onValueChange={onTabChange} className={className}>
      <TabsList>
        <div className="flex items-center gap-3">
          {tabs.map((tab, index) => (
            <TabsTrigger
              key={index + tab.value}
              value={tab.value}
              disabled={tab.disabled}
              aria-disabled={tab.disabled}
            >
              {tab.title}
            </TabsTrigger>
          ))}
        </div>
      </TabsList>

      {tabs.map((tab, index) => (
        <TabsContent
          key={index + tab.value}
          value={tab.value}
          aria-disabled={tab.disabled}
          className={tab.className}
        >
          {tab.body}
        </TabsContent>
      ))}
    </Tabs>
  );
}
