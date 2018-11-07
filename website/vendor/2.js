$( document ).ready(function() {
		$("#check").change(function() {
		    if(this.checked) {
		        $('#dayEnd').addClass("showInput");
		    }else {
		    	$('#dayEnd').removeClass("showInput");
		    }
		});
		$('.lienhe-header').on('click', function(e) {
			$('.lienhe').toggleClass("show-lienhe");
		});


e.preventDefault();
})
function locationStart(number){
		var arrStart = ['Hà Nội','Hải Phòng','Điện Biên','Thanh Hóa','Vinh','Huế','Đồng Hới','Đà Nẵng','Tuy Hòa','Hồ Chí Minh','Nha Trang','Đà Lạt','Phú Quốc','Qui Nhơn','Tam Kỳ','Cần Thơ','Côn Đảo','Ban Mê Thuột','Cà Mau','Vientiane','Osaka','Tokyo','Thượng Hải','Quảng Châu','Bắc Kinh'];
		var localtionStart = document.getElementById('localtionStart');
		localtionStart.value = arrStart[number] ;
}

function locationEnd(number){
		var arrStart = ['Hà Nội','Hải Phòng','Điện Biên','Thanh Hóa','Vinh','Huế','Đồng Hới','Đà Nẵng','Tuy Hòa','Hồ Chí Minh','Nha Trang','Đà Lạt','Phú Quốc','Qui Nhơn','Tam Kỳ','Cần Thơ','Côn Đảo','Ban Mê Thuột','Cà Mau','Vientiane','Osaka','Tokyo','Thượng Hải','Quảng Châu','Bắc Kinh'];
		var locationEnd = document.getElementById('locationEnd');
		locationEnd.value = arrStart[number] ;
}

function chairRank(number){
		var arrStart = ['Economy','Business','First Class'];
		var chairRank = document.getElementById('chairRank');
		chairRank.value = arrStart[number] ;
}