export const renderByTemplate = (name, Component) => {
  return function(templateString) {
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
};
