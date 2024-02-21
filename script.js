//your JS code here. If req
document.addEventListener('DOMContentLoaded', () => {
	const btn = document.getElementById("btn");

	btn.addEventListener('click', handleButtonClick);
});

async function handleButtonClick() {
	const textInput = document.getElementById("text");
	const delayInput = document.getElementById("delay");
	const outputInput = document.getElementById("output");

	const text = textInput.value;
	const delay = parseInt(delayInput.value);

	 outputInput.innerText = '';

	 try {
        await delayAsync(delay);
        outputInput.innerText = text;
    } catch (error) {
        console.error('Error:', error);
    }
}

function delayAsync(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}