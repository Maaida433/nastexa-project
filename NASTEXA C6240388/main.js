document.addEventListener('DOMContentLoaded', function(){
	const form = document.getElementById('loginForm');
	const user = document.getElementById('user');
	const pass = document.getElementById('password');
	const toggle = document.querySelector('.toggle-pass');
	const remember = document.getElementById('remember');

	// Entrance animation
	requestAnimationFrame(()=> form.classList.add('enter'));

	// Populate remembered user
	const saved = localStorage.getItem('rememberedUser');
	if(saved){ user.value = saved; remember.checked = true }

	// Toggle password visibility
	toggle.addEventListener('click', ()=>{
		const isPassword = pass.type === 'password';
		pass.type = isPassword ? 'text' : 'password';
		toggle.textContent = isPassword ? 'Hide' : 'Show';
	});

	// Animate checkbox briefly on change
	remember.addEventListener('change', ()=>{
		const mark = remember.nextElementSibling; // .checkmark
		if(!mark) return;
		mark.classList.add('pulse');
		setTimeout(()=> mark.classList.remove('pulse'), 350);
	});

	// Simple form handling
	form.addEventListener('submit', (e)=>{
		e.preventDefault();
		const u = user.value.trim();
		const p = pass.value;
		if(!u){ user.focus(); return alert('Please enter username or email.') }
		if(!p){ pass.focus(); return alert('Please enter your password.') }

		if(remember.checked){ localStorage.setItem('rememberedUser', u) }
		else { localStorage.removeItem('rememberedUser') }

		// Simulate successful submission
		alert('Logged in as: ' + u);
		form.reset();
		pass.type = 'password'; toggle.textContent = 'Show';
	});
});

