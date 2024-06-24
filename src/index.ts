// import '@assets/css/tailwind.css'
import '@/vue/index'
import '@assets/css/normalize.css'
import '@assets/scss/index.scss'
import '@assets/icons'
import '@/common.blocks'

export default function requireAll(r: __WebpackModuleApi.RequireContext): void {
	r.keys().forEach(r)
}

if (process.env.NODE_ENV === 'development') {
	requireAll(require.context('./', true, /\.(html)$/))
}
