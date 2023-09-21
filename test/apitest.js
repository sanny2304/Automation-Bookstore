const axios = require('axios');
const chai = require('chai');
const expect = chai.expect;

describe('BookStore API Tests', () => {
  it('should add a book using POST request', async () => {
    const newBook = {
      title: 'New Book',
      author: 'John Doe',
    };

    const response = await axios.post('https://bookstore.toolsqa.com/BookStore/v1/Books', newBook);

    expect(response.status).to.equal(201); // Ensure that the book was added successfully
  });

  it('should delete a book using DELETE request', async () => {
    // Replace 'bookId' with the actual ID of the book you want to delete
    const bookId = 'your_book_id_here';

    const response = await axios.delete(`https://bookstore.toolsqa.com/BookStore/v1/Books/${bookId}`);

    expect(response.status).to.equal(204); // Ensure that the book was deleted successfully
  });
});
