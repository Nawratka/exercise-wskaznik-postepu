const formPages = document.querySelectorAll('.page');
const steps = document.querySelectorAll('.step');
const progressBar = document.querySelector('.progress-bar');
const prevBtn = document.querySelector('.btn-prev');
const nextBtn = document.querySelector('.btn-next');

prevBtn.disabled = true;
let currentStep = 1;

const handleNextBtn = () => {
	currentStep++;
	disabledControl(currentStep);
	if (currentStep >= steps.length) {
		currentStep = steps.length;
	}
	handleProgressBar();
};
const handlePrevBtn = () => {
	currentStep--;
	disabledControl(currentStep);
	if (currentStep <= 1) {
		currentStep = 1;
	}
	handleProgressBar();
};

const handleProgressBar = () => {
	steps.forEach((step, index) => {
		if (index < currentStep) {
			step.classList.add('active-step');
		} else {
			step.classList.remove('active-step');
		}
	});

	const activeSteps = document.querySelectorAll('.active-step');
	progressBar.style.width =
		((activeSteps.length - 1) / (steps.length - 1)) * 100 + '%';
	disabledControl();
	handlePages();
};

const disabledControl = () => {
	if (currentStep === 1) {
		prevBtn.disabled = true;
	} else if (currentStep === steps.length) {
		nextBtn.disabled = true;
	} else {
		nextBtn.disabled = false;
		prevBtn.disabled = false;
	}
};

const handlePages = () => {
	// let currentPage = formPages[currentStep - 1];
	// formPages.forEach((page) => {
	// 	page.classList.remove('active-page');
	// });
	// currentPage.classList.add('active-page');
	formPages.forEach(page => {
		if (currentStep == page.dataset.number) {
			page.classList.add('active-page')
		} else {
			page.classList.remove('active-page')
		}
	})
};

prevBtn.addEventListener('click', handlePrevBtn);
nextBtn.addEventListener('click', handleNextBtn);
