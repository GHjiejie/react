import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// 导入文件读写模块
import fs from "fs";

// 读取文件
fs.readFile("test.txt", (err, data) => {
  if (err) {
    console.error("读取文件失败");
  } else {
    console.log(data.toString());
  }
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // 设置别名
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
