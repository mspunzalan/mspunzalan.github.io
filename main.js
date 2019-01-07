function check(name){
  console.log(name);
}

function about(){
  // swal("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer. Mattis vulputate enim nulla aliquet porttitor lacus. Tortor at risus viverra adipiscing. Feugiat nisl pretium fusce id velit. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui. Gravida rutrum quisque non tellus orci ac. Pellentesque habitant morbi tristique senectus et netus. Fermentum dui faucibus in ornare quam viverra orci. Non curabitur gravida arcu ac tortor dignissim convallis aenean.", {
  //   title: "Macy Summer",
  //   buttons: false,
  //   // timer: 10000,
  // });

  swal({
    title: "Macy Summer",
    text: "Hi, I’m Macy Summer, and I’m a Junior undergrad student at William and Mary. I’m studying Public Health and Biochemistry, and I hope to attend dental school after I graduate. Some of my academic passions include health equity and global outreach. My hobbies include trying new foods, painting, piano, violin, and poetry.",
    buttons: false
  });

  $( ".swal-modal" ).append("<div class='macy-footer'><nav class='site-nav'><ul><li><a class='fa fa-envelope' href='mailto:mspunzalan@email.wm.edu'></a></li><li><a class='fa fa-file' href='https://www.linkedin.com/in/macy-punzalan-a5103a156/'></a></li><li><a class = 'fa fa-linkedin' href='https://www.linkedin.com/in/macy-punzalan-a5103a156/'></a></li></ul></nav></div>" );

}

