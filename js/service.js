angular.module("businessApp.service", [])

.factory('Service', function($http){
    //Constant api url path
    // const ApiCall = {
    //     baseUrl : 'http://129.232.232.18:9091/RestaurantApp/webresources/restaurant.api.'
    //     // baseUrl : 'http://129.232.243.122:8080/Digi-waiter/webresources/restaurant.api.'
    // };
    // //Calling Api for menu of the Resturant
    // return{
    //     menu: function()
    //     {
    //         var getMenu = $http.get(ApiCall.baseUrl + 'Menu/Menu/GetAllMenus');
    //         return getMenu;
    //     },
    //     table: function()
    //     {
    //         var getMenu = $http.get(ApiCall.baseUrl + 'table/Table/GetAllTable');
    //         return getMenu;
    //     },
    //     placeOrder: function(body)
    //     {
    //         var order = $http.post(ApiCall.baseUrl + 'OrderFacade/Order/InsertOrder', body)
    //         return order;
    //     },
    //     placeOrder: function(body)
    //     {
    //         var order = $http.post(ApiCall.baseUrl + 'OrderFacade/Order/InsertOrder', body)
    //         return order;
    //     },
    //     payment: function(body)
    //     {
    //         var paymnt = $http.post('http://129.232.243.122:8080/PaymentAPI/webresources/com.jose.paymentapi/v1/live/makeAdHocPayment', body)
    //         return paymnt;
    //     }
    // }
})