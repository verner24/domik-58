export default function useLock() {
	let scrollOffset: number = 0
	function scrollLock() {
		const bodyElement: HTMLElement = document.querySelector('body') as HTMLBodyElement

		scrollOffset = window.scrollY
		const lockPaddingOffset: number = window.innerWidth - bodyElement.offsetWidth
		bodyElement.style.cssText = `
      overflow: hidden;
			padding-right: ${lockPaddingOffset}px;

    `
		const matches: NodeListOf<HTMLInputElement> = document.querySelectorAll('.lock-padding')

		if (matches.length > 0) {
			matches.forEach(elem => {
				elem.style.paddingRight = `${lockPaddingOffset}px`
			})
		}

		document.documentElement.style.scrollBehavior = 'unset'
	}

	function scrollUnLock() {
		const bodyElement: HTMLElement = document.querySelector('body') as HTMLBodyElement

		bodyElement.style.cssText = ''
		window.scroll({ top: scrollOffset })
		document.documentElement.style.scrollBehavior = ''

		const matches: NodeListOf<HTMLInputElement> = document.querySelectorAll('.lock-padding')
		if (matches.length > 0) {
			matches.forEach(elem => {
				elem.style.paddingRight = ''
			})
		}
	}

	return {
		scrollLock,
		scrollUnLock
	}
}
