// import '@assets/css/tailwind.css'
import '@assets/css/normalize.css'
import '@assets/scss/index.scss'
import '@assets/icons'
import '@/common.blocks'
// import '@/vue/index'

export default function requireAll(r: __WebpackModuleApi.RequireContext): void {
	r.keys().forEach(r)
}

if (process.env.NODE_ENV === 'development') {
	requireAll(require.context('./', true, /\.(html)$/))
}
