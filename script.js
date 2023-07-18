var shadowDiv = document.querySelector('div');
var addList = document.querySelector('.addList');
var addItem = document.querySelector('.addItem');
var toDoHeading = document.querySelector('section');
var inputValue = document.querySelector('#addpara');
var addNewItemHead = document.querySelector('#inpuTtext');
var header = document.querySelector('header');
var todoCount = 0;
var newTodoCount = 0;
var card;
function AddPopup() {
	shadowDiv.classList.add('shadow');
	addList.style.display = 'flex';
}

document.querySelector('.close1').addEventListener('click', () => {
	shadowDiv.classList.remove('shadow');
	addList.style.display = 'none';
});

document.querySelector('.close2').addEventListener('click', () => {
	shadowDiv.classList.remove('shadow');
	addItem.style.display = 'none';
});

function addnewPopup() {
	todoCount++;
	shadowDiv.classList.remove('shadow');
	addList.style.display = 'none';
	document.querySelector('#noText').style.display = 'none';
	var toDoCard = document.createElement('div');
	var CardHeading = document.createElement('div');
	var boxLine = document.createElement('hr');
	var deleteBtn = document.createElement('div');
	var boxAddButton = document.createElement('div');
	toDoHeading.appendChild(toDoCard);
	toDoCard.setAttribute('id', `box${todoCount}`);
	toDoCard.classList.add('box');
	toDoCard.appendChild(CardHeading);
	CardHeading.classList.add('CardHeading');
	CardHeading.innerHTML = `${inputValue.value}`;
	document.querySelector('#addpara').value="";
	CardHeading.addEventListener('click', () => {
		var allItems = document.querySelectorAll('.box');
		var card = CardHeading.parentNode;
		var cardVal = CardHeading.innerHTML;
		header.style.display = 'none';
		card.style.display = 'block';
		toDoHeading.style.justifyContent="center";
		// toDoHeading.style.display = 'none';
		// shadowDiv.appendChild(card);
		// card.classList.add('Position');
		allItems.forEach((cards)=>{
			if(cards!==card)
			cards.style.display = 'none';			
		});
		document.querySelector('.sidebar').style.display = 'flex';
		document.querySelector('.text').innerHTML = `<div>${cardVal}</div>`;
		document.querySelector('#addpara').value='';
		document.querySelector('.text').value='';
		document.querySelector('.Back').addEventListener('click', () => {
			header.style.display = 'flex';
			toDoHeading.style.display = 'flex';
			toDoHeading.style.justifyContent='space-between';
			document.querySelector('.sidebar').style.display = 'none';
			allItems.forEach((cards)=>{			
				cards.style.display = 'block';	
			});
			// toDoHeading.appendChild(card);
			// card.classList.remove('Position');
		});

		document.querySelector('#addItem').addEventListener('click', () => {
			shadowDiv.classList.add('shadow');
			addList.style.display = 'flex';
			header.style.display = 'flex';
			toDoHeading.style.display = 'flex';
			document.querySelector('.sidebar').style.display = 'none';
			allItems.forEach((cards)=>{			
				cards.style.display = 'block';	
			});
			// toDoHeading.appendChild(card);
			// card.classList.remove('Position');
			
		});
	});

	toDoCard.appendChild(boxLine);

	toDoCard.appendChild(deleteBtn);
	deleteBtn.classList.add('deleteClass');
	deleteBtn.innerHTML = `<img src="deleteimage.png">`;
	deleteBtn.addEventListener('click', () => {
		var cardDelete = deleteBtn.parentNode;
		cardDelete.style.display="none";
		cardDelete.remove();
		todoCount--;
	});

	toDoCard.appendChild(boxAddButton);
	boxAddButton.classList.add('AddBtn');
	boxAddButton.innerHTML =  `<img src="circle-plus-solid.svg">`;
	boxAddButton.addEventListener('click', () => {
		shadowDiv.classList.add('shadow');
		addItem.style.display = 'flex';
		card = boxAddButton.parentNode;
		document.querySelector('#inpuTtext').value="";
	});
}

document.querySelector('.ItemBtn').addEventListener('click', () => {
	newTodoCount++;
	shadowDiv.classList.remove('shadow');
	addItem.style.display = 'none';

	var toDoDes = document.createElement('div');
	var rowText = document.createElement('div');
	var MarkButton = document.createElement('div');

	card.appendChild(toDoDes);
	toDoDes.appendChild(rowText);
	toDoDes.appendChild(MarkButton);

	toDoDes.setAttribute('id', `toDoDes${newTodoCount}`);
	toDoDes.classList.add('toDoDes');
	MarkButton.classList.add('MarkButton');

	rowText.innerHTML = `${addNewItemHead.value}`;
	MarkButton.innerHTML = `<h6>Mark done</h6>`;
	MarkButton.addEventListener('click', () => {
		var boxText = MarkButton.parentNode;
		boxText.classList.add('linethrgh');
		MarkButton.style.display = 'none';
	});
});
