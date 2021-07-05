import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

const select = document.querySelectorAll('select');
M.FormSelect.init(select);

export function getSelectInstance(elem){
    return M.FromSelect.getInstance(elem);
}

// Init Autocomplete
const autocomplete = document.querySelectorAll('.autocomplete');
M.Autocomplete.init(autocomplete , {
    data: {
        "Apple": null,
        "Microsoft": null,
        "Google": null,
    },
});

export function getAutocompleteInstance(elem){
    return M.Autocomplete.getInstance(elem);
}

// init datepicker
const datepickers = document.querySelectorAll('.datepicker');
M.Datepicker.init(datepickers, {
    showClearBtn: true,
    format: 'yyyy-mm',
});

export function getDatepickerInstance(elem){
    return M.Datepicker.getInstance(elem)
}

const dropdown = document.querySelectorAll('.dropdown-trigger');
M.Dropdown.init(dropdown, {

});

export function getDropdownMenu(elem){
    return  M.Dropdown.getInstance(elem);
}

