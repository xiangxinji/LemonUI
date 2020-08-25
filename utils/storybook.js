export const renderByTemplate = (name, Component) => function (templateString) {
  return {
    components: {
      [name]: Component,
    },
    template: `
        <div style="padding:16px 8px;">
            ${templateString}
        </div>
      `,
  };
};

export const renderByComponents = (components) => function (templateString) {
  return {
    components,
    template: `
        <div style="padding:16px 8px;">
            ${templateString}
        </div>
      `,
  };
};
