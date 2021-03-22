import _styled from "@emotion/styled";
const css = {
  "fontSize": "0.875rem",
  "lineHeight": "1.25rem",
  "@media (min-width: 768px)": {
    "fontSize": "1.125rem",
    "lineHeight": "1.75rem"
  }
};

const Input = _styled.input({
  "borderWidth": "1px",
  ":hover": {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(0, 0, 0, var(--tw-border-opacity))"
  }
});

const interactionStyles = () => /*#__PURE__*/React.createElement("div", {
  css: {
    ":hover": {
      "--tw-text-opacity": "1",
      "color": "rgba(0, 0, 0, var(--tw-text-opacity))",
      "textDecoration": "underline"
    },
    ":focus": {
      "--tw-text-opacity": "1",
      "color": "rgba(59, 130, 246, var(--tw-text-opacity))",
      "textDecoration": "underline"
    }
  }
});