
// tạo array 
var arrNumber = [];
// function thêm số vào array 
function addNumber() {
    var themNumber = +document.querySelector("#themNumber").value; 
    arrNumber.push(themNumber);
    document.querySelector("#arrNumber").innerHTML = `${arrNumber}`;
    return arrNumber;
};
// function xóa số cuối cùng trong array 
function popNumber() {
    arrNumber.pop();
    document.querySelector("#arrNumber").innerHTML = `${arrNumber}`;
    return arrNumber;
}
// Bấm button thêm số 
document.querySelector("#addNumber").onclick = function() {
    addNumber();
    document.querySelector("#themNumber").value = '';
}
// Bấm button xóa số
document.querySelector("#popNumber").onclick = function() {
    popNumber();
}

// Start Method
/**
* Tính tổng số dương trong mảng
* @mang (*) array truyền vào
* @return tổng của array
*/
function sumArray(mang){
    let sum = 0;
    for (let i = 0; i < mang.length; i++){
        sum += mang[i];
    }
    return sum;
}

/**
* Hàm nầy lọc số dương trong mảng
* @mang (*) array truyền vào
* @return array chứa số dương
*/
function filterSoDuong(mang){
    var mangSoDuong = [];
    for (let i = 0; i <= mang.length; i++) {
        if (mang[i] > 0) {
            mangSoDuong.push(mang[i]);
        }
    };
    return mangSoDuong;
}

/**
* Hàm nầy đếm số lượng phần tử trong mảng
* @mang (*) array truyền vào
* @return số lượng phần tử trong mảng
*/
function countPhanTuArray(mang) {
    var count = mang.length;
    return count;
};

/**
 * hàm nầy nhận vào một mảng và trả về chỉ số index của số nhỏ nhứt
 * @param input {*} arr mảng được truyền vào để lấy vị trí của số nhỏ nhứt
 * @returns index của số nhỏ nhứt trong mảng
 */
function findIndexMin(arr) {
    var indexMin = 0;
    var min = arr[0];

    for(var i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
            indexMin = i;
        }
    };
    return indexMin;
};

/**
* Sắp xếp tăng dần
* @arr (*) mảng cần sắp xếp tăng dần
* @return : mảng mới đã được sắp xếp
*/
function tangDan(arr) {
    var arrTangDan = arr.sort(function (pt2, pt1) {
        // if (pt2 < pt1) {
        //     return -1;
        // }
        // return 1;
        return pt2 - pt1;
     });
     return arrTangDan;
};

/**
  * hàm kiểm tra số nguyên tố
  * @param (n): số truyền vào kiểm tra có phải số nguyên tố hay không
  * @return true hoặc false
  */
function kiem_tra_snt(n)
{
    // Biến cờ hiệu
    var flag = true;

    // Nếu n bé hơn 2 tức là không phải số nguyên tố
    if (n < 2) {
        flag = false;
    }
    else if (n == 2) {
        flag = true;
    }
    else if (n % 2 == 0) {
        flag = false;
    }
    else {
        // lặp từ 3 tới n-1 với bước nhảy là 2 (i+=2)
        for (var i = 3; i <= (n - 1); i += 2)
        {
            if (n % i == 0) {
                flag = false;
                break;
            }
        }
    }
    
    return flag;
};

/**
* Hàm nầy để đếm số nguyên trong mảng
* @arr (*) mảng cần đếm số nguyên
* @return count: số lượng số nguyên trong mảng
*/
function countSoNguyen(arr) {
    var count = 0;
    for (i = 0; i <= arr.length; i++) {
        if (Number.isInteger(arr[i])) {
            count++;
        };
    };
    return count;
};

/**
* Hàm nầy đếm số dương trong mảng
* @arr (*) mảng cần đếm số dương
* @return count: số lượng số dương trong mảng
*/
function countSoDuong(arr) {
    var count = 0;
    for (i = 0; i <= arr.length; i++) {
        if (arr[i] > 0) {
            count++;
        };
    };
    return count;
};

