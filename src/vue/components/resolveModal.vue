<script setup>
/* eslint-disable */
function closeModal() {
	document.querySelector('.resolve-modal').classList.remove('resolve-modal-active')
	document.querySelector('.body').style.overflowY='auto'
}
</script>

<template>
	<dialog>
		<div class='modal-background'>
		</div>
		<div class='modal-container-resolve'>
			<span class='modal-container-resolve__title title-2'>
				Спасибо за заявку!
			</span>
			<span class='modal-container-resolve__subtitle'>
				Мы свяжемся с вами в ближайшее время, чтобы обсудить все детали.
			</span>
			<button class='modal-container-resolve__btn' @click='closeModal'>
				<svg width='32' height='32' viewBox='0 0 32 32'>
					<use xlink:href='#Cross'></use>
				</svg>
			</button>
			<button class='modal-container-resolve__submit-btn btn-1 btn-1__green' @click='closeModal'>
				Хорошо
			</button>
		</div>
	</dialog>
</template>

<style scoped lang='scss'>
.modal-background {
	position: fixed;
	top: 0;
	left: 0;
	z-index: 8;
	width: 100%;
	height: 100%;
	background-color: #000000;
	opacity: 0.3;
}
.modal-container-resolve {
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, 80%);
	z-index: 9;
	background-color: #ffffff;
	border-radius: 32px;
	padding: 32px;
	width: 328px;
	height: 248px;
	display: flex;
	flex-direction: column;
	gap: 24px;

&__btn {
	 position: absolute;
	 z-index: 10;
	 top: 10px;
	 right: 10px;
	 border: none;
	 cursor: pointer;
	 padding: 0;
	 background: #ffffff;
 }
}
</style>