// Decision Trees
// Traceability Decision
// TOTAL QUESTIONS: 9
// TOTAL DECISIONS: 18
// t = traceability
var t_title = "Traceability";
var t_answer; // 0 == false and 1 == true
var t_questionIndex = 0; // index for the questions
var t_noIndex = 0; // index for the no answers

var t_no_answers = [
    "Every sellable container needs to be labeled with the farm name including city and state so that so you can be contacted to take action if there is a food safety problem.",

    "All produce containers leaving the farm should contain a lot number. \n \n Lot numbers should trace back to farm records that identify the crop and type, the field where it was grown, date of harvest, date of packing (if different from harvest), address of packinghouse (if different from farm), and the worker(s) who harvested and packed the product.",

    "The lot number should also identify crop information including type (e.g., tomatoes-Roma). If you already have a lot number process in place, adding the crop and type are the next steps to improve your traceability process.",

    "The lot number should identify the specific field in which the crop was grown. \n \n If your farm is small, the easiest way to track this information is to have a detailed field map that you can refer to in relationship to your lot numbers.",

    "The lot number should identify the harvest and packing date for each crop that is sold by the farm.",

    "The lot number should identify the workers involved in harvesting and packing. \n \n Workers can transmit foodborne pathogens and some pathogens are only transferred by people. In an outbreak, identifying the workers who picked and packed produce may allow for faster identification of the cause of the illness and reduce the impact to your farm. \n \n For small farms (10 or fewer workers), your harvest and packing paperwork can identify all workers as part of one crew. For larger farms, it may be beneficial to break harvest and packing into different crews to more clearly identify who was involved in harvesting and packing specific crops on specific days.",

    "Include the lot number(s) on all invoices to customers. If you direct market, keep track of the dates you harvest and distribute different crops including field numbers, harvest crew, and distribution points. \n \n In case of a quality dispute or recall, knowing the lot numbers and as much about the crop as possible will help you respond and prevent unsold products of the same lot from entering the marketplace.",

    "A mock recall helps you test your traceability system. In a mock recall, you contact one of your buyers and ask about a particular lot number or series of lot numbers. Be sure to mention that you are conducting a MOCK RECALL so they they do not think it is a real recall. Your buyer should be able to tell you how much of the lot remains in their possession and how much has been sold to consumers or other buyers. This information should be documented and your production information should link to the mock recall. If you direct market, your mock recall may include contacting a set of your customers and asking them if they have any product remaining. This could be done through email, phone calls, or postal mail.",

    "Use this opportunity to assess weaknesses in your traceability that prevented a successful traceback from happening. Identify what pieces of traceability are missing and implement changes to address these weaknesses.",

    "All products from this farm can be traced from the farm to the buyer through our identification system. Our traceability program includes labels with the farm name, city, and address on each sellable container. Lot numbers identify the field, date of harvest, date of packing, packinghouse, and workers involved in harvesting and packing. Lot numbers and date of sale are included on invoices to wholesale buyers. We have conducted a mock recall to test the system and were able to successfully track a lot from our fields to a buyer."
];

var t_questions = [
    "Is each container that is sold by your farm labeled with your name, city, and state?",

    "Is each container that is sold by your farm labeled with a lot number?",

    "Does the lot number identify the crop and type?",

    "Can the lot number identify the field from which the lot was harvested?",

    "Does the lot number identify the harvest and packing date(s)?",

    "Does the lot number identify the worker(s) involved in harvesting the lot?",

    "Can your lot number be traced forward to the buyer?",

    "Have you conducted a mock recall?",

    "Can you successfully trace produce identified in the mock recall from your fields to the buyer?"
];


$(document).ready(function() {

    $('#traceability').click(function(e) {

        var txt = $(e.target).text();

        console.log(txt);

        if (txt == t_title) {

            callModalQuestion(t_questionIndex);
        }
    });

    function callModalQuestion(questionIndex) {

            var question = t_questions[t_questionIndex]; // question that will show
            console.log(question);

            modalQuestion(question); // calls the question modal to pop-up
    }

    function modalQuestion(question) {

        console.log("No Index " + t_noIndex);

        var $text = $('<div></div>'); // instantiates a text inside a div
            $text.append(question);   // adds the questions as the text

        if (t_questionIndex < 12) {
            BootstrapDialog.show({
                title: t_title,
                message: $text,       // the question is now displayed on the modal
                buttons: [{
                    label: 'Yes',
                    action: function(dialogRef) {   // if answer is yes
                        dialogRef.close();
                        t_questionIndex++;
                        t_noIndex = t_questionIndex;
                        modalQuestion(t_questions[t_questionIndex]);
                    }
                }, {
                    label: 'No',
                    action: function(dialogRef) {   // if answer is no
                        dialogRef.close();
                        BootstrapDialog.alert(t_no_answers[t_noIndex]);
                        t_questionIndex = 0;
                        t_noIndex = 0;
                    }
                }]
            });
        }

        else {

            console.log("Nothing happens");
        }

    }

});