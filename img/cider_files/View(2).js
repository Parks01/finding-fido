var AnimalTraits = AnimalTraits || {};

AnimalTraits.ViewModel = function (moduleId) {
    var service = {
        path: "Pethealth.Petango/Pethealth.Petango.DnnModules.AnimalTraits",
        framework: $.ServicesFramework(moduleId)
    }
    service.baseUrl = service.framework.getServiceRoot(service.path) + "Main/";

    var anyVisible = ko.observable(false);
    var cuddly = ko.observable(false);
    var social = ko.observable(false);
    var curious = ko.observable(false);
    var active = ko.observable(false);
    var playful = ko.observable(false);
    var calm = ko.observable(false);
    var loner = ko.observable(false);
    var noDogs = ko.observable(false);
    var noCats = ko.observable(false);
    var noKids = ko.observable(false);

    var init = function () {        
        loadAnimalTraits();
    }
    
    var loadAnimalTraits = function () {
        var animalId = Petango.Utils.extractIdFromFriendlyUrl();
        Petango.Utils.asyncAjax(service, "GetAnimalTraits?animalId=" + animalId,
            function(d) { if (d) load(d); });
    };

    var load = function (data) {
        cuddly(data.cuddly);
        social(data.social);
        curious(data.curious);
        active(data.active);
        playful(data.playful);
        calm(data.calm);
        loner(data.loner);
        noDogs(data.noDogs);
        noCats(data.noCats);
        noKids(data.noKids);

        anyVisible(data.cuddly || data.social || data.curious || data.active || data.playful || data.calm || data.loner || data.noDogs || data.noCats || data.noKids);
    };

    return {
        init: init,
        anyVisible: anyVisible,
        cuddly: cuddly,
        social: social,
        curious: curious,
        active: active,
        playful: playful,
        calm: calm,
        loner: loner,
        noDogs: noDogs,
        noCats: noCats,
        noKids: noKids
    }
};
