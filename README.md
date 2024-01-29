# Back End
I created five API controllers, each containing two GET methods—one with a parameter and one without
I added a proxy service to centralize HTTP requests (ProxyService.cs)
After receiving the result from the proxy service, the response will be deserialized into the respective object
Send the result to Front end
For rate limiting i have used asp .net core fixed window limiter and enabled it in controller level
For aggregate API call, I have implement in People controller, 


# Front End
I used angular as front end 
Angular meterial ui used for UI
