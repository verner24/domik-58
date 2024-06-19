import requireAll from '@/index'

requireAll(require.context('./', true, /\.(ts|js|css|scss)$/))
