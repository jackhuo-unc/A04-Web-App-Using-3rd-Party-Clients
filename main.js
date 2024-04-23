// api calls and display

const duck_api_url = 'http://localhost:3000/quack';
const name_api_url = 'http://localhost:3000/'

async function get_data() {
    const get_gender = document.getElementById('genderSelect').value;
    console.log(get_gender);
    try {
        const duck_call = await fetch(duck_api_url);
        const name_call = await fetch(name_api_url + `${get_gender}`);
        const duck_data = await duck_call.json();
        const name_data = await name_call.json();
        console.log(duck_data, name_data);
        display_duck_name(duck_data, name_data, get_gender);
    }
    catch (error) {
        console.error("Error:", error);
    }
}

function display_duck_name(duck_data, name_data, get_gender) {
    const duck_div = document.getElementById('duck_display');
    const name_div = document.getElementById('name_display');
    const intro_div = document.getElementById('intro');
    const display_name = name_data.name.substring(0, name_data.name.indexOf(' '));
    duck_div.innerHTML = `
    <img src=${duck_data.url} alt="DUCK">
    `;
    
    name_div.innerHTML = `
    <h2>${display_name}</h2>
    `;
    
    intro_div.innerHTML = '';
    setTimeout(_ => {
        intro_div.innerHTML = `This is ${display_name}, ${get_gender === "female" ? "she" : "he"} is your friend now.`;
    }, 1000);
}