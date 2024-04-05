let counties = [];


    fetch('https://hur.webmania.cc/zips/Békés.json')
    .then(response => {
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(zips => {
        console.log(zips);
        counties.push(zips);

        document.getElementById("text").innerHTML = counties[1].zip;
        
        
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
