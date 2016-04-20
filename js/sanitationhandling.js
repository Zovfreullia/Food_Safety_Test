// Decision Trees
// Sanitation and Postharvest Handling Decision
// TOTAL QUESTIONS: 14
// TOTAL DECISIONS: 28
// sa = sanitation and postharvest handling 
var sa_title = "Sanitation and Postharvest Handling";
var sa_answer; // 0 == false and 1 == true
var sa_questionIndex = 0; // index for the questions
var sa_noIndex = 0; // index for the no answers

var sa_no_answers = [
   "Regardless of where you pack produce, sanitation practices are going to be important to produce safety. Field and open packing areas (e.g. temporary tent, open shelter) may present different challenges than a completely enclosed packing facility. Many of the same principles apply, but open packing areas may have more risks associated with wildlife, birds, and blowing dust. This decision tree highlights the challenges of managing food safety in both closed and open packing areas.",

   "To begin developing an effective sanitation program, it is important to understand how fresh produce moves through the packing area and identify all surfaces fresh produce may contact. Once the flow and contact surfaces are identified, an effective sanitation plan can be developed.",

   "Any surface that fresh produce touches after being harvested may serve as a source of contamination. Packing areas, equipment, and surfaces must be constructed to allow easy cleaning and sanitizing. Moving parts such as rollers, brushes, or belts should be easily accessible for cleaning, or able to be removed during the cleaning process. A porous surface, such as wood, cannot be sanitized but it can be cleaned. When repairs or upgrades should be made, replace equipment and tools with materials that can be easily cleaned and sanitized.",

   "SOPs* provide a detailed, step-by-step process of how to clean and sanitize equipment and tools. There are four steps involved in cleaning and sanitizing food contact surfaces. \n \n Step 1: Rinse the surface so any obvious dirt and debris are removed. \n \n Step 2: Apply an appropriate detergent and scrub the surface. \n \n Step 3: Rinse the surface with water that is the microbial equivalent of drinking water. \n \n Step 4: Apply an appropriate sanitizer. If the sanitizer requires a final rinse, then this will require an extra step. Let the surface air dry. \n \n *See the supplemental resource: How to Write an SOP.",

   "Workers need to understand and follow SOPs if cleaning and sanitizing equipment is part of their job. This may require additional training. See tips for training workers in the Worker Health, Hygiene, and Training decision tree. \n \n *See Tools and Equipment Cleaning and Sanitizing Log.",

   "Workers should be trained so they understand the importance of wearing clean clothes to work and any other practices they need to do. For example, if workers are required to wear gloves or aprons, they should be instructed to change gloves often (if disposable) or clean dirty gloves properly. Aprons and smocks should be kept clean and washed when they are dirty. Gloves and aprons should not be worn outside of the packing facility or in the restroom, and should be stored in a designated place off of the ground in a clean, dry area. Review the Worker Health, Hygiene, and Training Decision Tree for more training information and suggestions.",

   "Daily cleaning is important to reduce the risk of microorganisms growing and persisting through the formation of biofilms. Daily cleaning also establishes a culture of cleanliness and prioritizes sanitation practices. \n \n * See Packinghouse Food Contact Surface Sanitation Log.",

   "Cull piles should be disposed of properly to avoid attracting pests into the packing and storage areas. Cull piles should be removed, composted, or field spread at the end of each packing day.",

   "For all facilities, a pest control program must be established to exclude or eliminate rodents, birds, and insects from postharvest handling and storage areas. If pest activity is found, methods to reduce or eliminate activity should be developed. This might include installing bird netting under roofs, adding screens to windows, or setting traps. Traps should never be baited inside the packing area, as this may draw more pests into the area. The program should include regular monitoring and corrective actions if pest activity is found. In open air packing facilities, pest control is much more difficult, therefore precautions must be taken to keep produce covered and away from any potential pest contamination. \n \n * See Pest/Rodent Control Log.",

   "Any debris and dirt should be removed from fresh produce and produce bins before entering the packing area. This will help keep packing areas clean and prevent crosscontamination of the finished product. Dirt and debris can also decrease the efficacy of chlorine and other water sanitizers, so removing dirt before produce and/or bins enter the wash tank may improve your ability to properly manage postharvest water sanitation practices. \n \n * See Postharvest Water Decision Tree for information on postharvest water management. ",

   "Fresh produce should always be packed into clean boxes to avoid cross contamination. If boxes are reused, they should be cleaned and when possible, sanitized to keep the produce safe.",

   "Packing containers and other packing materials that are not used right away should be stored in a way that protects them from contamination by pests (e.g. rodents and insects), dirt, dust, and water condensing from overhead equipment and structures. If packing supplies are stored outside the packing facility, they should be covered or cleaned and sanitized before use",

   "Produce storage areas should receive regular cleaning as determined by the farm’s SOPs. Your pest control program should include active monitoring of produce storage areas and have corrective actions outlined if the produce has been contaminated by pests. Pallets and boxes of packed produce should be stored 12” away from storage room walls to facilitate pest control monitoring. Important steps, such as the date cleaning was completed and monitoring of rodent traps, should be documented as part of the recordkeeping. \n \n *See Produce Storage Area Cleaning and Inspection Log.",

   "All storage areas, including coolers, should be clean to reduce any risk of cross contamination. The quantity of produce stored in a refrigerated room should not exceed the room’s cooling capacity. Improper cooling methods or broken equipment may cause condensation to form and drip onto the produce which can foster the growth of pathogens and spoilage organisms. \n \n Produce that is iced or may drip should not be stored above dry produce. If the cooler is used to store anything besides fresh produce (such as meat or eggs that might represent a contamination risk), be sure that those products are stored in designated areas below and away from fresh produce. \n \n *See Cooler Temperature Log."

];

