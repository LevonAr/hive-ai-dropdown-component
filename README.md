# Dropdown Component Overview

This repo is a dropdown component I developed for hive.ai

# Getting Started

## Clone

#### `git clone https://github.com/LevonAr/hive-ai-dropdown-component.git`

#### `cd hive-ai-dropdown-component`

Clone this repository on your local machine. Then navigate into it.

## Install Dependencies

#### `npm install`

I built this component from scratch. The only dependency I'm using is Font Awesome.

## Run App

#### `npm start`

This will run the app in development mode.

Once running navigate to:
http://localhost:3000

# Usage / Testing

I decided to modularize my code in order to accept a list of data as an input.

This list is then fed into my component, which generates dropdown display options using props as specified.

I included 2 sample inputs. They are located in the following path:

/src/input/InputData

/src/input/LargeInputData

The default is InputData. If you would like to test LargeInputData to see how my code handles a list with 500+ items. All you have to do is change 1 line of code in src/App.js. In order to do this follow these steps:

Navigate to src/App.js

Change line 14 from:

```javascript
      items: InputData,
```

to:

```javascript
      items: LargeInputData,
```
