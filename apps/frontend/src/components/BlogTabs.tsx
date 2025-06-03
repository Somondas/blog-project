// components/BlogTabs.tsx
"use client";

import { Tabs, Tab } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const categories = ["all", "frontend", "backend", "fullstack"];

const BlogCategoryTabs = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const category = searchParams.get("category") || "all";
  const [value, setValue] = useState(category);

  useEffect(() => {
    setValue(category);
  }, [category]);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (newValue === "all") {
      params.delete("category");
    } else {
      params.set("category", newValue);
    }
    params.set("page", "1"); // Reset page when switching category
    router.push(`/blog?${params.toString()}`);
  };

  return (
    <div className="flex justify-center my-4">
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="scrollable"
        scrollButtons="auto"
      >
        {categories.map((cat) => (
          <Tab
            key={cat}
            value={cat}
            label={cat.charAt(0).toUpperCase() + cat.slice(1)}
          />
        ))}
      </Tabs>
    </div>
  );
};

export default BlogCategoryTabs;
