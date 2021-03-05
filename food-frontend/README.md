# FoodFrontend

Lista de comida para su venda con factura.

## Instalacion

```bash
$ npm install
```

## Ejecutar la aplicacion del lado del cliente

```bash
# Desarrollador
$ npm  start
```
##Ejecutar la aplicacion del lado del cliente con electron

Para que la aplicacion funciones en electron se debe seguir los siguientes pasos

## Build
```bash
# build
$ ng build --base-href "./"
# Ejecutar con electron
$ npm run electron-start

```
## Ejecutar electron

```bash
# Ejecutar con electron
$ npm run electron-start
```

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Componentes

* store (Main) - app-store
* customize - app-customize
* facture - app-facture 
* food-list -app-food-list

## Metodos y variables de los componentes
###Store (Main)


| Variables | Tipo|Funcion  |
| ----------  | ---: |-----:  |
|  `  food`  | Food[]| Array que contiene la lista de los alimentos   |  
| ` carShop`    |  Array[]   |   Carrito de comprar que se manda al componente facture con los productos seleccionados   |  
|  ` customizing`  |  Booleano   |  Controla la vista de lista y de personalizacion del producto.  True muestra la vista para personalizar; False para mostar la lista  | 
|` itemBuy` |Food| es el item seleccionado en food-list para mandarlo a customize |
|` total` |Number| La suma de los precios que esta en el carShop|


| Metodo |  parametros |Funcion|Retorna|
| --------   | --:  |-----: |-----:|
|   `getData()`  | ninguno   | Hace peticion http al servidor para asignarlo al array`  Food[]`  | no retorna |
| `change()` |   ninguno   | Cambiar el estado de la variable  `customizing`  | no retorna |
|  `clickBuyItem()` | itemSelectedBuy : Food | hace cambio de estado de la variable ` customizing`  cuando el Output `selectedClick`  del componente `app-food-list`  emita el alimento seleccionado | no retorna |
|`final()`|itemCustomized|ingresa el alimento personalizado en el ` carShop` , calcula el ` total` , y me cambia el estado de `customizing` . esto cuando el Output de `app-customize`  me emita el alimento final personalizado | no retona nada|
|`buyFinish()`| confirmBuy : Boolean | hace la compra del `carShop`  haciendo el servicio  a la base de datos e imprimiendo el ticket, me restaura los valores | no retorna|
|`rest()`|ninguno|me restablece el `total` y el `carShop`| no retorna|
|`calculateTotal()`| priceItemSelectedCustom : Number | Va acomulando los precios en la variable `total` con el parametro que se envia `priceItemSelectedCustom` |no retorna|


###food-list -app-food-list
| Variables | Tipo|Funcion  |
| ----------  | ---: |-----:  |
|  ` food`  | @Input| Alimentos que vienen del componente `app-store` para mostar en el html  |  
| ` selectedClick`    |  @Output   |   Hace una salida al componente  `app-store` mandando el alimento seleccionado  |  

| Metodos | parametros|Funcion  |retorno|
| ----------  | ---: |-----:  |-----: |
|  ` clickSelectItem()`  | item : Food| valida si el item esta disponible para emitir el valor con `selectedClick`   | no retorna  |


###customize - app-customize
| Variables | Tipo|Funcion  |
| ----------  | ---: |-----:  |
|  ` itemBuy`  | @Input| Alimento que vienen del componente `app-store` para mostar en el html y poder personalizarlo |  
| ` final`    |  @Output   |   Hace una salida al componente  `app-store` mandando el alimento personalizado  |  
|`control`|Number| Controla la vista que se tiene que mostrar dependiendo los `steps` del alimento|
|`itemCustom`|Object|sera el item que va ser retornado al `app-store` para que pueda ser añadido al `carShop`|


| Metodos | parametros|Funcion  |retorno|
| ----------  | ---: |-----:  |-----: |
|  ` finish()`  | sin parametros|  metodo que se activa al finalizar la peronalizacion y me emite el valor con la variable `final`  | no retorna  |
|  ` select()`  | stepSelected |  añade el item de personalizacion en el objeto `itemCustom`, me valida el control `validateControl()` | no retorna  |
|  ` validateControl()`  | sin parametros | Aumenta la variable  `control` para controlar la vista, con el tamaño de la de `step` de la variable `itemBuy`   | no retorna  |


###facture - app-facture 
| Variables | Tipo|Funcion  |
| ----------  | ---: |-----:  |
|  ` carShop`  | @Input| Lista  con los alimentos personalizados que vienen del componente `app-store` para mostar en el html |  
| ` total`    |  @Input   |  Precio total  de los alimentos personalizados que vienen del componente `app-store` para mostar en el html  |  
|`FinishedBuy`|Output| Hace una salida al componente  `app-store` mandando el el final de la compra o su cancelacion. True Compra; False Cancela la compra |


| Metodos | parametros|Funcion  |retorno|
| ----------  | ---: |-----:  |-----: |
|  ` finish()`  | confirmBuy : Boolean|  Me manda a emitir el valor  que tiene `confirmBuy` con la variable `FinishedBuy`  | no retorna  |
|  ` buy()`  | sin parametros |  Llama el metodo `finish()` y le enviar el valor de true; confirmando que va ser la compra | no retorna  |
|  ` cancelBuy()`  | sin parametros | Llama el metodo `finish()` y le enviar el valor de False; Cancelando la compra  | no retorna  |
