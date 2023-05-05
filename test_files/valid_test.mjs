import fetch from 'node-fetch';

const test = async () => {
    const type = 'cooking';
    const participants = 1;
    const price = 0;
    const accessibility = 0;

    const response = await fetch(`http://localhost:8221/activity?type=${type}&participants=${participants}&price=${price}&accessibility=${accessibility}`);

    if (response.ok) {
        const data = await response.json();
        console.log('Activity data:', data);
    }
    else {
        console.log('Error retrieiving activity data.')
    }
};

test();