let ga = window.gtag;

function callGaEvent(eventname, obj){
    gtag("event", eventname, obj);

}

export function addToCart(obj){
    callGaEvent('add_to_cart', obj);
}

export function beginCheckout(obj){
    callGaEvent('begin_checkout', obj);
}

export function purchase(obj){
    callGaEvent('purchase', obj);
}

export function addShipping(obj){
    callGaEvent('add_shipping_info', obj);
}


export function addPaynentInfo(obj){
    callGaEvent('add_payment_info', obj);
}



export function viewProduct(obj){
    callGaEvent('view_item', obj);
}