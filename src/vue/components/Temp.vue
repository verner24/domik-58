<script>
/* eslint-disable */
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

export default {
	components: {
		Swiper,
		SwiperSlide
	},
	props: {
		title: {
			type: String,
			default: ''
		},
		subtitle: {
			type: String,
			default: ''
		}
	},
	setup() {
		return {
			modules: [Navigation, Pagination, Scrollbar, A11y]
		}
	}
}
</script>

<template>
	<swiper
		v-if='!title'
		:modules="modules"
		:slides-per-view="1"
		:space-between="50"
		:pagination="{ clickable: true }"
	>
		<swiper-slide><div class="image-swiper"></div></swiper-slide>
		<swiper-slide><div class="image-swiper"></div></swiper-slide>
		<swiper-slide><div class="image-swiper"></div></swiper-slide>
		<swiper-slide><div class="image-swiper"></div></swiper-slide>
	</swiper>
	<swiper
		v-else
		:modules="modules"
		:slides-per-view="1"
		:space-between="50"
		:pagination="{ clickable: true }"
	>
		<swiper-slide class='img-wrapper'>
			<svg width='120' height='120' viewBox='0 0 120 120'>
				<use xlink:href='#Advantages'></use>
			</svg>
			<span class='title-3'>{{ title }}</span>
			<span class='subtitle-2'>{{ subtitle }}</span>
		</swiper-slide>
		<swiper-slide class='img-wrapper'>
			<svg width='120' height='120' viewBox='0 0 120 120'>
				<use xlink:href='#Advantages'></use>
			</svg>
			<span class='title-3'>{{ title }}</span>
			<span class='subtitle-2'>{{ subtitle }}</span>
		</swiper-slide>
		<swiper-slide class='img-wrapper'>
			<svg width='120' height='120' viewBox='0 0 120 120'>
				<use xlink:href='#Advantages'></use>
			</svg>
			<span class='title-3'>{{ title }}</span>
			<span class='subtitle-2'>{{ subtitle }}</span>
		</swiper-slide>
		<swiper-slide class='img-wrapper'>
			<svg width='120' height='120' viewBox='0 0 120 120'>
				<use xlink:href='#Advantages'></use>
			</svg>
			<span class='title-3'>{{ title }}</span>
			<span class='subtitle-2'>{{ subtitle }}</span>
		</swiper-slide>
	</swiper>

</template>
<style lang='scss'>
.swiper {
	width: 328px;
	height: 258px;
	margin-bottom: 8px;
}
.swiper-wrapper {
	position: relative;
}
.swiper-pagination {
	position: absolute;
	bottom: -5px !important;
}
.swiper-pagination-bullet {
	border-radius: 1px;
	width: 74px;
	height: 2px;
}
.swiper-pagination-bullet-active {
	background: #ffaa29;
}
.img-wrapper {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
.image-swiper {
	background-image: url('../../public/images/CardDom.jpg');
	border-radius: 16px;
	width: inherit;
	height: 240px;
	background-size: cover;
	background-position: center;
	margin-bottom: 16px;
}
</style>
