function Dog(dogName,age,size,gender,dogImage,shelter,isAvailable)
{
	this.dogName = dogName;
	this.age = age;
	this.size = size;
	this.gender = gender;
	this.shelter = shelter;
	this.dogImage = dogImage;
	this.isAvailable = isAvailable;
}
var dogs = [];

function fillDogsData()
{
	var newDog1 = new Dog("Jax", "adult", "medium" , "male", "img/jax.jpg",
	"https://www.allpaws.com/adopt-a-dog/australian-cattle-dog-blue-heeler/6482237", true );
	dogs[0] = newDog1;
	var newDog2 = new Dog("Ellie", "adult", "small" , "female", "img/ellie.jpg", "https://www.allpaws.com/adopt-a-dog/shih-tzu/6644799" , true);
	dogs[1] = newDog2;
	var newDog3 = new Dog("Gunther", "adult", "small" , "male", "img/gunther.jpg",
	"https://www.allpaws.com/adopt-a-dog/maltese/6405800" , true);
	dogs[2] = newDog3;
	var newDog4 = new Dog("Orion", "puppy", "medium" , "male", "img/orion.jpg" , "https://www.allpaws.com/adopt-a-dog/terrier/6070901", true);
	dogs[3] = newDog4;
	var newDog5 = new Dog("Maggie Hart", "adult", "medium", "female", "img/maggie.jpg", "https://www.gingerspetrescue.org/adoptable-dogs/#action_0=pet&animalID_0=11424380&petIndex_0=78", true);
  dogs[4] = newDog5;
  var newDog6 = new Dog("Cider", "adult", "small", "male", "img/cider.jpg", "http://petango.com/Adopt/Dog-Chihuahua-Short-Coat-33552514", true);
  dogs[5] = newDog6;
  var newDog7 = new Dog("Lincoln", "senior", "medium", "male", "img/lincoln.jpg", "http://ws.petango.com/webservices/adoptablesearch/wsAdoptableAnimalDetails.aspx?id=35077318&css=http://ws.petango.com/WebServices/adoptablesearch/css/styles.css&PopUp=true", true);
  dogs[6] = newDog7;
  var newDog8 = new Dog("Willow", "puppy", "large", "female", "img/willow.jpeg", "https://www.petfinder.com/petdetail/38160052", true);
  dogs[7] = newDog8;
  var newDog9 = new Dog("Lamar", "senior", "small", "male", "img/lamar.jpg", "http://ws.petango.com/webservices/adoptablesearch/wsAdoptableAnimalDetails.aspx?id=16239596&css=http://www.seattlehumane.org/sites/all/themes/seattle_humane_society/css/petango.css&PopUp=true", true);
  dogs[8] = newDog9;
  var newDog10 = new Dog("Mia", "adult", "medium", "female", "img/mia.jpg", "http://ws.petango.com/webservices/adoptablesearch/wsAdoptableAnimalDetails.aspx?id=34394657&css=http://www.seattlehumane.org/sites/all/themes/seattle_humane_society/css/petango.css&PopUp=true", true);
  dogs[9] = newDog10;
  var newDog11 = new Dog("Minnie", "adult", "medium", "female", "img/minnie.jpg", "http://ws.petango.com/webservices/adoptablesearch/wsAdoptableAnimalDetails.aspx?id=34918918&css=http://www.seattlehumane.org/sites/all/themes/seattle_humane_society/css/petango.css&PopUp=true", true);
  dogs[10] = newDog11;
  var newDog12 = new Dog("Theresa", "senior", "medium", "female", "img/theresa.jpg", "http://ws.petango.com/webservices/adoptablesearch/wsAdoptableAnimalDetails.aspx?id=35260515&css=http://www.seattlehumane.org/sites/all/themes/seattle_humane_society/css/petango.css&PopUp=true", true);
  dogs[11] = newDog12;
  var newDog13 = new Dog("Alberta", "adult", "small", "female", "img/alberta.jpg", "http://petango.com/Adopt/Dog-Chihuahua-Short-Coat-34019049", true);
  dogs[12] = newDog13;
  var newDog14 = new Dog("Rennie", "adult", "large", "male", "img/rennie.jpg", "http://petango.com/Adopt/Dog-Terrier-Pit-Bull-35048902", true);
  dogs[13] = newDog14;
  var newDog15 = new Dog("Spring", "senior", "small", "female", "img/spring.jpg", "http://petango.com/Adopt/Dog-Chihuahua-Short-Coat-35139389", true);
  dogs[14] = newDog15;
  var newDog16 = new Dog("Trowa", "senior", "small", "male", "img/trowa.jpg", "http://petango.com/Adopt/Dog-Pekingese-35273754");
  dogs[15] = newDog16;
  var newDog17 = new Dog("Adam", "puppy", "small", "male", "img/adam.jpg", "http://petango.com/Adopt/Dog-Chihuahua-Short-Coat-35776600", true);
  dogs[16] = newDog17;
  var newDog18 = new Dog("Juno", "adult", "medium", "female", "img/juno.jpg", "http://petango.com/Adopt/Dog-Shepherd-35566487", true);
  dogs[17] = newDog18;
  var newDog19 = new Dog("Apple", "adult", "small", "female", "img/apple.jpg", "http://petango.com/Adopt/Dog-Chihuahua-Long-Coat-33552424", true);
  dogs[18] = newDog19;
  var newDog20 = new Dog("Mamas", "adult", "small", "female", "img/mamas.jpg", "http://petango.com/Adopt/Dog-Chihuahua-Short-Coat-35859891", true);
  dogs[19] = newDog20;
	var newDog21 = new Dog("Bon Bon", "adult", "small", "female", "img/bonbon.jpg", "https://s3.amazonaws.com/filestore.rescuegroups.org/5922/pictures/animals/11624/11624355/46755990_500x531.jpg", true);
	dogs[20] = newDog21;

}

