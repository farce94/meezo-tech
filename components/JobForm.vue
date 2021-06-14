<template>
    <form class="resume">
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="name">Name</label>
      <input type="text" class="form-control" id="name" placeholder="Enter Your Name">
    </div>
    <div class="form-group col-md-6">
      <label for="email">Email</label>
      <input type="email" class="form-control" id="email" placeholder="Enter Your Email">
    </div>
  </div>

  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="job">Application For Job</label>
      <select id="job" class="form-control">
        <option selected>Choose...</option>
        <option>Web Developer</option>
        <option>Backend Develoepr</option>
        <option>IOS Engineer</option>

      </select>
    </div>
      <div class="form-group col-md-6">
    <label for="resume" class="">Upload your Resume</label>
    <input type="file" class="form-control-file" id="resume" accept=".doc, .pdf, image/jpeg">
    <p class="text-muted"><small>Allowed JPG, JPEG, PDF or DOC</small></p>
  </div>
      <div class="form-group offset-md-10 col-md-2 p-0">
    <button type="submit" class="btn btn-primary">Apply Now</button>
    </div>

  </div>

</form>
</template>