# UI Experiment
This project serves as an experiment playground for the research questions "Does differently colored buttons produce different conversion? Is there a difference between colored buttons and simple text links?" Here you will find general information about the project, as well as the theory, the experiment hypothesis, design, analysis, and interpretation of the results. In a different file you will find the documentation about the application itself.

## Introduction
User Interfaces (UI) are generally composed of many elements. Each element has its own role for the efficiency of the user experience as well as the conversion rates of the web application. Even a small component, such as the call-to-action (CTA) button, require a lot of attention in order to meet the expected goals. A CTA button is an interactive UI element, which aims to induce people to take an action, such as purchase, contact, subscribe, download etc. The features of an effective CTA button design are size, color, shape, placement, and microcopy.<sup>1</sup>

In this experiment we would focus on the color of the CTA button, and in order to do so, we will vary only the color of the button in the different conditions to be measured, and keep all other aspects such as the size, the text, the shape and the placement constant.

This experiment is what it says it is - an experiment, and as such aims to have a higher internal and statistical validity, and _not_ to be used as an answer to the question "Which color should I put on my website to drive my conversion rate higher?" If you wish to answer that question, you should make an A/B test. This experiment has much lower external validity compared to an A/B test but should answer the enquiry from the top of the page - do colors generate more clicks.

## Background Theory
## Hypothesis
H<sub>1</sub>: Colored > Text link
H<sub>2</sub>: Colored > Ghost
H<sub>3</sub>: Ghost > Text link

Theoretisch-Inhaltliche Hypothese: A colored button will be clicked more often than a non-colored button with the same size, form, text and placement.

Empirisch-Inhaltliche Hypothese: Man zeigt 200 Versuchspersonen (VPs) die Bilder von 36 Produkten mit je 2 Tasten - “Add to list” and “No”. Die “Nein, danke” Taste ist immer farblos und es gibt 6 Varianten von der “Kaufen” Taste: farblos / rot / blau / schwarz / gelb / grün. Die VPs, die den Varianten mit einer gelben, grünen, roten oder blauen “Kaufen”-Taste bekommen haben, werden häufiger die “Kaufen” Taste wählen, als die anderen VPs, die schwarze oder farblose Taste haben.

Statistische Vorhersage: Der Mittelwert von “gekauften” Produkten unter die Bedingung von farbige Buttons ist größer als der Mittelwert von “gekauften” Produkten unter die Bedingung von schwarzen oder farblosen Tasten.

Test-Hypothesen:

H0: Der Mittelwert von der Anzahl gekauften Produkten unter die Bedingung von schwarze oder farblose Tasten ist gleich oder größer als den Mittelwert der Anzahl gekauften Produkten unter die Bedingung von farbigen Tasten.

H1: Der Mittelwert von der Anzahl gekauften Produkten unter die Bedingung von farbigen
Tasten ist größer als den Mittelwert der Anzahl gekauften Produkten unter die Bedingung von schwarze oder farblose Tasten.

### Assumptions (HH)

## Experimental design
// not the same as the Experiment section in the app readme

We have divided 36 products into 6 Categories. The products have a brief description, and the user has to decide if they are willing to add it to the cart or not.  We randomize the positions of each product inside each category, the order of the categories, as well as the color of the CTA for each category.The general idea here is to create a balanced array of possibilities. The data of the user's clicks are recorded and sent to a database, where it will be automatically analyzed.

The tiles have an image, a headline and two buttons - "Add to List" and "No". An additional element is shown under each tile every time the user makes a decision to add or not to add the product - it forces the user to answer the question "How possible is it to buy this item?" on a 1-5 Likert scale.

### Possible confounding variables
### External validity and possible threats
### Construct validity and possible threats
### Statistical validity and methods of control
### Methods of control

## Analysis
## Interpretation

### TO DO:
0. Translate 'Hypothesis' section
1. Extend 'Theory' section (09.05)
2. Extend 'Hypothesis' section (09.05)
3. Extend 'Experimental design' section (07.05)
4. Add visual material

### References:
1. _UX Practices: 8 Handy Tips on CTA Button Design_ https://uxplanet.org/ux-practices-8-handy-tips-on-cta-button-design-682fdb9c65bc
