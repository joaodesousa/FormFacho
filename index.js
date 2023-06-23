    import axios from 'axios';
    import { fakerPT_PT as faker } from '@faker-js/faker';

    const baseURL = "https://docs.google.com/forms/d/e/1FAIpQLSfb0EBEcQR5h2XXy6lHAfN_4siXppqlcWvlN5G1B53hG7Jj7w/formResponse?usp=pp_url";

    const choices = ['Norte e Minho', 'Centro Norte', 'Centro', 'Lisboa', 'Alentejo', 'Algarve'];  // Sample list of choices

    setInterval(async () => {
    const firstName = faker.person.firstName();  // Generating a random full name
    const lastName = faker.person.lastName();
    const name = firstName + " " + lastName;
    const email = faker.internet.email({firstName: firstName, lastName: lastName});  // Generating a random email
    const socialMediaAccount = faker.internet.userName({firstName: firstName});  // Generating a random username for the social media account


    // Generate random choice from the list
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];

    // Replace the placeholders in the URL with the dummy data
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
    }, 5000);
