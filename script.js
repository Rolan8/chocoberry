const scriptURL = 'https://script.google.com/macros/s/AKfycbxX0BUes0RSd374cDHBdK6ZS_QYp4nuDtJCR4UIeQQEOgPt1OqKWERe_M2EmHXphEU/exec'
			const form = document.forms['submit-to-google-sheet']
			
			console.log(new Date())
		
			form.addEventListener('submit', e => {
			
				document.querySelector('#dateForm').value = new Date()

			  e.preventDefault()
			  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
				.then(response => alert("Заказ отправлен, вам могут перезвонить для уточнения деталей"))
				.then(() => {  window.location.reload()})
				.catch(error => console.error('Ошибка отправки', error.message))
			})
