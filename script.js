    function openMenu() {
      document.querySelector('.hamburger-area').style.display = 'block';
      document.querySelector('.open-menu-button').style.display= "none";
      document.querySelector('.close-menu-button').style.display= "block";
    }

    function closeMenu() {
      document.querySelector('.open-menu-button').style.display= "block";
      document.querySelector('.hamburger-area').style.display= "none";
      document.querySelector('.close-menu-button').style.display= "none";
    }


    function showAbout() {
      document.getElementById("aboutPanel").classList.add("show");
    }

    function hideAbout() {
      document.getElementById("aboutPanel").classList.remove("show");
    }

    function showProyek() {
      document.getElementById("proyekPanel").classList.add("show");
    }

    function hideProyek() {
      document.getElementById("proyekPanel").classList.remove("show");
    }

    function showClient() {
      document.getElementById("clientPanel").classList.add("show");
    }

    function hideClient() {
      document.getElementById("clientPanel").classList.remove("show");
    }

    function showAffiliate() {
      document.getElementById("affiliatePanel").classList.add("show");
    }

    function hideAffiliate() {
      document.getElementById("affiliatePanel").classList.remove("show");
    }

    function checkWidth() {
      const button = document.querySelector('.open-menu-button');
      if (window.innerWidth <= 768) {
        button.style.display = 'block';
      } else {
        button.style.display = 'none';
      }
    }

    // Jalankan terus setiap 100ms
    setInterval(checkWidth, 100);
