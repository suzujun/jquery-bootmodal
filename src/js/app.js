import additionCalculator from './modules/addition-calculator';
import taxCalculator from './modules/tax-calculator';
import Apple from './modules/apple';

let item1Price = 400;
let item2Price = 600;
let totalPrice = additionCalculator(item1Price, item2Price);
let tax = 1.08;
let priceIncludeTax = taxCalculator(totalPrice, tax);

console.log(priceIncludeTax);

let apple = new Apple('superman')
console.log(">>>name", apple.getName());
// class type 判定
// console.log(">>>type11", apple.constructor.name)
// console.log(">>>type12", Apple.name)
// console.log(">>>type13", apple instanceof Apple)
// console.log(">>>type14", Apple.prototype.isPrototypeOf(apple))

window.bootmodal = {apple: apple};
// $.fn.DataTableModal = function (option) {
//   $(this).append('<b>hello world</b>')
//   console.log(">>>option", option)
// };

(function($){
  console.log(">>>>>>>>testfun",$)
  console.log(">>>>>>>>testfun",$.fn)
  $.fn.DataTableModal = function (option) {
    $(this).append('<b>hello world</b>')
    console.log(">>>option", option)
  };
    
})(jQuery);