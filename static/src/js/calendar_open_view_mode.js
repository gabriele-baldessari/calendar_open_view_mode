odoo.define('purchase_order.calender_view', function (require) {
"use strict";

    var calenderView = require('web_calendar.CalendarView');
        calenderView.include({

                if (this.model != 'purchase.order') {
                         this._super();
                    }else {
                    this.do_switch_view('form', null, { mode: "view" });
                }
                }
            });
    });
