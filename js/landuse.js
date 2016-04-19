// Decision Trees
// Land Use
// TOTAL QUESTIONS: 11
// TOTAL DECISIONS: 22
// l = land use
var l_title = "Land Use";
var l_answer; // 0 == false and 1 == true
var l_questionIndex = 0; // index for the questions
var l_noIndex = 0; // index for the no answers

var l_no_answers = [
    "Having a written history of current and prior land uses is critical to identifying food safety risks and developing a food safety plan. Although the farm owner or manager may intuitively know this information, not all workers may be aware of the farm’s history and current land uses which could potentially pose food safety risks during the production of fresh produce. Providing a written history allows the farm to review its practices annually or as conditions change on the farm. Written assessments of land use may also be required for some third party food safety audits. This decision tree will walk you through evaluating various situations, both past and present, which may affect the safety of produce. Use the Land Use Risk Assessment Log and Land Use Risk Assessment SOPs. After you have identified any previous land uses that may pose risks, evaluate how the land is currently being used and whether those uses may pose food safety risks to the crop.", 
    
    "Flood waters can carry potential contaminants from nearby areas and spread it over a wide area. If you farm on land with a recent history of flooding, soil should be tested before crops are grown. Consider testing soil for coliforms and heavy metals before crops are grown. If the edible portion of a crop is exposed to flood waters, the produce is considered adulterated under section 402(a)(4) (21 U.S.C. 342(a)(4)) of the Federal Food, Drug, and Cosmetic Act and should not enter human food channels.\n When assessing the level of risk posed by flooding, some factors to consider are: \n Whether the crop grows close to the ground (e.g. leafy greens) not (e.g. tree or vine crop) \n If the edible portion comes into contact with the soil or flood waters \n Potential sources of contamination in the flood plain (e.g. raw manure) \n Timing of the flood—whether the flood happens in the spring before planting or a flood that occurs when the crop is in the field \n To reduce risks when planting after a flood: allow soil to dry out, till thoroughly, allow time for microbial pathogens to decline (the longer the better), add organic matter to promote decomposition of biological contaminants, or sow a cover crop. ",

    "Runoff or wind spread from animal pens, and grazing pastures, or fields receiving manure applications can contaminate your produce field. Pathogens and contaminants can persist in soil for a prolonged period of time. For example, E. coli O157:H7 can survive in soil for up to 21 months. Pathogen populations in raw manure tend to rapidly die off, but can survive in the soil at low populations for a prolonged amount of time. Factors such as exposure to the sun (solarization) and wind (desiccation) may help reduce pathogen populations.6 Monitor the field for any signs of runoff from adjacent land. If there is a risk present, reassess field use or create physical barriers such as windbreaks, buffer strips, or diversion ditches to protect produce fields.",

    "Chemicals and pathogens may leach from landfill and sewage areas to contaminate crops, soil, and ground water used for production. Landfills and sewage treatment facilities can also attract unwanted wildlife and pests such as birds, rats, and raccoons. If fields are close to treatment facilities or landfills, assess the likelihood of contamination from runoff, wind, and pests.",

    "Underground septic systems can leach chemicals and pathogens into soil and water. Septic systems should be inspected yearly to make sure they are working properly and produce fields should not be located within 30 feet of septic tanks and septic leach fields. The safe distance may be increased or decreased depending on risk factors such as age of the septic tank, whether the septic leach field is inactive or active, whether it is located uphill or downhill of crop, and what physical barriers are present in the event that a back-up or spill occurs. Use the Septic System Inspection Log.",

    "Large scale animal operations are (also called Concentrated Animal Feeding Operations—CAFO) a significant food safety risk because of the high concentration of animals that may shed pathogens in their manure. These types of operations are often surrounded by bare ground which increases the likelihood of runoff and windborne movement of pathogens. \n When assessing your farm’s risk, factors to consider are: \n The number of animals present \n Whether the crop is downhill and/or downwind from source \n Whether the ground is bare or has vegetation \n Evidence of runoff into water sources or near production areas \n Whether physical barriers are present \n If manure management programs are used by the operation",

    "Domestic animals on adjacent land present a food safety risk if there is a chance of wind or runoff spreading fecal matter to produce fields. When assessing risks to your farm, some factors to consider are whether physical barriers are present (fencing, ditches, berms), location of crop field (uphill, downhill) from animal grazing area, number of animals present, and the likelihood of runoff and wind spread. Some research suggests a 30 foot buffer is sufficient to protect produce crops from animals grazing on vegetated land. Remember, if you farm with horses or use other animals during production, there should be a plan for their presence in the field, especially close to harvest. See the Wildlife and Animal Management tree for more specific recommendations.",

    "If manure is close to production areas, there is a risk that it will contaminate produce by runoff or wind spread. When assessing your farm’s risk, factors to consider are the amount of manure present, crop location (downhill and/or downwind) from source, likelihood of runoff or leaching, physical barriers present, and how storage piles/facilities are protected.",

    "Manure storage areas can leach pathogens into the soil, wells, and other water sources. Wells are particularly susceptible to contamination if they are not capped or properly constructed. When assessing your farm’s risk, factors to consider are well construction, presence of risks in well-recharge areas, presence of back-flow devices on all lines fed by the well, location of wells (uphill or downhill) from manure areas, likelihood of leaching, and presence of physical barriers that prevent contamination.",

    "Raw manure storage areas near surface water can result in water contamination, either by runoff or through leaching. Safe distance recommendations from the surface water source depend on soil type and slope of land. The Leafy Greens Marketing Agreement (LGMA) recommends at least 100 feet if soil is sandy, 200 feet if soil is clay or loam, and 300 feet if slope is greater than 6%.",

    "Composted manure is at a much lower risk for contaminating crop and water sources than raw manure; however, the best practice is to cover and store the compost as far away as possible from water sources and produce fields. When assessing your farm’s risk, some factors to consider are the field location (uphill or downhill) from compost, likelihood of wind-spread, presence of runoff or leaching, amount of compost being stored, and any physical barriers that are present."

];