/**
* Hàm nầy đếm số âm trong mảng
* @arr (*) mảng cần đếm số âm
* @return count: số lượng số âm trong mảng
*/
function countSoAm(arr) {
    var count = 0;
    for (i = 0; i <= arr.length; i++) {
        if (arr[i] < 0) {
            count++;
        };
    };
    return count;
};

//End Method

/*-------Bài 1-------
Tính tổng số dương
B1: thêm mảng mới chứa tất cả số dương trong mảng người dùng nhập vào
B2: tính tổng các giá trị trong mảng mới
B3: xuất ra html */


function handleSum() {
    var arrSoDuong = filterSoDuong(arrNumber);
    var tongSoDuong = sumArray(arrSoDuong);
    document.querySelector("#resultSum").innerHTML = `Tổng số dương bằng: ${tongSoDuong}.`;
};
document.querySelector("#handleSum").onclick = function() {
    handleSum();
};

/*-------Bài 2-------
Đếm số dương
B1: thêm mảng mới chứa tất cả số dương trong mảng người dùng nhập vào
B2: Đếm số lượng phần tử trong mảng mới
B3: xuất ra html */

function handleCount() {
    var arrSoDuong = filterSoDuong(arrNumber);
    var soPhanTu = countPhanTuArray(arrSoDuong);
    document.querySelector("#resultCount").innerHTML = `Số lượng số dương trong mảng là: ${soPhanTu}.`;
};
document.querySelector("#handleCount").onclick = function() {
    handleCount();
};

/*-------Bài 3-------
Tìm số nhỏ nhứt
B1: thêm biến chứa giá trị nhỏ nhứt
B2: Dùng vòng lặp for duyệt mảng
B3: xuất ra html */

function handleMin() {
    var numberMin = arrNumber[findIndexMin(arrNumber)];
    
    document.querySelector("#resultMin").innerHTML = `Số nhỏ nhứt là: ${numberMin}.`;
};
document.querySelector("#handleMin").onclick = function() {
    handleMin();
};

/*-------Bài 4-------
Tìm số dương nhỏ nhứt
B1: thêm mảng chứa số dương từ mảng nhập vào, thêm biến chứa số dương nhỏ nhứt
B2: Dùng vòng lặp for duyệt mảng
B3: xuất ra html */

function handleSoDuongMin() {
    var mangSoDuong = filterSoDuong(arrNumber);
    if (mangSoDuong.length === 0) {
        document.querySelector("#resultSoDuongMin").innerHTML = `Không có số dương`; 
        return;
    } else {
        var soDuongMin = mangSoDuong[findIndexMin(mangSoDuong)];
        document.querySelector("#resultSoDuongMin").innerHTML = `Số dương nhỏ nhứt là: ${soDuongMin}.`; 
    };
};
document.querySelector("#handleSoDuongMin").onclick = function() {
    handleSoDuongMin();
};

/*-------Bài 5-------
Tìm số chẵn cuối cùng
B1: Tạo 1 biến chứa số chẵn cuối cùng
B2: Dùng vòng lặp duyệt mảng và kiểm tra số chẵn. Nếu là số chẵn thì gán vào biến.
B3: xuất ra html */

function handleLastEven() {
    var numLastEven = 0;
    for (i = 0; i <= arrNumber.length; i++) {
        if (arrNumber[i] % 2 === 0) {
            numLastEven = arrNumber[i];
        };
    };
    if (numLastEven === 0) {
        document.querySelector("#resultLastEven").innerHTML = `Mảng không có số chẵn.`;
        
    } else {
        document.querySelector("#resultLastEven").innerHTML = `Số chẵn cuối cùng là: ${numLastEven}.`;
    };
};
document.querySelector("#handleLastEven").onclick = function() {
    handleLastEven();
};

/*-------Bài 6-------
Đổi vị trí index
B1: Tạo 2 biến nhận giá trị index người dùng nhập vào, 2 biến là giá trị của phân tử tại vị trí index do người dùng nhập trong mảng
B2: Hoán đổi giá trị của 2 phần tử trong mảng
B3: xuất ra html */