var sa_questions = [
    "Do you sort, package, wash, or grade produce in a packing house, shed, or other structure?",

    "Have you diagrammed the flow of produce through the packing area and identified all the food contact surfaces (places where fresh produce touches equipment, brushes, rollers, boxes, etc.)?",

    "Can all food contact surfaces in the facility (e.g., grading tables, conveyor belts, tools, bins) be easily cleaned and sanitized?",

    "Have SOPs been developed for cleaning and sanitizing equipment and tools?",

    "Have workers been trained to follow farm SOPs to properly clean and sanitize surfaces, tools (e.g., knives, blades, and buckets) and equipment?",

    "Are workers trained to wear clean clothes and follow other personal equipment requirements written in your food safety policy?",

    "Are the packing, sorting, and grading areas cleaned at the end of each day of use?",

    "Are cull piles properly disposed of at the end of each packing day?",

    "Have you established a pest control program?",

    "Do you remove as much dirt, mud, and debris as possible from fresh produce and produce bins before entering the packing area?",

    "Is produce always packed into new, single-use containers or reused containers that have been cleaned and sanitized?",

    "Are packing containers and packaging materials stored in an area that is covered to reduce the potential for contamination by pests or environmental contamination such as windblown dirt?",

    "Is finished produce stored in an area that is cleaned regularly and inspected for pest activity?"
];


$(document).ready(function() {

    $('#sanitationHandling').click(function(e) {

        var txt = $(e.target).text();

        console.log(txt);

        if (txt == sa_title) {

            callModalQuestion(sa_questionIndex);
        }
    });

    function callModalQuestion(questionIndex) {

            var question = sa_questions[sa_questionIndex]; // question that will show
            console.log(question);

            modalQuestion(question); // calls the question modal to pop-up
    }

    function modalQuestion(question) {

        console.log("No Index " + sa_noIndex);

        var $text = $('<div></div>'); // instantiates a text inside a div
            $text.append(question);   // adds the questions as the text

        if (sa_questionIndex < 12) {
            BootstrapDialog.show({
                title: sa_title,
                message: $text,       // the question is now displayed on the modal
                buttons: [{
                    label: 'Yes',
                    action: function(dialogRef) {   // if answer is yes
                        dialogRef.close();
                        sa_questionIndex++;
                        sa_noIndex = sa_questionIndex;
                        modalQuestion(sa_questions[sa_questionIndex]);
                    }
                }, {
                    label: 'No',
                    action: function(dialogRef) {   // if answer is no
                        dialogRef.close();
                        BootstrapDialog.alert(sa_no_answers[sa_noIndex]);
                        sa_questionIndex = 0;
                        sa_noIndex = 0;
                    }
                }]
            });
        }

        else {

            console.log("Nothing happens");
        }

    }

});