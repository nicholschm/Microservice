# CS_361_BORED_API_MICROSERVICE
This microservice incorporates an Express server which allows clients to interact with the microservice through HTTP requests.
This server is hosted on PORT 8221 by default, and contains only a single endpoint '/activity'.

# Communication Contract
------------------------


# REQUESTING DATA
To request data from this microservice:

Step 1) In your terminal, navigate to the directory in which 'server.mjs' is stored.

Step 2) In your terminal, run the command 'npm start'. The Express server should now be running on PORT 8221.

Step 3) Make a GET request to the '/activity' endpoint. This request must contain 4 parameters:

                -type: A string representing the type of activity you want to retrieve. Options are:
                        "education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"

                -participants: The number of people who should be involved in the activity. Must be a positive integer (greater than 0).

                -price: The price range of the activity, represented as a float between 0 and 1. 0 represents a free activity, 1 represents an activity 
                        that costs money.

                -accessibility: The level of ease or difficulty of the activity, represented as a float between 0 and 1. 0 represents an activity   
                        that requires a lot of skill or knowledge, 1 represents an activity that anyone can do.

Example request: http://localhost:8221/activity?type=recreational&participants=1&price=0&accessibility=0


# RECEIVING DATA
STEP 1) If the HTTP request was succesful, the microservice will return a JSON object, stored in the manner in which it was called by the client.
        In this example, the JSON object is returned as 'data'.

        Example: 

                const response = await fetch(`http://localhost:8221/activity?type=${type}&participants=${participants}&price=${price}&accessibility=${accessibility}`);

                const data = await response.json();

                return data;


STEP 2) The JSON object's activity details can be accessed through dot notation, with the format 'data.*property*'.

        The properties of the activity can be accessed like so:

        {
            data.activity: 'Write a poem',

            data.type: 'recreational',

            data.participants: 1,

            data.price: 0,

            data.key: '8688620',

            data.accessibility: 0
        }

# NOTES
- Parameter validation is implemented on the microservice's end, ensuring the proper type, domain, and number of parameters were included in the function call.
- Error validation is implemented on the microservice's end, in the event an activity was unable to be retrieved from the API.

# UML DIAGRAM
<img src="https://github.com/nicholschm/MICROSERVICE/blob/main/UML.png" alt="UML DIAGRAM">
