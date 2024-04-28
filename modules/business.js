import {  addPaynentInfo, addShipping, addToCart, beginCheckout,purchase, viewProduct } from './ga.js';
import { generateObject } from './mock.js';

debugger;
// This is run when using <script mdoule src..

export function callCheckoutProcess() {
    let newObj = generateObject();
    beginCheckout(newObj);
    
    // Randomly decide whether to call func2
    const randomNum = Math.random();
    if (randomNum < 0.5) {
      addShipping(newObj);
      
      // Call func3 only if func2 was called
      if (randomNum > 0.25) {
        addPaynentInfo(newObj);


          // Call func4 only if func3 was called
          if (randomNum > 0.5) {
        purchase(newObj);
      }
      }
    }
  
  
  }


  export function callCheckoutJourney() {
    let newObj = generateObject();
    viewProduct(newObj);
    
    // Randomly decide whether to call func2
    const randomNum = Math.random();
    if (randomNum < 0.5) {
      addToCart(newObj);
      
      // Call func3 only if func2 was called
      if (randomNum > 0.25) {
        beginCheckout(newObj);

        if (randomNum > 0.5) {
            purchase(newObj);
          }
      }
    }
  
    // Call func4 only if func3 was called
   
  }