// disini membuat fungsi solve dan menerima argumen val
function Solve(val) {
  // ambil elemen HTML input dengan ID "res"
  let v = document.getElementById("res");
  // tambahan nilai argumen val ke nilai input
  v.value += val;
}

// disini membuat fungsi result() dan menerima argument apapun

function Result() {
  //ambil elemen HTMl input dengan id "res"
  let num1 = document.getElementById("res").value;
  // Evaluasi nilai elemen input sebagai expresi JS menggunakan fungsi eval()
  let num2 = eval(num1);
  // atur nilai element input menjadi hasil evaluasi
  document.getElementById("res").value = num2;
}

// disini membuat fungsi result() dan menerima argument apapun
function Clear() {
  // ambil elemen HTML input dengan ID "result"
  let input = document.getElementById("res");
  // bersihkan value pada elemen input
  input.value = "";
}

// disini membuat fungsi result() dan menerima argument apapun

function Back() {
  // ambil elemen HTML input dengan ID "res"
  let hapus = document.getElementById("res");
  // hapus character terakhir dari nilai elemen input
  hapus.value = hapus.value.slice(0, -1);
}
