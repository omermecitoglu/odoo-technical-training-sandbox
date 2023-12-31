/** @odoo-module */

import { Component, markup } from "@odoo/owl";
import { registry } from "@web/core/registry";

class OrderWarningWidget extends Component {
  get warnings() {
    const warningsList = [];
    if (this.props.record.data.image_url.length === 0) {
      warningsList.push(markup("There is no <b> image </b>"));
    }
    if (this.props.record.data.amount > 100) {
      warningsList.push(markup("Add promotional <b> material </b>"));
    }
    return warningsList;
  }
}

OrderWarningWidget.template = "awesome_tshirt.OrderWarningWidget";
OrderWarningWidget.fieldDependencies = {
  image_url: { type: "char" },
  amount: { type: "float" },
};
registry.category("view_widgets").add("order_warning", OrderWarningWidget);
