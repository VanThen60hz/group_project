class Book {
    constructor(id, name, year, numberOfBook, status) {
        this._id = id;
        this._name = name;
        this._numberOfBook = numberOfBook;
        this._status = status;
        this._year = year;
    }

    get year() {
        return this._year;
    }

    set year(value) {
        this._year = value;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get numberOfBook() {
        return this._numberOfBook;
    }

    set numberOfBook(value) {
        this._numberOfBook = value;
    }

    get status() {
        return this._status;
    }

    set status(value) {
        this._status = value;
    }
}

let book1 = new Book("12345", "Toán", "2000", "3", "Còn");
let book2 = new Book("23456", "Văn", "1998", "4", "Còn");
let book3 = new Book("37456", "Tiếng Anh", "1999", "0", "Hết");

let bookList = [book1, book2, book3];

function display(bookList) {
    let bang = '<table>' +
        '<tr>' +
        '<th>Mã số sách</th>' +
        '<th>Tên Sách</th>' +
        '<th>Năm xuất bản</th>' +
        '<th>Số quyển</th>' +
        '<th>Tình trạng</th>' +
        '</tr>'

    for (let i = 0; i < bookList.length; i++) {
        if (bookList[i].numberOfBook == 0) {
            bookList[i].status = "Hết";
        }else{
            bookList[i].status = "Còn";
        }
        bang += '<tr>' +
            '<td>' + bookList[i].id + '</td>' +
            '<td>' + bookList[i].name + '</td>' +
            '<td>' + bookList[i].year + '</td>' +
            '<td>' + bookList[i].numberOfBook + '</td>' +
            '<td>' + bookList[i].status + '</td>' +
            '</tr>'
    }
    bang += '</table>'

    document.getElementById('displayTable').innerHTML = bang;
}

display(bookList);

function themSachDaCo() {
    let name = prompt("Nhập tên sách");
    let num = +prompt("Nhập số lượng");

    for (let i = 0; i < bookList.length; i++) {
        if (bookList[i].name == name) {
            bookList[i].numberOfBook = parseInt(bookList[i].numberOfBook) + num;
            break
        }
    }
    display(bookList);
}

function ThemSachMoi() {
    // let id;
    // do {
    //     id = prompt("Nhập mã số sách: ");
    //     if (isNaN(id)) {
    //         alert("Mã số sách không hợp lệ");
    //     }
    // } while (isNaN(id))
    let id = prompt("Nhập mã số sách: ");

    let name = prompt("Nhập tên sách: ");

    // let year;
    // do {
    //     year = +prompt("Nhập năm xuất bản: ");
    //     if (year > 9999 || isNaN(year)) {
    //         alert("Năm xuất bản không hợp lệ.")
    //     }
    // } while (year > 9999 || isNaN(year));

    let year = prompt("Nhập năm xuất bản: ");

    // let numberOfBook;
    // do {
    //     numberOfBook = +prompt("Nhập số quyển: ");
    //     if (numberOfBook < 0||isNaN(numberOfBook)) {
    //         alert("Số quyển không hợp lệ.")
    //     }
    // } while (numberOfBook < 0||isNaN(numberOfBook));

    let numberOfBook = prompt("Nhập số quyển: ");

    let newBook = new Book(id, name, year, numberOfBook, status);
    bookList.push(newBook);
    display(bookList);
}

function muonSach() {
    let name = prompt("Nhập tên sách");
    let num = +prompt("Nhập số lượng");

    for (let i = 0; i < bookList.length; i++) {
        if (bookList[i].name == name) {
            if (bookList[i].numberOfBook < num) {
                alert("Không thể mượn sách vượt quá số lượng sách");
                break;
            } else {
                bookList[i].numberOfBook = parseInt(bookList[i].numberOfBook) - num;
                break
            }
        }
    }
    display(bookList);
}

function hienThiSachNhieuNhat() {
    let max = bookList[0].numberOfBook;
    for (let i = 1; i < bookList.length; i++) {
        if (bookList[i].numberOfBook > max) {
            max = bookList[i].numberOfBook;
        }
    }

    for (let i = 1; i < bookList.length; i++) {
        if (bookList[i].numberOfBook == max) {
            alert("Sách nhiều nhất là " + bookList[i].name + " gồm có: " + bookList[i].numberOfBook + " quyển.");
            break;
        }
    }
}

console.log("Trí stupid");