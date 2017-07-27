function Dog(dogName,age,sizeDog,gender,dogImage,shelter,isBooked,bio) {
	this.dogName = dogName;
	this.age = age;
	this.sizeDog = sizeDog;
	this.gender = gender;
	this.shelter = shelter;
	this.dogImage = dogImage;
	this.isBooked = isBooked;
	this.bio = bio;
}

function setupIndividualDogClick()
{
	$(".dog-picture").click(function(){
			var id = $(this).attr("id");
			$("#show-all-results").empty();
			$("#show-each-dog-bio-on-pic-click").show();
			$("#show-each-dog-bio-on-pic-click").append(
			"<div class='col-md-8'>" +
			"<img class ='bio-image' src='" + dogs[id].dogImage + "' >" +
			"<strong>" + dogs[id].dogName + "</strong>" +
			"<br>" + dogs[id].age + "<br>" +
			dogs[id].gender +
			"<br>" +
			"<p>" + dogs[id].bio + "</p>"+
			"</div>");
		});
}

var dogs = [];

function fillDogsData() {
	var newDog1 = new Dog("Jax", "adult", "medium" , "male", "img/jax.jpg",
	"https://www.allpaws.com/adopt-a-dog/australian-cattle-dog-blue-heeler/6482237", true, "My name is Maggie Hart and I am a wonderful 2 year old Female Pug and Chihuahua Mix who was just saved from a high-kill shelter in California where no one wanted me.  I am a happy dog and so excited to find my new home");
	dogs[0] = newDog1;
	var newDog2 = new Dog("Ellie", "adult", "small" , "female", "img/ellie.jpg", "https://www.allpaws.com/adopt-a-dog/shih-tzu/6644799" , true , "My name is Ellie and I am a wonderful small adult female who was just saved from a high-kill shelter in California where no one wanted me.  I am a happy dog and so excited to find my new home");
	dogs[1] = newDog2;
	var newDog3 = new Dog("Gunther", "adult", "small" , "male", "img/gunther.jpg",
	"https://www.allpaws.com/adopt-a-dog/maltese/6405800" , true, "My name is Gunther and I am a wonderful small adult male who was just saved from a high-kill shelter in California where no one wanted me.  I am a happy and so excited to find my new home");
	dogs[2] = newDog3;
	var newDog4 = new Dog("Orion", "puppy", "medium" , "male", "img/orion.jpg" , "https://www.allpaws.com/adopt-a-dog/terrier/6070901", true , "My name is Orion and I am a wonderful medium male puppy who was just saved from a high-kill shelter in California where no one wanted me. I am a happy dog and so excited to find a new name");
	dogs[3] = newDog4;
	var newDog5 = new Dog("Maggie Hart", "adult", "medium", "female", "img/maggie.jpg", "https://www.gingerspetrescue.org/adoptable-dogs/#action_0=pet&animalID_0=11424380&petIndex_0=78", true, "My name is Maggie Hart and I am a wonderful 2 year old Female Pug and Chihuahua Mix who was just saved from a high-kill shelter in California where no one wanted me.  I am a happy dog at 14 lbs. and so excited to find my forever home soon.");
  dogs[4] = newDog5;
  var newDog6 = new Dog("Cider", "adult", "small", "male", "img/cider.jpg", "http://petango.com/Adopt/Dog-Chihuahua-Short-Coat-33552514", true , "My name is Cider and I am a wonderful small male adult who was just saved from a high-kill shelter in California where no one wanted me. I am a happy dog and so excited to find a new name");
  dogs[5] = newDog6;
  var newDog7 = new Dog("Lincoln", "senior", "medium", "male", "img/lincoln.jpg", "http://ws.petango.com/webservices/adoptablesearch/wsAdoptableAnimalDetails.aspx?id=35077318&css=http://ws.petango.com/WebServices/adoptablesearch/css/styles.css&PopUp=true", true, "Sawatdee! That means 'hello' in Thailand, where I came from! I'm already an international traveler, thanks to being rescued from street life overseas. I used to roam wherever I wanted, hoping for scraps of love and affection, but now that I'm in Seattle I can't wait to find a house of my own to start my new life! ");
  dogs[6] = newDog7;
  var newDog8 = new Dog("Willow", "puppy", "large", "female", "img/willow.jpeg", "https://www.petfinder.com/petdetail/38160052", true, "Willow is a beautiful brindle gal. She is about 4-years old and has lots of energy, enthusiasm, focus, and determination. Mia enjoys affection and looooves to have her hind-end scratched. She is a friendly girl with a lovely smile and a waggly tail. Mia likes to chew on Kongs and play with other toys");
  dogs[7] = newDog8;
  var newDog9 = new Dog("Lamar", "senior", "small", "male", "img/lamar.jpg", "http://ws.petango.com/webservices/adoptablesearch/wsAdoptableAnimalDetails.aspx?id=16239596&css=http://www.seattlehumane.org/sites/all/themes/seattle_humane_society/css/petango.css&PopUp=true", true, "My name is Lamar and I am a wonderful small male adult who was just saved from a high-kill shelter in California where no one wanted me. I am a happy dog and so excited to find aa new name");
  dogs[8] = newDog9;
  var newDog10 = new Dog("Mia", "adult", "medium", "female", "img/mia.jpg", "http://ws.petango.com/webservices/adoptablesearch/wsAdoptableAnimalDetails.aspx?id=34394657&css=http://www.seattlehumane.org/sites/all/themes/seattle_humane_society/css/petango.css&PopUp=true", true, "Mia is a beautiful brindle gal. She is about 4-years old and has lots of energy, enthusiasm, focus, and determination. Mia enjoys affection and looooves to have her hind-end scratched. She is a friendly girl with a lovely smile and a waggly tail. Mia likes to chew on Kongs and play with other toys");
  dogs[9] = newDog10;
  var newDog11 = new Dog("Minnie", "adult", "medium", "female", "img/minnie.jpg", "http://ws.petango.com/webservices/adoptablesearch/wsAdoptableAnimalDetails.aspx?id=34918918&css=http://www.seattlehumane.org/sites/all/themes/seattle_humane_society/css/petango.css&PopUp=true", true, "My name is Minnie, and I am applying for the open position for loving companion in your home. I bring years of experience in cuddling, snuggling, and being all-around adorable. My strengths include walking well on leash and making easy friends with other dogs.");
  dogs[10] = newDog11;
  var newDog12 = new Dog("Theresa", "senior", "medium", "female", "img/theresa.jpg", "http://ws.petango.com/webservices/adoptablesearch/wsAdoptableAnimalDetails.aspx?id=35260515&css=http://www.seattlehumane.org/sites/all/themes/seattle_humane_society/css/petango.css&PopUp=true", true, "Theresa is a beautiful brindle gal. She is about 4-years old and has lots of energy, enthusiasm, focus, and determination. Mia enjoys affection and looooves to have her hind-end scratched. She is a friendly girl with a lovely smile and a waggly tail. Mia likes to chew on Kongs and play with other toys");
  dogs[11] = newDog12;
  var newDog13 = new Dog("Alberta", "adult", "small", "female", "img/alberta.jpg", "http://petango.com/Adopt/Dog-Chihuahua-Short-Coat-34019049", true, "Hi there! My name is Alberta, and I've had a bit of a rough start to life, but I arrived here thanks to Wings of Rescue, and I'm ready to write my story anew. I'm a quiet, calm girl and I'm pretty shy but I LOVE toys, especially the squeaky kind");
  dogs[12] = newDog13;
  var newDog14 = new Dog("Rennie", "adult", "large", "male", "img/rennie.jpg", "http://petango.com/Adopt/Dog-Terrier-Pit-Bull-35048902", true, "Rennie is a beautiful brindle gal. She is about 4-years old and has lots of energy, enthusiasm, focus, and determination. Mia enjoys affection and looooves to have her hind-end scratched. She is a friendly girl with a lovely smile and a waggly tail. Mia likes to chew on Kongs and play with other toys");
  dogs[13] = newDog14;
  var newDog15 = new Dog("Spring", "senior", "small", "female", "img/spring.jpg", "http://petango.com/Adopt/Dog-Chihuahua-Short-Coat-35139389", true, "My name is Spring, and I am applying for the open position for loving companion in your home. I bring years of experience in cuddling, snuggling, and being all-around adorable. My strengths include walking well on leash and making easy friends with other dogs.");
  dogs[14] = newDog15;
  var newDog16 = new Dog("Trowa", "senior", "small", "male", "img/trowa.jpg", "http://petango.com/Adopt/Dog-Pekingese-35273754" , true, "My name is Trowa, and I am applying for the open position for loving companion in your home. I bring years of experience in cuddling, snuggling, and being all-around adorable. My strengths include walking well on leash and making easy friends with other dogs.");
  dogs[15] = newDog16;
  var newDog17 = new Dog("Adam", "puppy", "small", "male", "img/adam.jpg", "http://petango.com/Adopt/Dog-Chihuahua-Short-Coat-35776600", true, "My name is Lamar and I am a wonderful small male adult who was just saved from a high-kill shelter in California where no one wanted me. I am a happy dog and so excited to find a new name");
  dogs[16] = newDog17;
  var newDog18 = new Dog("Juno", "adult", "medium", "female", "img/juno.jpg", "http://petango.com/Adopt/Dog-Shepherd-35566487", true, "Meet Juno, a 5-year-old Shepherd and Husky mix, who would love to be your adventure sweetie. This happy girl loves to play, and will happily lead you anywhere you want to go, wiggling all the way. She also loves a good ear scratch & will trade plenty of sweet kisses for one.");
  dogs[17] = newDog18;
  var newDog19 = new Dog("Apple", "adult", "small", "female", "img/apple.jpg", "http://petango.com/Adopt/Dog-Chihuahua-Long-Coat-33552424", true, "My name is Apple, and I am applying for the open position for loving companion in your home. I bring years of experience in cuddling, snuggling, and being all-around adorable. My strengths include walking well on leash and making easy friends with other dogs.");
  dogs[18] = newDog19;
  var newDog20 = new Dog("Mamas", "adult", "small", "female", "img/mamas.jpg", "http://petango.com/Adopt/Dog-Chihuahua-Short-Coat-35859891", true, "Mamas is a sweetie pie who loves to socialize with other dogs and hang out with new buddies. This pretty lady has come a long way to find her new family and would love to get out of the shelter and into a comfy home! Mamas is best suited in a home with children 9yrs and older where she will be loved!");
  dogs[19] = newDog20;
	var newDog21 = new Dog("Bon Bon", "adult", "small", "female", "img/bonbon.jpg", "https://s3.amazonaws.com/filestore.rescuegroups.org/5922/pictures/animals/11624/11624355/46755990_500x531.jpg", true, "My name is Bon Bon BB and I am a special needs dog because I am blind. I am a wonderful 7 year old Female Poodle and Bichon Mix who was just saved from a high-kill shelter in California where no one wanted me.");
	dogs[20] = newDog21;
}

