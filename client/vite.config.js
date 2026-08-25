import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { qrcode } from "vite-plugin-qrcode";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    qrcode(), // Draws the scannable QR code in your terminal
  ],
  server: {
    host: true, // Automatically exposes your app to the local Wi-Fi network
  },
});
