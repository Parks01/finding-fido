var Petango = Petango || {};

Petango.Animal = function() {
    var id = ko.observable(-1);
    var name = ko.observable("");
    var photo = ko.observable("");
    var hasVideo = ko.observable(false);
    var age = ko.observable("");
    var distance = ko.observable(0);
    var distanceVisible = ko.observable(false);
    var gender = ko.observable("");
    var breed = ko.observable("");
    var noDogs = ko.observable(false);
    var noCats = ko.observable(false);
    var noKids = ko.observable(false);
    var url = ko.observable("");
    var score = ko.observable(0);
    var removeLinkVisible = ko.observable(false);

    var clicked = function() {
        document.location = url();
    }

    var load = function(data) {
        id(data.id);
        name(data.name);
        photo(Petango.Utils.getPhoto(data.photo, data.speciesId));
        hasVideo(data.hasVideo);
        age(data.age);
        distance(data.distance);
        distanceVisible(data.distance > 0);
        gender(data.gender);
        breed(data.breed);
        noDogs(data.noDogs);
        noCats(data.noCats);
        noKids(data.noKids);
        score(data.score);
        url(data.url);
    };

    return {
        clicked: clicked,
        id: id,
        name: name,
        photo: photo,
        hasVideo: hasVideo,
        age: age,
        distance: distance,
        distanceVisible: distanceVisible,
        gender: gender,
        breed: breed,
        load: load,
        noDogs: noDogs,
        noCats: noCats,
        noKids: noKids,
        score: score,
        url: url,
        removeLinkVisible: removeLinkVisible
    }
};

