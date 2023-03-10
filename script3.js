//create an instance of the request
let xhr = new XMLHttpRequest();



//open your request
xhr.open("GET", "https://restcountries.com/v3.1/all");

//setting up a listener to process the rquest
xhr.onload = function(){
   if(xhr.status>=200 && xhr.status<300){
          //executed only if the data is recieved properly
    console.log("****Response received****")
    let data= JSON.parse(this.responseText) //converted data into object format

 //loop through the data   

 for(let i=0; i<data.length; i++)
 {
    console.log(`
    Country name : ${data[i].name.common}
    Region : ${data[i].region}
    Subregion : ${data[i].subregion} 
    Population : ${data[i].population} `);  
    
 }
}
else{
   console.log("ERROR!!!!!!!!");
}
}

//send the request
xhr.send();


/*OUTPUT


    Country name : Madagascar
    Region : Africa
    Subregion : Eastern Africa 
    Population : 27691019 script3.js:20:13

    Country name : Sierra Leone
    Region : Africa
    Subregion : Western Africa 
    Population : 7976985 script3.js:20:13

    Country name : Benin
    Region : Africa
    Subregion : Western Africa 
    Population : 12123198 script3.js:20:13

    Country name : Puerto Rico
    Region : Americas
    Subregion : Caribbean 
    Population : 3194034 script3.js:20:13

    Country name : Bermuda
    Region : Americas
    Subregion : North America 
    Population : 63903 script3.js:20:13

    Country name : Croatia
    Region : Europe
    Subregion : Southeast Europe 
    Population : 4047200 script3.js:20:13

    Country name : Laos
    Region : Asia
    Subregion : South-Eastern Asia 
    Population : 7275556 script3.js:20:13

    Country name : Russia
    Region : Europe
    Subregion : Eastern Europe 
    Population : 144104080 script3.js:20:13

    Country name : France
    Region : Europe
    Subregion : Western Europe 
    Population : 67391582 script3.js:20:13

    Country name : United States
    Region : Americas
    Subregion : North America 
    Population : 329484123 script3.js:20:13

    Country name : Burundi
    Region : Africa
    Subregion : Eastern Africa 
    Population : 11890781 script3.js:20:13

    Country name : Fiji
    Region : Oceania
    Subregion : Melanesia 
    Population : 896444 script3.js:20:13

    Country name : Hong Kong
    Region : Asia
    Subregion : Eastern Asia 
    Population : 7500700 script3.js:20:13

    Country name : Iran
    Region : Asia
    Subregion : Southern Asia 
    Population : 83992953 script3.js:20:13

    Country name : Western Sahara
    Region : Africa
    Subregion : Northern Africa 
    Population : 510713 script3.js:20:13

    Country name : Saint Barthélemy
    Region : Americas
    Subregion : Caribbean 
    Population : 4255 script3.js:20:13

    Country name : Mali
    Region : Africa
    Subregion : Western Africa 
    Population : 20250834 script3.js:20:13

    Country name : Poland
    Region : Europe
    Subregion : Central Europe 
    Population : 37950802 script3.js:20:13

    Country name : Dominica
    Region : Americas
    Subregion : Caribbean 
    Population : 71991 script3.js:20:13

    Country name : Lithuania
    Region : Europe
    Subregion : Northern Europe 
    Population : 2794700 script3.js:20:13

    Country name : Azerbaijan
    Region : Asia
    Subregion : Western Asia 
    Population : 10110116 script3.js:20:13

    Country name : Burkina Faso
    Region : Africa
    Subregion : Western Africa 
    Population : 20903278 script3.js:20:13

    Country name : Kosovo
    Region : Europe
    Subregion : Southeast Europe 
    Population : 1775378 script3.js:20:13

    Country name : Norway
    Region : Europe
    Subregion : Northern Europe 
    Population : 5379475 script3.js:20:13

    Country name : Taiwan
    Region : Asia
    Subregion : Eastern Asia 
    Population : 23503349 script3.js:20:13

    Country name : Finland
    Region : Europe
    Subregion : Northern Europe 
    Population : 5530719 script3.js:20:13

    Country name : Angola
    Region : Africa
    Subregion : Middle Africa 
    Population : 32866268 script3.js:20:13

    Country name : Nauru
    Region : Oceania
    Subregion : Micronesia 
    Population : 10834 script3.js:20:13

    Country name : Palau
    Region : Oceania
    Subregion : Micronesia 
    Population : 18092 script3.js:20:13

    Country name : Norfolk Island
    Region : Oceania
    Subregion : Australia and New Zealand 
    Population : 2302 script3.js:20:13

    Country name : Jersey
    Region : Europe
    Subregion : Northern Europe 
    Population : 100800 script3.js:20:13

    Country name : Eswatini
    Region : Africa
    Subregion : Southern Africa 
    Population : 1160164 script3.js:20:13

    Country name : Serbia
    Region : Europe
    Subregion : Southeast Europe 
    Population : 6908224 script3.js:20:13

    Country name : Tuvalu
    Region : Oceania
    Subregion : Polynesia 
    Population : 11792 script3.js:20:13

    Country name : Botswana
    Region : Africa
    Subregion : Southern Africa 
    Population : 2351625 script3.js:20:13

    Country name : Guernsey
    Region : Europe
    Subregion : Northern Europe 
    Population : 62999 script3.js:20:13

    Country name : Costa Rica
    Region : Americas
    Subregion : Central America 
    Population : 5094114 script3.js:20:13

    Country name : Vatican City
    Region : Europe
    Subregion : Southern Europe 
    Population : 451 script3.js:20:13

    Country name : Jordan
    Region : Asia
    Subregion : Western Asia 
    Population : 10203140 script3.js:20:13

    Country name : Estonia
    Region : Europe
    Subregion : Northern Europe 
    Population : 1331057 script3.js:20:13

    Country name : Barbados
    Region : Americas
    Subregion : Caribbean 
    Population : 287371 script3.js:20:13

    Country name : Bolivia
    Region : Americas
    Subregion : South America 
    Population : 11673029 script3.js:20:13

    Country name : Togo
    Region : Africa
    Subregion : Western Africa 
    Population : 8278737 script3.js:20:13

    Country name : Samoa
    Region : Oceania
    Subregion : Polynesia 
    Population : 198410 script3.js:20:13

    Country name : Mauritania
    Region : Africa
    Subregion : Western Africa 
    Population : 4649660 script3.js:20:13

    Country name : New Zealand
    Region : Oceania
    Subregion : Australia and New Zealand 
    Population : 5084300 script3.js:20:13

    Country name : Niue
    Region : Oceania
    Subregion : Polynesia 
    Population : 1470 script3.js:20:13

    Country name : Turkey
    Region : Asia
    Subregion : Western Asia 
    Population : 84339067 script3.js:20:13

    Country name : Timor-Leste
    Region : Asia
    Subregion : South-Eastern Asia 
    Population : 1318442 script3.js:20:13

    Country name : Paraguay
    Region : Americas
    Subregion : South America 
    Population : 7132530 script3.js:20:13

    Country name : Bosnia and Herzegovina
    Region : Europe
    Subregion : Southeast Europe 
    Population : 3280815 script3.js:20:13

    Country name : Cayman Islands
    Region : Americas
    Subregion : Caribbean 
    Population : 65720 script3.js:20:13

    Country name : Jamaica
    Region : Americas
    Subregion : Caribbean 
    Population : 2961161 script3.js:20:13



*/












