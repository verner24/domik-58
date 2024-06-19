import requireAll from '@/index'

requireAll(require.context('./', true, /\.svg$/))
