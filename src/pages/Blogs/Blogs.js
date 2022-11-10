import React from 'react';
import useTitle from '../../Hooks/useTitle';

const Blogs = () => {

    useTitle('Blogs');
    return (
        <div className='md:mx-10'>
            <div tabIndex={0} className="collapse collapse-open border border-base-300 bg-base-100 rounded-box hover:bg-slate-700 hover:text-white mb-2">
                <div className="collapse-title text-xl font-medium">
                    Q# Difference between SQL and NoSQL?
                </div>
                <div className="collapse-content">
                    <p>* SQL:<br/>
                        SQL, which stands for “Structured Query Language,” is the programming language that’s been widely used in managing data in relational database management systems (RDBMS) since the 1970s.<br />
                        SQL database schema organizes data in relational, tabular ways, using tables with columns or attributes and rows of records. <br />
                        SQL is a good choice when working with related data. Relational databases are efficient, flexible and easily accessed by any application. A benefit of a relational database is that when one user updates a specific record, every instance of the database automatically refreshes, and that information is provided in real-time.<br /><br/>
                        * NoSQL:<br />
                        NoSQL is a non-relational database, meaning it allows different structures than a SQL database (not rows and columns) and more flexibility to use a format that best fits the data.<br />
                        NoSQL databases are not relational, so they don’t solely store data in rows and tables.<br />
                        While SQL is valued for ensuring data validity, NoSQL is good when it’s more important that the availability of big data is fast. It’s also a good choice when a company will need to scale because of changing requirements. NoSQL is easy-to-use, flexible and offers high performance.
                    </p>
                </div>
            </div>
            <div tabIndex={1} className="collapse collapse-open border border-base-300 bg-base-100 rounded-box hover:bg-slate-700 hover:text-white mb-2">
                <div className="collapse-title text-xl font-medium">
                    Q# What is JWT, and how does it work?
                </div>
                <div className="collapse-content">
                    <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.<br />
                        JWT's differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.<br/>

                        A JWT is a string made up of three parts, separated by dots (.), and serialized using base64.</p>
                </div>
            </div>
            <div tabIndex={2} className="collapse collapse-open border border-base-300 bg-base-100 rounded-box hover:bg-slate-700 hover:text-white mb-2">
                <div className="collapse-title text-xl font-medium">
                    Q# What is the difference between javascript and NodeJS?
                </div>
                <div className="collapse-content">
                    <p># JavaScript is a proper high-level programming language used to create web scripts whereas Node.js is a run time environment built on google’s v8 engine.<br />
                        # JavaScript is executed in the browser whereas using Node.js gives us the ability to execute JavaScript outside the browser.<br />
                        # JavaScript can manipulate DOM or add HTML within whereas Node.js doesn’t have the capability to add HTML.<br />
                        # JavaScript is mainly used to create front end web applications or develop client-side whereas Node.js is used on the back end development that is server-side development.</p>
                </div>
            </div>
            <div tabIndex={3} className="collapse collapse-open border border-base-300 bg-base-100 rounded-box hover:bg-slate-700 hover:text-white mb-2">
                <div className="collapse-title text-xl font-medium">
                    Q# How does NodeJS handle multiple requests at the same time?
                </div>
                <div className="collapse-content">
                    <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;