import fetch from 'node-fetch';

export default async function getBoredActivity(type, participants, price, accessibility) {

    /*Parameter Validation*/
    if (typeof type !== 'string') {
    return { error: { message: "The 'type' parameter must be in the form of a string." } };
  }

  if (typeof participants !== 'number' || participants <= 0) {
    return { error: { message: "The 'participants' parameter must be a number greater than 0." } };
  }

  if (typeof price !== 'number' || price < 0 || price > 1) {
    return { error: { message: "The 'price' parameter must be a number >= 0 and <= 1." } };
  }

  if (typeof accessibility !== 'number' || accessibility < 0 || accessibility > 1) {
    return { error: { message: "The 'accessibility' parameter must be a number >= 0 and <= 1." } };
  }

  /*HTTP REQUEST & API CALL with error validation*/
  const url = `https://www.boredapi.com/api/activity?type=${type}&participants=${participants}&price=${price}&accessibility=${accessibility}`;

  const response = await fetch(url);

  if (response.ok) {
    try {
        const data = await response.json();
        return { data };
    } 
    catch (error) {
        return { error: { message: 'The microservice failed to retrieve a valid JSON file. ', error_details: error.message } };
        }
    } 
  else {
        return { error: { message: 'The microservice was unable to retrieve an activity. ', error_details: error.message } };
  }
}