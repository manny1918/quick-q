let wsOptions = [];
const txtName = document.querySelector('#name');
const wsContainer = document.querySelector('#ws-container');
const wsSelect = document.querySelector('.ws-select');
let selectNumber = 0;

const loadWorkstations = (options) => {
    options = new Array(options);
    options = options[0].split(',');
    wsOptions = options;


    // const option = document.createElement('option');
    // option.innerText = 'Select workstation';
    // wsSelect.setAttribute('class', 'form-select ws-select');
    // wsSelect.appendChild(option);
    for (let i = 0; i < wsOptions.length; i++) {
        const newOption = document.createElement('option');
        newOption.innerText = wsOptions[i];
        newOption.value = wsOptions[i];
        wsSelect.appendChild(newOption);
    }
    // wsContainer.appendChild(wsSelect);
}
const updateWsList = (selectedWs) => {
    let res = [];
    wsOptions.forEach(opt => {
        if (opt !== selectedWs) res.push(opt)
    });
    wsOptions = res;
}

function selectWsOption() {
    selectNumber += 1;
    updateWsList(this.value);
    const newSelect = document.createElement('select');
    const option = document.createElement('option');
    option.innerText = 'Select workstation';
    newSelect.appendChild(option);
    newSelect.setAttribute('class', 'form-select ws-select mb-3');
    newSelect.setAttribute('name', `workflow[ws-select-${selectNumber}]`);
    wsContainer.appendChild(newSelect);
    this.setAttribute('readonly', true);
    this.disabled = true;
    // this.readOnly = true;
    // onclick='return false;'
    // this.setAttribute('readonly', 'readonly');
    for (let i = 0; i < wsOptions.length; i++) {
        const newOption = document.createElement('option');
        newOption.innerText = wsOptions[i];
        newOption.value = wsOptions[i];
        newSelect.appendChild(newOption);
    }
    newSelect.addEventListener('change', selectWsOption);
}

const enableDropdowns = () => {
    const dds = document.querySelectorAll('.ws-select');
    dds.forEach((dd) => {
        dd.disabled = false;
    });
}


wsSelect.addEventListener('change', selectWsOption);