# CS_361_BORED_API_MICROSERVICE
 Microservice which calls the Bored API through HTTP requests.
 The microservice will return a JSON object with activity data/properties for use in an application.

# Communication Contract
------------------------


# REQUESTING DATA
To request data from this microservice:

Step 1) Download the 'bored_api_microservice.mjs' file and store it in a local directory.

Step 2) Import the 'getBoredActivity' function into the application in which you wish to use it. 

        (Example: import getBoredActivity from "./bored_api_microservice.mjs";)

Step 3) Call the getBoredActivity function with the 4 valid parameters to use the microservice to make an API call to the Bored API via HTTP request.

        (Example: const result = await getBoredActivity('relaxation', 1, 0, 0);


# RECEIVING DATA
STEP 1) If the HTTP request was succesful, 'result' (from the previous step) will contain a JSON object defined as 'data'.

STEP 2) The JSON object's activity details can be accessed through dot notation, with the prefix 'result.data' as the base.

        The properties of the activity can be accessed like so:

        {
            result.data.activity: 'Give your pet ten minutes of focused attention',

            result.data.type: 'relaxation',

            result.data.participants: 1,

            result.data.price: 0,

            result.data.key: '9937387',

            result.data.accessibility: 0
        }

# NOTES
- Parameter validation is implemented on the microservice's end, ensuring the proper type, domain, and number of parameters were included in the function call.
- Error validation is implemented on the microservice's end, in the event an activity was unable to be retrieved from the API.

# UML DIAGRAM
<img src="https://github.com/nicholschm/CS_361_BORED_API_MICROSERVICE/blob/main/UML.png" alt="UML DIAGRAM">
