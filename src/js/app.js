import './plugins';
import locations from './store/locations';
import '../css/style.css';
import formUI from './views/form';
import currencyUI from './views/currency';
import ticketsUI from './views/ticket'
import favouritesUI from './store/favourites'


document.addEventListener('DOMContentLoaded', () => {
    initApp();

    const form = formUI.form;

    // Events
    form.addEventListener('submit', onFormSubmit)


    // Handlers
    async function initApp(){
        await locations.init();
        formUI.setAutotcompleteData(locations.shortCitiesList);
        favouritesUI.getFavourites();
    }

    async function onFormSubmit(e){
        e.preventDefault()
        // get all data from inputs
        const origin = locations.getCityCodeByKey(formUI.originValue);
        const destination = locations.getCityCodeByKey(formUI.destinationValue);
        const depart_date = formUI.departDateValue;
        const return_date = formUI.returnDateValue;
        const currency = currencyUI.currencyValue;

        console.log(origin, destination, depart_date, return_date, currency);

        await locations.fetchTickets({
            origin,
            destination,
            depart_date,
            return_date,
            currency,
        })
        
        ticketsUI.renderTickets(locations.lastSearch);

        favouritesUI.favouritesHandler();
        
    }
});