$(document).ready(function(){

	fillDogsData();

	$("#searchAll").click(function()
	{
	$("#show-all-results").empty();
	var i = 0;
		for (var j = 0; j < dogs.length; j++)
		{
			$("#show-all-results").append("<div class='row'>")
			for (var k = 0; k < 3; k++)
			{
				if (i < dogs.length) {

				$("#show-all-results").append("<div class='col-md-4'>" + "<a href = \"bio.html\"><img src='" + dogs[i].dogImage +  "</a><br><strong>" + dogs[i].dogName + "</strong><br>" + dogs[i].age + "<br>" + dogs[i].gender + "</div>");
				i++;
				}
			}
				$("#show-all-results").append("</div>")
			}
	});

	$("#dogSearchFilter").submit(function(event) {
		event.preventDefault();
			$("#show-all-results").empty();

			var filterAge = [];
			$("input:checkbox[name=dogAge]:checked").each(function(){
      	filterAge.push($(this).val());

				for(var i=0; i< dogs.length; i++)
			{
				for(var j=0; j< filterAge.length ; j++)
				{
					if(dogs[i].age === filterAge[j])
					{

						$("#show-all-results").append("<div class='col-md-4'>" + "<a href = \"bio.html\"> <img src='" + dogs[i].dogImage +
						"</a><br><strong>" + dogs[i].dogName + "</strong><br>" + dogs[i].age + "<br>" + dogs[i].gender + "</div>");
					}
				}
			}
	});
});
// for(var i=0; i<dogs.length; i++)
// {
// 	$(dogs[i].dogImage).click(function(){
//
//
// 		$("#show-each-dog-bio-on-pic-click").empty();
// 		var i = 0;
// 			for (var j = 0; j < dogs.length; j++)
// 			{
// 				$("#show-each-dog-bio-on-pic-click").append("<div class='row'>")
// 				for (var k = 0; k < 3; k++)
// 				{
// 					if (i < dogs.length) {
// 					$("#show-each-dog-bio-on-pic-click").append("<div class='col-md-4'>" + "<img src='" + dogs[i].dogImage + "'/>'" + "<br><strong>" + dogs[i].dogName + "</strong><br>" + dogs[i].age + "<br>" + dogs[i].gender + "</div>");
// 					i++;
// 					}
// 				}
// 					$("#show-each-dog-bio-on-pic-click").append("</div>")
// 				}
// 	});
// }
});
