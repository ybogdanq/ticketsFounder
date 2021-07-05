class CurrencyUI{
    constructor(){
        this.currency = document.getElementById('currency');
        this.disctionary = {
            USD: "$",
            EUR: "€",
        }
    }

    get currencyValue(){
        return this.currency.value;
    }

    getCurrencySymbol(){
        
        return this.disctionary[this.currencyValue]
    }
}

const currencyUI = new CurrencyUI();

export default currencyUI;