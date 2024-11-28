class BookService {
    constructor() {
        this.URI = 'http://localhost:3005/api/books'; // Cambia https por http
    }

    async getBooks() {
        const response = await fetch(this.URI);
        const book = await response.json();
        return book;
    }

    async postBooks(book) {
        try {
            const response = await fetch(this.URI, {
                method: 'POST',
                body: book,
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error posting book:', error.message);
        }
    }

    async deleteBooks(bookId) {
        const response = await fetch(`${this.URI}/${bookId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        console.log(data);
    }
}

export default BookService;