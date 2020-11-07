// Import vue components
import * as components from "@/lib-components/index";
import theme from "@/lib-components/theme";

// install function executed by Vue.use()
const install = function installVantageUi(app, options) {
  if (options) {
    if (options.color) {
      theme.color = options.color;
    }

    if (options.shadow) {
      theme.shadow = options.shadow;
    }

    if (options.rounded) {
      theme.rounded = options.rounded;
    }
  }

  Object.entries(components).forEach(([componentName, component]) => {
    app.component(componentName, component);
  });
};

// Create module definition for Vue.use()
export default install;

// To allow individual component use, export components
// each can be registered via Vue.component()
export * from "@/lib-components/index";
