import {getDropdownMenu} from '../plugins/materialize'

// 1 получить иконку избраных 
// 2 по клику на иконку поместить инфу о билете в избраное

class FavouritesUI {
    constructor(dropdown){
        this.favouritesDrop = document.querySelector('.favourites-dropdown');
        this.dropdown = dropdown(this.favouritesDrop);
        this.dropdownContainer = document.querySelector('.favourites-dropdown-content')
    }

    getFavourites(){

    }

    favouritesHandler(){
        document.querySelectorAll('.ticket').forEach(ticket => {
            ticket.addEventListener('click', e => {
                if(e.target.classList.contains('favourite-button')){
                    favouritesUI.renderTicketInfo(e.target)
                }
            })
        })
    }
    
    renderTicketInfo(item){
        const airlinesName = item.parentElement.querySelector('#airlinesName').textContent;
        const originCityName = item.parentElement.querySelector('#originCity').textContent;
        const destinationCityName  = item.parentElement.querySelector('#destinationCity').textContent;

        const ticketInfo = `
            <li>
                ${airlinesName} <br>
                Из: ${originCityName} <br>
                В: ${destinationCityName}
            </li>
        `
        this.dropdownContainer.insertAdjacentHTML('afterbegin', ticketInfo)
        

    }
}

const favouritesUI = new FavouritesUI(getDropdownMenu);

export default favouritesUI;