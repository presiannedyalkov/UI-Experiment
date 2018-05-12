# UI Experiment
This project serves as an experiment playground for the research questions "Does differently colored buttons produce different conversion? Is there a difference between colored buttons and simple text links?" Here you will find general information about the project, as well as the theory, the experiment hypothesis, design, analysis, and interpretation of the results. In a different file you will find the documentation about the application itself.

## Introduction
User Interfaces (UI) are generally composed of many elements. Each element has its own role for the efficiency of the user experience as well as the conversion rates of the web application. Even a small component, such as the call-to-action (CTA) button, require a lot of attention in order to meet the expected goals. A CTA button is an interactive UI element, which aims to induce people to take an action, such as purchase, contact, subscribe, download etc. The features of an effective CTA button design are size, color, shape, placement, and microcopy.<sup>1</sup>

In this experiment we would focus on the color of the CTA button, and in order to do so, we will vary only the color of the button in the different conditions to be measured, and keep all other aspects such as the size, the text, the shape and the placement constant.

This experiment is what it says it is - an experiment, and as such aims to have a higher internal and statistical validity, and _not_ to be used as an answer to the question "Which color should I put on my website to drive my conversion rate higher?" If you wish to answer that question, you should make an A/B test. This experiment has much lower external validity compared to an A/B test but should answer the inquiry from the top of the page - do colors generate more clicks.

## Theory
We needed to create a synthetic environment in order to suppress unwanted variables that correlate with the independent variable (the CTA color) - the one we control, or the independent variable - the variable being measured. We thought about creating a small web shop with one page of items, where each tester has to test only one color, but we then decided to present every tester with all the conditions for the independent variable. _(WHY?)_. We thought about giving an initial number of tokens (money or credits), which the tester has to spent, but we discarded that idea, as we thought that money is a bigger factor than the CTA color when purchasing an item and the effect of the price of the item will eclipse the actual effect of the CTA color. The idea then shifted from creating a web shop to creating a wish list web application, where the tester has to add items they wish to buy in a cart, very much like in a web shop, but without the obligation to "buy" the item. To prevent the tester from adding everything in the cart we have instructed them to (...). To minimize the personal preferences of the tester as much as possible we have created 6 different categories, each of the categories containing a set of 6 abstract products. The products had to conform to the following requirements:
 - it had to fall in the category of luxury goods as opposed to necessity goods, to alleviate the urgency of the purchase;
 - it had to be of equal interest to both genders and preferably of equal interest to all age groups;
 - it had to be as abstract as possible, but still be recognized as a product and not as a category.

The categories and the products that we have came up with were:
 - Health & Fitness
 - Electronics, Computers & Office
 - Clothing & Shoes
 - Entertainment
 - Food & Drink
 - Hotels & Travel

 As source for the categories we used amazon.com and groupon.com.

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
We have divided 36 products into 6 Categories. The products have a brief description, and the user has to decide if they are willing to add it to the cart or not.  We randomize the positions of each product inside each category, the order of the categories, as well as the color of the CTA for each category.The general idea here is to create a balanced array of possibilities. The data of the user's clicks are recorded and sent to a database, where it will be automatically analyzed.

The tiles have an image, a headline and two buttons - "Add to List" and "No". An additional element is shown under each tile every time the user makes a decision to add or not to add the product - it forces the user to answer the question "How possible is it to buy this item?" on a 1-5 Likert scale.

### Possible confounding variables
- Instrumentation:
- Experimental Mortality:
- Selection:
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

## Interpretation

### TO DO:
1. Extend 'Theory' section (09.05)
2. Extend 'Hypothesis' section (09.05)
3. Extend 'Experimental design' section (07.05)
4. Add visual material

### References:
1. _UX Practices: 8 Handy Tips on CTA Button Design_ https://uxplanet.org/ux-practices-8-handy-tips-on-cta-button-design-682fdb9c65bc
