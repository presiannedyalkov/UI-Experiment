# UI Experiment
This project serves as an experimental playground for the research questions "Do differently colored buttons produce different conversion? Is there a difference between colored buttons and simple text links?" Here you will find general information about the project, as well as the theory, the experiment's hypothesis, design, analysis, and interpretations of the results. In a different file you will find the documentation about the application's concept and general logic.

## Introduction
A software application's User Interface (UI) is generally composed of many elements. Each element has its own role for the efficiency of the user experience as well as the conversion rates _(what is conversion?)_ of the application. Even a small component, such as the call-to-action (CTA) button, requires a lot of attention in order to meet the expected goals. A CTA button is an interactive UI element, which aims to induce people to take an action, such as to purchase, contact, subscribe, download or other such activity that will induce conversion <sup>_[citation needed]_</sup>. Thus the CTA button is an expression of the primary action that leads the user to the main objective of the application. The features of an effective design of a CTA button include attributes such as the size, the color, the shape, the placement, and the microcopy, when such is used.<sup>[1](#references)</sup> The CTA button's color attribute and the conversion rate are in direct relation to each other, but in a typical software application both are contingent on the main color in the designer palette, which is normally dictated by the brand color of the application owner <sup>_[citation needed]_</sup>, among other things. The CTA button often relates to the brand color and one of the established practices is to colorize the primary button in the brand color <sup>_[examples needed (Amazon)]_</sup>.

