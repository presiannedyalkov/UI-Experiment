# UI Experiment
This project serves as an experiment playground for the research questions "Does differently colored buttons produce different conversion? Is there a difference between colored buttons and simple text links?" Here you will find general information about the project, as well as the theory, the experiment hypothesis, design, analysis, and interpretation of the results. In a different file you will find the documentation about the application's concept and general logic.

## Introduction
A software application's User Interface (UI) is generally composed of many elements. Each element has its own role for the efficiency of the user experience as well as the conversion rates _(what is conversion?)_ of the application. Even a small component, such as the call-to-action (CTA) button, requires a lot of attention in order to meet the expected goals. A CTA button is an interactive UI element, which aims to induce people to take an action, such as to purchase, contact, subscribe, download or other such activity that will induce conversion <sup>_[citation needed]_</sup>. Thus the CTA button is an expression of the primary action that leads the user to the main objective of the application. The CTA button's color attribute and the conversion rate are in a direct relation, but in a typical software application both are contingent on the main color in the designer palette, which is normally dictated by the brand color of the application owner <sup>_[citation needed]_</sup>, as illustrated on the dependency diagram below. The CTA button often relates to the brand color and one of the established practices is to colorize the primary button in the brand color <sup>_[examples needed (Amazon)]_</sup>.

![Color dependencies](https://raw.githubusercontent.com/presiannedyalkov/Wishlist-App/development/Diagram_color_dependecies.png "Color dependencies")

An application often needs more than one CTA button and can utilize differently styled CTA buttons to offer different actions for the user to take. This practice in UI design is based on the isolation paradigm, which dictates that elements that stand out are remembered more and it is an integral part of user flow<sup>_[citation needed]_</sup>. The primary button represents the primary action that the application user should choose, and it is often accompanied with a secondary or even tertiary action, represented often by secondary and tertiary buttons. These three buttons have a hierarchy of emphasis<sup>[2](#references)</sup> and visual distinction<sup>[3](#references)</sup> - the primary button is often filled with color, and the secondary button often has a colored border, but transparent fill or has a gray fill, and the tertiary action can be represented by a text link. Examples of this hierarchy can be seen in the popular UI library Bootstrap<sup>[4](#references)</sup> and is accepted as best practice in the style guide of The Australian Government Design System<sup>[5](#references)</sup>, which we will use as a reference point for our web application.

![Button_hierarchy](https://raw.githubusercontent.com/presiannedyalkov/Wishlist-App/development/Button_hierarchy.png "Button_hierarchy")

Google's Material Design UI style guide also distinguishes four types of buttons - Text button for low emphasis, which is typically used for less important actions, Outlined Button  for medium emphasis, which is used for more emphasis than text buttons due to the stroke and Contained button for high emphasis, which have more emphasis, as they use a color fill and shadow. The fourth type is a Toggle button, which is of no interest for this case<sup>[6](#references)</sup>. Going through a list of 219 style guide examples on styleguide.io makes the impression that there is no universally accepted design pattern to follow in order to translate the hierarchy of goals, that the application owner is trying to achieve.

In this experiment we want to test if the hierarchy of emphasis is properly translated in the type of color hierarchy used by The Australian Government Design System, and thus would focus solely on the color of the CTA button. In our experiment we will vary only the color of the button in the different conditions to be measured, and keep all other aspects such as the size, the text, the shape and the placement constant.

## Theory
The features of an effective design of a CTA button include attributes such as the size, the color, the shape, the placement, and the microcopy, when such is used.<sup>[1](#references)</sup>

### Hypothesis
Theoretical hypothesis: A colored button will be clicked more often than a non-colored button with the same size, form, text and placement.

Empirical hypothesis: 200 subjects are shown the pictures of 36 products with 2 buttons each - "Add to list" and "No". The "No " button is always colorless and there are 6 variants of the "Add to list" button: text link, red, blue, green, orange and ghost. The subjects who have received the variants with a colored button (red, green, blue or orange) will more often choose the "Add to list" button than the ones who have the ghost or text link buttons.

Statistical prediction: The average of "Added to list" products under the condition of colored buttons is larger than the average of "Added to list" products under the condition of ghost or text link buttons.

Test hypotheses:

1. H<sub>1</sub>: Colored > Text link | H<sub>1 alternative</sub>: Colored =< Text link
2. H<sub>2</sub>: Colored > Ghost | H<sub>2 alternative</sub>: Colored =< Ghost
3. H<sub>3</sub>: Ghost > Text link | H<sub>3 alternative</sub>: Ghost =< Text link

### Assumptions (HH)
List all assumptions about the experiment and try to clear them. E.g. it was an assumption that there is a difference between colored and colorless buttons, but we found articles that prove it, so it moves from an assumption to theory.

## Experimental design
To test our hypotheses, we needed to create a synthetic environment in order to suppress unwanted variables that correlate with the independent variable (the CTA color) - the one we control, or the independent variable - the variable being measured. We thought about creating a small web shop with one page of items, where each tester has to test only one color, but we then decided to present every tester with all the conditions for the independent variable. _(WHY?)_. We thought about giving an initial number of tokens (money or credits), which the tester has to spent, but we discarded that idea, as we thought that money is a bigger factor than the CTA color when purchasing an item and the effect of the price of the item will eclipse the actual effect of the CTA color. The idea then shifted from creating a web shop to creating a wish list web application, where the tester has to add items they wish to buy in a cart, very much like in a web shop, but without the obligation to "buy" the item. To prevent the tester from adding everything in the cart we have instructed them to (...). To minimize the personal preferences of the tester as much as possible we have created 6 different categories, each of the categories containing a set of 6 abstract products. Each product had to conform to the following requirements:
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

The product tiles have an image, a headline and two buttons - "Add" and "Skip". An additional element is shown under each tile every time the user makes a decision to add or not to add the product - it forces the user to answer the question "Will you buy in the next 18 months?" on a 1-6 Likert scale.

### Possible confounding variables
- Instrumentation:
- Experimental Mortality: We cannot prevent testers from exiting the experiment, but the data is only submitted at the end of the third step.
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
1. Extend 'Theory' section (09.05)
2. Extend 'Hypothesis' section (09.05)
3. Extend 'Experimental design' section (07.05)
4. Add visual material

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
