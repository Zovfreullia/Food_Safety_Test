// Decision Trees
// Postharvest Water
// TOTAL QUESTIONS: 9
// TOTAL DECISIONS: 18
// p = post harvest water
var p_title = "Postharvest Water";
var p_answer; // 0 == false and 1 == true
var p_questionIndex = 0; // index for the questions
var p_noIndex = 0; // index for the no answers

var p_no_answers = [
   "Begin all postharvest activities with water that is the equivalent of drinking water. If you are not sure of your water quality, test it to confirm it is free of total coliforms. If you are using municipal water, municipalities treat and test the water so you should be able to get a copy of their test results. Well water should be tested at least twice per year. \n \n If you use surface water from a reservoir, pond, stream, lake, canal, ditch, river, rainwater or cistern for postharvest use, it should be treated to be the equivalent of drinking water and tested to ensure it is safe to use. Document all water treatment practices and keep records of all water tests.",

   "Single-pass water usually has a lower risk because water contacts produce only once. Pathogen growth and survival can still be a problem, especially if the single-pass water is used inside equipment that is not regularly cleaned and sanitized. Single-pass water should be properly drained and disposed of to prevent field or produce contamination. \n \n Batch or bulk water can be a source of contamination and result in cross contamination of many lots of fresh produce. If a contaminated piece of fresh produce is immersed in the tank or bin, the pathogens can be dispersed by the water. This contaminated water can then cross contaminate clean produce, so a sanitizer must always be added to batch or bulk water. \n \n Note: It is also important to consider water disposal. Follow all local, state, and federal guidelines for releasing or disposing of postharvest water.",

   "A sanitizer should be added to all postharvest water to reduce cross contamination and minimize potential transfer of pathogens to fresh produce. Sanitizers are critically important when using postharvest water in dump tanks, wash bins, or other batch water systems. \n \n There are many sanitizers that can be used for postharvest water. Pick the sanitizer that is best for your operation and the produce you grow. Make sure to follow the label recommendations and only use sanitizer approved for your specific crop. Monitor sanitizer levels frequently to be sure they are effective at reducing cross contamination risks. If you are certified organic, check with your certifier to make sure you are using an approved sanitizer for your produce.",

   "Sanitizer levels must be monitored to make sure the levels are effective at reducing the presence of microorganisms in the water. The primary purpose of the sanitizer is not to clean the produce, but to prevent cross contamination from the water to produce. Always follow the label when using a sanitizer. The build-up of organic material, such as leaves or soil, may bind the sanitizer and reduce its efficacy. Some sanitizers, such as chlorine, are most active at a specific pH, so you should monitor the sanitizer levels and the water pH. Develop an SOP specific to your sanitizer and document all monitoring steps on the Water Monitoring Log.",

   "To reduce risks associated with bulk/bin/tank water, change water or filter when your water quality monitoring system indicates it is dirty. Changing the water may depend on the sanitizer because some sanitizers are more sensitive to the presence of organic material. You should create a policy and SOP describing how and when to change water. Document all water changing activities including water monitoring on a Water Monitoring Log.",

   "Some fresh produce commodities are susceptible to infiltration when immersed in water that is colder than the pulp temperature. Infiltration is the passage of water from the bulk/ bin/tank water into fresh produce, usually caused by a temperature differential larger than 10°F, where the water is cooler than the produce. If that water is contaminated, microorganisms could enter the produce with the water. Tomatoes, cantaloupes, and apples are some crops susceptible to infiltration. Monitor pulp temperature and water temperature to make sure the water temperature is less than 10°F warmer than the pulp temperature, and document on a Water Monitoring Log.",

   "Tanks, bins, and washers should be cleaned and sanitized to reduce the risk of biofilm formation and the risk of cross contamination. Develop a policy that includes an SOP with step-by-step instructions for cleaning and sanitizing, including which detergents, sanitizers, and tools should be used, how often to clean the equipment, and what needs to be cleaned such as hoses, brushes, and conveyor belts. Document all cleaning and sanitation activities on the Cleaning and Sanitizing Log. For more information on cleaning, see the Sanitation and Postharvest Handling Decision Tree",

   "Pathogens, such as Listeria monocytogenes, can become established and persist in areas with standing water. At the end of each day, check the equipment, including drip pans, to make sure water has drained properly and is not pooling. Workers should be instructed on how to reduce and eliminate standing water and why it is important.",

   "Records should be kept of all postharvest water management and sanitation activities, such as: \n \n Water tests that document the water is the equivalent of drinking water\n \n Steps taken to monitor postharvest water such as water temperature, turbidity, and pH \n \n Actions taken to reduce risks such as changing postharvest water and cleaning tanks, bins and washers \n \n SOPs and logs should be developed to make sure activities are done properly and documented. Your postharvest water management policy should be detailed in your farm food safety plan."
];

var p_questions = [
    
    "Is postharvest water the equivalent of drinking water at the beginning of all activities such as rinsing and cooling?",

    "Is all postharvest water use single-pass only (i.e., sprayed over the produce, not recycled)?",

    "Do you add sanitizer to your postharvest water?",

    "Do you monitor sanitizer levels in postharvest water on an established schedule?",

    "Do you change your filter or bulk/bin/ tank water when your water quality monitoring indicates it is dirty?",

    "Do you monitor the temperature of your postharvest water?",

    "Do you clean and sanitize your postharvest equipment including tanks, bins, and washers on a standardized schedule?",

    "Do you reduce and eliminate standing water in your packing area?",

    "Do you keep records of all your postharvest water management and sanitation activities?"

];


$(document).ready(function() {

    $('#postHarvest').click(function(e) {

        var txt = $(e.target).text();

        console.log(txt);

        if (txt == p_title) {

            callModalQuestion(p_questionIndex);
        }
    });

    function callModalQuestion(questionIndex) {

            var question = p_questions[p_questionIndex]; // question that will show
            console.log(question);

            modalQuestion(question); // calls the question modal to pop-up
    }

    function modalQuestion(question) {

        console.log("No Index " + p_noIndex);

        var $text = $('<div></div>'); // instantiates a text inside a div
            $text.append(question);   // adds the questions as the text

        if (p_questionIndex < 12) {
            BootstrapDialog.show({
                title: p_title,
                message: $text,       // the question is now displayed on the modal
                buttons: [{
                    label: 'Yes',
                    action: function(dialogRef) {   // if answer is yes
                        dialogRef.close();
                        p_questionIndex++;
                        p_noIndex = p_questionIndex;
                        modalQuestion(p_questions[p_questionIndex]);
                    }
                }, {
                    label: 'No',
                    action: function(dialogRef) {   // if answer is no
                        dialogRef.close();
                        BootstrapDialog.alert(p_no_answers[p_noIndex]);
                        p_questionIndex = 0;
                        p_noIndex = 0;
                    }
                }]
            });
        }

        else {

            console.log("Nothing happens");
        }

    }

});