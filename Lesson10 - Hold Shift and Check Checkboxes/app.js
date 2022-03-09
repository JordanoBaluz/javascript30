const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
    //check if the shift is key down
    //test if the div is between the checked boxes
    let inBetween = false;
    //evento testa se shiftKey está apertada AND testa se a checkbox está selecionada
    if (e.shiftKey && this.checked) {
        checkboxes.forEach(checkbox => {
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
            }
            //se verdadeiro, marca como check a box entre a primeira e a ultima checkbox selecionada
            if (inBetween) {
                checkbox.checked = true;
            }
        })
    }
    lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))