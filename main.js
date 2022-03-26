var output_arr = [];
document.querySelector("#btn_arr").addEventListener("click", function () {
  const input_arr = document.querySelector("#input_arr");
  output_arr.push(input_arr.value * 1);
  console.log(output_arr);
  input_arr.value = "";
  input_arr.focus();
  document.querySelector(".output_arr").innerHTML = output_arr.join(", ");
});

// tính tổng các số dương trong mảng
let sum_positive_number = 0;
document.querySelector(".bai1 .btn").addEventListener("click", function () {
  for (let i = 0; i < output_arr.length; i++) {
    if (output_arr[i] > 0) {
      sum_positive_number += output_arr[i];
    }
  }
  document.querySelector(".bai1 .output_bai1").innerHTML =
    "Tổng số dương trong mảng là: " + sum_positive_number;
  setTimeout(function () {
    sum_positive_number = 0;
  }, 1000);
});

// đếm các số dương có trong mảng
let count_positive_number = 0;
document.querySelector(".bai2 .btn").addEventListener("click", function () {
  for (let i = 0; i < output_arr.length; i++) {
    if (output_arr[i] > 0) {
      count_positive_number++;
    }
  }
  document.querySelector(".bai2 .output_bai2").innerHTML =
    "Số dương trong mảng là: " + count_positive_number;
  setTimeout(function () {
    count_positive_number = 0;
  }, 1000);
});

// tìm số nhỏ nhất trong mảng
let min_number = 0;
document.querySelector(".bai3 .btn").addEventListener("click", function () {
  min_number = output_arr[0];
  for (let i = 0; i < output_arr.length; i++) {
    if (output_arr[i] < min_number) {
      min_number = output_arr[i];
    }
  }
  document.querySelector(".bai3 .output_bai3").innerHTML =
    "Số nhỏ nhất trong mảng là: " + min_number;
  setTimeout(function () {
    min_number = 0;
  }, 1000);
});

// tìm số dương nhỏ nhất trong mảng
let min_number_positive = 1;
document.querySelector(".bai4 .btn").addEventListener("click", function () {
  min_number_positive = output_arr[0];

  for (let i = 0; i < output_arr.length; i++) {
    if (output_arr[i] > 0 && output_arr[i] < min_number_positive) {
      min_number_positive = output_arr[i];
    }
  }
  document.querySelector(".bai4 .output_bai4").innerHTML =
    "Số dương nhỏ nhất trong mảng là: " + min_number_positive;
  setTimeout(function () {
    min_number_positive = 1;
  }, 1000);
});

// tìm số chẵn cuối cùng trong mảng
let even_number_final = -1;
document.querySelector(".bai5 .btn").addEventListener("click", () => {
  for (let i = 0; i < output_arr.length; i++) {
    if (output_arr[i] % 2 === 0) {
      even_number_final = output_arr[i];
    }
  }
  document.querySelector(".bai5 .output_bai5").innerHTML =
    "Số chẵn cuối cùng trong mảng là: " + even_number_final;
  setTimeout(function () {
    even_number_final = -1;
  }, 1000);
});

// đổi thứ tự 2 số trong mảng
document.querySelector(".bai6 .btn").addEventListener("click", () => {
  const vitri1 = document.querySelector(" #vitri1").value * 1;
  const vitri2 = document.querySelector(" #vitri2").value * 1;
  if (
    vitri1 >= output_arr.length ||
    vitri2 >= output_arr.length ||
    vitri1 == vitri2
  ) {
    alert("Vị trí không hợp lệ, mời nhập lại!");
  }
  let value_vitri1_in_arr = output_arr[vitri1 - 1];
  let value_vitri2_in_arr = output_arr[vitri2 - 1];
  output_arr[vitri1 - 1] = value_vitri2_in_arr;
  output_arr[vitri2 - 1] = value_vitri1_in_arr;
  document.querySelector(".bai6 .output_bai6").innerHTML =
    output_arr.join(", ");
});
//sắp xếp mảng theo thứ tự tăng dần
document.querySelector(".bai7 .btn").onclick = () => {
  let clone_output_arr = [...output_arr];
  clone_output_arr.sort((a, b) => a - b);
  document.querySelector(".bai7 .output_bai6").innerHTML =
    clone_output_arr.join(", ");
};

