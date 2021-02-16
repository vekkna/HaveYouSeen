"use strict"

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const entry = form.enter.value.trim();
    const query = "https://tastedive.com/api/similar?q=%2C+" + entry;
    getRec(query).then(data => console.log(data));

});

const getRec = async (query) => {
    console.log(query);
    const response = await fetch(query);
    const data = await response.json();
    return data;
};

