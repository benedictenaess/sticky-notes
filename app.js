const userNote = document.querySelector('textarea');
const submitButton = document.querySelector('.submit-button');
const notesContainer = document.querySelector('.notes-container');
const errorMessage = document.querySelector('.error-message');

const colors = ['white', 'lightpink', 'coral', 'hotpink', 'lavender', 'lightblue', 'indianred', 'peru', 'cold' ,'yellow'];



const handleNotes = () => {
	if (userNote.value.trim() === ''){
		errorMessage.style.display = 'block';
		return
	}

	const randomColor = Math.floor(Math.random() * (10 - 0) + 0);
	const randomRotation = Math.floor(Math.random() * (11 - -10) + - 10);

	const stickyDiv = document.createElement('div');
	notesContainer.append(stickyDiv);
	stickyDiv.textContent = userNote.value;
	
}

submitButton.addEventListener('click', handleNotes);