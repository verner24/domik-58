import { createApp } from 'vue'

import Temp from '@components/Temp.vue'
import Slider from '@components/Slider.vue'
import addLeadModal from '@components/addLeadModal.vue'
import resolveModal from '@components/resolveModal.vue'

const app = createApp({
	components: {
		Temp,
		Slider,
		addLeadModal,
		resolveModal
	}
})

app.mount('#app')
