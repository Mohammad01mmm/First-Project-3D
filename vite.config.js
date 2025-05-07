import {
    defineConfig
} from 'vite';

export default defineConfig({
    base: '/First-Project-3D/',
    build: {
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        return 'vendor';
                    }
                }
            }
        },
        chunkSizeWarningLimit: 1000 // به کیلوبایت (افزایش حد هشدار)
    }
});
