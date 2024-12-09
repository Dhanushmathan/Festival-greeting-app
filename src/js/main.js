const form = document.querySelector("#greeterForm");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const greeterName = e.target[0].value

    window.location.href = "./greeting.html?name=" + greeterName;

    console.log("Form submited");
});
