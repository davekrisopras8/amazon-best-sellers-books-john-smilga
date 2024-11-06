import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import books from './books';
import Book from './Book';

const BookList = () => {
    return (
        <>
            <h1>Amazon Best Sellers</h1>
            <section className='booklist'>
                {/* <EventExamples /> */}
                {books.map((book, index) => {
                    return <Book {...book} key={book.id} number={index} />
                })}
            </section>
        </>
    );


};

// const EventExamples = () => {
//     const handleFormInput = (e) =>{
//         console.log(e.target);
//         console.log(e.target.name);
//         console.log(e.target.value);
//     };
//     const handleButtonClick = () => {
//         alert('handle button click');
//     };
//     const handleFormSubmission = (e) => {
//         e.preventDefault();
//         console.log('form submitted');

//     };
//     return <section>
//         <form >
//             <h2>Typical Form</h2>
//             <input type="text" name='product' onChange={handleFormInput} style={{margin:'1rem 0'}} />
//             <button type='submit' onClick={handleFormSubmission}>Submit Form</button>
//         </form>
//         <button onClick={handleButtonClick} type='button'>Click Me</button>
//     </section>
// };





// function Greeting() {
//     return (
//         <div>
//             <Person />
//             <Message />
//         </div>
//     );
// };

// const Person = () => <h2>Dave Krisopras Essanto</h2>;
// const Message = () => {
//     return <p>This is my message</p>
// }

// function Greeting(){
//     return React.createElement('h2', {}, 'Hello World!');
// };

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);