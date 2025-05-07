import {
    defineConfig
} from "vite";
import {
    viteStaticCopy
} from "vite-plugin-static-copy";

export default defineConfig({
    base: "/First-Project-3D/",
    plugins: [
        viteStaticCopy({
            targets: [{
                src: "models",
                dest: "."
            }]
        })
    ]
});
