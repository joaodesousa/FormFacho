    import axios from 'axios';
    import { fakerPT_PT as faker } from '@faker-js/faker';

    const baseURL = "https://docs.google.com/forms/d/e/1FAIpQLSfb0EBEcQR5h2XXy6lHAfN_4siXppqlcWvlN5G1B53hG7Jj7w/formResponse?usp=pp_url";

    const choices = ['Norte e Minho', 'Centro Norte', 'Centro', 'Lisboa', 'Alentejo', 'Algarve'];

    setInterval(async () => {

    const firstName = faker.person.firstName(); 
    const lastName = faker.person.lastName();
    const name = firstName + " " + lastName;

    const providers = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com'];  
    const randomProvider = providers[Math.floor(Math.random() * providers.length)];  
    const email = faker.internet.email({firstName: name, provider: randomProvider}); 

    const socialMediaAccount = faker.internet.userName({firstName: firstName, lastName: lastName}); 

    const randomChoice = choices[Math.floor(Math.random() * choices.length)];

    let formURL = baseURL;
    formURL += `&entry.2127778997=${encodeURIComponent(socialMediaAccount)}`;
    formURL += `&entry.1404790581=${encodeURIComponent(name)}`;
    formURL += `&entry.131539101=${encodeURIComponent(email)}`;
    formURL += `&entry.1531386985=${encodeURIComponent(randomChoice)}`;


    try {
        const response = await axios.get(formURL);
        console.log(`Name: ${name}, Email: ${email}, Social Media Account: ${socialMediaAccount}, Status: ${response.status}`);
    } catch (error) {
        console.log(`Error: ${error}`);
    }
    }, 3000);
