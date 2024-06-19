<script setup lang="ts">
import { ref } from 'vue'

const count = ref<number>(3)

const onClick = (): number => count.value++
const onReset = () => (count.value = 3)
</script>

<template>
	<div class="temp">
		<h2>Vue {{ count }}</h2>
		<div>
			<button class="button" type="button" @click="onClick">Click</button>
			<button class="button" type="button" @click="onReset">Reset</button>
		</div>
	</div>
</template>