$(document).ready(function() {

	fillDogsData();

	$("#searchAll").click(function() {
		$("#show-all-results").empty();
		$("#show-each-dog-bio-on-pic-click").empty();
		for (var i = 0; i < dogs.length; i++) {
			$("#show-all-results").append("<div class='col-md-4'>" + "<img class='dog-picture' src='" + dogs[i].dogImage + "' id='" + i + "'/>" + "<br><strong>" + dogs[i].dogName + "</strong><br>" + dogs[i].age + "<br>" + dogs[i].gender + "</div>");
		}
		setupIndividualDogClick();
	});

	$("#dogSearchFilter").submit(function(event) {
		event.preventDefault();
		$("#show-all-results").empty();
		$("#show-each-dog-bio-on-pic-click").empty();

		var filterAge = [];
		var filterGender = [];
		var filterSize = [];
		$("input:checkbox[name=dogAge]:checked").each(function() {
    	filterAge.push($(this).val());
		});

		$("input:checkbox[name=dogGender]:checked").each(function() {
			filterGender.push($(this).val());
		});

		$("input:checkbox[name=dogSize]:checked").each(function() {
			filterSize.push($(this).val());
		});

		var availableDogs = [];

		if (filterAge.length === 0) {
			filterAge.push("none");
		}

		if (filterGender.length === 0) {
			filterGender.push("none");
		}

		if (filterSize.length === 0) {
			filterSize.push("none");
		}
		for (var i = 0; i < dogs.length; i++) {
			for (var j = 0; j < filterAge.length; j++) {
				for (var k = 0; k < filterGender.length; k++) {
					for (var l = 0; l < filterSize.length; l++) {
						if (dogs[i].age === filterAge[j] || filterAge[j] === "none") {
							if (dogs[i].gender === filterGender[k] || filterGender[k] === "none") {
								if (dogs[i].sizeDog === filterSize[l] || filterSize[l] === "none") {
									$("#show-all-results").append("<div class='col-md-4'>" + "<img class='dog-picture' src='" + dogs[i].dogImage + "' id='" + i + "'/>" + "<br><strong>" + dogs[i].dogName + "</strong><br>" + dogs[i].age + "<br>" + dogs[i].gender + "</div>");
									availableDogs.push(dogs[i]);
								}
							}
						}
					}
				}
			}
		}
		if (availableDogs.length === 0) {
			$("#show-all-results").text("Sorry, we do not have a dog that matches your criteria at this time");
		}
		else
		{
			setupIndividualDogClick();
		}
	});
});
