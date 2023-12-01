function updateRightPane(contentType) {
  var rightPane = document.getElementById('right-pane');

  // Clear existing content
  rightPane.innerHTML = '';

  // Update content based on the button clicked
  switch (contentType) {
    case 'Content for PDF':
      rightPane.innerHTML = '<div id = "pdf-container"><a href="/Resume/Resume.pdf" target="_blank"><img src="https://static.vecteezy.com/system/resources/previews/017/197/488/original/pdf-icon-on-transparent-background-free-png.png" alt="PDF" style="height:150px; width:auto; display:block;"><span class = "text" style="text-align: center; margin-top: 5px;">Click here for Resume</span></a></div>';
      break;
    case 'Content for Education':
      rightPane.innerHTML = '<div id = "eduction"><h1 class = "text"><u>Education</u></h1><h3 class= "text">Sourthern Arkansas Univeristy</h3><p class = "text">August 2020 – May 2024</p><ul><li class = "text">Bachelor of Science: Computer Science, Bachelor of Mathematics</li><li class = "text">3.79 GPA</li><li class = "text">Planned Graduation in 2024</li></ul></div>';
      break;
    case 'Content for Work Experience':
      rightPane.innerHTML = '<div id = "Work-Experience"><h1 class = "text"><u>Work Experience</u></h1><h3 class= "text">Arkansas Electric Cooperative Company – Infrastructure Support Intern</h3><p class = "text">May 2023 –August 2023</p><ul><li class = "text">Assembled workstations for clients</li><li class = "text">Installed requested software remotely</li><li class = "text">Installed requested Hardware</li><li class = "text">Imaged company version of windows onto machines</li><li class = "text">Reconfigured mobile devices for company employees</li><li class = "text">Managed devices in company database</li></ul><h3 class = "text">Dollar General</h3><p class = "text">May 2021–August 2022</p><ul><li class = "text">Operated the register at the checkout desk and helped customers with purchases</li><li class = "text">Stocked store goods such as food items or large amounts of cleaning supplies</li><li class = "text">Assisted customers with finding goods around the store</li><li class = "text">Cleaned around the store including the bathrooms</li><li class = "text">Assisted customers with acquiring propane tanks</li></ul></div>';
      break;
    case 'Content for Skills':
      rightPane.innerHTML = '<div id = "skills"><h1 class = "text"><u>Skills</u></h1><ul><li class = "text">Efficient with Microsoft Windows 10 and Windows 11</li><li class = "text">Knowledgeable in Linux OS</li><li class = "text">Known Coding Languages: <ul><li class = "text">C++</li><li class = "text">Java</li><li class = "text">SQL</li><li class = "text">Assembly Language (Irvine Library)</li><li class = "text">MIPS</li><li class = "text">C#</li><li class = "text">HTML, CSS, JavaScript</li><li class = "text">PHP</li></ul></li><li class = "text">Microsoft 365</li><li class = "text">Software and hardware Installations</li></ul></div></div>';
      break;
    default:
      rightPane.innerHTML = '<div>Default Content</div>';
  }
}