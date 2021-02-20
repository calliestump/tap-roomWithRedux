# Epicodus Tap Room with Redux

#### **02/19/21**

## By Callie Stump
<hr>

## **Description**
This is a website to track Kegs for 'Epicodus Tap Room'. It includes full CRUD functionality. User stories are listed below. 
<strong>Redux now implemented</strong>

### **📖 User Stories**
<details>
<summary>Expand</summary>

* As a user, I want the option to edit a keg's properties after entering them just in case I make a mistake.
* As a user, I want to be able to delete a keg.
* As a user, I want a keg to update to say "Out of Stock" once it's empty.
* As a user, I want kegs with less than 10 pints to include a message that says "Almost Empty" so I can try a pint before it's gone!
* I should be able to navigate to a splash page that lists all flavors and treats. Users should be able to click on an individual flavor or treat to see all the flavors/treats that belong to it.
* As a user, I want to have kegs prices to be color-coded for easy readability. This could be based on their price, the style of beer or kombucha, or the amount of pints left.
* As a user, I want this application to be nicely styled. (Use stylesheets and CSS objects!)
</details>
<hr>

## **Diagram**
<img src="diagram.png">

## **Setup**
1. Copy this download link: https://github.com/calliestump/tap-room.git
2. Create a project directory where you would like to store your cloned project.
3. Using bash/termianl, navigate to the cloned project folder.
```
$ cd Desktop
$ cd [known directory]
```
4. Clone the repo.
```
git clone "https://github.com/calliestump/tap-room.git"
```
5. Open your cloned project with VS code:
```
. code
```
6. Navigate to the VS terminal and download your dependencies with node.
```
npm install
```
7. If you wish to run a live server run the following code:
```
npm run start
```
8. To see if the program is functioning properly you can use:
```
npm run build
```
This will show you if everything is compiling correctly; if otherwise you be will prompt with error messages.

9. In order to run the tests for functionality, run the following code:
```
npm run test
```
#### Dont forget that in order to push any changes you need to add your own GitHub repo. to your project.
```
git remote add origin [repo. link]
```

## **Technologies Used**
* HTML
* CSS
* javaScript
* Node
* REACT
* GIT
* GitHub
* .JSON

## **Specs**
<details>
<summary>Expand Specs</summary>
<table>
  <tr>
    <th>Test</th>
    <th>Input</th>
    <th>Output</th>
    <th>Completed</th>
  </tr>
  <tr>
    <td>Should return default state if no action type is recongized.</td>
    <td>formVisibleReducer(false, { type: null }))</td>
    <td>false</td>
    <td>✓</td>
  </tr>    
  <tr>
    <td>Should toggle form visibility state to true</td>
    <td>formVisibleReducer(false, { type: 'TOGGLE_FORM' }))</td>
    <td>true</td>
    <td>✓</td>
  </tr>
  <tr>
    <td>Should return default state if no action type is recongized</td>
    <td>rootReducer({}, { type: null }))</td>
    <td>masterKegList: {}, formVisibleOnPage: false</td>
    <td>✓</td>
  </tr>
  <tr>
    <td>Check that initial state of kegListReducer matches root reducer.</td>
    <td>store.getState().masterKegList)</td>
    <td>kegListReducer(undefined, { type: null }</td>
    <td>✓</td>
  </tr> 
  <tr>
    <td>Check that TOGGLE_FORM  action works for formVisibleReducer and root reducer.</td>
    <td>store.getState().formVisibleOnPage</td>
    <td>formVisibleReducer(undefined, action)</td>
    <td>✓</td>
  </tr> 
  <tr>
    <td>Should return the default state if it doesnt regonize any action types passed into the reducer.</td>
    <td>kegListReducer({}, { type: null }))</td>
    <td>({})</td>
    <td>✓</td>
  </tr>    
  <tr>
    <td>Should successfully add a new keg data to masterKegList.</td>
    <td>kegListReducer({}, action))</td>
    <td>({})</td>
    <td>✓</td>
  </tr> 
  <tr>
    <td>Should return the default state if it doesnt regonize any action types passed into the reducer.</td>
    <td>kegListReducer({}, { type: null }))</td>
    <td>[id] : {
        kegName,
        kegBrand,
        kegPintQuantity,
        kegAlcoholContent,
        kegPrice,
        id
      }</td>
    <td>✓</td>
  </tr> 
  <tr>
    <td>Should successfully delete a keg</td>
    <td>kegListReducer(currentState, action)</td>
    <td>2:
      {
        kegName: 'Half-Barrel',
        kegBrand: 'Bud Light',
        kegPintQuantity: 124,
        kegAlcoholContent: "28.5%",
        kegPrice: "13.99",
        id: 2
      }</td>
    <td>✓</td>
  </tr> 
  <tr>
    <td>Should successfully buy a pint.</td>
    <td>kegListReducer(kegData, action)</td>
    <td>1: 
      {
        kegName: 'Quarter-Barrel',
        kegBrand: 'Miller Lite',
        kegPintQuantity: 123,
        kegAlcoholContent: "25.6%",
        kegPrice: "12.99",
        id: 1
      }</td>
    <td>✓</td>
  </tr> 
  <tr>
    <td>Should restock a keg.</td>
    <td>kegData, action</td>
    <td>1: 
      {
        kegName: 'Quarter-Barrel',
        kegBrand: 'Miller Lite',
        kegPintQuantity: 124,
        kegAlcoholContent: "25.6%",
        kegPrice: "12.99",
        id: 1
      }</td>
    <td>✓</td>
  </tr>     
</table>  
------------------------------
## 👥 Contributor

| Author | Email |
|--------|:-----:|
| [Callie Stump](https://www.linkedin.com/in/callie-stump/) | [callie@stu.mp](mailto:callie@stu.mp) |
------------------------------
<!-- ## **Bugs Found** -->
 
## Legal
```
MIT License
Copyright (c) 2021 Callie Stump

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
<center><a href="#">Return to Top</a></center>
