const input = document.querySelector(".inputField input"); 
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const number = document.querySelector(".number");
const deleteAll = document.querySelector(".footer button");

input.onkeyup = () =>{
	let userData = input.value; 
	if(userData.value != 0){
		addBtn.classList.add("active");
	}
	else{
		addBtn.classList.remove("active");
	}
}

showTasks();


addBtn.onclick = ()=>{

	let userData = input.value;
	let getLocalStorage = localStorage.getItem("New Todo");


	if(getLocalStorage == null){
		listArr = [];
	}else{
		listArr = JSON.parse(getLocalStorage); // transforme json en objet js
	}

	listArr.push(userData);
	localStorage.setItem("New Todo", JSON.stringify(listArr)); // convertion valeur js en json

		showTasks();
}


// fonction pour ajouter les taches à l'interieur de ul

function showTasks(){
	let getLocalStorage = localStorage.getItem("New Todo");

	if(getLocalStorage == null){
		listArr = [];
	}else{
		listArr = JSON.parse(getLocalStorage); // transforme json en objet js
	}

	number.textContent = listArr.length; 

	if (listArr.length > 0) {
		deleteAll.classList.add("active");
	}else{
		deleteAll.classList.remove("active");
	}


	let newLi = '';
	listArr.forEach((element, index) =>{
		newLi += `<li> ${element} <span onclick="deleteTask(${index})"; ><i class="fas fa-trash"></i></span></li>`;
	});

	todoList.innerHTML = newLi; 
	input.value = "";
}


// fonction pour supprimer les taches à l'interieur de ul

function deleteTask(index){
	let getLocalStorage = localStorage.getItem("New Todo");
	listArr = JSON.parse(getLocalStorage); 
	listArr.splice(index, 1);
	localStorage.setItem("New Todo", JSON.stringify(listArr)); // convertion valeur js en json

		showTasks();
}

deleteAll.onclick = () =>{
	listArr = []; 
	localStorage.setItem("New Todo", JSON.stringify(listArr));

	showTasks();
}