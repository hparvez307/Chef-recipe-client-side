import React from 'react';
import ReactToPdf from 'react-to-pdf'
import './Blog.css'
const Blog = () => {
    const ref = React.createRef();
    return (
        <div>
            <h1 className='text-6xl mb-10  font-bold'>Blog</h1>


            {/*react pdf generate */}
            <div>
                <ReactToPdf targetRef={ref} filename="skychef.pdf" x={.5} y={0} >
                    {({ toPdf }) => (
                        <button className='btn btn-info  mb-8' onClick={toPdf}>Generate pdf</button>
                    )}

                </ReactToPdf>



            </div>


            {/* Question section */}
            <div ref={ref} >
                {/* question 1 */}
                <div className='ans p-5 rounded'>
                    <h1 className='text-3xl text-bold text-orange-300 my-5'>Differences between uncontrolled and controlled components</h1>

                    <div className="overflow-x-auto">
                        <table className="table text-black w-full">
                            {/* head */}
                            <thead>
                                <tr>

                                    <th>Features</th>
                                    <th>Controlled Component</th>
                                    <th>Uncontrolled Component</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                <tr>

                                    <td>Value Management	</td>
                                    <td>Managed by React state</td>
                                    <td>Managed by component's own internal state</td>
                                </tr>
                                {/* row 2 */}
                                <tr>

                                    <td>Performance</td>
                                    <td>Generally faster as there's less state management</td>
                                    <td>Generally slower as there's more state management</td>
                                </tr>
                                {/* row 3 */}
                                <tr>

                                    <td>User Interaction</td>
                                    <td>Parent component updates state on user interaction</td>
                                    <td>Component updates own internal state on user interaction</td>
                                </tr>
                                {/* row 4 */}
                                <tr>

                                    <td>Debugging</td>
                                    <td>Easier to debug</td>
                                    <td>More difficult to debug</td>
                                </tr>
                                {/* row 5 */}
                                <tr>

                                    <td>Data Flow</td>
                                    <td>Data flows from parent component to component</td>
                                    <td>Data flows within the component</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>


                {/* question 2 */}
                <div className='ans mt-10 p-5 rounded'>
                    <h1 className='text-3xl text-bold text-orange-300 my-5'>How to validate React props using PropTypes</h1>

                    <p>
                        We can use prop-types to document the intended types of properties passed to components. React (and potentially other libraries—see the checkPropTypes() reference below) will check props passed to your components against those definitions, and warn in development if they don’t match.
                        <br /><br />
                        Below are the validators for the basic data types:
                        <br /><br />
                        PropTypes.any: The prop can be of any data type <br />
                        PropTypes.bool: The prop should be a Boolean<br />
                        PropTypes.number: The prop should be a number<br />
                        PropTypes.string: The prop should be a string<br />
                        PropTypes.func: The prop should be a function<br />
                        PropTypes.array: The prop should be an array<br />
                        PropTypes.object: The prop should be an object<br />
                        PropTypes.symbol: The prop should be a symbol
                    </p>
                </div>



                {/* question 3 */}
                <div className='ans mt-10 p-5 rounded'>
                    <h1 className='text-3xl text-bold text-orange-300 my-5'>Differences between nodejs and express js</h1>
                    <p>
                        <span className='text-xl text-orange-300'>Node.js</span> is a platform for building the i/o applications which are server-side event-driven and made using JavaScript.  It is used to build server-side, input-output, event-driven apps. Run-time platform or environment designed for server-side execution of JavaScript. It is built on Google’s V8 engine.
                    </p><br /><br />
                    <span className='text-xl text-orange-300'>Express.js</span> is a framework based on Node.js which is used for building web-application using approaches and principles of Node.js event-driven architecture.  It is used to build web-apps using approaches and principles of Node.js. Framework based on Node.js. 	It is built on Node.js.
                </div>

                {/* question 4 */}
                <div className='ans mt-10 p-5 rounded'>
                    <h1 className='text-3xl text-bold text-orange-300 my-5'>What is a custom hook, and why will i create a custom hook?</h1>

                    <p>
                        A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks. That's it! If you have code in a component that you feel would make sense to extract, either for reuse elsewhere or to keep the component simpler, you can pull that out into a function.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;