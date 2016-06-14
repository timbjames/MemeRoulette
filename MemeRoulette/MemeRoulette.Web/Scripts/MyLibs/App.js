(function(window, $, connection) {

    var memeRouletteEngine = function() {
                
        var self = this;

        self.$messages = $('#messages');

        //#region signalr

        connection.hub.logging = true;

        connection.hub.starting(function () {
            
        });

        connection.hub.connectionSlow(function () {
            
        });

        connection.hub.reconnecting(function () {
            
        });

        connection.hub.reconnected(function () {
            
        });

        connection.hub.disconnected(function () {
                        
        });

        connection.hub.received(function () {

        });

        connection.hub.error(function () {
            // handle error
        });

        connection.hub.stateChanged(function (data) {
          
        });
        
        connection.theHub.client.sendMessage = function (a) {
            console.log(self.$messages);
            self.$messages.append($('<li />', { text: a }));
        }

        //#endregion

        self.start = function () {

            connection.hub.start()
            .done(function () {
                connection.theHub.server.sendMessage('hello world');
            })
            .fail(function () {

            });

        };

    };

    $.MemeRouletteEngine = memeRouletteEngine;

})(window, jQuery, $.connection);

$(function() {

    var memeRouletteEngine = new $.MemeRouletteEngine();

    ko.applyBindings(memeRouletteEngine);

    memeRouletteEngine.start();

});