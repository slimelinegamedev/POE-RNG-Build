function randomGen(array) {
  const num = Math.floor(Math.random() * array.length);
  return array[num];
}

function getKeystones(){
  var randomNum = Math.floor(Math.random() * (4 - 1)) + 1; //generates random number between 1 and 3
  let i = 0;
  let generatedArray = [];
  while (i < randomNum){
    generatedArray.push(randomGen(poeKeystones));
    i++;
  }
  return generatedArray;
}

function genKeystoneArr(){
  var completeTemplate = "";
  var x;
  var generatedArray = getKeystones();
  for(x = 0; x < generatedArray.length; x++){
    completeTemplate += 
      '<div class="col-4">' +
        '<h3>' + generatedArray[x].name + '</h3>' +
        '<br><img src="' + generatedArray[x].images + '">' +
        '<br><p>' + generatedArray[x].description + '</p>' +
      '</div>'
      ;
  }
  return completeTemplate;
}

function generateKeystones(){
  var y = document.getElementById('keystoneRan').innerHTML = genKeystoneArr();
  return y;
}

function generateSkillsTemplate() {
  var randomSkill = randomGen(poeSkills);
  var strippedSkills = randomSkill.replace("_", " ");
  var skillTemplate = 
    "<h2>Your random skill will be " +
    "<a href=\"http://pathofexile.gamepedia.com/" + randomSkill + "\" target=\"_blank\">" +
      strippedSkills +
    "</a>" +
    "</h2>";

  return skillTemplate;
}

function generateSkills(){
  var y = document.getElementById('skillRan').innerHTML = generateSkillsTemplate();
  return y;
}

var poeGen = document.getElementById('rollClass');

poeGen.addEventListener('click', function(e) {
  const selection = randomGen(poeClass);

  document.getElementById('className').innerHTML = selection.class;
  document.getElementById('classImage').innerHTML = "<img class=\"responsive-image\" src='" + selection.images + "'>";
  document.getElementById('classAscendancy').innerHTML = selection.ascendancy;

  generateKeystones();
  generateSkills();
});


