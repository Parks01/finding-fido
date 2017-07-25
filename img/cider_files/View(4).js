var AnimalSearch = AnimalSearch || {};

AnimalSearch.ViewModel = function (moduleId) {
    var service = {
        path: "Pethealth.Petango/Pethealth.Petango.DnnModules.AnimalSearch",
        framework: $.ServicesFramework(moduleId)
    }
    service.baseUrl = service.framework.getServiceRoot(service.path) + "Main/";

    var speciesList = ko.observableArray([
            { name: "Dog", id: 1 },
            { name: "Cat", id: 2 },
            { name: "Other", id: 1003 }
    ]);
    var assignedSpeciesId = ko.observable(-1);
    var breedList = ko.observableArray([]);
    var assignedBreedId = ko.observable(-1);
    var selectedCity = ko.observable(null);
    var locationIsInvalid = ko.observable(false);

    var baseResultPageUrl;

    var location = function (v) {
        if (typeof v != "undefined") {
            $("#location-" + moduleId).val(v);
        }
        return $("#location-" + moduleId).val();
    };

    assignedSpeciesId.subscribe(function (newValue) {
        Petango.Utils.getBreedList(service, newValue, breedList);
    });

    var cities = function (request, response) {
        Petango.Utils.searchCities(service, request.term, function (data) { response(data); });
    }

    var init = function () {
        Petango.Utils.asyncAjax(service, "GetData?moduleId=" + moduleId,
            function (d) { if (d) baseResultPageUrl = d.resultPageUrl; }
        );

        $("#location-" + moduleId).autocomplete({
            source: cities
        });
    };

    var searchClicked = function () {
        if (Petango.Utils.isEmptyString(location()) || !Petango.Utils.validateLocation(service, location())) {
            locationIsInvalid(true);
        } else {
            locationIsInvalid(false);
            document.location = baseResultPageUrl +
                "?speciesId=" + assignedSpeciesId() +
                "&breedId=" + assignedBreedId() +
                "&location=" + encodeURIComponent(location()) +
                "&distance=50";
        }
        return false;
    }

    return {
        init: init,
        searchClicked: searchClicked,
        breedList: breedList,
        assignedBreedId: assignedBreedId,
        speciesList: speciesList,
        assignedSpeciesId: assignedSpeciesId,
        selectedCity: selectedCity,
        locationIsInvalid: locationIsInvalid,
        cities: cities
    };
}
