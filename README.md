<h1>Tasks and Timer</h1> 

<p align="center">
<img src="https://img.shields.io/static/v1?label=react&message=framework&color=ff69b4&style=for-the-badge&logo=REACT"/>
<img src="https://img.shields.io/static/v1?label=Vercel&message=deploy&color=ff69b4&style=for-the-badge&logo=vercel"/>
<img src="https://img.shields.io/static/v1?label=Typescriptl&message=language&color=blue&style=for-the-badge&logo=typescript"/>
<img src="https://img.shields.io/static/v1?label=Vite&message=build&color=blue&style=for-the-badge&logo=vite"/>
<img src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=RED&style=for-the-badge"/>
</p>

> Project Status: :warning: In development. Building responsiveness.

### Topics 

:small_blue_diamond: [Project description](#project-description)

:small_blue_diamond: [Functionalities](#functionalities)

:small_blue_diamond: [Deploy](#deploy)

:small_blue_diamond: [Libraries](#libraries)

:small_blue_diamond: [How to run the application](#how-to-run-the-application)

:small_blue_diamond: [Usability](#usability)

:small_blue_diamond: [JSON](#JSON)

:small_blue_diamond: [Database](#database)

:small_blue_diamond: [Open tasks](#open-tasks)

:small_blue_diamond: [Developers e contributors](#developers-e-contributors)

:small_blue_diamond: [Licença](#licença)


## Project description

<p align="justify">
  The "Tasks and Timer" project was developed to apply the knowledge of Typescript learned in the RocketSeat Ignite course. <br/>
  
  The project was initiated using Vite + React with deployment on Vercel. <br/>
  
  In the proposed challenge, the objective was to build a Pomodoro timer. <br/>
  
  However, I always seek to apply new improvements in the projects I execute by adding new features. <br/>
  
  To achieve this, I added more CRUD elements such as "DELETE", information popups, validations, information sharing via context, CRUD for the task list, CRUD for task statuses, and a mini dashboard summarizing the status. <br/>
  
  The data is stored in the user's local storage, so we recommend that information be added and deleted daily. <br/>
  
  The project still awaits responsiveness changes that I am considering finding a partner to take care of that part. <br/>
  
  Try it out and leave feedback on my LinkedIn. The link is in the application footer. Thank you.<br/>
</p>

## Functionalities

:heavy_check_mark: Task registration 

:heavy_check_mark: Changing task statuses

:heavy_check_mark: Pomodoro timer of listed tasks and others

:heavy_check_mark: History of task execution history

:heavy_check_mark: Deletion of tasks and history individually or in general

## Deploy

> https://tasks-and-timer.vercel.app/

... 

![Home](https://user-images.githubusercontent.com/108771153/230655781-42f3b3e4-efc2-400f-a569-416a9b912aac.png)
![tela 1](https://user-images.githubusercontent.com/108771153/230656053-4bd3d486-404e-496c-975d-5c3612f2a44a.png)
![tela 2](https://user-images.githubusercontent.com/108771153/230656180-6162f48d-0b7a-47a5-9d3e-ee51a593974c.png)

## Libraries

Pré-requisitos
:warning: [Node](https://nodejs.org/en/download/)

:heavy_check_mark: React-Hook-Form

:heavy_check_mark: Date-fns

:heavy_check_mark: Immer

:heavy_check_mark: Phosphor-React

:heavy_check_mark: Semantic-Ui-React

:heavy_check_mark: Styled-Components

:heavy_check_mark: Zod


## How to run the application

In the terminal, clone the project:

```
git clone https://github.com/eusouregislima/tasks-and-timer.git
```

Create a folder where you intend to clone the project.

Use the 'cmd' shortcut in the address bar to open the terminal.

Use the command "git clone https://github.com/eusouregislima/tasks-and-timer.git".

```
git clone https://github.com/eusouregislima/tasks-and-timer.git
```

Use the command "npm i" to install the dependencies.

```
npm i
```

Use the command "code ." to open the project in your VSCode.

```
code .
```

After making relevant modifications, you can make a pull request, which will be analyzed for merge.


## Usability

Instructions for use:

On the home screen, register the tasks to be executed in your day.

When starting a task, set its status to 'Em andamento'.

On the Pomodoro Timer tab, choose one of the listed tasks or add a random one.

Choose the amount of time to perform the task or part of it. The timer accepts 5 to 60 minutes.

After the time is up, an alarm will sound. At this point, set a rest time before returning to the activity or moving on to the next one.

When completing the activity, change its status on the home screen to 'Concluída'. If you need to cancel the task, set its status accordingly.

In the History menu, you can check how productive you were during the day.

We recommend registering the tasks for the next day every night, and at the end of each day, clearing all tasks and history.

As the data is saved in your Local Storage, you can even turn off the computer, and the tasks will not be lost unless the user clears the Local Storage.


## JSON

### Tasks:  :floppy_disk:

|id|task|status|
| -------- |-------- |-------- |
|000001|Stydy Javascript|Concluded|

### Timer:  :floppy_disk:

activeCycleId|id|interruptedDate|minutesAmount|startDate|task
| -------- |-------- |-------- | -------- |-------- |-------- |
|000002|000001|"2023-04-07T14:45:55.281Z"|15|"2023-04-07T14:45:44.251Z"|Stydy Javascript|

... 

## Database

The data is saved in Local Storage.


## Solving problems

Although it is a simple project, it involved a lot of programming logic to achieve the final result. 

Applying Typescript for the first time can be a bit complicated, but nothing that some good research cannot solve. 

It was a great challenge to use the context Hook with Typescript to share information. 

The reducers used with 'Enums of Actions' combined with 'Immer' helped organize the functions and manage the application's states. 

React-Hook-form combined with zod for validations made the application more secure and functional. 

I used React-Semantic-Ui to explain the flow within the application to the user. 

Date-fns was very helpful in manipulating dates. 

Switch made my code cleaner along with Default Layout and Default 

Theme. 

Responsive design is still a problem to be solved soon.


## Open tasks

:memo: Responsiveness 

## Developers e contributors

 :octocat:
| [<img src="https://avatars.githubusercontent.com/u/108771153?v=4" width=115><br><sub>Régis Lima</sub>](https://github.com/eusouregislima) | 
| :---: 

## Licença 

The [MIT License]() (MIT)

Copyright :copyright: 2023 - Tasks and Timer
