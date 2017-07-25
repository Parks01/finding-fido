var Petango = Petango || {};

Petango.Utils = {

    isEmptyString: function(value) {
        return value == null || ("" + value).trim().length === 0;
    },

    //Note: Parameter names converted to lower case
    getQueryStrings: function () {
        var assoc = {};
        var decode = function (s) { return decodeURIComponent(s.replace(/\+/g, " ")); };
        var queryString = location.search.substring(1);
        var keyValues = queryString.split('&');

        for (var i = 0; i < keyValues.length; i++) {
            var key = keyValues[i].split('=');
            if (key.length > 1) {
                assoc[decode(key[0]).toLowerCase()] = decode(key[1]);
            }
        }
        return assoc;
    },

    loadTemplate: function (path) {
        //Use jQuery Ajax to fetch the template file
        jQuery.ajaxSetup({ async: false, cache: false });
        $.get(path)
            .success(function(result) {
                //On success, Add templates to DOM (assumes file only has template definitions)
                $("body").append(result);
            })
            .error(function(result) {
                alert("Error Loading Templates");
            });
    },

    loadCommonTemplate: function (fileName) {
        var url = Petango.Utils.getModulesRoot() + "Pethealth.Petango/Pethealth.Petango.DnnModules.Common/Content/" + fileName;
        Petango.Utils.loadTemplate(url);
    },

    getModulesRoot: function () {
        var s = $.ServicesFramework(0).getServiceRoot("");
        return s.substring(0, s.length - 5);
    },

    getPhoto: function(photo, speciesId) {
        if (photo == null) {
            var contentPath = location.protocol + "//" + location.host + "/DesktopModules/Pethealth.Petango/Pethealth.Petango.DnnModules.Common/Content/";
            switch (speciesId) {
                case 1:
                    return contentPath + "no-image-dog.jpg";
                case 2:
                    return contentPath + "no-image-cat.jpg";
                default:
                    return contentPath + "no-image-other.jpg";
            }
        } else {
            return photo;
        }
    },

    makeExternalUrl: function (site) {
        if (site != null && !site.startsWith("http") && !site.startsWith("//"))
            return "//" + site;
        else {
            return site;
        }
    },

    formatPhone: function(phone) {
        return "(" + phone.substr(0, 3) + ") " + phone.substr(3, 3) + "-" + phone.substr(6, 4);
    },

    extractIdFromFriendlyUrl: function() {
        var id = -1;
        var s = document.location.pathname;
        var i = s.lastIndexOf("-");
        if (i >= 0) {
            if (s.length > (i + 1)) {
                var num = Number(s.substring(i + 1));
                id = !isNaN(num) ? num : -1;
            }
        }
        return id;
    },
    
    isHappyTailsUrl: function () {
        var s = document.location.pathname.toLowerCase();
        return s.lastIndexOf("/happytails/") >= 0;
    },

    isLostAnimalsUrl: function () {
        var s = document.location.pathname.toLowerCase();
        return s.lastIndexOf("/lostfound/") >= 0;
    },

    validateEmail: function (email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    },

    isValidDate: function(dateStr) {
        return this.parseDate(dateStr) != null;
    },

    parseDate: function(str) {
        var dateParts = str.split("/");
        if (dateParts.length != 3)
            return null;
        var month = dateParts[0];
        var day = dateParts[1];
        var year = dateParts[2];

        if (isNaN(day) || isNaN(month) || isNaN(year))
            return null;

        var result = new Date(year, (month - 1), day);
        if (result == null)
            return null;
        if (result.getDate() != day)
            return null;
        if (result.getMonth() != (month - 1))
            return null;
        if (result.getFullYear() != year)
            return null;

        return result;
    },
    
    formatMoney: function(n, c, d, t){
        c = isNaN(c = Math.abs(c)) ? 2 : c, 
        d = d == undefined ? "." : d, 
        t = t == undefined ? "," : t, 
        s = n < 0 ? "-" : "", 
        i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", 
        j = (j = i.length) > 3 ? j % 3 : 0;
        return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
    },

    getSavedClientZip: function() {
        return sessionStorage.getItem("clientZip");
    },

    saveClientZip: function(zipCode) {
        sessionStorage.setItem("clientZip", zipCode);
    },

    getBreedList: function (service, speciesId, breedList) {
        this.syncAjax(service, "GetBreeds?speciesId=" + speciesId,
            function(data) {
                if (data) {
                    breedList.removeAll();
                    var underlyingArray = breedList();
                    $.each(data, function (i, val) {
                        var breed = new Petango.Breed(val.id, val.name);
                        underlyingArray.push(breed);
                    });
                    breedList.valueHasMutated();
                }
            });
    },

    validateLocation: function (service, loc) {
        var result = false;
        this.syncAjax(service, "ValidateLocation?location=" + loc,
            function (d) { if (d) result = d; });
        return result;
    },

    //Finds y value of given object
    findVerticalPosition: function (obj) {
        var curtop = 0;
        if (obj.offsetParent) {
            do {
                curtop += obj.offsetTop;
            } while (obj = obj.offsetParent);
            return [curtop];
        }
    },

    copyToObservableArray: function(data, array, itemConvertor) {
        array.removeAll();
        var underlyingArray = array();
        $.each(data, function (i, val) {
            if (itemConvertor) {
                underlyingArray.push(itemConvertor(val));
            } else {
                underlyingArray.push(val);
            }
        });
        array.valueHasMutated();
    },

    searchCities: function (service, loc, success) {
        this.syncAjax(service, "SearchCity?query=" + loc,
            function (d) { if (d) success(d); });
    },

    getSettings: function(service, moduleId, success) {
        this.syncAjax(service, "GetSettings?moduleId=" + moduleId,
            function (d) { if (d) success(d); });        
    },

    saveSettings: function(service, moduleId, data, done) {
        this.syncAjaxPost(service, "SaveSettings?moduleId=" + moduleId, JSON.stringify(data), done);
    },

    getAvailablePages: function(service, pageList) {
        this.syncLoadObservableArray(service, "GetAvailablePages", pageList);
    },
 
    syncLoadObservableArray: function (service, q, array) {
        var self = this;
        this.syncAjax(service, q,
            function(d) { if (d) self.copyToObservableArray(d, array); });
    },

    syncAjax: function (service, q, done) {
        $.ajax({
            url: service.baseUrl + q,
            beforeSend: service.framework.setModuleHeaders,
            dataType: "json",
            async: false
        }).done(function (data) {
            done(data);
        }).fail(function (jqXhr, textStatus) {
            console.log(q + ": " + textStatus + ": " + jqXhr.responseText);
        });
    },

    syncAjaxPost: function (service, q, data, done) {
        $.ajax({
            method: "POST",
            url: service.baseUrl + q,
            contentType: "application/json; charset=UTF-8",
            beforeSend: service.framework.setModuleHeaders,
            data: data,
            dataType: "json",
            async: false
        }).done(function (data) {
            done(data);
        }).fail(function (jqXhr, textStatus) {
            console.log(q + ": " + textStatus + ": " + jqXhr.responseText);
        });
    },

    asyncAjax: function (service, q, done, always) {
        $.ajax({
            url: service.baseUrl + q,
            beforeSend: service.framework.setModuleHeaders,
            dataType: "json",
            async: true
        }).done(function (data) {
            done(data);
        }).fail(function (jqXhr, textStatus) {
            console.log(q + ": " + textStatus + ": " + jqXhr.responseText);
        }).always(always);
    }
}

Petango.Breed = function (id, name) {
    this.id = id;
    this.name = name;
}