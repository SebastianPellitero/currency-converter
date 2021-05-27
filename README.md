# currency-converter

Improvements:
Create a custom loading spinner to reduce the library dependencies.
Create a separate constant just for styles and layout.
Handle '.' or ',' as an input, maybe just accept only one and convert the other.
Date input should be handle better, need a dinamic max and min value (considering that the API only take time frames of 365 days).
We can add a end date, and handle this specific time frame inside the chart.
When we change the first select having the chart on display, we must have a spinner in the chart too. (Now the spinner appears in the select and then in the chart).
The program needs to handle errors from the api request.
When the user type a lot of numbers in the converter input it dosent show very well.
