// Decision Trees
// Worker Health, Hygiene, and Training Decision
// TOTAL QUESTIONS: 12
// TOTAL DECISIONS: 24
// w = worker
var w_title = "Worker Health, Hygiene, and Training";
var w_answer; // 0 == false and 1 == true
var w_questionIndex = 0; // index for the questions
var w_noIndex = 0; // index for the no answers

var w_no_answers = [
    "If you are the only worker on your farm, you must understand the risks associated with your own actions. Please review the practices outlined in this tree to make sure you know which practices you need to follow. In addition to knowing and following proper health and hygiene practices, as the only worker you are responsible for writing your farm food safety plan. Template food safety plan language about worker health, hygiene, and training is provided at the end of the decision tree to help you write your plan. Please continue through this decision tree.",

    "A worker education and training program that explains the microbial risks associated with farm work and emphasizes practices that can reduce these risks is essential to produce safety. Verbal and written training materials should be presented using a language workers understand. Proper hand washing and hygiene instructions are critical to minimizing the risk of contamination from workers. Training should include all farm food safety practices for which workers are responsible for completing.",

    "People who are ill or who have symptoms of nausea, vomiting, or diarrhea can contaminate fruits and vegetables with harmful microorganisms and should not handle produce. Every farm should have an illness reporting policy that workers understand and can follow. Sick workers should stay at home.",

    "A first aid kit should be stocked and available to all workers and visitors. Workers who have cuts or other injuries could contaminate fresh produce with bodily fluids such as blood. All workers need to be trained to respond to injuries including knowing the location of first aid supplies, how to wash and bandage minor cuts, and to wear gloves or other covering to provide a secondary barrier between the injury and produce they handle. All contaminated produce must be thrown away and the injury should be written on the injury reporting log and kept on file.",

    "Eating or smoking should not be allowed in the field, packinghouse, or other production areas to prevent contamination. Workers must wash their hands after eating, drinking, smoking, using the toilet, or taking a break, and before returning to work. Workers must always wash their hands before handling produce.",

    "Workers who know the farm’s food safety policies and who understand food safety risks, will be actively involved in the farm’s food safety program. Informing workers is particularly important if they have other food safety responsibilities such as monitoring toilet and hand washing facilities, pest control procedures, or other key steps that require implementation and recordkeeping",

    "An effective worker training program should be reinforced daily through signs posted in a language workers understand or with pictures that describe appropriate actions. These materials will also serve to remind visitors of the farm’s food safety policies.",

    "Worker training is very important for food safety. Records of all training programs should be kept including information about what was covered, who taught the training, workers who attended, date, and the location. Some workers may require additional training, particularly if they are trained for specific tasks beyond basic health and hygiene practices.",

    "Visitors should be asked to sign in and acknowledge they have read the farm food safety policies that they need to follow while they are on the farm. This may include where they are allowed to visit, areas that are off limits, and your policies regarding hand washing and illness reporting.",

    "All workers and visitors must have access to clean, conveniently located toilets and hand washing facilities to encourage use.",

    "Facilities must be cleaned on a regular schedule to make sure they are sanitary and wellstocked with soap, water, toilet paper, and paper towels. Toilets should be checked daily and they should be cleaned and restocked as needed, even if that requires maintenance before the scheduled times. Soap, water, paper towels, and toilet paper MUST be provided. Lack of supplies makes training ineffective because workers and visitors cannot follow the required practices.",

    "Records should be kept for all toilet and hand washing facility monitoring, cleaning, and restocking. Some records may be kept daily and others weekly, but all actions need to be recorded. All other health and hygiene facilities maintenance should be recorded as well including monitoring and restocking first aid kits. Helpful Tip: Keep a clipboard with a log sheet and pen secured by string close to where recordkeeping needs to happen so it is convenient for workers to complete."

];

var w_questions = [
    "Do you hire any workers (including non-paid family members)?",

    "Have all workers received training in areas important to produce safety using a language they understand? This training should include: \n How and when to properly wash their hands \n The importance of being clean and wearing clean clothes to work \n How to handle illnesses and injuries on the farm \n Knowing how to complete all the farm food safety practices they are assigned",

    "Have workers been informed not to come to work if they are sick and instructed on how to report illnesses?",

    "Is a first aid kit available in a known and convenient location, and have workers been instructed how to respond to injuries on the farm?",

    "Are workers instructed to only take breaks in designated areas so that they are not eating, or smoking in the fields or near product in the packinghouse?",

    "Have workers been informed of the farm’s food safety policies and any other food safety practices they are responsible for implementing?",

    "Are there signs or posters in a language the workers understand reminding them to properly follow the farm’s food safety practices?",

    "Are records kept of worker training?",

    "Are visitors asked to sign in and read your visitor policy?",

    "Are there clean toilet and handwashing facilities for workers and visitors within a short (5 minute or 1/4 mile) walk of the fields?",

    "Is the toilet monitored for cleanliness, cleaned when dirty, and restocked when necessary?",

    "Are records kept for all toilet and hand washing facility monitoring, cleaning, and restocking as well as any other steps that may be taken to maintain food safety resources such as first aid kits?"

];


$(document).ready(function() {

    $('#workerHeath').click(function(e) {

        var txt = $(e.target).text();

        if (txt == w_title) {

            callModalQuestion(w_questionIndex);
        }
    });

    function callModalQuestion(questionIndex) {

            var question = w_questions[w_questionIndex]; // question that will show
            console.log(question);

            modalQuestion(question); // calls the question modal to pop-up
    }

    function modalQuestion(question) {

        console.log("No Index " + w_noIndex);

        var $text = $('<div></div>'); // instantiates a text inside a div
            $text.append(question);   // adds the questions as the text

        if (w_questionIndex < 12) {
            BootstrapDialog.show({
                title: w_title,
                message: $text,       // the question is now displayed on the modal
                buttons: [{
                    label: 'Yes',
                    action: function(dialogRef) {   // if answer is yes
                        dialogRef.close();
                        w_questionIndex++;
                        w_noIndex = w_questionIndex;
                        modalQuestion(w_questions[w_questionIndex]);
                    }
                }, {
                    label: 'No',
                    action: function(dialogRef) {   // if answer is no
                        dialogRef.close();
                        BootstrapDialog.alert(w_no_answers[w_noIndex]);
                        w_questionIndex = 0;
                        w_noIndex = 0;
                    }
                }]
            });
        }

        else {

            console.log("Nothing happens");
        }

    }

});