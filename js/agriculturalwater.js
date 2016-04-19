// Decision Trees
// Wildlife Management
// TOTAL QUESTIONS: 9
// TOTAL DECISIONS: 18
// aw = agricultural water
var aw_title = "Agricultural Water for Production";
var aw_answer; // 0 == false and 1 == true
var aw_questionIndex = 0; // index for the questions
var aw_noIndex = 0; // index for the no answers

var aw_no_answers = [
"If you do not use any water in the field while growing fresh produce, there is no applied water risk. Note in your food safety plan, “We do not apply any water, including sprays during production, so we do not have a water management or testing plan.”",

"Create a map (can be hand drawn) that shows the location of your water sources and how water is distributed throughout your farm from those sources. Note the irrigation method and other distribution details on the map. This will help you assess risks related to water distribution.",

"All water sources should be inspected at the beginning of and periodically throughout the growing season. Surface water sources, such as ponds, rivers, streams and reservoirs, should be assessed to determine if wildlife or adjacent land uses pose any contamination risk. Well casings should be inspected to make sure they are intact and well recharge areas should be free of risks. Any identified risks should be minimized before the water source is used for fresh produce production.",

"All water distribution and delivery systems, as well as equipment used to move water, should be inspected at the beginning of and throughout the growing season. This will ensure that the lines are clear and not likely to introduce microbial risks to the fresh produce crop receiving the water. Preventative maintenance, such as repairing broken lines and emitters, and removing any debris in the lines (e.g., nesting wildlife), will help prevent the spread of contamination.",

"Water that never comes in direct contact with the edible portion of the crop represents the lowest risk. Some buyers and audit companies require all water used during production, regardless of how it is applied, be tested and meet specific water quality standards. It is recommended that you test this water for quantified generic E. coli to establish a baseline of water quality for the water source.",

"The source of any water that comes in direct contact with the edible portion of the crop must be tested for quantified generic E. coli. The FSMA proposed produce safety rule states that if the source is a surface water source, such as a river, pond, or stream, it must be tested once per week throughout its use. If the source is a well, it must be tested at the beginning of the growing season and every three months thereafter during the growing season. If the source is a municipal water source, a copy of the municipality tests or certification of the quality is acceptable as verification of water quality.",

"Do not use this water to mix sprays or apply irrigation that will come in direct with the edible portion of the crop. Inspect the water source and delivery system to see if there is any obvious source of contamination. Retest the water source if you need to use the water. If the water still does not meet the standard, the water will need to be treated to meet the standard or an alternative water source that meets this microbial standard should be used. See the EPA reference for specifics on water quality and the Agricultural Water for Production Overview for how to calculate a rolling geometric mean.",

"Records should be kept for all water tests as well as any water management actions taken to identify and reduce risks that may be present in the water or the water delivery system. Template logs are provided to assist you with this recordkeeping process."

];


var aw_questions = [
"Do you irrigate, frost protect, cool, apply crop sprays, or use any agricultural water during the production of fresh produce?",

"Do you have a water source and distribution map for you farm?",

"Do you inspect your water sources at the beginning of production and throughout the growing season?",

"Do you inspect your water distribution or delivery system, including equipment, at the beginning of the growing season?",

"Does any agricultural water used during production have direct contact with the edible portion of the crop? This includes water used to mix protective sprays.",

"Is all agricultural water tested for quantified generic E. coli?",

"Is E. coli present at less than 235 CFU or MPN E. coli per 100 mls water sampled for a single sample and a rolling geometric mean (n=5) of less than 126 CFU or MPN E. coli per 100 mls of water?",

"Do you keep records of all water test results and water management actions, such as inspecting water sources and water delivery systems?"

];


$(document).ready(function() {

    $('#agriculturalWater').click(function(e) {

        var txt = $(e.target).text();

        if (txt == aw_title) {

            callModalQuestion(aw_questionIndex);
        }
    });

    function callModalQuestion(questionIndex) {

            var question = aw_questions[aw_questionIndex]; // question that will show
            console.log(question);

            modalQuestion(question); // calls the question modal to pop-up
    }

    function modalQuestion(question) {

        console.log("No Index " + aw_noIndex);

        var $text = $('<div></div>'); // instantiates a text inside a div
            $text.append(question);   // adds the questions as the text

        if (aw_questionIndex < 12) {
            BootstrapDialog.show({
                title: aw_title,
                message: $text,       // the question is now displayed on the modal
                buttons: [{
                    label: 'Yes',
                    action: function(dialogRef) {   // if answer is yes
                        dialogRef.close();
                        aw_questionIndex++;
                        aw_noIndex = aw_questionIndex;
                        modalQuestion(aw_questions[aw_questionIndex]);
                    }
                }, {
                    label: 'No',
                    action: function(dialogRef) {   // if answer is no
                        dialogRef.close();
                        BootstrapDialog.alert(aw_no_answers[aw_noIndex]);
                        aw_questionIndex = 0;
                        aw_noIndex = 0;
                    }
                }]
            });
        }

        else {

            console.log("Nothing happens");
        }

    }

});