function handleChangePosition() {
    var index1 = +document.querySelector("#index1").value;
    var index2 = +document.querySelector("#index2").value;
    var value1 = arrNumber[index1];
    var value2 = arrNumber[index2];
    if (value1 == undefined) {
        document.querySelector("#resultNewArray").innerHTML = `Giá trị index ${index1} không tìm thấy.`;
        return;
    } else if (value2 == undefined) {
        document.querySelector("#resultNewArray").innerHTML = `Giá trị index ${index2} không tìm thấy.`;
        return;
    } else {
        arrNumber[index1] = value2;
        arrNumber[index2] = value1;
        document.querySelector("#resultNewArray").innerHTML = `Mảng mới là: ${arrNumber}`;
    };
};

document.querySelector("#handleChangePosition").onclick = function() {
    handleChangePosition();
};

/*-------Bài 7-------
Sắp xếp tăng dần
B1: Tạo 1 mảng chứa mảng được sắp xếp tăng dần
B2: dùng hàm sort
B3: xuất ra html */
function handleTangDan() {
    var arrTangDan = tangDan(arrNumber);
    document.querySelector("#resultTangDan").innerHTML = `${arrTangDan}`;
};
document.querySelector("#handleTangDan").onclick = function() {
    handleTangDan();
};

/*-------Bài 8-------
Tìm số nguyên tố đầu tiên
B1: Tạo 1 biến chứa số nguyên tố đầu tiên
B2: dùng hàm for kiểm tra mỗi phần tử có phải số nguyên tố không, nếu gặp trường hợp true break ra ngay, nếu không có
in ra không có số nguyên tố trong hàm
B3: xuất ra html */
function handleSoNguyenTo() {
    for (i = 0; i < arrNumber.length; i++) {
        var n = arrNumber[i];  
            if (kiem_tra_snt(n) && Number.isInteger(n)) {
                document.querySelector("#resultSoNguyenToDauTien").innerHTML = `Số nguyên tố đầu tiên là: ${n}.`;
                break;
            } 
            document.querySelector("#resultSoNguyenToDauTien").innerHTML = `Không có số nguyên tố trong hàm.`;
    };
};
document.querySelector("#handleSoNguyenTo").onclick = function() {
    handleSoNguyenTo();
}

/*-------Bài 9-------
Đếm số nguyên
B1: Tạo 1 biến count đếm số nguyên
B2: dùng hàm for kiểm tra mỗi phần tử có phải số nguyên không, nếu có tăng biến count 1 đơn vị, nếu không thì thôi.
B3: xuất ra html */

function handleCountSoNguyen() {
    var count = countSoNguyen(arrNumber);
    if (count === 0) {
        document.querySelector("#resultCountSoNguyen").innerHTML = `Mảng không có số nguyên.`;
    } else {
        document.querySelector("#resultCountSoNguyen").innerHTML = `Mảng có ${count} số nguyên.`;
    };
};
document.querySelector("#handleCountSoNguyen").onclick = function() {
    handleCountSoNguyen();
};
/*-------Bài 10-------
So sánh số âm và số dương
B1: Tạo 2 biến count số âm và số dương trong mảng
B2: dùng hàm for kiểm tra mỗi phần tử là số âm hay só dương, nếu có tăng biến count 1 đơn vị, nếu không thì thôi.
So sánh 2 biến.
B3: xuất ra html */
function handleSoSanhAmDuong() {
    var soDuong = countSoDuong(arrNumber);
    var soAm = countSoAm(arrNumber);
    if (soDuong === soAm) {
        document.querySelector("#resultSoSanh").innerHTML = `Số lượng số dương và số âm bằng nhau.`;
    } else if (soDuong > soAm) {
        document.querySelector("#resultSoSanh").innerHTML = `Số lượng số dương > số lượng số âm.`;
    } else if (soDuong < soAm) {
        document.querySelector("#resultSoSanh").innerHTML = `Số lượng số dương < số lượng số âm.`;
    };
};
document.querySelector("#handleSoSanhAmDuong").onclick = function() {
    handleSoSanhAmDuong();
}
