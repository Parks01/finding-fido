var ShelterShortInfo = ShelterShortInfo || {};

ShelterShortInfo.ViewModel = function (moduleId) {
    var service = {
        path: "Pethealth.Petango/Pethealth.Petango.DnnModules.ShelterShortInfo",
        framework: $.ServicesFramework(moduleId)
    }
    service.baseUrl = service.framework.getServiceRoot(service.path) + "Main/";

    var isLoading = ko.observable(false);
    var name = ko.observable("");
    var logoUrl = ko.observable("");
    var shelterDetailsUrl = ko.observable("");
    var website = ko.observable("");
    var websiteUrl = ko.observable("");
    var email = ko.observable("");
    var phone = ko.observable("");
    var address = ko.observable("");
    var distance = ko.observable(0);
    var distanceVisible = ko.observable(false);

    var init = function () {        
        loadSearchResult();
    }
    
    var loadSearchResult = function () {
        isLoading(true);
        var animalId = Petango.Utils.extractIdFromFriendlyUrl();
        var zipCode = Petango.Utils.getSavedClientZip();
        var isHappyTail = Petango.Utils.isHappyTailsUrl();
        var isLostAnimal = Petango.Utils.isLostAnimalsUrl();

        var q = "GetShelter?moduleId=" + moduleId + "&animalId=" + animalId + "&zipCode=" + zipCode + "&isHappyTail=" + isHappyTail + "&isLostAnimal=" + isLostAnimal;

        Petango.Utils.asyncAjax(service, q,
            function (d) { if (d) load(d); },
            function () { isLoading(false); }
        );
    };

    var load = function (data) {
        name(data.name);
        logoUrl(data.logoUrl);
        shelterDetailsUrl(data.shelterDetailsUrl);
        website(data.website);
        websiteUrl(Petango.Utils.makeExternalUrl(data.website));
        email(data.email);
        phone(Petango.Utils.formatPhone(data.phone));
        address(data.address);
        distance(data.distance);
        distanceVisible(data.distance > 0);
    };

    return {
        init: init,
        isLoading: isLoading,
        name: name,
        logoUrl: logoUrl,
        shelterDetailsUrl: shelterDetailsUrl,
        website: website,
        websiteUrl: websiteUrl,
        email: email,
        phone: phone, 
        address: address,
        distance: distance,
        distanceVisible: distanceVisible
    }
};
