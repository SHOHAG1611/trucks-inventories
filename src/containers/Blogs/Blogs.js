import React from 'react';

const Blogs = () => {
    return (
        <div className='text-center container mt-5'>
            <div className='shadow p-3 mb-5 text-white bg-primary rounded'>
                <h6>Question 1.Difference between javascript and node js</h6>
                <p>Ans: <span>Javascript is a programming language that is used for writing scripts on the website and NodeJS is a Javascript runtime environment.	Javascript can only be run in the browsers and We can run Javascript outside the browser with the help of NodeJS.Javascript is used in frontend development and Nodejs is used in server-side development. javascript is the upgraded version of ECMA script that uses Chromes V8 engine written in C++. Nodejs is written in C, C++ and Javascript.</span></p>
            </div>
            <div className='shadow p-3 mb-5 text-white bg-success rounded'>
                <h6>Question 2.When Should i use node js and when should i use mongodb?</h6>
                <p>Ans: <span>when i use node js! Any project needs a programming environment and a runtime library that offers you basic programming tools/support and can compile and/or interpret your code. Nodejs is such as tool for the Javascript programming language. There are other similar tools for other languages such as Python, Java, PHP, C#, C++, Go, etc.. and when i need to use mongodb? ans:-If my application needs the ability to persistently store data in a way that you can efficiently query or update it later, then you would typically use some form of database. There are dozens of popular databases. MongoDB is one such database. MariaDB, MySql, CouchDB, DynamoDB (on AWS), Postgres are examples of other databases</span></p>
            </div>
            <div className='shadow p-3 mb-5 text-white bg-primary rounded'>
                <h6>Question 3.Difference between sql and nosql database?</h6>
                <p>Ans: <span>SQL databases are primarily called RDBMS or Relational Databases .NoSQL databases are primarily called as Non-relational or distributed database.SQL databases are table based databases and NoSQL databases can be document based, key-value pairs, graph databases.SQL databases are vertically scalable and NoSQL databases are horizontally scalable.Traditional RDBMS uses SQL syntax and queries to analyze and get the data for further insights. They are used for OLAP systems.NoSQL database system consists of various kind of database technologies. These databases were developed in response to the demands presented for the development of the modern application.</span></p>
            </div>
            <div className='shadow p-3 mb-5 bg-success text-white rounded'>
                <h6>Question 4.What is the purpose of jwt and how does it work?</h6>
                <p>Ans: <span>First we need to know that what is jwt? JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.
                    Once decoded, you will get two JSON strings:
                    The header and the payload.The signature. </span></p>
            </div>
        </div>
    );
};

export default Blogs;