# currency-converter

Improvements:
General UI can be improve.
Create a custom loading spinner to reduce the library dependencies.
Create a separate constant file just for styles and layout.
The program needs to handle errors from the api request.
The API calls could be extracted to a separate file, like a helper
The coverage of the testing is really little and should be expanded to cover all the components

The main section is in a different file so can be the container to put the footer, header and other parts of the page when needed

The program should display the date when the data was fetched so the user can decide if it needs to refresh it

When we change the first select having the chart on display, we must have a spinner in the chart too. (Now the spinner appears in the select and then in the chart).
Now, in the case when the two currencies are the same, there is an API call that can be avoided (or prevent that the user can select the same on both selects)

Handle '.' or ',' as a currency amount input, and maybe just accept only one and convert the other (now the input only accepts ',' for decimals).
When the user types a lot of numbers in the converter input it doesn't show very well.

Date input should be handled better, it needs a dynamic max and min value regarding the year (considering that the API only takes time frames of 365 days). Also the date can be modified with the keyboard but the year should be constrained to this dynamic range. When the date is being modified the keyboard is making API requests that can be avoided and this could be handled on the on change event.
We can add an end date input to show a specific time frame of currency-time in the chart.

The chart should handle large numbers in the y axis
