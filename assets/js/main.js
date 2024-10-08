// Coach theme scripts
!(function () {
  "use strict";
  var e = document.querySelectorAll(".needs-validation");
  Array.prototype.slice.call(e).forEach(function (e) {
    e.addEventListener(
      "submit",
      function (t) {
        e.checkValidity() || (t.preventDefault(), t.stopPropagation()), e.classList.add("was-validated");
      },
      !1
    );
  });
})(),
  $(document).ready(function () {
    if (
      ($(".menu-list").length && $(".menu-list").slimScroll({ height: "100%" }),
      $(".navbar-default").length &&
        $(window).scroll(function () {
          $(".navbar-default").offset().top > 50 ? $(".navbar-default").addClass("bg-primary") : $(".navbar-default").removeClass("bg-primary");
        }),
      $(".dropdown-menu a.dropdown-toggle").length &&
        $(".dropdown-menu a.dropdown-toggle").on("click", function (e) {
          return (
            $(this).next().hasClass("show") || $(this).parents(".dropdown-menu").first().find(".show").removeClass("show"),
            $(this).next(".dropdown-menu").toggleClass("show"),
            $(this)
              .parents("li.nav-item.dropdown.show")
              .on("hidden.bs.dropdown", function (e) {
                $(".dropdown-submenu .show").removeClass("show");
              }),
            !1
          );
        }),
      $("#scroll-nav a ").length &&
        $("#scroll-nav a").on("click", function () {
          if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var e = $(this.hash);
            if ((e = e.length ? e : $("[name=" + this.hash.slice(1) + "]")).length) return $("html, body").animate({ scrollTop: e.offset().top - 0 }, 1500), !1;
          }
        }),
      $(".sidebar-nav-fixed a").length &&
        $(".sidebar-nav-fixed a").click(function (e) {
          if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var t = $(this.hash);
            (t = t.length ? t : $("[name=" + this.hash.slice(1) + "]")).length &&
              (e.preventDefault(),
              $("html, body").animate({ scrollTop: t.offset().top - 90 }, 1e3, function () {
                var e = $(t);
                if ((e.focus(), e.is(":focus"))) return !1;
                e.attr("tabindex", "-1"), e.focus();
              }));
          }
          $(".sidebar-nav-fixed a").each(function () {
            $(this).removeClass("active");
          }),
            $(this).addClass("active");
        }),
      $("#program-date").length)
    ) {
      new Litepicker({ element: document.getElementById("program-date") });
    }
    if ($("#mapid").length) {
      var e = L.map("mapid").setView([51.505, -0.09], 13);
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 8, attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery Â© <a href="https://www.mapbox.com/">Mapbox</a>', id: "mapbox/streets-v11", tileSize: 512, zoomOffset: -1 }).addTo(e);
    }
    if (
      ($(".popup-youtube").length && $(".popup-youtube").magnificPopup({ disableOn: 700, type: "iframe", mainClass: "mfp-fade", removalDelay: 160, preloader: !1, fixedContentPos: !1 }),
      $('[data-bs-toggle="tooltip"]').length && $('[data-bs-toggle="tooltip"]').tooltip(),
      $('[data-bs-toggle="popover"]').length && $('[data-bs-toggle="popover"]').popover(),
      $("#price_ranger").length && $("#price_ranger").ionRangeSlider({ type: "double", grid: !0, min: 0, max: 40, from: 5, to: 32, prefix: "$" }),
      $(".cc-inputmask").length && $(".cc-inputmask").inputmask("9999 9999 9999 9999"),
      $(".cvv").length && $(".cvv").inputmask("999"),
      $('[href="#"]').length &&
        document.querySelectorAll('[href="#"]').forEach(function (e) {
          e.addEventListener("click", function (e) {
            e.preventDefault();
          });
        }),
      $("#liveAlertPlaceholder").length)
    ) {
      var t = document.getElementById("liveAlertPlaceholder"),
        a = document.getElementById("liveAlertBtn");
      a &&
        a.addEventListener("click", function () {
          var e, a, n;
          (e = "Nice, you triggered this alert message!"), (a = "success"), ((n = document.createElement("div")).innerHTML = '<div class="alert alert-' + a + ' alert-dismissible" role="alert">' + e + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'), t.append(n);
        });
    }
    if ($("#player").length) {
      const e = new Plyr("#player", {});
      window.player = e;
    }
    if ($("#player2").length) {
      new Plyr("#player2", {});
      window.player2 = player2;
    }
    if ($("#player3").length) {
      new Plyr("#player3", {});
      window.player3 = player3;
    }
  }),
  (function () {
    var e = window.location + "",
      t = e.replace(window.location.protocol + "//" + window.location.host + "/", "");
    $("ul#sidebarnav a")
      .filter(function () {
        return this.href === e || this.href === t;
      })
      .parentsUntil(".sidebar-nav")
      .each(function (e) {
        $(this).is("li") && 0 !== $(this).children("a").length ? ($(this).children("a").addClass("active"), $(this).parent("ul#sidebarnav").length, $(this).addClass("active")) : $(this).is("ul") || 0 !== $(this).children("a").length ? $(this).is("ul") && $(this).addClass("in") : $(this).addClass("active");
      });
  })();
