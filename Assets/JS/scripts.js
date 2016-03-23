$(document).ready(function(){
  'use strict';

  //show clothing dropdown on hover
  $('.site-header-clothing-accessories').hover( function(){
    $('.site-header-clothing-dropdown').toggleClass('show');
  });
  //persist clothing dropdown
  $('.site-header-clothing-dropdown').hover(function(){
    $('.site-header-clothing-dropdown').toggleClass('show');
    $('.clothing-middle-nav-1').show();
    $('.site-header-clothing-accessories').css('border-bottom','3px', '#f56400');
  });
  //show the proper middle nav on hover
  $('.clothing-left-link-1').hover(function(){
    $('.clothing-middle-nav-1').show();
    $('.clothing-middle-nav-2').hide();
    $('.clothing-middle-nav-3').hide();
  });
  $('.clothing-left-link-2').hover(function(){
    $('.clothing-middle-nav-2').show();
    $('.clothing-middle-nav-1').hide();
    $('.clothing-middle-nav-3').hide();
  });
  $('.clothing-left-link-3').hover(function(){
    $('.clothing-middle-nav-3').show();
    $('.clothing-middle-nav-1').hide();
    $('.clothing-middle-nav-2').hide();
  });



  //show jewelry dropdown on hover
  $('.site-header-jewelry').hover( function(){
  $('.site-header-jewelry-dropdown').toggleClass('show');
  });
  //persist jewelry dropdown
  $('.site-header-jewelry-dropdown').hover( function(){
  $('.site-header-jewelry-dropdown').toggleClass('show');
  $('.jewelry-middle-nav-1').show();
  });
  //show the proper middle nav on hover
  $('.jewelry-left-link-1').hover(function(){
  $('.jewelry-middle-nav-1').show();
  $('.jewelry-middle-nav-2').hide();
  $('.jewelry-middle-nav-3').hide();
  });
  $('.jewelry-left-link-2').hover(function(){
  $('.jewelry-middle-nav-2').show();
  $('.jewelry-middle-nav-1').hide();
  $('.jewelry-middle-nav-3').hide();
  });
  $('.jewelry-left-link-3').hover(function(){
  $('.jewelry-middle-nav-3').show();
  $('.jewelry-middle-nav-1').hide();
  $('.jewelry-middle-nav-2').hide();
  });

  //show craft dropdown on hover
  $('.site-header-craft-supplies').hover( function(){
    $('.site-header-craft-dropdown').toggleClass('show');
  });
  //persist craft dropdown
  $('.site-header-craft-dropdown').hover( function(){
    $('.site-header-craft-dropdown').toggleClass('show');
    $('.craft-middle-nav-1').show();
    });
    //show the proper middle nav on hover
    $('.craft-left-link-1').hover(function(){
    $('.craft-middle-nav-1').show();
    $('.craft-middle-nav-2').hide();
    $('.craft-middle-nav-3').hide();
    });
    $('.craft-left-link-2').hover(function(){
    $('.craft-middle-nav-2').show();
    $('.craft-middle-nav-1').hide();
    $('.craft-middle-nav-3').hide();
    });
    $('.craft-left-link-3').hover(function(){
    $('.craft-middle-nav-3').show();
    $('.craft-middle-nav-1').hide();
    $('.craft-middle-nav-2').hide();
    });


  //show wedding dropdown on hover
  $('.site-header-weddings').hover( function(){
    $('.site-header-wedding-dropdown').toggleClass('show');
  });
  //persist wedding dropdown
  $('.site-header-wedding-dropdown').hover( function(){
    $('.site-header-wedding-dropdown').toggleClass('show');
    $('.wedding-middle-nav-1').show();
    });
    //show the proper middle nav on hover
    $('.wedding-left-link-1').hover(function(){
    $('.wedding-middle-nav-1').show();
    $('.wedding-middle-nav-2').hide();
    $('.wedding-middle-nav-3').hide();
    });
    $('.wedding-left-link-2').hover(function(){
    $('.wedding-middle-nav-2').show();
    $('.wedding-middle-nav-1').hide();
    $('.wedding-middle-nav-3').hide();
    });
    $('.wedding-left-link-3').hover(function(){
    $('.wedding-middle-nav-3').show();
    $('.wedding-middle-nav-1').hide();
    $('.wedding-middle-nav-2').hide();
    });


  //show entertainment dropdown on hover
  $('.site-header-entertainment').hover( function(){
    $('.site-header-entertainment-dropdown').toggleClass('show');
  });
  //persist entertainment dropdown
  $('.site-header-entertainment-dropdown').hover( function(){
    $('.site-header-entertainment-dropdown').toggleClass('show');
    $('.entertainment-middle-nav-1').show();
    });
    //show the proper middle nav on hover
    $('.entertainment-left-link-1').hover(function(){
    $('.entertainment-middle-nav-1').show();
    $('.entertainment-middle-nav-2').hide();
    $('.entertainment-middle-nav-3').hide();
    });
    $('.entertainment-left-link-2').hover(function(){
    $('.entertainment-middle-nav-2').show();
    $('.entertainment-middle-nav-1').hide();
    $('.entertainment-middle-nav-3').hide();
    });
    $('.entertainment-left-link-3').hover(function(){
    $('.entertainment-middle-nav-3').show();
    $('.entertainment-middle-nav-1').hide();
    $('.entertainment-middle-nav-2').hide();
    });


  //show home & living dropdown on hover
  $('.site-header-home-living').hover( function(){
    $('.site-header-living-dropdown').toggleClass('show');
  });
  //persist home & living dropdown
  $('.site-header-living-dropdown').hover( function(){
    $('.site-header-living-dropdown').toggleClass('show');
    $('.living-middle-nav-1').show();
    });
    //show the proper middle nav on hover
    $('.living-left-link-1').hover(function(){
    $('.living-middle-nav-1').show();
    $('.living-middle-nav-2').hide();
    $('.living-middle-nav-3').hide();
    });
    $('.living-left-link-2').hover(function(){
    $('.living-middle-nav-2').show();
    $('.living-middle-nav-1').hide();
    $('.living-middle-nav-3').hide();
    });
    $('.living-left-link-3').hover(function(){
    $('.living-middle-nav-3').show();
    $('.living-middle-nav-1').hide();
    $('.living-middle-nav-2').hide();
    });



  //show kids dropdown on hover
  $('.site-header-kids-baby').hover(function(){
    $('.site-header-kids-dropdown').toggleClass('show');
  });
  //persist kids dropdown
  $('.site-header-kids-dropdown').hover(function(){
    $('.site-header-kids-dropdown').toggleClass('show');
    $('.kids-middle-nav-1').show();
    });
    //show the proper middle nav on hover
    $('.kids-left-link-1').hover(function(){
    $('.kids-middle-nav-1').show();
    $('.kids-middle-nav-2').hide();
    $('.kids-middle-nav-3').hide();
    });
    $('.kids-left-link-2').hover(function(){
    $('.kids-middle-nav-2').show();
    $('.kids-middle-nav-1').hide();
    $('.kids-middle-nav-3').hide();
    });
    $('.kids-left-link-3').hover(function(){
    $('.kids-middle-nav-3').show();
    $('.kids-middle-nav-1').hide();
    $('.kids-middle-nav-2').hide();
    });

  //show vintage dropdown on hover
  $('.site-header-vintage').hover(function(){
    $('.site-header-vintage-dropdown').toggleClass('show');
  })
  //persist vintage dropdown
  $('.site-header-vintage-dropdown').hover(function(){
    $('.site-header-vintage-dropdown').toggleClass('show');
    $('.vintage-middle-nav-1').show();
    });
    //show the proper middle nav on hover
    $('.vintage-left-link-1').hover(function(){
    $('.vintage-middle-nav-1').show();
    $('.vintage-middle-nav-2').hide();
    $('.vintage-middle-nav-3').hide();
    });
    $('.vintage-left-link-2').hover(function(){
    $('.vintage-middle-nav-2').show();
    $('.vintage-middle-nav-1').hide();
    $('.vintage-middle-nav-3').hide();
    });
    $('.vintage-left-link-3').hover(function(){
    $('.vintage-middle-nav-3').show();
    $('.vintage-middle-nav-1').hide();
    $('.vintage-middle-nav-2').hide();
    });

});
