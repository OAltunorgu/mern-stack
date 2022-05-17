import React from 'react'

export default function AddBook({ book, handleChange, addBook }) {
    return (
        <div>
            <div className="container w-50 mt-5 border border-secondary">
                <form style={{ padding: "20px 20px 10px 20px" }}>
                    <div className="form-floating mb-3">
                        <input type="text" value={book.bookName} onChange={handleChange} name="bookName" className="form-control" id="floatingInput" placeholder="Book Name" />
                        <label htmlFor="floatingInput">Book Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" value={book.author} onChange={handleChange} name="author" className="form-control" id="floatingInput" placeholder="Author" />
                        <label htmlFor="floatingInput">Author</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="number" value={book.quantity} onChange={handleChange} name="quantity" className="form-control" id="floatingInput" placeholder="Quantity" />
                        <label htmlFor="floatingInput">Quantity</label>
                    </div>
                    <div className="form-floating mb-3">
                        <select className="form-select" value={book.department} onChange={handleChange} id="floatingSelect" name="department" aria-label="Floating label select example">
                            <option value="History & Criticism">History & Criticism</option>
                            <option value="Religious">Religious</option>
                            <option value="Music">Music</option>
                            <option value="Study & Teaching">Study & Teaching</option>
                        </select>
                        <label htmlFor="floatingSelect">Select Book Department</label>
                    </div>
                    <div className="form-floating mb-3">
                        <textarea className="form-control" value={book.comments} onChange={handleChange} name="comments" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                        <label htmlFor="floatingTextarea">Comments</label>
                    </div>
                    <button type="button" onClick={addBook} className="btn btn-primary">Add Book</button>
                </form>
            </div>
        </div>
    )
}
