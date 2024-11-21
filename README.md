# @hnine-dev/design-system-lit

`@hnine-dev/design-system-lit` is a design system library built specifically for Lit applications. is a design system library built specifically for Lit applications. This package provides consistent UI components to help developers build user interfaces quickly and efficiently. The library is currently under development and will be continuously updated with new features and improvements.

## Features

- **Reusable Components**: Offers a variety of UI components to enhance code reusability.
- **Customizable**: Easily customize the style and behavior of components.
- **TypeScript Support**: Fully supports TypeScript to ensure type safety.
- **Storybook Integration**: Use Storybook to document and test components.

## Installation

To install the package, use the following commands:

```sh
# Yarn
yarn add @hnine-dev/design-system-lit

# npm
npm install @hnine-dev/design-system-lit
```

or, you can install it through a CDN:

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  // script code to be provided
</head>
<body>
  <hnine-button>Click Me</hnine-button>
</body>
</html>
```

## Usage

After installation, you can use the components as follows:

```
import "@hnine-dev/design-system-lit/button";

const App = () => (
  <div>
    <hnine-button>Click Me</hnine-button>
  </div>
);

export default App;
```
