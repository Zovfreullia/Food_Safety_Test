// Decision Trees
// Transportation Decision
// TOTAL QUESTIONS: 7
// TOTAL DECISIONS: 14
// tp = transportation
var tp_title = "Transportation";
var tp_answer; // 0 == false and 1 == true
var tp_questionIndex = 0; // index for the questions
var tp_noIndex = 0; // index for the no answers

var tp_no_answers = [
   "Produce should be covered or otherwise protected as it is moved from the field to the packing area or to the market. Using covered boxes, other covering, or an enclosed vehicle will help protect produce from being contaminated by dirt, dust, bird droppings, and other environmental sources of contamination.",

   "Fresh produce should not be transported in vehicles that have been used to haul manure, soil, compost, animals (including pets), animal products, or hazardous materials as these present a food safety risk. If vehicles, such as wagons and pick-up trucks, are used for multiple purposes on the farm, then a policy should be put in place to ensure they are cleaned before hauling fresh produce. See the SOP for Cleaning Produce Transport Vehicles and document on the logsheet.",

   "All vehicles should be inspected before loading produce to ensure there is no dirt, debris, or other evidence of contamination that may pose a food safety hazard. A written SOP should be developed for cleaning transportation vehicles (if you do this yourself) that includes removing debris, cleaning, and sanitizing (if possible). If the truck is contracted, check it before loading. Look at the outside and inside of the truck. Use your eyes and nose as you inspect the truck. Look for evidence of animals, including pets and pests. Make sure the truck is free of trash, debris and odors. Ask the driver about previous loads that have been carried in the vehicle and when the vehicle was last cleaned. \n \n A designated worker should sign or initial the completed checklist or inspection report, to verify cleanliness and appropriate temperature (if applicable).",

   "It may be that the fresh produce you are shipping is going a short distance so temperature maintenance is not as important as for longer transit times. However, if you have a contract with a transportation company and you require refrigeration, be sure to include your specified temperature range for the produce that will be transported. Check and record the trailer temperature before loading produce to ensure that the cargo area has been properly pre-cooled. Pre-cooling transportation vehicles is an important step in the cold chain maintenance, because it will help prevent heat build-up and deterioration in quality and safety of the produce. \n \n NOTE: These are best practices. If you do not have a refrigerated vehicle, make every effort to ensure that the vehicle and produce stay as cool as possible. Practical efforts may include keeping the vehicle under shade (but not under trees) or inside a cool building.",

   "Refrigeration equipment must be monitored and repaired as necessary to ensure that proper temperatures can be maintained throughout transportation. Monitor to prevent condensation of refrigeration units from dripping onto produce. Temperatures can be recorded by using handheld thermometers or thermostatic devices on the unit and recorded on a maintenance log. Specify expectations and requirements for refrigeration in contracts if you hire others to transport your produce.",

   "Training workers to properly load and unload produce will help minimize damage and prevent contamination of produce. Produce should be handled carefully so as not to bruise or injure it. Aside from significant deterioration in quality and consumer acceptance, bruises and cuts on produce can foster the growth of harmful pathogens if they are present. Containers, pallets, and bins should not be stacked on top of each other unless care has been taken to ensure produce on the bottom will not be injured and is protected from contamination from produce or containers stacked above. If a refrigerated vehicle is needed, workers should be trained to load containers to allow proper airflow and not overload the vehicle beyond its cooling capacity.",

   "Records should be kept of all transportation practices that reduce produce safety risks. \n \n Inspecting vehicles prior to loading \n \n Maintaining vehicles \n \n Pre-cooling and cold chain maintenance practices (if applicable) \n \n See Transportation Log and Refrigerated Truck Loading Log."

];

var tp_questions = [
    "Do you cover your commodity during transport?",

    "Do you have a policy to ensure vehicles that transport produce have not been previously used to haul anything other than fresh produce or that those vehicles have been cleaned and sanitized (if possible) prior to loading and transporting produce?",

    "Do you inspect all transportation vehicles prior to loading fresh produce to ensure they are clean and will not serve as a source of contamination to the commodity?",

    "Do you have a written policy for precooling produce as needed, maintaining specific temperatures and a plan for monitoring the temperature during transportation?",

    "If produce requires refrigeration, do you regularly inspect and service refrigeration equipment on vehicles to ensure they are working properly and able to cool and hold produce at the desired temperature?",

    "Do you train your workers to load and unload produce to minimize damage, prevent contamination, and maintain quality?",

    "Do you keep records of transportation practices?"

];


$(document).ready(function() {

    $('#transportation').click(function(e) {

        var txt = $(e.target).text();

        console.log(txt);

        if (txt == tp_title) {

            callModalQuestion(tp_questionIndex);
        }
    });

    function callModalQuestion(questionIndex) {

            var question = tp_questions[tp_questionIndex]; // question that will show
            console.log(question);

            modalQuestion(question); // calls the question modal to pop-up
    }

    function modalQuestion(question) {

        console.log("No Index " + tp_noIndex);

        var $text = $('<div></div>'); // instantiates a text inside a div
            $text.append(question);   // adds the questions as the text

        if (tp_questionIndex < 12) {
            BootstrapDialog.show({
                title: tp_title,
                message: $text,       // the question is now displayed on the modal
                buttons: [{
                    label: 'Yes',
                    action: function(dialogRef) {   // if answer is yes
                        dialogRef.close();
                        tp_questionIndex++;
                        tp_noIndex = tp_questionIndex;
                        modalQuestion(tp_questions[tp_questionIndex]);
                    }
                }, {
                    label: 'No',
                    action: function(dialogRef) {   // if answer is no
                        dialogRef.close();
                        BootstrapDialog.alert(tp_no_answers[tp_noIndex]);
                        tp_questionIndex = 0;
                        tp_noIndex = 0;
                    }
                }]
            });
        }

        else {

            console.log("Nothing happens");
        }

    }

});