import currencyUI from "./currency";

class TicketsUI {
    constructor(currency){
        this.container = document.querySelector('.tickets-container');
        this.getCurrencySymbol = currency.getCurrencySymbol.bind(currency);
    }

    renderTickets(tickets){
        this.clearContainer();
        if(!tickets.length){
            this.showEmptyMsg();
            return
        }

        let fragment = '';
        const currency = this.getCurrencySymbol();
        console.log(currency);

        tickets.forEach(ticket => {
            const template = TicketsUI.ticketTemplate(ticket, currency);
            fragment += template;
        });

        this.container.insertAdjacentHTML('afterbegin', fragment)
    }

    clearContainer(){
        this.container.innerHTML = '';

    }

    showEmptyMsg(){
        const template = TicketsUI.emptyMsgTemplate();
        this.container.insertAdjacentHTML('afterbegin', template);
    }

    static emptyMsgTemplate(){
        return `
            <div class="notFoundTickets">
                <h5>
                    Tickets not found
                </h5>
            </div>
        `
    }

    static ticketTemplate(ticket, currency){
        return `
            <div class="ticket">
            <i class="material-icons favourite-button">star</i>
            <div class="ticket__header">
                <div class="airlines__logo">
                    <img src="${ticket.airline__logo}" alt="">    
                </div>
                <h6 class="airlines__name" id="airlinesName">
                    ${ticket.airline__name}
                </h6>
                
            </div>
            
            <div class="ticket__body">
                <div class="origin__country" id="originCity">${ticket.origin__name}</div>
                <div class="destination__country" id="destinationCity">${ticket.destination__name}</div>
            
            </div>
            <div class="ticket__footer">
                <div class="travel__info__leftside">
                    <div class="ticket__date" id="ticketDate">
                        ${ticket.departure_at}
                    </div>
                    <div class="ticket__subinfo" id="ticketRoadInfo">
                        <strong>Пересадок: ${ticket.transfers} Номер рейса: ${ticket.flight_number}</strong> 
                    </div>
                    
                </div>
                <div class="travel__info__rightside">
                    <button class="btn waves-effect light-blue darken-3">${currency}${ticket.price}</button>
                </div>
            </div>

        </div>
        `
    }
}

const ticketsUI = new TicketsUI(currencyUI);

export default ticketsUI;