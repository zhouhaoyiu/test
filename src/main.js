import { createApp, h } from 'vue'

createApp({
  render() {
    return h('main', { class: 'page' }, [
      h('h1', 'to'),
      h('p', 'Vue 3 + Vite migration complete.'),
    ])
  },
}).mount('#app')
