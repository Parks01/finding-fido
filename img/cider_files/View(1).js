var AnimalDetails = AnimalDetails || {};

AnimalDetails.ViewModel = function (moduleId) {
    var service = {
        path: "Pethealth.Petango/Pethealth.Petango.DnnModules.AnimalDetails",
        framework: $.ServicesFramework(moduleId)
    }
    service.baseUrl = service.framework.getServiceRoot(service.path) + "Main/";

    var id = ko.observable(-1);
    var name = ko.observable("");
    var photo = ko.observable("");
    var photo2 = ko.observable("");
    var photo3 = ko.observable("");
    var youtube = ko.observable("");
    var youtubeThumbnail = ko.observable("");
    var age = ko.observable("");
    var distance = ko.observable(0);
    var gender = ko.observable("");
    var breed = ko.observable("");
    var color = ko.observable("");
    var spayedNeutered = ko.observable("");
    var size = ko.observable("");
    var memo = ko.observable("");
    var noDogs = ko.observable(false);
    var noCats = ko.observable(false);
    var noKids = ko.observable(false);
    var addToFavorites = ko.observable(false);
    var removeFromFavorites = ko.observable(false);
    var photoVisible = ko.observable(false);
    var photo2Visible = ko.observable(false);
    var photo3Visible = ko.observable(false);
    var youtubeVisible = ko.observable(false);
    var thumbnailsVisible = ko.observable(false);
    var twitter = ko.observable("");
    var email = ko.observable("");
    var adoptionDate = ko.observable("");
    var adoptionDateVisible = ko.observable(false);
    var declawed = ko.observable("");
    var declawedVisible = ko.observable(false);
    var adoptionApplicationUrl = ko.observable("");
    var adoptionApplicationLinkVisible = ko.observable(false);
    var isRegularAnimal = ko.observable(false);
    var isLostAnimal = ko.observable(false);
    var isHappyTail = ko.observable(false);
    var facebookVisible = ko.observable(false);

    var queryParams;
    var title;
    var description;

    var init = function () {
        window.fbAsyncInit = function () {
            FB.init({ appId: "833896956741029", status: true, cookie: true, xfbml: true });
            facebookVisible(true);
        };

        queryParams = new AnimalDetails.QueryParams();
        loadAnimalDetails();
    }
    
    var loadAnimalDetails = function () {
        var animalId = queryParams.animalId;
        var clientZip = queryParams.clientZip;
        var q;
        if (queryParams.isHappyTail) {
            q = "GetHappyTailDetails?animalId=" + animalId;
        }
        else if (queryParams.isLostAnimal) {
            q = "GetLostAnimalDetails?animalId=" + animalId;
        } else {
            q = "GetAnimalDetails?moduleId=" + moduleId + "&animalId=" + animalId + "&clientZip=" + clientZip;
        }
        Petango.Utils.asyncAjax(service, q, function(d) { if (d) load(d); });
    };

    var getTitle = function (data) {
        if (data.speciesId == 1 || data.speciesId == 2) {
            var age = data.age == "Unknown" ? "" : data.age + " ";
            return "Petango.com - Meet " + data.name + ", " + age + data.breed + " available for adoption in " + data.shelterCityState;
        } else {
            return "Petango.com – Meet " + data.name + ", a " + data.species.toLowerCase() + " for adoption in " + data.shelterCityState;
        }
    }

    var getDescription = function (data) {
        if (data.speciesId == 1 || data.speciesId == 2) {
            var age = data.age == "Unknown" ? "" : data.age + " ";
            return "Adopt " + data.name + ", a lovely " + age + data.species.toLowerCase() + " available for adoption at Petango.com. " +
                data.name + " is a " + data.breed + " is available at " + data.shelterName + " in " + data.shelterCityState;
        } else {
            return "Adopt " + data.name + ", a lovely " + data.gender.toLowerCase() + " " + data.species.toLowerCase() + " available for adoption at Petango.com. " +
                data.name + " is available at " + data.shelterName + " in " + data.shelterCityState;
        }
    }

    var load = function (data) {
        id(data.id);
        name(data.name);
        photo(Petango.Utils.getPhoto(data.photo, data.speciesId));
        photo2(data.photo2);
        photo3(data.photo3);
        youtube("http://www.youtube.com/watch?v=" + data.youtubeVideoId);
        youtubeThumbnail("http://img.youtube.com/vi/" + data.youtubeVideoId + "/1.jpg");
        age(data.age);
        distance(data.distance);
        gender(data.gender);
        breed(data.breed);
        color(data.color);
        spayedNeutered(data.spayedNeutered);
        size(data.size);
        memo(data.memo);
        noDogs(data.noDogs);
        noCats(data.noCats);
        noKids(data.noKids);
        addToFavorites(data.addToFavorites);
        removeFromFavorites(data.removeFromFavorites);
        photoVisible(!Petango.Utils.isEmptyString(data.photo));
        photo2Visible(!Petango.Utils.isEmptyString(data.photo2));
        photo3Visible(!Petango.Utils.isEmptyString(data.photo2));
        youtubeVisible(!Petango.Utils.isEmptyString(data.youtubeVideoId));
        thumbnailsVisible(photoVisible() || photo2Visible() || photo3Visible() || youtubeVisible());
        adoptionDate(data.adoptionDate);
        adoptionDateVisible(!Petango.Utils.isEmptyString(data.adoptionDate));
        declawed(data.declawed ? "Yes" : "No");
        declawedVisible(data.speciesId === 2 && !queryParams.isHappyTail && !queryParams.isLostAnimal);
        adoptionApplicationUrl(data.adoptionApplicationUrl);
        adoptionApplicationLinkVisible(!Petango.Utils.isEmptyString(data.adoptionApplicationUrl));

        isRegularAnimal(!queryParams.isHappyTail && !queryParams.isLostAnimal);
        isHappyTail(queryParams.isHappyTail);
        isLostAnimal(queryParams.isLostAnimal);

        title = getTitle(data);
        description = getDescription(data);

        document.title = title;

        twitter("https://twitter.com/intent/tweet?text=" + encodeURIComponent(title) + "&url=" + encodeURIComponent(window.location.href));

        var emailBody = description + "\n(PetID#" + id() + ", " + document.location + ")";
        email("mailto:?subject=" + encodeURIComponent(title) + "&body=" + encodeURIComponent(emailBody));
    };

    var addToFavoritesClick = function () {
        Petango.Utils.syncAjaxPost(service, "AddToFavorites?animalId=" + id(), null,
            function() {
                addToFavorites(false);
                removeFromFavorites(true);
            });
    };

    var removeFromFavoritesClick = function () {
        Petango.Utils.syncAjaxPost(service, "RemoveFromFavorites?animalId=" + id(), null,
            function () {
                addToFavorites(true);
                removeFromFavorites(false);
            });
    }

    var facebookClick = function() {
        FB.ui(
        {
            method: "share",
            href: window.location.href,
            picture: photo(),
            caption: "www.petango.com",
            description: description,
            title: title,
            mobile_iframe: true
        });
    }

    return {
        init: init,
        id: id,
        name: name,
        photo: photo,
        photo2: photo2,
        photo3: photo3,
        youtube: youtube,
        youtubeThumbnail: youtubeThumbnail,
        age: age,
        distance: distance,
        gender: gender,
        color: color,
        spayedNeutered: spayedNeutered,
        size: size,
        breed: breed,
        memo: memo,
        load: load,
        noDogs: noDogs,
        noCats: noCats,
        noKids: noKids,
        addToFavorites: addToFavorites,
        removeFromFavorites: removeFromFavorites,
        photoVisible: photoVisible,
        photo2Visible: photo2Visible,
        photo3Visible: photo3Visible,
        youtubeVisible: youtubeVisible,
        thumbnailsVisible: thumbnailsVisible,
        twitter: twitter,
        email: email,
        adoptionDate: adoptionDate,
        adoptionDateVisible: adoptionDateVisible,
        declawed: declawed,
        declawedVisible: declawedVisible,
        adoptionApplicationUrl: adoptionApplicationUrl,
        adoptionApplicationLinkVisible: adoptionApplicationLinkVisible,
        isRegularAnimal: isRegularAnimal,
        isLostAnimal: isLostAnimal,
        isHappyTail: isHappyTail,
        facebookVisible: facebookVisible,

        addToFavoritesClick: addToFavoritesClick,
        removeFromFavoritesClick: removeFromFavoritesClick,
        facebookClick: facebookClick
    }
};

AnimalDetails.QueryParams = function () {
    this.animalId = Petango.Utils.extractIdFromFriendlyUrl();
    this.clientZip = Petango.Utils.getSavedClientZip();
    this.isHappyTail = Petango.Utils.isHappyTailsUrl();
    this.isLostAnimal = Petango.Utils.isLostAnimalsUrl();
}
