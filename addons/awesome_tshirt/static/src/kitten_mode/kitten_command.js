/** @odoo-module */

import { registry } from "@web/core/registry";

const commandProviderRegistry = registry.category("command_provider");

commandProviderRegistry.add("Kitten", {
  provide: (env, options) => {
    const result = [];
    const { active, enable, disable } = env.services.kitten;
    if (active) {
      result.push({
        action: disable,
        category: "kitten",
        name: "Disable kitten mode",
      });
    } else {
      result.push({
        action: enable,
        category: "kitten",
        name: "Actvate kitten mode",
      });
    }
    return result;
  },
});
