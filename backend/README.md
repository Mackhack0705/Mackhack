## Course Selling Website Backend
This project contains a course selling application. Make sure to setup your own mongodb instance before starting.
It needs to support two types of users -
1. Admin
2. User
which has following features-
Admins are allowed to signup, signin, create courses and view courses
Users are allowed to signup, signin, view courses, and purchase courses.
This in the real world would translate to an app like- udemy.

### Admin Dashboard

#### Login
- An admin can sign up
- An admin can signin

#### User
- An admin can see how many users have bought his courses

#### Course
- An admin can add a course
- An admin can see all courses
- An admin can remove a course
- An admin can update a course


### User Dashboard

#### Login
- A user can sign up
- A user can sign in

#### Course
- A user can see all courses
- A user can purchase a course
- A user can see all the purchased courses

### Routes

### Admin

#### Login
- POST /admin/signup
  Description: Creates a new admin account.
  Input Body : {
    firstName: 'Mack',
    lastName: 'hack',
    username: 'makehack@gmail.com',
    password: 'Mackhack@123'
  }

  Output: {
    msg: "Admin is successfully registered on the platform"
  }

- POST /admin/signin
  Description: Logs in an admin account.
  Input body: {
    username: 'makehack@gmail.com',
    password: 'Mackhack@123'
  }
  Output: {
    token: 'hakjhfkeuheuhk'
  }


#### Course
- POST /admin/courses/add
  Description: Creates a new course.
  Input Body: {
    title: "Sales Cloud",
    description: "A course which provides all the sales cloud knowledge",
    price: 2000,
    imageLink: "https://google.com/"
  }
  headers: {
    authorization: 'Bearer <your-token>'
  }
  Output: {
    msg: "Course created successfully"
  }

- GET /admin/courses
  Description: Returns all the courses
  Output: {
    courses: [
        {
            id:1,
            title: 'course title',
            description: 'course description',
            price: 1000,
            imageLink: 'https://google.com'
        }, ....
    ]
  }

- DELETE /admin/courses/remove
  Description: Deletes a course
  Input Body: {
    courseId: 'fkahdkh3y47tdhfka'
  }
  headers: {
    authorization: 'Bearer <your-token>'
  }
  Output: {
    msg: "Course removed successfully"
  }

- PUT /admin/courses/update
  Description: Updates a course
  Input Body: {
    title: 'Full stack',
    price: '2500',
    description: 'Full stack course'
  }
  headers: {
    authorization: 'Bearer <your-token>'
  }
  Output: {
    msg: "Course updated successfullly"
  }

### User Dashboard

#### Login
- POST /user/signup
  Description: Creates a new user account.
  Input Body: {
    firstName: 'Chaitanya',
    lastName: 'Sharma',
    username: 'chaitanya@gmail.com',
    password: 'Chaitanya'
  }
  Output: {
    msg: "User is successfully registered"
  }

- POST /user/signin
  Description: Logs in a user account.
  Input Body: {
    username: 'chaitanya@gmail.com',
    password: 'Chaitanya'
  }
  Output: {
    token: 'afkjhreuru344u8'
  }
  
#### Course
- GET /user/courses
  Description: Returns all the courses.
  Output: {
    courses: [
        {
            id: 1,
            title: 'course title',
            description: 'course description',
            price: 1000,
            imageLink: 'https://google.com'
        }, ...
    ]
  }
- POST /user/courses/:courseId
  Description: Purchases a course. courseId in the URL path should be replaced with the ID of the course to be purchased.
  Input headers: {
    authorization: 'Bearer <your-token>'
  }
  Output: {
    msg: "Course purchased successfully'
  }

- GET /user/purchasedCourses
  Description: Returns all the courses purchased by the user.
  Input headers: {
    authorization: 'Bearer <your-token>;
  }
  Output: {
    purchasedCourses: [
        {
            id: 1, 
            title: 'course title',
            description: 'course description',
            price: 1000,
            imageLink: 'https://google.com'
        }, ....
    ]
  }