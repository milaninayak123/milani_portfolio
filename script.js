function toggleCaseStudy(projectId) {
  var caseStudy = document.getElementById(projectId);
  if (caseStudy.style.display === "none" || caseStudy.style.display === "") {
    caseStudy.style.display = "block";
  } else {
    caseStudy.style.display = "none";
  }
}
