export class ProductsPage{get cart(){return $('~cart badge')}get screen(){return $('~products screen')}async openProduct(name:string){await $(`android=new UiSelector().text("${name}")`).click();}}
