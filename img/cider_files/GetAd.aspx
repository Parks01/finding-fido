(function(){
    /* tokens */
    var ppcs="%3Cdiv%20id%3D%27dv_pp_g2KjUcxClEvv%27%3E%3C%21--%2F*%20OpenX%20JavaScript%20tag%20*%2F--%3E%0A%0A%0A%3Cscript%20type%3D%22text%2Fjavascript%22%3E%0Aif%20%28%21window.OX_ads%29%20%7B%20OX_ads%20%3D%20%5B%5D%3B%20%7D%0AOX_ads.push%28%7B%20%22auid%22%20%3A%20%22538786111%22%20%7D%29%3B%0A%3C%2Fscript%3E%0A%3Cscript%20type%3D%22text%2Fjavascript%22%3E%0Adocument.write%28%27%3Cscr%27%2B%27ipt%20src%3D%22%2F%2Fus-ads.openx.net%2Fw%2F1.0%2Fjstag%22%3E%3C%5C%2Fscr%27%2B%27ipt%3E%27%29%3B%0A%3C%2Fscript%3E%0A%3Cnoscript%3E%3Ciframe%20id%3D%22f4b596eb56%22%20name%3D%22f4b596eb56%22%20src%3D%22%2F%2Fus-ads.openx.net%2Fw%2F1.0%2Fafr%3Fauid%3D538786111%26cb%3DINSERT_RANDOM_NUMBER_HERE%22%20frameborder%3D%220%22%20scrolling%3D%22no%22%20width%3D%22728%22%20height%3D%2290%22%3E%3Ca%20href%3D%22%2F%2Fus-ads.openx.net%2Fw%2F1.0%2Frc%3Fcs%3Df4b596eb56%26cb%3DINSERT_RANDOM_NUMBER_HERE%22%20%3E%3Cimg%20src%3D%22%2F%2Fus-ads.openx.net%2Fw%2F1.0%2Fai%3Fauid%3D538786111%26cs%3Df4b596eb56%26cb%3DINSERT_RANDOM_NUMBER_HERE%22%20border%3D%220%22%20alt%3D%22%22%3E%3C%2Fa%3E%3C%2Fiframe%3E%3C%2Fnoscript%3E%3C%2Fdiv%3E",
        ppps="%3Cimg%20src%3D%22http%3A%2F%2Fidsync.rlcdn.com%2F400066.gif%3Fpartner_uid%3DT9q8eWiq7dRi%22%20height%3D%221%22%20width%3D%221%22%20border%3D%220%22%2F%3E%3Cdiv%20style%3D%22display%3Anone%3Bwidth%3A0%3Bheight%3A0%22%3E%3CIFRAME%20SRC%3D%22http%3A%2F%2Fpixel.quantserve.com%2Fpixel%2Fp-01-0VIaSjnOLg.gif%3Ftags%3DCONTEXTWEB.IAB6-1%2CPUBLISHER.557886%2C%2CCAMPAIGN.0.0%2CAA_30000%2CAA_30101%2CAA_30301%2CAA_30601%2CAA_30803%2CAA_30206%2CAA_30902%2CADSIZE.728X90%2CZIPCODE.98101%2CPUBLISHERDOMAIN.petango.com%22%20HEIGHT%3D%220%22%20WIDTH%3D%220%22%20MARGINWIDTH%3D%220%22%20MARGINHEIGHT%3D%220%22%20ALLOWTRANSPARENCY%3D%22true%22%20FRAMEBORDER%3D%220%22%20SCROLLING%3D%22NO%22%3E%3C%2FIFRAME%3E%3C%2Fdiv%3E",
        pp_exp="0",
        ppContainerId = "pp_ad_container_0",
        maOpts = {"enabled":false,"maxSeqNum":0,"periodMax":0,"periodMin":0,"rotatingPassback":false,"skipRotation":false},
        /* selecting parent.parent.pp in case this is in multiple iframes */
        pp = window.pp || parent.pp || parent.parent.pp,
        runSafe = function(func){
            try{
                return func();
            }catch(ignore){}
        },
        thisAd = runSafe(function(){
            if (typeof pp === 'object' && typeof pp.updateMaOpts === 'function') {
                return pp.updateMaOpts(ppContainerId, maOpts);
            }
        }),
        docWrite = function(str){
            document.write(decodeURIComponent(str)); // jshint ignore:line
        };
    /* right before rendering the creative, the previous one will be rotated if necessary */
    runSafe(function(){
        if (typeof pp === 'object' && typeof pp.beforeRenderAd === 'function') {
            pp.beforeRenderAd(ppContainerId);
        }
    });
    /* only render ad if necessary according to MA config */
    if (typeof thisAd !== 'object' || typeof thisAd.maOpts !== 'object' || !thisAd.maOpts.skipRotation) {
        //inline rendering using document.write
        if(pp_exp=='1'){
            try{
                /* used in async javascript [1.0], where the ad itself is rendered in an iframe */
                parent.pp.AdManager.displayExpandable(window.frameElement,decodeURIComponent(ppcs));
                docWrite(ppps);
            }catch(e){
                docWrite(ppcs+ppps);
            }
        } else {
            docWrite(ppcs+ppps);
        }
    }
    /* after rendering or skipping the creative the next rotation must be scheduled (according to 'maOpts') */
    runSafe(function(){
        if (typeof pp === 'object' && typeof pp.afterRenderAd === 'function') {
            pp.afterRenderAd(ppContainerId);
        }
    });
})();