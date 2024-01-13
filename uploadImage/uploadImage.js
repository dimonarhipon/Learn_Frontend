const upload = document.querySelector('#upload');
const uploaded = document.querySelector('#uploaded');

const MAX_SIZE_FILE = 10_485_760;

const uploadImage = (file) => {
  const reader = new FileReader();

	const blob = URL.createObjectURL(file);
	console.log(blob);

  reader.onload = () => {
    uploaded.src = blob;
  };

  reader.readAsDataURL(file);
}

upload.addEventListener('change', (event) => {
  const file = event.target.files[0];

	if (file && file.type !== 'image/jpg' && file.type !== 'image/jpeg' && file.type !== 'image/png') {
		return console.error('не тот формат')
	}

	if (file && file.size > MAX_SIZE_FILE) {
		return console.error('слишком большой размер');
	}

	if (file && file.size < MAX_SIZE_FILE) {
		return uploadImage(file);
	}
});
