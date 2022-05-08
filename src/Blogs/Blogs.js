import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div>
            <div className='blogs-container'>
                <h3>What is the difference between javascript and nodejs?</h3>
                <h4>Javascript</h4>
                <p>JavaScript is a lightweight, object-oriented scripting language used to create dynamic HTML pages with interactive effects on a webpage.  JavaScript is also commonly used in game development and mobile app development.  It is a defined scripting language, and the code can only be run and run in a web browser.  We may use Node.js to run and execute code outside the browser.  It is also known as a browser language, and can be used to develop both client-side and server-side.  It was created by Netscape's Brendon Ich and was first published in 1995.  Before naming JavaScript, the language was originally known as LiveScript.  The syntax programming language of JavaScript is heavily influenced by C.  The extension of the JavaScript file is .js.</p>
                <h4>Nodejs</h4>
                <p>Node.js is a cross-platform, open-source JavaScript runtime environment that enables you to run JavaScript on a server.  Node.js enables JavaScript code to run outside the browser.  Node.js comes with a large number of modules and is mostly used to build the web.  It can run on different platforms including Windows, Linux, Mac OS, etc.  It provides a cross-platform runtime environment with event-driven, non-blocking (asynchronous) I / O for creating highly scalable server-side JavaScript applications.

                    Node.js was developed and launched in 2009 by Ryan Dahl.  Node.js can be used to create a variety of applications, including web apps, real-time chat apps, command-line apps, and REST API servers.  However, it is mainly used to create network programs like web servers.  The standard file name extension of Node.js is .js.</p>

            </div>
            <div className='blogs-container'>
                <h3>When should you use nodejs and when should you use mongodb</h3>
                <p> MongoDB is the Document Oriented Database. MongoDB stores a lot of data in JSON format. MongoDB's performance is much faster than any RDBMS. MongoDB is designed to work with Large Scale Data. MongoDB can work on multiple servers. MongoDB can handle a large number of access requests easily.  There are 2 design patterns in programming. One is asynchronous programming and the other is synchronous programming. Node JS by default follows the Asynchronous pattern. That is, it does not wait for a task to be completed. In the meantime, NodeJS started another job. Thats why we use nodeJS.</p>

            </div>
            <div className='blogs-container'>
                <h3>Differences between sql and nosql databases?</h3>
                <ul>
                    <li>SQL databases are relational, NoSQL databases are non-relational</li>
                    <li>SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.</li>
                    <li>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.</li>
                    <li>SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.</li>
                    <li>SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</li>
                </ul>
            </div >
            <div className='blogs-container'>
                <h3>What is the purpose of jwt and how does it work?</h3>
                <p></p>
            </div>
        </div>
    );
};

export default Blogs;