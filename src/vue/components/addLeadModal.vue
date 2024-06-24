<script>
/* eslint-disable */
import { reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, minLength } from '@vuelidate/validators'

export default {
	setup() {
		const state = reactive({
			phone: '',
			name: '',
			comment: ''
		})
		const rules = {
			name: { required, minLength: minLength(3) }
		}
		const $v = useVuelidate(rules, state)

		$(function() {
			$("#phone").mask("+7(999) 999-99-99")
		})

		function submit() {
			this.$v.$touch()
			if (this.$v.$invalid) {
			} else {
				setTimeout(() => {
					this.state.phone = ''
					this.state.name = ''
					this.state.comment = ''

					let modal = document.querySelector('.resolve-modal')
					let oldModal = document.querySelector('.modal')

					oldModal.classList.remove('modal-active')
					modal.classList.add('resolve-modal-active')
				}, 1000)
			}
		}

		function closeModal() {
			document.querySelector('.modal').classList.remove('modal-active')
			document.querySelector('.body').style.overflowY='auto'
		}

		return { state, $v, closeModal, submit }
	}
}
</script>

<template>
	<dialog>
		<div class='modal-background'>
		</div>
		<div class='modal-container'>
			<div  class='modal-container__title title-2 indent'>
				<span>
					Оставить заявку
				</span>
			</div>
			<button class='modal-container__btn' @click='closeModal'>
				<svg width='32' height='32' viewBox='0 0 32 32'>
					<use xlink:href='#Cross'></use>
				</svg>
			</button>
			<form class='modal-container__form form' action=''>
				<div class='form__block'>
					<input
						v-model='state.name'
            type='text'
						class='form__text-field'
						:class="{ 'form__text-field_error': $v.name.$error }"
            placeholder='Ваше имя'
						@blur='$v.name.$touch()'
					>
					<span
						v-if='$v.name.$error'
						class='form__message_error'
					>
					Необходимо заполнить это поле
				</span>
				</div>
					<input
            id="phone"
						v-model='state.phone'
            type='text'
						class='form__text-field'
						placeholder='+7(___)___-__-__'
					>
				<textarea
					v-model='state.comment'
					class='form__text-field form__text-field_wide'
					placeholder='Комментарий'
					cols='30'
					rows='10'
				>
				</textarea>
				<button
					class='form__submit-btn btn-1 btn-1__disabled'
					:class="{ 'btn-1__yellow': !$v.$invalid }"
					:disabled='$v.$invalid'
					@click.stop.prevent='submit'
				>
					Отправить
				</button>
			</form>
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
.modal-container {
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, 25%);
	z-index: 9;
	background-color: #ffffff;
	border-radius: 32px;
	padding: 32px;
	width: 328px;

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
.form {
	display: flex;
	flex-direction: column;
	gap: 16px;

	&__text-field {
		font-feature-settings: "pnum" on, "lnum" on;
		border: 1px solid #b9c0c0;
		border-radius: 24px;
		padding: 12px 16px;
		width: 100%;
		height: 46px;
		background: #ffffff;
	}
	&__text-field_wide {
		width: 100%;
		height: 90px;
	}
	&__text-field_error {
		border: 1px solid #fa3b3b;
	}
	&__message_error {
		text-align: center;
		font-size: 12px;
		color: #fa3b3b;
	}
  &__politics {
    display: flex;
    align-items: center;
    position: relative;
    padding-left: 25px;
  }
  &__politics-link {
    color: var(--green-default);
  }
  &__politics-link:hover {
    cursor: pointer;
    text-decoration: underline;
  }
}
</style>