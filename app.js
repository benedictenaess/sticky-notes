const userNote = document.querySelector('textarea');
const submitButton = document.querySelector('.submit-button');
const notesContainer = document.querySelector('.notes-container');
const errorMessage = document.querySelector('.error-message');

const handleNotes = () => {
	if (userNote.value.trim() === ''){
		errorMessage.style.display = 'block';
		return
	}
}

submitButton.addEventListener('click', handleNotes);