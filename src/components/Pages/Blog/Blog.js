import React from 'react';
import useTitle from '../../../hooks/useTitle';

const Blog = () => {
    useTitle('Blog');

    return (
        <div className='sm:w-2/3 md:w-1/2 mx-auto mt-10' style={{ height: "78.3vh" }}>
            <h3 className='my-5 text-3xl text-center font-semibold'>Here are some of the Frequently Asked Questions (FAQ) about the MERN stack web development</h3>
            <div className="collapse">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    01. What is the difference between SQL and NoSQL?
                </div>
                <div className="collapse-content">
                    <p>In short term, SQL is a relational database whereas NoSQL is a non-relational database.
                        SQL uses use structured query language and have a predefined schema. NoSQL databases have
                        dynamic schemas for unstructured data. SQL is vertically scalable and table based. On the other
                        hand NoSQL are horizontally scalable, they are document type with "key-value", "graph" or
                        "wide-column" stores.
                    </p>
                </div>
            </div>
            <div className="collapse">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    02. What is JWT, and how does it work?
                </div>
                <div className="collapse-content">
                    <p>
                        JWT stands for "JSON Web Token". It is widely used and alredy established itself as the web community
                        standard to securely transmit information between parties as JSON object. Its main characteristics for its
                        fame is due to providing digitally signed token using a private and a public key pair by the identity provider.
                        The main purpose of using JWT is to ensure the authenticity of the data. A JWT consists of three parts, a Header,
                        a Payload and a Signature. JWT works by the identity provider generating a JWT token which contains information about
                        the user, the data and the secret key of the user, then the server decodes the token and verifies the authenticity of the user.
                    </p>
                </div>
            </div>
            <div className="collapse">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    03. What is the difference between javascript and NodeJS?
                </div>
                <div className="collapse-content">
                    <p>
                        The fundamental difference between JavaScript and node.js is that, JavaScript is itself a programming language but
                        node.js is not and it's rather a runtime environment of the JavaScript which offers users to use/run JavaScript code
                        outside the browser. JavaScript can only run in the browser but node.js offers users the option to use JavaScript on the
                        server side to use it outside the browser. JavaScript can work with html and handle DOM manipulation but node.js can not do
                        any of that. For that reason, JavaScript is used on the client side and node.js is mostly used on the server side.
                    </p>
                </div>
            </div>
            <div className="collapse">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    04. How does NodeJS handle multiple requests at the same time?
                </div>
                <div className="collapse-content">
                    <p>
                        NodeJS can handle multiple requests at the same time, thanks to the asynchronous nature of JavaScript.
                        NodeJS performs this by using a functionality called event loop. Whenever a request is send to NodeJS, it receives
                        the request and pass it along to be done using the system kernel. It doesn't wait for that task to be finished. So,
                        it can handle another request as soon as it pass the previous request to the system kernel. Thus it keeps itself free
                        and can handle simultaneous requests at the same time. Then whenever the task if finised, it gets called to return the output
                        by using the callback function, and it waits in queue which is handled by event loop. As soon as the queue is open, NodeJS pass the
                        result to the user. This is how NodeJs handles multiple requests at the same time.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;