//1. feladat válasz: a tartalmát leíró neveket, igen
function destruct1(){
    let car = ['Ford', 'Mustang', 2022, 'blue'];
    let {brand,model,year,color} = car
    console.log(brand);
    console.log(model);
    console.log(year);
    console.log(color)
}
//2. feladat válasz: a tartalmát leíró neveket, igen
function destruct2(){
    let book = {
    title: 'JavaScript: The Good Parts',
    author: 'Douglas Crockford',
    publicationYear: 2008,
    language: 'English'}

    let {bookTitle,bookAuthor,publicationYear,language} = book
    console.log(bookTitle);
    console.log(bookAuthor);
    console.log(publicationYear)
    console.log(language);
}
//3.feladat
function printStudentInfo(stundent){
    let {studentName,studentAge,studentGrade,studentSubjects,} = stundent
    console.log(studentName);
    console.log(studentAge);
    console.log(studentGrade);
    for(i =0; i< studentSubjects.lenght; i ++){
        console.log(studentSubjects[i])
    }

}