An application often needs more than one CTA button and can utilize differently styled CTA buttons to offer different actions for the user to take. This practice in UI design is based on the isolation paradigm, which dictates that elements that stand out are remembered more and it is an integral part of user flow<sup>_[citation needed]_</sup>. The primary button represents the primary action that the application user should choose, and it is often accompanied with a secondary or even tertiary action, represented often by secondary and tertiary buttons. These three buttons have a hierarchy of emphasis<sup>[2](#references)</sup> and visual distinction<sup>[3](#references)</sup> - the primary button is often filled with color, and the secondary button often has a colored border, while being transparent or grayed out, and the tertiary action can be represented by a text link. Examples of this hierarchy can be seen in the popular UI library Bootstrap<sup>[4](#references)</sup> and this hierarchy is accepted as best practice in the style guide of The Australian Government Design System<sup>[5](#references)</sup>, which we will use as a reference point for our web application.

![Button_hierarchy](https://raw.githubusercontent.com/presiannedyalkov/Wishlist-App/development/Button_hierarchy.png "Button_hierarchy")

Google's Material Design UI style guide also distinguishes four types of buttons - Text button for low emphasis, which is typically used for less important actions, Outlined Button  for medium emphasis, which is used for more emphasis than text buttons due to the stroke and Contained button for high emphasis, which have more emphasis, as they use a color fill and shadow. The fourth type is a Toggle button, which is of no interest for this case<sup>[6](#references)</sup>. Going through a list of 219 style guide examples on styleguide.io leads to the impression that there is no universally accepted design pattern to follow in order to translate the hierarchy of goals the application owner is trying to achieve.

In this experiment we want to test if the hierarchy of emphasis is properly translated in the type of color hierarchy used by The Australian Government Design System, and thus would focus solely on the color of the CTA button. In our experiment we will vary only the color of the button in the different conditions to be measured, and keep all other aspects such as the size, the text, the shape and the placement constant.

## Theory
A study of Attention-Getting Effects of Color by Dooley and Harkins from 1970 shows that color increased the subject's attention directed at the stimulus.<sup>[8](#references)</sup>

The decision to purchase a certain product is made voluntarily, with the idea that one can choose to buy or not to buy a product. A study using a go/no-go task by Bokura, Yamaguchi and Kobayashi from 2001 found no difference with respect to the go and no-go conditions, leading to the conclusion that the stimuli presented to the subjects are noticed, even if they decide to ignore them.<sup>[9](#references)</sup> Transferring the finding to the field in question, this would mean that an Amazon buyer for example, notices all items in a category list and chooses which ones will receive more attention and which ones would be ignored.

A study by Reis et. al. published in 2006 found that color object information contributes to object recognition.<sup>[10](#references)</sup>

### Hypothesis
Theoretical hypothesis: A colored button will be clicked more often than a non-colored button with the same size, form, text and placement.

Empirical hypothesis: 200 subjects are shown the pictures of 36 products with 2 buttons each - "Add to list" and "No". The "No " button is always colorless and there are 6 variants of the "Add to list" button: text link, red, blue, green, orange and ghost. The subjects who have received the variants with a colored button (red, green, blue or orange) will more often choose the "Add to list" button than the ones who have the ghost or text link buttons.

Statistical prediction: The average of "Added to list" products under the condition of each of the colored buttons is larger than the average of "Added to list" products under the condition of ghost or text link buttons.

Test hypotheses:

1. H<sub>1</sub>: each Colored > Text link | H<sub>1 alternative</sub>: each Colored =< Text link
2. H<sub>2</sub>: each Colored > Ghost | H<sub>2 alternative</sub>: each Colored =< Ghost
3. H<sub>3</sub>: Ghost > Text link | H<sub>3 alternative</sub>: Ghost =< Text link

### Assumptions (HH)
List all assumptions about the experiment and try to clear them. E.g. it was an assumption that there is a difference between colored and colorless buttons, but we found articles that prove it, so it moves from an assumption to theory.

## Experimental design
To test our hypotheses, we needed to create a synthetic environment in order to suppress unwanted variables that correlate with the independent variable (the CTA color) - the one we control, or the independent variable - the variable being measured. We thought about creating a small web shop with one page of items, where each tester has to test only one color, but we then decided to present every tester with all the conditions for the independent variable. We wanted to represent the buyer's choice to buy or not to buy an item, and we wanted to make the user go through all products in the list to ensure the enforcement of the buyer's choice. We thought about giving an initial number of tokens (money or credits), which the tester has to spent, but we discarded that idea, as we thought that money is a bigger factor than the CTA color when purchasing an item and the effect of the price of the item will eclipse the actual effect of the CTA color. The idea then shifted from creating a web shop to creating a wish list web application, where the tester has to add items they wish to buy in a cart, very much like in a web shop, but without the obligation to "buy" the item. To prevent the tester from adding everything in the cart we have instructed them to (...). To minimize the personal preferences of the tester as much as possible we have created 6 different categories, each of the categories containing a set of 6 abstract products. Each product had to conform to the following requirements:
 - it had to fall in the category of luxury goods as opposed to necessity goods, to alleviate the urgency of the purchase;
 - it had to be of equal interest to all genders and preferably of equal interest to all age groups;
 - it had to be as abstract as possible, but still be recognized as a product and not as a category.

The categories and the products that we have came up with were:
 - Health & Fitness
 - Electronics, Computers & Office
 - Clothing & Shoes
 - Entertainment
 - Food & Drink
 - Hotels & Travel

 As source for the categories we used amazon.com and groupon.com.

 In order to minimize the ceiling effect we have added a rating for each product on a 1-6 Likert scale with the question "Would you buy this in the next 18 months?". This gives us interval scaled data enabling us to apply inferential statistics like an analysis of variance (ANOVA) for example.

### Possible confounding variables
- Instrumentation:
- Experimental Mortality: We cannot prevent testers from exiting the experiment, but the data is only submitted at the end of the third step. Only complete datasets will enter statistical testing.
- Selection:
- The task is a bigger motivator than the CTA color.
- Learning effect: the problem with making the buttons text links is that the user does not easily recognize which element is text and which is link, but in our experiment after the tester has completed the first category, they will expect the button to be placed under the title, thus focusing immediately on the area, even in the conditions of an outlined button or text link.
### External validity and possible threats
- Units:
- Outcome:
- Setting:
### Construct validity and possible threats
- Incompleteness: only 4 colors are being tested
- Mono-operation-bias: Only "Add to list" button, no alternative operationalization such as
a "Download" or "Show more" button.
- Other variables like text size, button size, text contrast are not examined. Increased sensitivity to the structure of the studied construct.
- Respondents do not always answer truthfully; individual goals / motivations
influence answers.

### Statistical validity and methods of control

### Methods of control
- Randomization with equal size samples - subjects are randomly assigned to the groups.
- Elimination of other functionalities - only one function - "Add to list".
- Deception - Deceiving about the purpose of the study.

## Analysis
This will be filled after the experiment has finished and the results are evaluated.
## Interpretation
This will be filled after the experiment has finished and the results are evaluated.

### @TODO:
1. Incorporate Anna's suggestions
2. Include newly added theory and experimental design elements
3. Read and review the whole text
4. Edit/remove dependency diagram
5. Delete redundant information
6. Add more visual material
7. Handle references
8. Add a list with ca. 80 Titles from Groupon

### <a id="references"></a>References:
1. _UX Practices: 8 Handy Tips on CTA Button Design_ https://uxplanet.org/ux-practices-8-handy-tips-on-cta-button-design-682fdb9c65bc
2. _Material Design: Hierarchy and placement_
https://material.io/design/components/buttons.html#hierarchy-placement
3. _Primary & Secondary Actions in Web Forms_
https://www.lukew.com/ff/entry.asp?571
4. _Bootstrap Components: Buttons_
https://getbootstrap.com/docs/4.0/components/buttons/
5. _Australian Government Design System: Buttons_
https://designsystem.gov.au/components/buttons/
6. _Material Design: Buttons_
https://material.io/design/components/buttons.html#usage
7. _Material Design: Color theme creation_
https://material.io/design/color/#color-theme-creation
8. Roger P. Dooley, Larry E. Harkins, _Functional and Attention-Getting Effects of Color on Graphic Communications_, 1970
9. Bokura H., Yamaguchi S., Kobayashi S., _Electrophysiological correlates for response inhibition in a Go/NoGo task_, 2001
10. Reis A., Faísca L., Ingvar M., Petersson KM., _Color makes a difference: two-dimensional object naming in literate and illiterate subjects_, 2006
