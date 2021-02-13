# Epicodus Tap Room

#### **02/12/21**

## By Callie Stump
<hr>

## **Description**
This is a website to track Kegs for 'Epicodus Tap Room'. It includes full CRUD functionality. User stories are listed below.


## Known Bug
If user reaches 0 pints and enters their restock value it doesn't calculate.
Ex.) restock input: 20 | restock output: 020
## User Stories
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
