var YouMayAlsoLike = YouMayAlsoLike || {};

YouMayAlsoLike.ViewModel = function (moduleId) {
    var service = {
        path: "Pethealth.Petango/Pethealth.Petango.DnnModules.YouMayAlsoLike",
        framework: $.ServicesFramework(moduleId)
    }
    service.baseUrl = service.framework.getServiceRoot(service.path) + "Main/";

    Petango.Utils.loadCommonTemplate("Animal.html");

    var isLoading = ko.observable(false);
    var itemList = ko.observableArray([]);

    var init = function () {        
        loadSearchResult();
    }
    
    var loadSearchResult = function () {
        isLoading(true);
        var animalId = Petango.Utils.extractIdFromFriendlyUrl();
        var isHappyTail = Petango.Utils.isHappyTailsUrl();

        var q = "GetAnimals?moduleId=" + moduleId + "&animalId=" + animalId + "&isHappyTail=" + isHappyTail;

        Petango.Utils.asyncAjax(service, q,
            function (d) { if (d) load(d); },
            function () { isLoading(false); }
        );
    };

    var load = function (data) {
        if (data) {
            Petango.Utils.copyToObservableArray(data, itemList,
                function (v) {
                    var item = new Petango.Animal();
                    item.load(v);
                    return item;
                }
            );
        } else {
            // No data to load 
            itemList.removeAll();
        }
    };

    return {
        init: init,
        itemList: itemList,
        isLoading: isLoading
    }
};