var l_questions = [
    "Do you have a written record of current and past land use?",

    "Are crops grown on land that has a history of flooding or recently experienced a flood?",

    "Is produce grown in fields that might receive runoff from neighboring fields, pastures, or barnyards?",

    "Are produce fields located near municipal/commercial sewage treatment facilities or waste material landfills?",

    "Are produce fields located within 30 feet of a septic system leach field or tank?",

    "Are produce fields located within 1 mile of a large scale animal operation or feedlot?",

    "Are grazing lands and domestic animals (including hobby farms and non-commercial livestock) located within 30 feet1,7 of produce fields?",

    "Is raw untreated manure from livestock, manure containment structures, storage piles, and composting facilities located within 400 feet of produce fields?",

    "Is raw untreated manure located within 200 feet of well heads?",

    "Is raw untreated manure located near surface water sources used during the production of fresh fruits and vegetables?",

    "Are properly composted piles stored within 30 feet of produce fields and 80 feet of water sources?"

];

$(document).ready(function() {

    $('#landUse').click(function(e) {

        var txt = $(e.target).text();

        if (txt == l_title) {

            callModalQuestion(l_questionIndex);
        }
    });

    function callModalQuestion(questionIndex) {

            var question = l_questions[l_questionIndex]; // question that will show
            console.log(question);

            modalQuestion(question); // calls the question modal to pop-up
    }

    function modalQuestion(question) {

        console.log("No Index " + l_noIndex);

        var $text = $('<div></div>'); // instantiates a text inside a div
            $text.append(question);   // adds the questions as the text

        if (l_questionIndex < 12) {
            BootstrapDialog.show({
                title: l_title,
                message: $text,       // the question is now displayed on the modal
                buttons: [{
                    label: 'Yes',
                    action: function(dialogRef) {   // if answer is yes
                        dialogRef.close();
                        l_questionIndex++;
                        l_noIndex = l_questionIndex;
                        modalQuestion(l_questions[l_questionIndex]);
                    }
                }, {
                    label: 'No',
                    action: function(dialogRef) {   // if answer is no
                        dialogRef.close();
                        BootstrapDialog.alert(l_no_answers[l_noIndex]);
                        l_questionIndex = 0;
                        l_noIndex = 0;
                    }
                }]
            });
        }

        else {

            console.log("Nothing happens");
        }

    }

});