const userNote = document.querySelector('textarea');
const submitButton = document.querySelector('.submit-button');
const notesContainer = document.querySelector('.notes-container');
const errorMessage = document.querySelector('.error-message');

const colors = ['white', 'lightpink', 'coral', 'hotpink', 'lavender', 'lightblue', 'indianred', 'peru', 'lightgreen' ,'lightpurple'];


userNote.addEventListener('input', () => {
	errorMessage.style.display = 'none';
	if (userNote.value.length >= 200){
		errorMessage.style.display = 'block';
		errorMessage.textContent = 'You have reached the maximum characters allowed';
		return;
	}
	errorMessage.textContent = 'Please enter text';
})

const handleNotes = () => {
	if (userNote.value.trim() === ''){
		errorMessage.style.display = 'block';
		errorMessage.textContent = 'Please enter text';
		return
	}

	const randomColor = Math.floor(Math.random() * (10 - 0) + 0);
	const randomRotation = Math.floor(Math.random() * (11 - -10) + - 10);

	const stickyDiv = document.createElement('div');
	notesContainer.append(stickyDiv);
	stickyDiv.textContent = userNote.value;
	stickyDiv.classList.add('sticky-div');
	stickyDiv.style.backgroundColor = colors[randomColor];
	stickyDiv.style.transform = `rotate(${randomRotation}deg)`	

	userNote.value = '';
}



submitButton.addEventListener('click', handleNotes);