odoo.define('purchase_order.calender_view', function (require) {
"use strict";

var calendarView = require('web_calendar.CalendarView');

calendarView.include({
        open_event:function(){
            if (this.model != 'purchase.order') {
                this._super();
            } else {
                this.do_switch_view('form', null, { mode: "view" });
            }
        }
    });
});
