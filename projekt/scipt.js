const url = "https://vvri.pythonanywhere.com/api/courses&quot;"
var courses
var shownStuff
var showCourses

async function fetchData() {
    try {
    const response = await fetch(url);
    const data = await response.json();
    document.getElementById("main").innerHTML = shownStuff;
    } catch (error) {
    console.error('Hiba történt:', error);
    }
    }
function add(){
    if( showCourses == true){
        post(document.getElementById("searchBar")) 
    }
}
function remove() {
    if( showCourses == true)  DELETE(document.getElementById("searchBar"))

   
     
}   
fetchData();
function writeStudents(course){
    for(let i =0; i <= course.students.lenght;i++) shownStuff + course[i].name;
}

function search(){
    let searchedName = document.getElementById("searchBar").value
    if(courses.Contains(searchedName)){
        for(let i = 0; i <= courses.lenght; i++){
            if(courses[i].name== searchedName){  shownStuff = courses[i].name +"<p>"; writeStudents(courses[i]) }    

        }
       
    }
    else{
        shownStuff = "Nincs ilyen kurzus"
    }
}

async function post(courseName){
    const response = await fetch(url);
    method: "POST"
   
    body: JSON.stringify({
      
        name: courseName
        }),
        

}

async function DELETE(courseName){
    const response = await fetch(url); {




headers; {
"Content-type"; "application/json; charset=UTF-8"
}


.then(response => {

if (response.ok) {
return await response.json();
}

throw new Error('Network response was not ok.');
})


.then(json => console.log(json))

.catch(error => console.error('There was a problem with the fetch operation:', error));
    }
}



