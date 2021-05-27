# currency-converter

Improvements:
Create a custom loading spinner to reduce the library dependencies.
Create a separate constant file just for styles and layout.
Handle '.' or ',' as a currency amount input, and maybe just accept only one and convert the other.
Date input should be handled better, it needs a dynamic max and min value (considering that the API only takes time frames of 365 days).
We can add an end date input to show a specific time frame of currency-time in the chart.
When we change the first select having the chart on display, we must have a spinner in the chart too. (Now the spinner appears in the select and then in the chart).
The program needs to handle errors from the api request.
When the user types a lot of numbers in the converter input it doesn't show very well.
