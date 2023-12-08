
function calculate(){
    const input = document.querySelector("#number").value
    console.log(input);
    let output = document.querySelector(".age")
    const currentYear = 2023;
    const age = currentYear - input;

    output.innerHTML = age
}

// Wenn ich etwas selektiere dann immer aus dem index.html. Entweder eine id oder eine klasse.
// es ist egal welchen namen ich meiner variabel (const/let) gebe, jedoch sollte der name sinn ergeben.
