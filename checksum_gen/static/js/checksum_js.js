
odoo.define('checksum_gen._CHCK_GEN', function(require) {
"use strict";

var AbstractAction = require('web.AbstractAction');
var core = require('web.core');
var Dialog = require('web.Dialog');
var Session = require('web.session');
var Widget = require('web.Widget');

var _CHCK_GEN = AbstractAction.extend({
    contentTemplate: 'checksum_interface',

    start: function(){
        // this._rpc({
        //     model: 'account.move',
        //     method: 'fetch_BP',
        //     args: [''],
        // }).then(function(data){
        //     $("#_2307_partner").append(construct_partners(data));
    },

    events: {
        // "click #generate_code": function(){
            // this._rpc({
            //     model: 'account.move',
            //     method: 'x_2307_forms',
            //     args: ['', {'month': current, 'id': BP, 'trigger': 'print', 'tranid': 'none'}],
            // }).then(function(data){
            //     self.do_action(data);
            // });
        // },
    },
});

core.action_registry.add('checksum_interface', _CHCK_GEN);

return {
    _CHCK_GEN: _CHCK_GEN,
};

});