const bookList = [];

while (true) {
  const inputNum = Number(
    prompt(`
  --- QUẢN LÝ SÁCH ---
  
  1. Thêm sách mới
  
  2. Hiển thị danh sách
  
  3. Tìm kiếm sách theo tên
  
  4. Xóa sách theo ID
  
  5. Thoát chương trình
  
  Nhập lựa chọn của bạn:
  `)
  );

  if (inputNum === 1) {
    //Thêm sách mới
    let id = Number(prompt("Hãy nhập ID sách muốn thêm"));
    let name = prompt("Hãy nhập tên sách");
    let author = prompt("Hãy nhập tên tác giả");
    let year = Number(prompt("Hãy nhập năm xuất bản"));

    let index = bookList.findIndex((num) => num.id === id);
    if (index !== -1) {
      alert("ID đã tồn tại. Hãy nhập ID khác!");
      id = Number(prompt("Hãy nhập ID sách muốn thêm"));
    }

    let bookInfo = {
      id: id,
      name: name,
      author: author,
      year: year,
    };
    bookList.push(bookInfo);
    displayList();
  } else if (inputNum === 2) {
    //Hiển thị danh sách
    displayList();
  } else if (inputNum === 3) {
    //Tìm kiếm sách theo tên
    let searchKey = prompt("Hãy nhập từ khóa bạn muốn tìm");
    let languageSetup = bookList.filter((item) => item.name.toLowerCase().includes(searchKey.toLowerCase()));
    if (languageSetup.length > 0) {
      console.log(
        `Sách liên quan: ${languageSetup.map((item) => item.name).join(", ")}`
      );
    } else {
      console.log("Không có thông tin sách");
    }
  } else if (inputNum === 4) {
    //Xóa sách theo id
    let searchId = Number(prompt("Hãy nhập ID của sách muốn xóa"));
    let index = bookList.findIndex((num) => num.id === searchId);
    if (index === -1) {
      alert("ID không tồn tại");
    } else {
      bookList.splice(index, 1);
      displayList();
    }
  } else if (inputNum === 5) {
    //Thoát chương trình
    break;
  } else {
    alert("Hãy nhập thao tác bạn mong muốn");
  }
}

function displayList() {
  console.log("***** Thư viện sách *****");
  for (const index in bookList) {
    console.log(`ID: ${bookList[index].id}`);
    console.log(`Name: ${bookList[index].name}`);
    console.log(`Author: ${bookList[index].author}`);
    console.log(`Year: ${bookList[index].year}`);
    console.log("~~~~~~~~~~~~~~~~");
  }
  console.log("----------------");
}