// Tìm số nguyên tố đầu tiên trong mảng
let SoNguyenTo_firts = -1;
document.querySelector(".bai8 .btn").onclick = () => {
  let arr_mang_nguyen_to = taoMangSoNguyenTo(number_max());
  for (let i = 0; i < arr_mang_nguyen_to.length; i++) {
    for (let a = 0; a < output_arr.length; a++) {
      if (output_arr[a] == arr_mang_nguyen_to[i]) {
        SoNguyenTo_firts = output_arr[a];
        break;
      }
    }

    if (SoNguyenTo_firts > 0) break;
  }
  document.querySelector(".bai8 .output_bai6").innerHTML =
    "Số nguyên tố đầu tiên trong mảng là: " + SoNguyenTo_firts;
};

function number_max() {
  let max_positive_number_qrr = 0;

  // tìm số lớn nhất trong mảng
  for (let i = 0; i < output_arr.length; i++) {
    max_positive_number_qrr = output_arr[0];
    if (output_arr[i] > max_positive_number_qrr) {
      max_positive_number_qrr = output_arr[i];
    }
  }
  return max_positive_number_qrr;
}

function taoMangSoNguyenTo(input) {
  let arr_so_nguyen_to = [];
  let arr_not_songuyento = [];
  let arrInput = [2];

  if (input < 100) {
    for (let i = 3; i <= input; i += 2) {
      arrInput.push(i);
      for (let a = 3; a < i; a++) {
        if (i % a === 0) {
          arr_not_songuyento.push(i);
          break;
        }
      }
    }
  } else {
    for (let i = 3; i <= input; i += 2) {
      arrInput.push(i);
      for (let a = 3; a <= Math.sqrt(i); a++) {
        if (i % a === 0) {
          arr_not_songuyento.push(i);
          break;
        }
      }
    }
  }

  if (input < 9) {
    arr_so_nguyen_to = arrInput;
  }

  for (let i = 0; i < arrInput.length; i++) {
    for (a = 0; a < arr_not_songuyento.length; a++) {
      if (arrInput[i] === arr_not_songuyento[a]) {
        arrInput.splice(i, 1);
        arr_so_nguyen_to = arrInput;
      }
    }
  }
  return arr_so_nguyen_to;
}

// Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên
let arr_real_number_created = [];
let arr_final = [];
document.querySelector(".bai9 .them").onclick = function (e) {
  e.preventDefault();
  const add_real_number = document.querySelector("#add_real_number");
  const arr_real_number = document.querySelector(".arr_real_number");
  arr_real_number_created.push(add_real_number.value * 1);
  arr_final = output_arr.concat(arr_real_number_created);
  add_real_number.value = "";
  add_real_number.focus();
  arr_real_number.innerHTML =
    "Dãy số thực được tạo mới là: " +
    arr_final.join(", ") +
    " (bao gồm dãy số đã tạo bên trên)";
};

document.querySelector(".bai9 .btn-warning").onclick = () => {
  let count_integer = 0;
  for (let i = 0; i < arr_final.length; i++) {
    if (arr_final[i] % 1 == 0) {
      count_integer++;
    }
  }
  document.querySelector(
    ".bai9 .output_bai6"
  ).innerHTML = `Trong mảng có ${count_integer} số nguyên!`;
};

// so sánh số lượng số dương và số âm có trong mảng
document.querySelector(".bai10 .btn").onclick = () => {
  let count_number_positive = 0;
  let count_number_negative = 0;

  for (let i = 0; i < output_arr.length; i++) {
    if (output_arr[i] !== 0) {
      output_arr[i] > 0 ? count_number_positive++ : count_number_negative++;
    }
  }
  const output = document.querySelector(".bai10 .output_bai6");
  if (count_number_negative === count_number_positive) {
    output.innerHTML = "Số lượng số âm bằng số dương";
    return;
  }
  count_number_positive > count_number_negative
    ? (output.innerHTML = "Số lượng số dương nhiều hơn số âm")
    : (output.innerHTML = "Số lượng số âm nhiều hơn số dương");
};
