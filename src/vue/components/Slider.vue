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
    v-if="!title"
    :slides-per-view="1.3"
    :space-between="16"
    :grab-cursor="true"
    :modules="modules"
    class="slider"
  >
    <swiper-slide>
      <div class="slider__img"></div>
      <div class="slider__container_gradient">
        <div class="slider__info">
				<span class="slider__info-title">
					Баня
				</span>
          <span class="slider__info-subtitle">
					Финская сауна или русская баня - выбирайте,
					что вам больше по душе. Наш мастер растопит вам баню по вашим предпочтениям.
				</span>
          <a class="slider__info-link">
            Подробнее
          </a>
        </div>
      </div>
    </swiper-slide>
		<swiper-slide>
			<div class="slider__img">
			</div>
			<div class="slider__container_gradient">
				<div class="slider__info">
				<span class="slider__info-title">
					Баня
				</span>
					<span class="slider__info-subtitle">
					Финская сауна или русская баня - выбирайте,
					что вам больше по душе. Наш мастер растопит вам баню по вашим предпочтениям.
				</span>
					<a class="slider__info-link">
						Подробнее
					</a>
				</div>
			</div>
		</swiper-slide>
		<swiper-slide>
			<div class="slider__img">
			</div>
			<div class="slider__container_gradient">
				<div class="slider__info">
				<span class="slider__info-title">
					Баня
				</span>
					<span class="slider__info-subtitle">
					Финская сауна или русская баня - выбирайте,
					что вам больше по душе. Наш мастер растопит вам баню по вашим предпочтениям.
				</span>
					<a class="slider__info-link">
						Подробнее
					</a>
				</div>
			</div>
		</swiper-slide>
		<swiper-slide>
			<div class="slider__img">
			</div>
			<div class="slider__container_gradient">
				<div class="slider__info">
				<span class="slider__info-title">
					Баня
				</span>
					<span class="slider__info-subtitle">
					Финская сауна или русская баня - выбирайте,
					что вам больше по душе. Наш мастер растопит вам баню по вашим предпочтениям.
				</span>
					<a class="slider__info-link">
						Подробнее
					</a>
				</div>
			</div>
		</swiper-slide>
	</swiper>
	<swiper
		v-else
		:slides-per-view="1.7"
		:space-between="16"
		:grab-cursor="true"
		:modules="modules"
		class="slider-conditions"
	>
		<swiper-slide class="slider-conditions__item">
			<svg width='120' height='120' viewBox='0 0 120 120'>
				<use xlink:href='#ConditionsKey'></use>
			</svg>
			<span class="slider-conditions__title title-2 indent">{{ title }}</span>
			<span class="slider-conditions__subtitle">{{ subtitle }}</span>
		</swiper-slide>
		<swiper-slide class="slider-conditions__item">
			<svg width='120' height='120' viewBox='0 0 120 120'>
				<use xlink:href='#ConditionsKey'></use>
			</svg>
			<span class="slider-conditions__title title-2 indent">{{ title }}</span>
			<span class="slider-conditions__subtitle">{{ subtitle }}</span>
		</swiper-slide>
		<swiper-slide class="slider-conditions__item">
			<svg width='120' height='120' viewBox='0 0 120 120'>
				<use xlink:href='#ConditionsKey'></use>
			</svg>
			<span class="slider-conditions__title title-2 indent">{{ title }}</span>
			<span class="slider-conditions__subtitle">{{ subtitle }}</span>
		</swiper-slide>
		<swiper-slide class='slider-conditions__item'>
			<svg width='120' height='120' viewBox='0 0 120 120'>
				<use xlink:href='#ConditionsKey'></use>
			</svg>
			<span class="slider-conditions__title title-2 indent">{{ title }}</span>
			<span class="slider-conditions__subtitle">{{ subtitle }}</span>
		</swiper-slide>
	</swiper>
</template>

<style scoped lang='scss'>
.slider {
	width: auto;
	height: 440px;

	&__img {
		 background-image: url('../../public/images/Service.jpg');
		 width: inherit;
		 height: inherit;
		 background-size: cover;
		 background-position: center;
		 border-radius: 16px;
	 }
	&__info {
		position: absolute;
		z-index: 2;
		bottom: 0;
		color: #ffffff;
		display: flex;
		flex-direction: column;
		gap: 16px;
		justify-content: flex-start;
		padding: 16px;
	}
	&__container_gradient::after {
		position: absolute;
		z-index: 1;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 360px;
		border-radius: 16px;
		background: linear-gradient(0deg, rgba(9, 11, 9, .76) 29.16%, rgba(9, 11, 9, 0) 67.08%);
		content: "";
		transition: all .5s ease-in-out;
	}
	&__info-title {
		font-weight: 700;
		font-size: 20px;
		line-height: 110%;
	}
	&__info-link {
		font-weight: 600;
		text-decoration: underline;
		text-decoration-skip-ink: none;
	}
	&__info-link:hover {
		color: #62c03d;
		transition: color .3s ease-in-out;
	}
}
.slider-conditions {
	width: auto;
	height: 440px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	background: #f9fdf7;

	&__item {
		background: #ffffff;
		height: 428px;
		margin-left: 16px;
		margin-bottom: 48px;
		padding-top: 24px;
		padding-inline: 24px;
		display: flex;
		flex-direction: column;
	}
	&__subtitle {
		padding-bottom: 50px;
	}
}
.swiper-slide {
	position: relative;
	width: 280px;
	border-radius: 16px;
}
</style>