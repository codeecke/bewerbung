// Plugins
import { registerPlugins } from '@/plugins'

// Components
import Layout from './layout/Layout.vue'

// Composables
import { createApp } from 'vue'

const app = createApp(Layout)

registerPlugins(app)

app.mount('#root')
