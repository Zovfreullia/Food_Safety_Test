// Decision Trees
// Soil Amendments
// TOTAL QUESTIONS: 16
// TOTAL DECISIONS: 32
// s = soil amendment
var s_title = "Soil Amendments";
var s_answer; // 0 == false and 1 == true
var s_questionIndex = 0; // index for the questions
var s_noIndex = 0; // index for the no answers

var s_no_answers = [
"State in plan: No inorganic fertilizer is used on the farm. Go to question 4.",

"Fertilizers must be protected from the weather, so they do not chemically react or leach. Produce can be contaminated if handled or stored near fertilizer, or if it comes in contact with chemical leachate.",

"Storage facilities should be inspected weekly to check for spills to reduce risks of chemical contamination. Use the Chemical Storage Facility Monitoring Log to document maintenance checks and cleanings.",

"State in plan “No raw animal manure is used on the farm”. Go to question 1.",

"Raw manure presents a food safety risk because it contains pathogens that can contaminate fresh produce. When using raw manure, reduce risks by incorporating it into the soil within 72 hours after application, and never apply it during the growing season. Maximize the time between manure application and crop harvest to reduce risks. The LGMA requires a 1 year harvest interval, while the NOP requires 90/120 days7 and the FSMA proposed produce rule requires 9 months.13 Refer to the Soil Amendments Overview for more information and references.",

"Manure applied to fields that are water saturated or prone to flooding can leach and contaminate surrounding production areas and water sources. Be sure to know and follow municipal, state, and federal rules and regulations. Your Natural Resources Conservation Service8 (NRCS) state offices will have current state standards on water quality protection practices (codes 590 and 633).",

"Runoff, leachate, and wind spread from raw manure piles can result in the contamination of produce, soil, and water sources. To reduce risks, manure piles should be physically contained and covered to protect them from rainfall and wind. The minimum containment for storage is on a concrete slab. Raw manure should never be piled in a produce field or on bare soil.",

"If manure is close to production areas, there is a risk that it will contaminate produce by runoff or wind spread. Safe distances for storage will vary depending on the amount of manure present, crop location (downhill and/or downwind) from source, likelihood of runoff or leaching, physical barriers present, and how storage piles/facilities are protected.",

"Manure storage areas can leach pathogens into the soil, wells, and other water sources. Wells are particularly susceptible to contamination if they are not capped or properly constructed. To reduce risks of well contamination, be sure the well is properly constructed and capped, install back-flow devices, keep animals out of the well recharge area, store manure downhill from the well, and make sure water runs away from the well head.",

"Raw manure storage areas near surface water can result in water contamination, either by runoff or through leaching. Safe distance recommendations from the surface water source depend on soil type and slope of land. The Leafy Greens Marketing Agreement (LGMA)1 recommends at least 100 feet if soil is sandy, 200 feet if soil is clay or loam, and 300 feet if slope is greater than 6%.",

"Go to Question 16.",

"If you get your compost from a supplier, ask for documentation about the composting method and microbial testing to include in your records.",

"Composting manure reduces food safety risks by reducing the likelihood that pathogens are present. Composting requires specific active processing treatments; passive treatments like “aging” do not count as composting. For composting standards, refer to the Soil Amendment Overview. If proper composting practices have not been met by you or your provider, then you must follow the application and storage guidelines for raw manure outlined in questions 5–10.",

"If you store finished or curing compost on your farm, it should be covered to prevent recontamination of the pile. It can be covered with a tarp or stored in an enclosed facility. Recontamination of a compost pile can occur by rain16, wind spread from adjacent manure piles, or bird or other animal intrusion.",

"Composted manure is aless likely to contaminate crop and water sources than raw manure; however, the best practice is to cover and store the compost as far away as possible from water sources and produce fields. When assessing your farm’s risk, some factors to consider are the field locations (uphill or downhill) from compost, likelihood of wind-spread, presence of runoff or leaching, amount of compost being stored, and any physical barriers that are present.",

"Recordkeeping is critical to keeping track of soil amendment applications, both for plant and soil fertility as well as safety. Utilize the Soil Amendment Application Log for your food safety plan and application recordkeeping."
];

var s_questions = [
"Do you use inorganic fertilizer?",

"Are inorganic fertilizers stored in a covered area that is separate from where produce is handled or stored?",

"Are inorganic fertilizer storage facilities checked weekly and cleaned when necessary?",

"Do you use raw untreated manure (e.g. teas, leachates, and slurries) on the farm?",

"Do you incorporate raw untreated manure in to the soil at least 1 year before harvest?",

"Do you avoid spreading raw untreated manure on fields that are water saturated, prone to annual flooding or runoff, or are frozen or snow covered?",

"If raw untreated manure is stored on your farm, is it covered and physically contained?",

"Is raw untreated manure from livestock, manure containment structures, storage piles, and composting facilities located at least 400 feet from produce fields and handling sites?",

"Is raw untreated manure located at least 200 feet from well heads?",

"Is raw untreated manure separated from surface water sources used during the production of fresh fruits and vegetables?",

"Do you use composted manure or compost manure on your farm?",

"Is the composting process done on your farm?",

"Do you properly process/compost manure according to industry standards? For compost guidelines refer to the Soil Amendment Overview.",

"Do you keep finished compost under covered storage?",

"Is compost stored at least 30 feet14 from produce fields and 80 feet10 from water sources?",

"Do you keep records of the following? \n Type of fertilizer being applied \n Method of application \n Field receiving applications \n Date of application \n Rate (quantity applied per acre) \n What crops will be planted \n Compost production methods and microbial testing (if applicable)"

];

$(document).ready(function() {

    $('#soilAmendments').click(function(e) {

        var txt = $(e.target).text();

        if (txt == s_title) {

            callModalQuestion(s_questionIndex);
        }
    });

    function callModalQuestion(questionIndex) {

            var question = s_questions[s_questionIndex]; // question that will show
            console.log(question);

            modalQuestion(question); // calls the question modal to pop-up
    }

    function modalQuestion(question) {

        console.log("No Index " + s_noIndex);

        var $text = $('<div></div>'); // instantiates a text inside a div
            $text.append(question);   // adds the questions as the text

        if (s_questionIndex < 12) {
            BootstrapDialog.show({
                title: s_title,
                message: $text,       // the question is now displayed on the modal
                buttons: [{
                    label: 'Yes',
                    action: function(dialogRef) {   // if answer is yes
                        dialogRef.close();
                        s_questionIndex++;
                        s_noIndex = s_questionIndex;
                        modalQuestion(s_questions[s_questionIndex]);
                    }
                }, {
                    label: 'No',
                    action: function(dialogRef) {   // if answer is no
                        dialogRef.close();
                        BootstrapDialog.alert(s_no_answers[s_noIndex]);
                        s_questionIndex = 0;
                        s_noIndex = 0;
                    }
                }]
            });
        }

        else {

            console.log("Nothing happens");
        }

    }

});