// Decision Trees
// Wildlife Management
// TOTAL QUESTIONS: 9
// TOTAL DECISIONS: 18
// wa = wildlife management
var wa_title = "Wildlife and Animal Management";
var wa_answer; // 0 == false and 1 == true
var wa_questionIndex = 0; // index for the questions
var wa_noIndex = 0; // index for the no answers

var wa_no_answers = [
"Animals and animal feces may contaminate produce if they are present in or near produce fields or water sources. Large numbers of animals represent the biggest risks because they can produce large amounts of fecal matter that may be deposited in fields or enter through water runoff, airborne particles, or by contaminating water sources. \n Assessment of the food safety risks associated with animals may include: \n Identifying presence and location of grazing and feeding operations \n Identifying the type and approximate number of animals (domestic and wildlife) \n Observing activity patterns or seasonality of domestic animals and wildlife presence \n Evaluating topography of the land to assess for potential runof",

"Monitoring for animal presence is critical because they can carry or spread human pathogens in their feces that may contaminate the crop. Monitor your fields for animal intrusion at least weekly, and more frequently close to harvest to identify problems, and take action to reduce risks.",

"Continue to monitor for animal presence and intrusion. Document any activity observed throughout the season, especially close to and during harvest.",

"Properly dispose of cull piles, and minimize other harborage areas that may attract unwanted animals. Construct fences, or devise methods to exclude, deter, or limit animal entry into the fields. This may also include elimination through nuisance animal permits.* \n \n *Note—Co-management: Be sure to check local, state, and federal laws and regulations that protect endangered species and riparian habitat that may limit removal of vegetation or the construction of deterrent fences for wildlife corridors.",

"All workers should be trained to identify the signs of animal intrusion, such as downed fences, crop damage, or presence of fecal material, and report any events to the supervisor while working on the farm. This is important because workers are usually in the field more often and are able to assess more fields than one person (owner or manager) alone. \n \nTraining should include: \n How to identify signs of wildlife intrusion (animal tracks, damaged product, downed fences, and the presence of fecal material). \n To whom they should report significant wildlife activity. \n What actions to take (e.g., not harvest product, establish buffer zones, proper removal of affected product, cleaning and sanitation of tools/equipment and hands). \n What should be documented and which recordkeeping logs need to be filled out.",

"A pre-harvest assessment of the growing fields focusing on domestic and wild animal intrusion should be completed prior to harvest. This will reduce the likelihood of harvesting a contaminated crop by assessing whether the crop has been contaminated. The presence of fecal material or indicators of animal intrusion, such as extensive tracks or crop destruction, should be assessed to determine the risk of crop contamination and if harvesting should begin.",

"Continue to monitor for animal presence and intrusion. Document any activity observed in the future, especially close to and during harvest.",

"1. Do not harvest produce which is in contact with feces. Depending on the area affected, remove fecal material and affected product, disk the field, or take some other action to limit the risks of contaminating adjacent fields and produce. Be sure anyone involved in the removal process washes their hands and cleans and sanitizes all tools used in the clean-up. \n \n 2. If only a portion of the field is impacted, consider establishing a buffer zone* so produce in close proximity to the site(s) of contamination is not harvested. The buffer zone radius should be based on crop type, irrigation or water applications such as rain that may cause splash, and extent of fecal contamination. Buffer zone size varies so consult industry and research publications to determine the buffer that is right for your farm. \n \n *Note—If fecal contamination is identified in the field, several guidance documents may help establish a buffer zone to only harvest product which is at low risk for being contaminated. A minimum no-harvest buffer zone radius of 5 feet from the contaminated produce or feces should be established. This buffer zone may be increased, depending on the crop (ground crop), climate (heavy rainfall increasing splash radius), and contamination event (large wet feces more likely to splash).",

"A written record of animal management, monitoring, activity, or corrective actions should be kept on file. Documentation can help identify trends (such as time of year) that animal activity might be a problem, so practices that reduce risks can be put into place."

];


var wa_questions = [
"Have you assessed animal access (including wildlife, livestock, and pets) to water sources, produce fields, and adjacent lands that may represent a risk of contamination to your crop prior to planting?",

"Are you monitoring for wildlife and domestic animal presence in your fields and production areas?",

"Has there been significant physical evidence of animal intrusion into fields or production areas (e.g. downed fences, animal tracks, animal feces, crop destruction)?",

"Have you taken actions to exclude, deter, or limit animal access to fields?",

"Have your workers been trained to look for and report animal intrusion or fecal contamination during production, harvest, and packing activities?",

"Has a pre-harvest assessment of the crops and fields been completed before each harvest to determine if there has been any significant animal activity that would alter harvest practices?",

"Has significant animal activity or animal fecal material been found in close proximity to or in direct contact with the produce?",

"Have you modified your harvest practices to reduce risks by not harvesting contaminated areas or by establishing buffer zones that reduce the risks of harvesting contaminated crops?",

"Has documentation of animal activity management and monitoring been kept on file, including any corrective actions required to reduce the risk in the future?"

];


$(document).ready(function() {

    $('#wildlifeManagement').click(function(e) {

        var txt = $(e.target).text();

        if (txt == wa_title) {

            callModalQuestion(wa_questionIndex);
        }
    });

    function callModalQuestion(questionIndex) {

            var question = wa_questions[wa_questionIndex]; // question that will show
            console.log(question);

            modalQuestion(question); // calls the question modal to pop-up
    }

    function modalQuestion(question) {

        console.log("No Index " + wa_noIndex);

        var $text = $('<div></div>'); // instantiates a text inside a div
            $text.append(question);   // adds the questions as the text

        if (wa_questionIndex < 12) {
            BootstrapDialog.show({
                title: wa_title,
                message: $text,       // the question is now displayed on the modal
                buttons: [{
                    label: 'Yes',
                    action: function(dialogRef) {   // if answer is yes
                        dialogRef.close();
                        wa_questionIndex++;
                        wa_noIndex = wa_questionIndex;
                        modalQuestion(wa_questions[wa_questionIndex]);
                    }
                }, {
                    label: 'No',
                    action: function(dialogRef) {   // if answer is no
                        dialogRef.close();
                        BootstrapDialog.alert(wa_no_answers[wa_noIndex]);
                        wa_questionIndex = 0;
                        wa_noIndex = 0;
                    }
                }]
            });
        }

        else {

            console.log("Nothing happens");
        }

    }

});