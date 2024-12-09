import { defineConfig } from 'vite'

export default defineConfig({
    base: '/Festival-greeting-app/',
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                greeting: 'greeting/greeting.html',
            },
        },
    }
});
