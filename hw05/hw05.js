const studentList = [];

while (true) {
  const numList = Number(
    prompt(`Hãy nhập chức năng bạn muốn sử dụng bằng số.
  1. Thêm sinh viên mới
  2. Hiển thị danh sách sinh viên
  3. Xóa sinh viên theo ID
  4. Dừng chương trình
  `)
  );

  if (numList === 1) {
    let name = prompt("Hãy nhập tên sinh viên muốn thêm");
    let age = Number(prompt("Hãy nhập số tuổi của sinh viên"));
    let id = Number(prompt("Hãy nhập ID của sinh viên"));

    // check id đã tồn tại chưa
    let index = studentList.findIndex((num) => num.id === id);
    if (index !== -1) {
      id = Number(prompt("ID đã tồn tại. Hãy nhập ID khác"));
    }

    //khởi tạo object
    let student = {
      name: name,
      age: age,
      id: id,
    };

    //thêm object vào list
    studentList.push(student);
    displayList();
  } else if (numList === 2) {
    //in toàn bộ list
    displayList();
  } else if (numList === 3) {
    //nhập id sinh viên muốn xóa
    let id = Number(
      prompt("Hãy nhập ID của sinh viên bạn muốn xóa khỏi danh sách")
    );
    //check id tồn tại hay không
    let index = studentList.findIndex((num) => num.id === id);
    if (index === -1) {
      alert("ID không tồn tại");
    } else {
      studentList.splice(index, 1);
      displayList();
    }
  } else if (numList === 4) {
    //dừng chương trình
    break;
  } else {
    alert("Hãy nhập thao tác bạn muốn thực hiện!");
  }
}

function displayList() {
  console.log("Danh sách sinh viên:");
  for (const index in studentList) {
    console.log("Name:", studentList[index].name);
    console.log("Age:", studentList[index].age);
    console.log("ID:", studentList[index].id);
    console.log("-------------");
  }
}
