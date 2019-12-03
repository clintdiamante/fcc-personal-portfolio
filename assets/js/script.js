// Welcome Navigation
  $('#nav-link-projects').on('click', function()
    {
      $('#projects').show();

      $('#welcome-section').hide();
      $('#about').hide();
      $('#contact').hide();
    }
  );

  $('#projects-sub-navbar-back').on('click', function()
    {
      $('#welcome-section').show();
      $('#projects').hide();
    }
    );

// Projects View
  $('#projects-compact').on('click', function()
    {
      $('#projects-full-view').hide();
      $('#projects-compact-view').show();
    }
  );

  $('#projects-full').on('click', function()
    {
      $('#projects-full-view').show();
      $('#projects-compact-view').hide();
    }
  );