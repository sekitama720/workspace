$(function() {
	let calcTax = function() {

		// 値の入力
		let price = $("#price").val() * 1;
		let taxRate = $("#taxRate").val() * 1;
		
		// 値の計算
		let taxAmount = Math.floor(price * taxRate / 100);
		let taxIncluded = parseInt(price,10) + parseInt(taxAmount,10);

		// 値の出力
		$("#taxAmount").val(taxAmount);
		$("#taxIncluded").val(taxIncluded);
	};
	
	// ボタンにイベントを追加
	$("#btnExec").click(calcTax);
});


//--------javascriptのみでの記述--------

// function calcTax(){
// 	let price = document.getElementById("price").value;
// 	let taxRate = document.getElementById("taxRate").value;

// 	let taxAmount = Math.floor(price * taxRate / 100);
// 	let taxIncluded = parseInt(price,10) + parseInt(taxAmount,10);

// 	document.getElementById("taxAmount").value = taxAmount;
// 	document.getElementById("taxIncluded").value = taxIncluded;
// }
// window.onload = function(){ 
// 	let el = document.getElementById("btnExec");
// 	el.addEventListener('click', calcTax,false);
// }