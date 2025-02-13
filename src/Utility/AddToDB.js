// Find all the books form the db those books have already stored in the read list 
const getStoredReadList = () => {                                    //store data to local storage
    //read list                                                // local storage data is stored in string format
    const storeListString = localStorage.getItem('readList'); //get data from local storage
    //if read list is empty then return empty array
    if(storeListString){
        const storeList = JSON.parse(storeListString);
        return storeList;
    }
    else{
        return [];
    }
}

// Add book to the read list

const addBookToReadList = (id) => {
    // Check if the book is already in the read list
    //if (!getStoredReadList().includes(bookId)) {
        // Add the book to the read list
        //...
    //}

    const readList = getStoredReadList();
    if(readList.includes(id)){
        console.log(id, "This book is already in your read list");
    }
    else {
        readList.push(id);
        const storeListString = JSON.stringify(readList);
        localStorage.setItem("readList", storeListString);
        console.log("Book added to read list");
    }

}

// Remove book from the read list






export {  addBookToReadList };